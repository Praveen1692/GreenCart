import React from "react";
import { assets } from "../assets/assets";

// Input Field Component;
const inputFiled = () => <input type="text" />;

const AddAddress = () => {
    const onSubmitHandler=()=>{
        
    }
  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-300">
        Add Shipping <span className="font-semibold text-primary">Address</span>{" "}
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
            <form onSubmit={onSubmitHandler}>

            </form>


        </div>
        <img
          className="md:mr-16 mb-16 md:mt-0"
          src={assets.add_address_iamge}
          alt="AddressImage"
        />
      </div>
    </div>
  );
};

export default AddAddress;
