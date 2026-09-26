import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
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
                    Create Account
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">
                    Sign up for a new account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-lable">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="input"
                        placeholder="ShyChat"
                      />
                    </div>
                  </div>
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
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/login" className="auth-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 bg-linear-to-bl from-gray-800/20 to-transparent">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src="/signup.png"
                  alt="People are trying to chat"
                  className="w-full max-w-full h-auto object-contain"
                />
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-sm sm:text-lg md:text-xl font-medium text-blue-400">
                    Start Your Journey Today
                  </h3>

                  <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default SignupPage;
