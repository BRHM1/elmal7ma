import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { MapPinHouse } from "lucide-react";
import Bill from "./Bill";
import { ArrowLeft } from "lucide-react";

const schema = z.object({
  firstName: z
    .string()
    .nonempty("this field required")
    .min(3, "name is too short")
    .max(20),
  lastName: z
    .string()
    .nonempty("this field required")
    .min(3, "name is too short")
    .max(20),
  phone: z
    .string()
    .nonempty("this field required")
    .length(11, "invalid phone number"),
  district: z.string().min(10, "address is too short").max(50),
  firstStreet: z.string().min(10, "address is too short").max(50),
  secondStreet: z.string().min(10, "address is too short").max(50),
});
// .refine(
//   (data) => data.currentLocation || (data.district && data.street), // At least one field must be present
//   {
//     message: "Either location or current location is required", // Custom error message
//     path: ["currentLocation"], // Attach the error to a specific field
//   }
// );

const CheckoutForm = ({ onClick, className, setIsCheckoutOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // initial animation
      animate={{ opacity: 1 }} // animate to this state
      exit={{ opacity: 0 }} // exit animation
      layout
      onClick={onClick}
      className={className}
    >
      <Form setIsCheckoutOpen={setIsCheckoutOpen} />
    </motion.div>
  );
};

const Fields = [
  [
    {
      type: "text",
      placeholder: "First Name",
      name: "firstName",
      className: "col-span-4",
    },
    {
      type: "text",
      placeholder: "Last Name",
      name: "lastName",
      className: "col-span-4",
    },
    {
      type: "text",
      placeholder: "Phone",
      name: "phone",
      className: "col-span-8",
    },
  ],
  [
    {
      type: "text",
      placeholder: "District",
      name: "district",
      className: "col-span-5",
    },
    {
      type: "text",
      placeholder: "Street 1",
      name: "firstStreet",
      className: "col-span-5",
    },
    {
      type: "text",
      placeholder: "Street 2",
      name: "secondStreet",
      className: "col-span-10",
    },
  ],
];

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className,
}) => (
  <div className={twMerge("w-[98%] flex flex-col mb-2 h-16", className)}>
    <span className="text-black font-poppins text-lg">{placeholder}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="p-1 text-sm border-2 border-black text-black font-poppins"
      {...register(name, { valueAsNumber })}
    />
    <div className="text-red-800 font-poppins h-4 flex items-center justify-start">
      {error && (
        <span className="error-message h-full text-xs">{error.message}</span>
      )}
    </div>
  </div>
);

function Form({ setIsCheckoutOpen }) {
  const [href, setHref] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isValid },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("SUBMITTING", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("SUCCESS", data);
    reset();
  };

  const getLocation = (position) => {
    const { latitude, longitude } = position.coords;
    setHref(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    );
  };

  const handleLocationError = () => {};

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, handleLocationError);
  };

  return (
    <div className="h-full gap-2 overflow-auto scrollbar-hide ">
      <button
        onClick={() => setIsCheckoutOpen(prev => !prev)}
        className="absolute w-10 h-10 rounded-full bg-black grid place-content-center -top-4 -left-4"
      >
        <ArrowLeft />
      </button>
      <form className="h-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-semibold mb-4 text-black border-b-2 font-poppins pb-2">
          Checkout
        </h1>
        <div className="flex flex-col h-[100%] mb-2">
          <div className="grid grid-cols-8">
            {Fields[0].map((field) => (
              <FormField
                key={field.name}
                register={register}
                error={errors[field.name]}
                {...field}
              />
            ))}
          </div>
          <div className="grid gap-y-2 grid-cols-10">
            {Fields[1].map((field) => (
              <FormField
                key={field.name}
                register={register}
                error={errors[field.name]}
                {...field}
              />
            ))}
            <button
              type="button"
              onClick={handleCurrentLocation}
              className="text-black bg-white col-span-10 font-poppins justify-center gap-2 text-[1rem] h-9 border-2 border-black flex items-center text-lg self-center rounded-md"
            >
              <MapPinHouse />
              <span>Use Current location</span>
            </button>
          </div>
        </div>
        <Bill />
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted || !isValid}
          className="submit-button text-black font-poppins mt-auto border disabled:opacity-50 border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
