import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 bg-white">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-12 bg-gray-200 rounded mb-4 flex items-center justify-center">
            <span className="text-gray-500 font-bold">LOGO</span>
          </div>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Hi, Welcome Back</h1>
        <p className="mb-8 text-gray-600">
          Please sign in using your credentials
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="text-xs text-blue-600">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded text-lg font-semibold"
          >
            Login
          </button>
        </form>
        <footer className="mt-16 text-xs text-gray-400">
          © 2024 Mercator Technologies Ltd. All rights reserved.
        </footer>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            The simplest way to manage your cards
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your credentials to access your account
          </p>
          {/* Illustration or dashboard preview can go here */}
        </div>
      </div>
    </div>
  );
}
