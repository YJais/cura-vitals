// ForgetPass.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Optional header if used globally

const ForgetPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    // 🔌 Placeholder: call your backend or Supabase password reset API
    // Example with Supabase:
    // const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    setMessage("If this email exists, a reset link has been sent.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Header can be added if needed */}
      {/* <Header /> */}

      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your email to receive a password reset link
        </p>

        {message && (
          <div className="mb-4 text-center text-green-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
