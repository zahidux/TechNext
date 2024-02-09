import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleUser = () => {
  const userData = useLoaderData();
  const { id, image, firstName, lastName, email, address, company } = userData;

  return (
    <div className="bg-slate-900 py-24 md:py-48 max-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-0 text-white">
        <img
          src={image}
          alt="Avatar"
          className="w-[500px] h-[500px] rounded-full mx-auto mb-4"
        />
        <div className="flex items-center">
          <div>
            <h3 className="text-5xl font-bold hover:text-orange-500">
              {firstName} {lastName}
            </h3>
            <p className="mb-2 text-2xl my-5">
              <span className="font-bold text-orange-500">Email:</span> {email}
            </p>
            <p className="mb-2 text-2xl my-5">
              <span className="font-bold text-orange-500">Address: </span>
              {address.address}, {address.city}, {address.state},
              {address.postalCode}
            </p>
            <p className=" mb-2 text-2xl my-5">
              <span className="font-bold text-orange-500">Company:</span>{" "}
              {company.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
