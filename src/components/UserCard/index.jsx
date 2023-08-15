import React from "react";
import { Link } from "react-router-dom";
import avatar from "./avatar.png";
import moment from "moment";

const UserCard = (props) => {
  const { _id, name, age, email, joinDate } = props.user;
  return (
    <li className="flex flex-col sm:flex-row sm:items-center border-2 rounded-lg p-3.5">
      <Link to={`/user-details/${_id}`}>
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-20 h-20 m-auto sm:m-0"
        />
      </Link>
      <div className="sm:ml-4 text-center sm:text-left">
        <h3 className="font-bold text-gray-800 hover:underline">
          <Link to={`/user-details/${_id}`}>{name}</Link>
        </h3>
        <p>{email}</p>
        <p>
          <span className="font-bold">Age: </span>
          {age}
        </p>
        <p>
          <span className="font-bold">Join date: </span>
          {moment(joinDate).format('MM/DD/YYYY')}
        </p>
      </div>
    </li>
  );
};

export default UserCard;
