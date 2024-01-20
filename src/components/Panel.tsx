import PanelPorts from "@/components/panels/ports/panel";
import { MenuItem } from "@/types";
import PanelDocker from "./panels/docker/panel";

const Panel = (props: { selected: MenuItem }) => {
  switch (props.selected.key) {
    case "ports":
      return <PanelPorts />;
    case "docker":
      return <PanelDocker />;
    default:
      return null;
  }
};

export default Panel;
