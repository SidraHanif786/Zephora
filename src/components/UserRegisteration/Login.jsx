import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Form from "../Forms/Form";
// import { useFormikContext } from 'formik';
import Row from "../common/Row";
import Input from "../Forms/Input";
import Button from "../common/Button";

export const Login = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Email must be a valid email"
      )
      .required("Email is required"),
    phone: Yup.string().min(11).max(14).required("Mobile number is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();

    toast.info("Successfuly Logged In!");
  };
  return (
    <>
      <div className="top-[120px] left-[450px] p-2 container h-auto w-96 bg-white bg-opacity-30 rounded-2xl shadow-5xl absolute z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <div className="text-[#6e6d6d] font-poppins text-2xl tracking-widest text-center">
          Sign in
        </div>
        <Form
          onSubmit={handleSubmit}
          validationSchema={userSchema}
          initialValues={{
            name: "",
            email: "",
            phone: "",
          }}>
          <div className=" p-[30px] w-full mt-[2px]">
            <Input
            className="mb-3"
              inputClass="border-none"
              name="name"
              placeholder="Enter your full name"
              label="Full Name"
              labelClass="text-[#6e6d6d]"
            />
            <Input
            className="mb-3"
              inputClass="border-none "
              name="phone"
              placeholder="+___-_______"
              label="Mobile Number"
              labelClass="text-[#6e6d6d]"
            />
            <Input
              type="email"
              inputClass="border-none "
              name="email"
              placeholder="name@example.com"
              label="Email"
              labelClass="text-[#6e6d6d]"
            />
          </div>
            <Button
              type="submit"
              title="Sign In"
              className="text-[#706f6f] cursor-pointer font-poppins rounded-full mt-[10px] ml-[130px] !px-5 !py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
            />
          <p className="text-center text-[#706f6f] !mt-[5px] pt-0">OR</p>
          <button className=" text-[#706f6f] cursor-pointer font-poppins rounded-full mt-[10px] ml-[130px] !px-7 !py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80">Sign UP</button>
        </Form>
      </div>
    </>
  );
};

export default Login;
