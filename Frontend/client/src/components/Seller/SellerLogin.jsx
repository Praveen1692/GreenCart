import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

function SellerLogin() {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSeller(true);
  };

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-80 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span>Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter Your Email..." />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Your Password.." />
          </div>
        </div>
      </form>
    )
  );
}

export default SellerLogin;
