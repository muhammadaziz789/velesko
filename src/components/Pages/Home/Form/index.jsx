import HFInputMask from "components/UI/FormElements/HFInputMask";
import { useForm } from "react-hook-form";
import cls from "./style.module.scss";

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[45px] text-center flex flex-col items-center gap-y-6"
    >
      <h3 className="text text-[#f00] text-xl font-[500] underline">
        KODNI KIRITING
      </h3>

      <HFInputMask
        control={control}
        name="code"
        placeholder="Kiriting"
        mask="9999999 - 9999"
        maskchar={null}
        alwaysShowMask={false}
        classesInput="bg-white h-[44px] placeholder:text-graySecondry"
      />

      <button
        className={`h-[50px] px-5 rounded-full bg-main text-white inline-block w-auto ${cls.btn}`}
        style={{ width: "fit-content" }}
        disabled={true}
      >
        TASDIQLASH
      </button>
    </form>
  );
};

export default Form;
