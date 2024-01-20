import { Box, Button, List, ListItem } from "@chakra-ui/react";
import { MENU_ITEMS } from "../constants";
import { MenuItem } from "../types";

const Sidebar = (props: {
  selected: MenuItem;
  onSelect: (key: MenuItem) => void;
}) => {
  return (
    <Box>
      <List p="1" spacing="1">
        {MENU_ITEMS.map((item) => (
          <ListItem
            as={Button}
            key={item.key}
            onClick={() => props.onSelect(item)}
            isActive={props.selected.key === item.key}
            variant={props.selected.key === item.key ? "solid" : "ghost"}
            leftIcon={item.icon}
            justifyContent="flex-start"
            w="100%"
            colorScheme="purple"
            shadow="none"
            size="sm"
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
