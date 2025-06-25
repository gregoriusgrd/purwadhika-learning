import { FC, PropsWithChildren } from "react";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { User } from "@/features/user/types";
import { IResponse } from "@/features/types";
import { ILoginFormik } from "../types";

type LoginFormProps = PropsWithChildren;

const LoginFormik: FC<LoginFormProps> = ({ children }) => {
  const onSubmit = async (
    values: ILoginFormik,
    { resetForm }: FormikHelpers<ILoginFormik>
  ) => {
    try {
      const { email, password } = values;

      const payload = {
        email,
        password,
      };

      const { data }: { data: IResponse<User> } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        payload
      );

      const { token } = data.data;

      localStorage.setItem("token", token);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik<ILoginFormik>
      initialValues={{
        email: "",
        password: "",
        showPassword: false,
      }}
      onSubmit={onSubmit}
    >
      <>{children}</>
    </Formik>
  );
};

export default LoginFormik;
