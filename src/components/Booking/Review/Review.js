
import React from "react";
import { useForm } from "react-hook-form";

import "./Review.css";

const Review = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    
      console.log(watch("example"));
    
    return (
        <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <input className="input-field" defaultValue="Your Name" {...register("exampleRequired", { required: true })} />
      <input className="input-field"  {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    );
};

export default Review;