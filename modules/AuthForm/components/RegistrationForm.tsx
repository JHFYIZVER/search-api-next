import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { registerFormType } from "../@types/formType";
import { useToast } from "@/hooks/use-toast";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";
import BtnSubmit from "./BtnSubmit";
const RegistrationForm = () => {
  const clazz =
    "input rounded-lg bg-[#EBEDF0] text-[#818C99] py-2 px-3 outline-none";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<registerFormType>();
  const router = useRouter();
  const { toast } = useToast();

  const submit: SubmitHandler<registerFormType> = async (
    data: registerFormType
  ) => {
    try {
      const response = await axios.post("/api/user", data);
      if (response.status === 200) {
        router.push("/login");
      } else {
        console.error("Registration failed");
      }
      reset();

      return NextResponse.json(response.data);
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Что-то пошло не так",
        variant: "destructive",
      });
    }
  };

  const error: SubmitErrorHandler<registerFormType> = (errors) => {
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className="flex flex-col gap-4 text-red-400"
    >
      <label className="flex flex-col gap-1">
        <input
          className={
            errors.name ? clazz + " border border-red-500 shake" : clazz
          }
          type="text"
          placeholder="Имя"
          {...register("name", { required: true })}
        />
        <span>{errors.name ? "Поле обязательно для заполнения" : ""}</span>
      </label>
      <label className="flex flex-col gap-1">
        <input
          className={
            errors.email ? clazz + " border border-red-500 shake" : clazz
          }
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <span>{errors.email ? "Поле обязательно для заполнения" : ""}</span>
      </label>
      <label className="flex flex-col gap-1">
        <input
          className={
            errors.password ? clazz + " border border-red-500 shake" : clazz
          }
          type="password"
          placeholder="Пароль"
          {...register("password", { required: true, minLength: 6 })}
        />
        <span>
          {errors.password ? "Пароль должен содержать не менее 6 символов" : ""}
        </span>
      </label>
      <BtnSubmit title="Зарегистрироваться" />
    </form>
  );
};

export default RegistrationForm;
