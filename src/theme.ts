import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
        colorScheme: 'purple',
        shadow: 'none',
      },
    },
  },
});

export default theme;
