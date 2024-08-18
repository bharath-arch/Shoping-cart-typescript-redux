import { useNavigate } from "react-router";
import { ServerUrl } from "../../../Constants/Urls";

type FormDataProps = {
  type: string;
  formdata: {
    email: string;
    password: string;
  };
};

export const LoginBtn: React.FC<FormDataProps> = ({ formdata, type }) => {
  const email = formdata.email;
  const password = formdata.password;
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await fetch(`${ServerUrl}/register/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      if (result.result === "success") {
        if (type === "register") {
          navigate("/login");
        } else {
          localStorage.setItem("userEmail", email);
          // localStorage.setItem("usertype", type);
          navigate("/"); // Replace "/nextPage" with the actual route you want to navigate to
        }
      }
      console.log("Response from server:", result);
      // Handle response as needed
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      type="submit"
      className="mt-3 text-center border-2 rounded-lg w-[22rem] p-2 font-arima bg-blue-600 text-white text-xl items-center hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95"
      onClick={handleClick}
    >
      Continue
    </button>
  );
};
