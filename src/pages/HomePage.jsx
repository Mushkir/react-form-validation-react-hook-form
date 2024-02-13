import React from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormText from "../components/FormTextArea";

const HomePage = () => {
  const schemaValidation = z.object({
    fullName: z
      .string()
      .min(3, {
        message: "The name should be minimum 03 characters!",
      })
      .max(20, { message: "The name should be not exceed 20 characters!" }),

    age: z.number({
      required_error: "This field is required",
      invalid_type_error: "Age must be a number",
    }),

    email: z.string().email(),

    subject: z
      .string()
      .min(50, { message: "Your thoughts should be minimum 50 characters!" })
      .max(500, { message: "Cannot exceed 500 characters!" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaValidation),
  });

  const sendInfo = (data) => {
    console.log(data);
    alert("Thank you for coming! Your data successfully submitted!");
  };

  return (
    <div className="bg-[#B9B4C7] min-h-screen p-20 round font-Sen">
      <form
        action=""
        className="bg-[#352F44] text-white rounded p-10 space-y-4"
        onSubmit={handleSubmit(sendInfo)}
      >
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          register={register("fullName")}
          errors={errors.fullName}
        />

        <FormInput
          label="Age"
          type="number"
          name="age"
          placeholder="Enter your age detail"
          register={register("age", { valueAsNumber: true })}
          errors={errors.age}
        />

        <FormInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="Email Address"
          register={register("email")}
          errors={errors.email}
        />

        <FormTextArea
          label="Subject"
          name="subject"
          placeholder="Enter your thoughts here!"
          register={register("subject")}
          errors={errors.subject}
        />

        <div className="mt-5">
          <button className="bg-[#B9B4C7] px-5 py-2 rounded text-[#352F44] hover:font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
