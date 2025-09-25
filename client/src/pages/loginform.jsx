// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../lib/supabaseClient";
// import { useTranslation } from "react-i18next";

// const Loginform = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       setLoading(true);
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: formData.email,
//         password: formData.password,
//       });

//       if (error) throw error;

//       // Access user role
//       const userRole = data.user?.user_metadata?.role || "worker";
//       console.log("Logged in as:", userRole);

//       // Redirect based on role
//       if (userRole === "lab") {
//         navigate("/lab-dashboard");
//       } else {
//         navigate("/worker-dashboard");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4">{t("Log In")}</h2>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <label className="block mb-2">
//           {t("Email")}
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded mt-1"
//             required
//           />
//         </label>

//         <label className="block mb-4">
//           {t("Password")}
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border p-2 rounded mt-1"
//             required
//           />
//         </label>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         >
//           {loading ? t("Logging In...") : t("Log In")}
//         </button>
//       </form>
//       <div className="mt-4 text-right">
//         <button
//         onClick={() => setShowForgetPass(true)}
//         className="text-blue-500 hover:underline text-sm"
//         >
//         Forgot Password?
//         </button>
//         </div>
//     </div>
//   );
// };

// export default Loginform;


// LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Forget Password modal state
//   const [showForgetPass, setShowForgetPass] = useState(false);
//   const [resetEmail, setResetEmail] = useState("");
//   const [resetMessage, setResetMessage] = useState("");
const handleforget = (e)=>{
    navigate('/forget');
}

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔌 Placeholder: add login API integration here
    setMessage("Login logic goes here.");
  };

//   const handleResetPassword = (e) => {
//     e.preventDefault();
//     if (!resetEmail) {
//       setResetMessage("Please enter your email.");
//       return;
//     }
//     // 🔌 Placeholder: add password reset API call here
//     setResetMessage("Reset link would be sent to this email.");
//     setResetEmail("");
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

            {message && <div className="text-red-500 mb-4">{message}</div>}

            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Login
            </button>
            </form>

            <div className="mt-4 text-right">
            <button onClick={handleforget}
                // onClick={() => setShowForgetPass(true)}
                className="text-blue-500 hover:underline text-sm"
            >
                Forgot Password?
            </button>
            </div>
        </div>
    </div>
  );
};

export default Loginform;
