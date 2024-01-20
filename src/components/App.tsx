import Panel from "@/components/Panel";
import Sidebar from "@/components/Sidebar";
import { MENU_ITEMS } from "@/constants";
import { MenuItem } from "@/types";
import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<MenuItem>(MENU_ITEMS[0]);
  return (
    <Box bg="#dededf" w="100%" h="100vh">
      <Grid
        display="grid"
        gridTemplateColumns="200px 1fr"
        gridTemplateRows="28px 1fr"
        gridColumnGap="0px"
        gridRowGap="0px"
        h="100%"
      >
        <Box data-tauri-drag-region></Box>
        <Box data-tauri-drag-region bg="white" shadow="base"></Box>
        <Sidebar selected={selected} onSelect={setSelected} />
        <Box bg="white" shadow="base" p="2">
          <Panel selected={selected} />
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
