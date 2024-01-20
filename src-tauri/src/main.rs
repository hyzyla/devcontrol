// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use std::str;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn parse_lsof_output(lsof_output: &str) -> Vec<(String, u16, String)> {
    let mut open_ports = Vec::new();

    for line in lsof_output.lines().skip(1) {
        let columns: Vec<&str> = line.split_whitespace().collect();
        if columns.len() >= 9 {
            let process_name = columns[0].to_string();
            let protocol_info = columns[8].split(":").collect::<Vec<_>>();

            if protocol_info.len() == 2 {
                if let Ok(port) = protocol_info[1].parse::<u16>() {
                    let protocol = protocol_info[0].to_string();
                    open_ports.push((process_name, port, protocol));
                }
            }
        }
    }

    open_ports
}

// Get list of all processes that are listening at least on one port
// using sysinfo crate
#[tauri::command]
fn get_listening_processes() {
    let output = Command::new("lsof")
        .arg("-i")
        .arg("-P")
        .arg("-n")
        .output()
        .expect("Failed to execute 'lsof' command");

    if !output.status.success() {
        eprintln!("Error running 'lsof' command");
    } else {
        let lsof_output = str::from_utf8(&output.stdout).unwrap();
        let open_ports = parse_lsof_output(lsof_output);
        for entry in open_ports {
            println!("{:?}", entry);
        }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_listening_processes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
