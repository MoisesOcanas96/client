import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate, Link } from "react-router-dom";
import moment from "moment";
import avatar from "../UserCard/avatar.png";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getUserAction, deleteUserAction } from "../../redux/userSlice";

// Components
import Modal from "../Modal";

const ShowUserDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserAction(id));
  }, [id]);

  const onDeleteClick = (id) => {
    setShowModal(false);
    if (!id) return;
    dispatch(deleteUserAction(id));
    navigate("/");
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
            {moment(user.joinDate).format("MM/DD/YYYY")}
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setShowModal(true)}
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
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <div className="flex flex-col">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 hover:bg-slate-100-"
              >
                <i className="fa fa-times text-gray-400" aria-hidden="true"></i>
              </button>
              <h3 className="text-gray-800 mt-4">
                Are you sure you want to delete this user?
              </h3>
              <div className="flex justify-center gap-2 mt-5">
                <button
                  onClick={() => {
                    onDeleteClick(user._id);
                  }}
                  className="rounded bg-red-500 block text-white py-2 w-28 text-sm text-center cursor-pointer"
                >
                  Yes, delete it
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded bg-indigo-500 block text-white py-2 w-28 text-sm text-center cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default ShowUserDetails;
