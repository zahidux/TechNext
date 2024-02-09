import React, { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import Swal from "sweetalert2";

const UsersList = () => {
  const [picture, setPicture] = useState(null);
  const [picLoading, setPicLoading] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const firstName = from.firstName.value;
    const lastName = from.lastName.value;
    const email = from.email.value;
    const address = from.address.value;
    const company = from.company.value;
    const user = {
      firstName,
      lastName,
      email,
      address,
      company,
      photo: picture,
    };
    console.log(user);
    from.reset();
    fetch("https://dummyjson.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  //   Picture upload
  const handlePictureUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    // console.log(picture);
    try {
      setPicLoading(true);
      const response = await axios.post(image_hosting_url, formData);
      if (response.data.data.display_url) {
        setPicture(response.data.data.display_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setPicLoading(false);
    }
  };

  return (
    <div className="mt-28 py-20 bg-slate-900">
      <div className="user-form">
        <h2 className="text-5xl text-center font-bold mb-20 text-orange-500">
          Add Users
        </h2>
        <div className="w-6/12 mx-auto ">
          <form onSubmit={handleAddUser}>
            <div className="flex gap-8">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full py-2 my-5 rounded-xl pl-5 text-xl font-semibold border-0 outline-orange-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full py-2 my-5 rounded-xl pl-5 text-xl font-semibold border-0 outline-orange-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full py-2 my-5 rounded-xl pl-5 text-xl font-semibold border-0 outline-orange-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full py-2 my-5 rounded-xl pl-5 text-xl font-semibold border-0 outline-orange-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full my-5 rounded-xl pl-5 text-xl font-semibold border-0 outline-orange-500"
              />
            </div>

            {/* Upload your picture */}
            <div className="mt-6 absolute md:static right-0 bottom-0">
              <input
                id="picture"
                name="picture"
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
                className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              />
              <button
                type="button"
                onClick={() => document.getElementById("picture").click()}
                className=" grid gap-2 text-xl font-bold bg-white p-5 rounded-xl"
              >
                Upload Photo
                <BsCamera size="30" />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="w-1/4 text-white shadow-lg border-0 border-b-4 hover:shadow-orange-700 text-sm md:text-xl py-2 md:py-2 rounded-xl 
          md:mt-6 font-medium hover:bg-orange-500"
                type="submit"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
