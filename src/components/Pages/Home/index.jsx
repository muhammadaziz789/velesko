import Info from "./Info";
import Header from "components/UI/Header";
import Form from "./Form";
import InfoFooter from "./Footer";

const HomePageWrapper = () => {
  return (
    <div className="container flex flex-col justify-between h-[100vh]">
      <Header title="VALESCOdan aksiya!" />
      <Info
        title="HURMATLI MIJOZ"
        text="Siz Valesco avtomobil moyi harid qilib, aksiya qatnashchisiga aylandingiz!"
      />
      <Form />
      <InfoFooter />
    </div>
  );
};

export default HomePageWrapper;
