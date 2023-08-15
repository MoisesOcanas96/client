import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, USER_DEFAULT_INFO, USER_TYPES } from "../../utils/consts";
import DatePicker from "react-datepicker";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(USER_DEFAULT_INFO);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date) => {
    const newDate = date.toString();
    console.log('date', newDate)
    setUser({ ...user, joinDate: date });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);

    axios
      .post(`${API_URL}/`, user)
      .then(() => {
        setUser(USER_DEFAULT_INFO);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateUser!");
      });
  };

  return (
    <div className="mt-24">
      <h2 className="font-bold text-gray-800 tracking-wide uppercase">
        Create a new user
      </h2>
      <form
        noValidate
        onSubmit={onSubmit}
        className="grid gap-3 mt-4 px-3 md:px-1"
      >
        <div>
          <label
            htmlFor="name"
            className="text-xs font-bold text-gray-800 uppercase tracking-wide"
          >
            Complete name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="bg-gray-200 rounded py-2 px-2 min-w-full"
            value={user.name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <label
              htmlFor="age"
              className="text-xs font-bold text-gray-800 uppercase tracking-wide"
            >
              Age
            </label>
            <input
              id="age"
              type="text"
              name="age"
              className="bg-gray-200 rounded py-2 px-2 min-w-full"
              value={user.age}
              onChange={onChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="userType"
              className="text-xs font-bold text-gray-800 uppercase tracking-wide"
            >
              User type
            </label>
            <select
              id="userType"
              name="userType"
              className="bg-gray-200 rounded py-2.5 px-2 min-w-full capitalize"
              value={user.userType}
              onChange={onChange}
            >
              {USER_TYPES.map((user, i) => (
                <option key={i} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-3 md:flex-row">
          <div className="flex-1">
            <label
              htmlFor="joinDate"
              className="text-xs font-bold text-gray-800 uppercase tracking-wide"
            >
              Join Date
            </label>
            <DatePicker
              id="joinDate"
              name="joinDate"
              dateFormat="MMMM Do yyyy, h:mm:ss a"
              className="bg-gray-200 rounded py-2 px-2 min-w-full block"
              selected={new Date()}
              onChange={onChangeDate}
              value={user.joinDate}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="text-xs font-bold text-gray-800 uppercase tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-200 rounded py-2 px-2 min-w-full"
              value={user.email}
              onChange={onChange}
            />
          </div>
        </div>
        <input
          className="rounded bg-emerald-600 text-white py-2 w-40 m-auto cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default CreateUser;
