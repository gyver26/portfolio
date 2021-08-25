import iconJson from "./iconJson";
import { GenIcon, IconBaseProps } from "react-icons";

const Moodle = (props: IconBaseProps) => GenIcon(iconJson)(props);

export default Moodle;
