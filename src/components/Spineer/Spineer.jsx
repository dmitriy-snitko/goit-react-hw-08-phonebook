import Loader from "react-loader-spinner";
import { SpinerContainer } from "./Spineer.styles";

export default function Spiner() {
  return (
    <SpinerContainer>
      <Loader
        type="TailSpin"
        color="#4a4a4a"
        height={22}
        width={22}
        timeout={3000}
      />
    </SpinerContainer>
  );
}