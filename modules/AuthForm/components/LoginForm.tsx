import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { loginFormType } from "../@types/formType";
import BtnSubmit from "./BtnSubmit";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const clazz =
    "input rounded-lg bg-[#EBEDF0] text-[#818C99] py-2 px-3 outline-none";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginFormType>();
  const router = useRouter();
  const { toast } = useToast();

  const submit: SubmitHandler<loginFormType> = async (data: loginFormType) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    reset();

    if (response?.error) {
      toast({
        title: "Ошибка входа",
        description: "Что-то пошло не так",
        variant: "destructive",
      });
    }

    if (response?.ok) {
      toast({
        title: "Успешный вход",
        description: "Вы успешно вошли в аккаунт",
        variant: "default",
        duration: 2000,
      });
      router.push("/");
      router.refresh();
    }

    console.log(response);
  };

  const error: SubmitErrorHandler<loginFormType> = (errors) => {
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
      <BtnSubmit title="Войти" />
    </form>
  );
};

export default LoginForm;
