import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
  const userData = useLoaderData();
  const { id, image, firstName, lastName, email, address, company } = userData;

  return (
    <div className="bg-slate-900 py-24 md:py-48 h-[900px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-0 text-white">
        <img
          data-aos="fade-right"
          src={image}
          alt="Avatar"
          className="w-[250px] md:w-[500px] lg:w-[550px] h-[250px] md:h-[500px] lg:h-[550px] rounded-full mx-auto mb-4"
        />
        <div
          data-aos="fade-left"
          className="flex items-center justify-center md:justify-start lg:justify-start text-center mt-8 md:mt-0 lg:mt-0 md:text-left lg:text-left"
        >
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold hover:text-orange-500">
              {firstName} {lastName}
            </h3>
            <p className="mb-2 text-lg md:text-2xl lg:text-2xl my-5">
              <span className="font-bold text-orange-500">Email:</span> {email}
            </p>
            <p className="mb-2 text-lg md:text-2xl lg:text-2xl my-5">
              <span className="font-bold text-orange-500">Address: </span>
              {address.address}, {address.city}, {address.state},
              {address.postalCode}
            </p>
            <p className=" mb-2 text-lg md:text-2xl lg:text-2xl my-5">
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
