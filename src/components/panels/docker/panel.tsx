import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

const dummyOnClick = () => {
  console.log("Clicked");
};

const dockerVersion = "20.10.6"; // Replace with actual version number
const dockerStatus = "Running"; // Replace with actual status

const actionList = [
  {
    header: "Restart",
    description: "Restart the Docker daemon",
    onClick: dummyOnClick,
  },
  {
    header: "Reset to Defaults",
    description: "Reset Docker to its default settings",
    onClick: dummyOnClick,
  },
  {
    header: "Clear All Images/Containers/Volumes",
    description: "Remove all images, containers, and volumes from Docker",
    onClick: dummyOnClick,
  },
  {
    header: "Uninstall",
    description: "Uninstall Docker from your system",
    onClick: dummyOnClick,
  },
  {
    header: "Switch Orbinstack/Docker for Mac/Podman",
    description: "Switch to a different Docker runtime",
    onClick: dummyOnClick,
  },
  {
    header: "View Images",
    description: "View a list of all Docker images",
    onClick: dummyOnClick,
  },
  {
    header: "View Containers",
    description: "View a list of all Docker containers",
    onClick: dummyOnClick,
  },
  {
    header: "View Volumes",
    description: "View a list of all Docker volumes",
    onClick: dummyOnClick,
  },
  {
    header: "View Networks",
    description: "View a list of all Docker networks",
    onClick: dummyOnClick,
  },
  {
    header: "View Compose Files",
    description: "View a list of all Docker Compose files",
    onClick: dummyOnClick,
  },
  {
    header: "View Logs",
    description: "View logs for Docker containers",
    onClick: dummyOnClick,
  },
  {
    header: "View Swarm Clusters",
    description: "View and manage Docker Swarm clusters",
    onClick: dummyOnClick,
  },
];

const PanelDocker = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="500px"
      overflow="auto"
    >
      <Heading mb="6">Docker Operations</Heading>
      {actionList.map((action, index) => (
        <Flex
          key={index}
          mb="4"
          align="start"
          justify="space-between"
          maxW="xl"
          w="full"
        >
          <Flex direction="column" mr="4">
            <Text fontWeight="bold" mb="1">
              {action.header}
            </Text>
            <Text color="gray.500" mb="2">
              {action.description}
            </Text>
          </Flex>
          <Button onClick={action.onClick}>Do It</Button>
        </Flex>
      ))}
      <Spacer />
      <Flex direction="column" align="center" mb="4">
        <Text fontWeight="bold" mb="1">
          Docker Version
        </Text>
        <Text color="gray.500">{dockerVersion}</Text>
      </Flex>
      <Flex direction="column" align="center" mb="4">
        <Text fontWeight="bold" mb="1">
          Docker Status
        </Text>
        <Text color="gray.500">{dockerStatus}</Text>
      </Flex>
      <Button mb="4" onClick={dummyOnClick}>
        Switch Orbinstack/Docker for Mac/Podman
      </Button>
    </Flex>
  );
};

export default PanelDocker;
