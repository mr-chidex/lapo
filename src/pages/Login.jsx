import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { Link, useNavigate } from "react-router-dom";
import LockIcon from "../icons/LockIcon";
import PasswordIcon from "../icons/PasswordIcon";
import RingIcon from "../icons/RingIcon";
import active from "../assets/active_preview.png";
import dashboardPreview from "../assets/login_preview.png";
import CardInfraIcon from "../assets/cardinfra_logo.svg";
import Spinner from "../components/Spinner";
import UserIcon from "../icons/userIcon";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = login(username, password);
      if (success) {
        setTimeout(() => {
          //simulate a loading state
          navigate("/dashboard", { replace: true });
          setIsLoading(false);
        }, 4000);
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError(err?.message || "An error occurred. Please try again.");
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex text-dark-600">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col px-8 sm:px-16  md:px-8 lg:px-16 py-8  bg-white">
        <div className="w-32 h-12 mb-16 -ml-4">
          <img src="/logo_light.svg" alt="Lapo" className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-semibold">Hi, Welcome Back</h1>
            <p className="mb-8 text-xs text-light-600">
              Please sign in using your credentials
            </p>
            <span className="text-gray-500 text-xs">
              (Test Login &gt; username:{" "}
              <span className="text-dark-600">admin</span>
              &nbsp;/ password: <span className="text-dark-600">password</span>)
            </span>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>
                <span className="absolute left-3 top-12 -translate-y-1/2">
                  <UserIcon />
                </span>
                <input
                  type="text"
                  className="w-full border rounded-md px-10 py-2 outline-none"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="relative mb-4">
                <span className="absolute left-3 top-12 -translate-y-1/2">
                  <LockIcon />
                </span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-12 -translate-y-1/2"
                >
                  <PasswordIcon showPassword={showPassword} />
                </button>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border rounded-md px-10 mb-2 py-2 outline-none"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Link to="#" className="text-sm text-dark-600 pt-8 mt-8 inline">
                Forgot password
              </Link>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-700 text-white py-2 rounded text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? <Spinner /> : "Login"}
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-auto  text-xs text-gray-400">
          © 2024 Mercator Technologies Ltd. All rights reserved.
        </footer>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex w-1/2 py-4 pr-4">
        <div className="w-full flex flex-col bg-gradient-login rounded-md relative pt-24  overflow-hidden">
          <span className="absolute top-0 left-0">
            <RingIcon />
          </span>
          <div className="px-8 lg:px-16 mt-4">
            <h2 className="text-xl lg:text-3xl font-medium mb-4">
              The simplest way to manage <br />
              your cards
            </h2>
            <p className="text-light-600 mb-8">
              Enter your credentials to access your account
            </p>
          </div>

          {/* dashboard preview */}
          <div className="w-[850px] h-[604px] ml-4 lg:ml-8 overflow-hidden relative">
            <img
              src={dashboardPreview}
              alt="dashboard"
              className="w-[850px] h-[604px] object-contain ml-8 lg:ml-14"
            />
            <img
              src={active}
              alt="dashboard"
              className="absolute top-32 left-0 w-[300px]"
            />
            {/* Fade effect overlay */}
            <div className="absolute bottom-0 left-0 ml-14 right-0 h-32 bg-gradient-preview"></div>
          </div>

          <div className="flex flex-col mt-auto  ml-auto w-fit pr-16">
            <h2 className="text-[8.5px] font-medium">POWERED BY</h2>
            <img
              src={CardInfraIcon}
              alt="CardInfra"
              className="w-[80px] h-[36px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
