import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-gray-900">
      <div className="relative w-full max-w-6xl h-auto">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex items-center justify-center md:border-r border-gray-600/30">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-10 h-10 mx-auto text-gray-400 mb-4" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">
                    Login to access your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-lable">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="your@gmail.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="auth-input-lable">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="••••••"
                      />
                    </div>
                  </div>

                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 bg-linear-to-bl from-gray-800/20 to-transparent">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src="/login.png"
                  alt="People are chatting"
                  className="w-full max-w-full h-auto object-contain"
                />
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-sm sm:text-lg md:text-xl font-medium text-blue-400">
                    Connect Anytime, Anywhere
                  </h3>

                  <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-4">
                    <span className="auth-badge">Secure</span>
                    <span className="auth-badge">Fast</span>
                    <span className="auth-badge">Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default LoginPage;
