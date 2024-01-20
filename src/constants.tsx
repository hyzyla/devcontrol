import { BiNetworkChart } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  {
    key: "ports",
    label: "Ports",
    icon: <BiNetworkChart />,
  },
  {
    key: "docker",
    label: "Docker",
    icon: <SiDocker />,
  },
];
