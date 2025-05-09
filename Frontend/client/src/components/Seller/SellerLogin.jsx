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
        <div>
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span>Login
          </p>
        </div>
      </form>
    )
  );
}

export default SellerLogin;
