import { FC, PropsWithChildren } from "react";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { IRegisterFormik } from "../types";

type RegisterFormikProps = PropsWithChildren;

const RegisterFormik: FC<RegisterFormikProps> = ({ children }) => {
  const onSubmit = async (
    values: IRegisterFormik,
    { resetForm }: FormikHelpers<IRegisterFormik>
  ) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        payload
      );

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik<IRegisterFormik>
      initialValues={{
        name: "",
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

export default RegisterFormik;
