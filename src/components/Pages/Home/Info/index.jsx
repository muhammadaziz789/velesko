import cls from "./style.module.scss";
const Info = ({ title, text }) => {
  return (
    <div className={cls.wrapper}>
      <img
        width={100}
        src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
        alt="image"
      />

      <div className="text-gray">
        <h3 className="font-medium underline">{title}</h3>
        <p className="mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Info;
