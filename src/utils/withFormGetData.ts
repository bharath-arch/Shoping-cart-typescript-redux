import { useState } from "react";

export const useFormGetData = () => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [invalidEmail, setInvalidEmail] = useState(false);
  // const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return {
    formdata,
    setFormdata,
    invalidEmail,
    setInvalidEmail,
    handleChangeEvent,
  };
};
