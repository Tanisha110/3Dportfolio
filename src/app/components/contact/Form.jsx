'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner"

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  
  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your email. Please wait.. ")
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID  , 
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000, // you cannot send more than 1 email per 5 seconds 
        }
      }
    )
      .then(
        () => {
          toast.success("Email recieved! I'll get back to you soon",{
            id: toastId
          })
        },
        (error) => {
            toast.error("Oops! there was an error :( Please try again",{
                id: toastId
              })
        },
      );
 };   

  const onSubmit =(data) => {
    const templateParams ={
     name: data.firstName,
     email: data.email,
     message: data.message,
    }
    sendEmail(templateParams)
  };

  return (
    <>
    <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        {...register("firstName", { required: true, maxLength: 80 })}
        className="p-2 w-full rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.firstName && <span className="text-red-500 text-sm">Your name is required.</span>}

      <input
        type="text"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i
        })}
        className="p-2 w-full rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && <span className="text-red-500 text-sm">Enter a valid email address.</span>}

      <textarea
        placeholder="Your message"
        {...register("message", {
          required: true,
          minLength: 10,
          maxLength: 256
        })}
        className="p-2 w-full rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && <span className="text-red-500 text-sm">Message must be 10–256 characters long.</span>}

      <input
        type="submit"
        value="Send"
        className="p-2 w-full rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 bg-[#7573a5]"
      />
    </form>
    </>
  );
}
