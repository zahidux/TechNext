import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
    return 0;
  });

  return (
    <div className="my-20 mx-20">
      <h2 className="text-5xl text-center font-bold mb-20 text-orange-500">
        Users
      </h2>
      <div className="flex justify-center gap-8 mb-12">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search By User Name"
          className="py-2 pl-2 outline-orange-600 text-xl shadow-lg rounded-2xl"
        />
        <select
          className="border-0 py-2 pl-2 outline-orange-600 text-2xl shadow-lg rounded-2xl "
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by company name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedUsers.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
