import { useState } from 'react'
import './App.css'
import React from 'react';
import { useForm } from 'react-hook-form';


export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange" });
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login Form</h1>
      <h3>by Rama Pratama</h3>
      <input type="text" placeholder="Username" {...register("Username", {required: "Username is required"})} />
      {errors.Username && <p className="error-message">{errors.Username.message}</p>}
      <input type="text" placeholder="Email" {...register("Email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email"}})} />
      {errors.Email && <p className="error-message">{errors.Email.message}</p>}
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: "Mobile number is required", minLength: {value: 6, message: "Minimum length is 6"}, maxLength: {value: 12, message: "Maximum length is 12"}, pattern: {value: /^\d+$/, message: "Mobile number must be numbers only"}})} />
      {errors["Mobile number"] && <p className="error-message">{errors["Mobile number"].message}</p>}
      <input type="password" placeholder="Password" {...register("Password", {required: "Password is required", maxLength: {value: 16, message: "Maximum length is 16"}})} />
      {errors.Password && <p className="error-message">{errors.Password.message}</p>}
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: "Confirm Password is required", maxLength: {value: 16, message: "Maximum length is 16"}, validate: value => value === watch('Password') || "The passwords do not match"})} />
      {errors["Confirm Password"] && <p className="error-message">{errors["Confirm Password"].message}</p>}
      <input type="submit" />
    </form>
  );
}