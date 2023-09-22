import cls from "./style.module.scss";
const InfoSuccess = ({ title, text }) => {
  return (
    <div className={cls.wrapper}>
      <img src="/svg/phone.svg" alt="phone" />
      <div className="text-gray container">
        <p className="my-[55px]">
          Siz Valesco aksiyasida <br />
          <span className="text-main font-medium">IPhone 15 Pro Max</span>
          <br />
          g'olibiga aylandingiz.
        </p>
        <p className="text-gray">
          Quidagi raqamga murojaat qiling va sovg’angizni qabul qiling!
        </p>
        <a
          href="tek:+998900000000"
          className="text-[#646464] mt-2 text-[30px] font-medium"
        >
          +99890 000 0000
        </a>
      </div>
    </div>
  );
};

export default InfoSuccess;
