import React from "react";

const Form = () => {
  return (
    <div className="border">
      <form className="border-black max-w-md bg-white shadow-md">
        <span className="logo font-logo text-6xl block text-center mb-5 text-yellow-5000">
          Firegram
        </span>
        <div className="mb-2">
          <input
            className="w-full shadow border rounded px-3 py-2 focus:outline-none"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full shadow border rounded px-3 py-2 focus:outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="w-full shadow border rounded px-3 py-2 focus:outline-none bg-yellow-5000"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Form;
