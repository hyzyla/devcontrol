import { useStore } from "@/components/panels/ports/state";
import {
  Box,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CgClose as CloseIcon } from "react-icons/cg";

const processes = [
  {
    pid: 1234,
    name: "nginx",
    port: 80,
  },
  {
    pid: 5678,
    name: "apache",
    port: 8080,
  },
  {
    pid: 9012,
    name: "mysql",
    port: 3306,
  },
];

const PanelPorts = () => {
  const counter = useStore((state) => state.counter);
  const increase = useStore((state) => state.increase);
  return (
    <Box>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>PID</Th>
            <Th>Process Name</Th>
            <Th>Port</Th>
            <Th>Kill</Th>
          </Tr>
        </Thead>
        <Tbody>
          {processes.map((process) => (
            <Tr key={process.pid}>
              <Td>{process.pid}</Td>
              <Td>{process.name}</Td>
              <Td>{process.port}</Td>
              <Td>
                <IconButton
                  variant="outline"
                  size="sm"
                  aria-label="Delete"
                  icon={<CloseIcon />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PanelPorts;
