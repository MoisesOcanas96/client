import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../../redux/userSlice";

// Components
import UserCard from "../UserCard";

const ShowUserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div className="mt-12 px-3 md:px-1">
      <Link
        to="/create-user"
        className="rounded bg-sky-500 text-white py-2 w-40 text-center inline-block m-auto cursor-pointer"
      >
        + Add New User
      </Link>
      <div className="mt-8">
        {users && (
          <ul className="flex flex-col gap-4">
            {users.map((user) => (
              <UserCard key={user?._id} user={user} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShowUserList;
