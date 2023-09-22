import Header from "../../UI/Header";
import InfoFooter from "../Home/Footer";
import InfoSuccess from "./Info";

const SuccessWrapper = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div>
        <Header title="SIZ g’olib bo’ldingiz!" />
        <InfoSuccess />
      </div>
      <InfoFooter />
    </div>
  );
};

export default SuccessWrapper;
