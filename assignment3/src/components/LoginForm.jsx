import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-150 mx-auto border border-gray-200 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-xl font-bold color-black pb-2">Email:</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 font-bold rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-xl font-bold color-black pb-2">Password:</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="cursor-pointer w-48 bg-red-500 text-white font-bold text-xl p-2 rounded-[20px] hover:bg-red-700 shadow-md transition duration-300 ease-in-out">
            Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;