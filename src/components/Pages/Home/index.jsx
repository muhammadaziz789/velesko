import Info from "./Info";
import Header from "components/UI/Header";
import Form from "./Form";

const HomePageWrapper = () => {
  return (
    <div className="container">
      <Header title="VALESCOdan aksiya!" />
      <Info
        title="HURMATLI MIJOZ"
        text="Siz Valesco avtomobil moyi harid qilib, aksiya qatnashchisiga aylandingiz!"
      />
      <Form />
    </div>
  );
};

export default HomePageWrapper;
