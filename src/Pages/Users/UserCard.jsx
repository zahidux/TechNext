import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div data-aos="fade-up" className=" rounded-lg shadow-md m-6">
      <div className="bg-slate-900 p-8 rounded-xl text-white shadow-xl">
        <img
          src={image}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <div className="text-center">
          <Link to={`/user/${id}`}>
            <h3 className="text-xl font-semibold hover:text-orange-500">
              {firstName} {lastName}
            </h3>
          </Link>
          {/* <Link to={`/chef/${_id}`}> View Recipes</Link>  */}
          <p className="mb-2 text-lg">Email: {email}</p>
          <p className="mb-2 text-lg">
            Address: {address.address}, {address.city}, {address.state},
            {address.postalCode}
          </p>
          <p className=" mb-2 text-lg">Company: {company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
