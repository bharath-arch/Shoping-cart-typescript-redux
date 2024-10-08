import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ServerUrl } from "../../Constants/Urls";

const Contacts: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });

  const [phone, setPhone] = useState("");

  const handleCheckboxChange = () => {
    setAgreed((prev) => !prev);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);


  const handleSubmit = async ()=>{
    // try {
    //   const response = await fetch(`${ServerUrl}/contactUs/contactUs}`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ data , phone }),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const result = await response.json();
    //   console.log(result);
    //   if (result.result === "success") {
    //     if (type === "register") {
    //       navigate("/login");
    //     } else {
    //       localStorage.setItem("userEmail", email);
    //       // localStorage.setItem("usertype", type);
    //       navigate("/"); // Replace "/nextPage" with the actual route you want to navigate to
    //     }
    //   }
    //   console.log("Response from server:", result);
    //   // Handle response as needed
    // } catch (e) {
    //   console.log(e);
    // }
  }
  return (
    <div className=" bg-white py-6 ">
      <div className=" text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hi How Can We Help You !
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Fill the below form
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto  max-w-xl mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="FirstName"
                onChange={handleChange}
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="LastName"
                onChange={handleChange}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="Email"
                onChange={handleChange}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            {/* <div className="relative mt-2.5"> */}
            <PhoneInput
              inputStyle={{
                width: "100%",
                height: "2.5em",
              }}
              country={"in"}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "PhoneNumber",
                required: true,
                autoComplete: "tel",
              }}
              containerClass="w-full"
              placeholder="Enter phone number"
            />
            {/* </div> */}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="Message"
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 flex items-center">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={agreed}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="agree" className="ml-3 block text-sm text-gray-900">
              I agree to the policies
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleSubmit}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
