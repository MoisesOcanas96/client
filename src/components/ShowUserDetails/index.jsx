import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../utils/consts";
import axios from "axios";
import moment from "moment";
import avatar from "../UserCard/avatar.png";

// Components
import Modal from "../Modal";

const ShowUserDetails = () => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowUserDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowUserDetails_deleteClick");
      });
  };

  return (
    <div className="px-3 md:px-1">
      <div className="flex flex-col sm:items-center sm:flex-row sm:justify-around sm:items-center p-3.5 sm:h-screen mt-8 sm:mt-0">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-28 h-28 sm:h-48 sm:w-48 m-auto sm:m-0"
        />
        <div>
          <h1 className="font-bold text-center sm:text-left mt-5 sm:mt-0 text-gray-800 uppercase tracking-wide text-xl sm:text-2xl">
            {user.name}
          </h1>
          <p className="text-center sm:text-left">{user.email}</p>
          <p className="text-center sm:text-left">
            <span className="font-bold">Age: </span>
            {user.age}
          </p>
          <p className="text-center sm:text-left capitalize">
            <span className="font-bold">User type: </span>
            {user.userType}
          </p>
          <p className="text-center sm:text-left capitalize mb-4">
            <span className="font-bold">Join date: </span>
            {moment(user.joinDate).format('MM/DD/YYYY')}
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                onDeleteClick(user._id);
              }}
              className="rounded bg-red-500 block text-white py-2 w-28 text-sm text-center cursor-pointer"
            >
              Delete user
            </button>
            <Link
              to={`/update-user/${user._id}`}
              className="rounded bg-indigo-500 block text-white py-2 w-28 text-sm text-center cursor-pointer"
            >
              Update user
            </Link>
          </div>
        </div>
      </div>
      {showModal && createPortal(
        <Modal onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
};

export default ShowUserDetails;
