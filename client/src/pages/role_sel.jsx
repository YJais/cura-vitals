// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Microscope, CircleUserRound } from "lucide-react";

// const Role_sel = () => {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();

//   // Language options
//   const languages = [
//     { code: "en", label: "English" },
//     { code: "ml", label: "Malayalam" },
//     { code: "hi", label: "Hindi" },
//   ];

//   const [selectedLanguage, setSelectedLanguage] = useState("en");

//   const handleLanguageChange = (event) => {
//     const lang = event.target.value;
//     setSelectedLanguage(lang);
//     i18n.changeLanguage(lang);
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleLogin = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//       {/* Header with language switch */}
//       <header className="absolute top-4 right-4">
//         <select
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//           className="border p-2 rounded"
//         >
//           {languages.map((lang) => (
//             <option key={lang.code} value={lang.code}>
//               {lang.label}
//             </option>
//           ))}
//         </select>
//       </header>

//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-8">
//         {t("Choose Your Role")}
//       </h1>

//       {/* Role Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Doctor */}
//         <div
//           // onClick={() => handleLogin("/doctor")}
//           className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
//         >
//           <Microscope className="w-10 h-10 text-primary mb-3" />
//           <h2 className="text-lg font-semibold">{t("Lab")}</h2>
//           <p className="text-sm text-gray-500">{t("Verify & Upload patient health records")}</p>
//           <section className="space-x-4">
//             <button  className="px-4 py-2 bg-blue-500 paddingtext-white rounded-md hover:bg-blue-600 transition">
//             {t("Sign Up")}
//           </button>
//           <button  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//             {t("Log In")}
//           </button>
//           </section>
          
//         </div>

//         {/* Worker */}
//         <div
//           onClick={() => handleLogin("/worker")}
//           className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
//         >
//           <CircleUserRound className="w-10 h-10 text-primary mb-3" />
//           <h2 className="text-lg font-semibold">{t("Migrant Worker")}</h2>
//           <p className="text-sm text-gray-500">{t("Manage your own digital health records")}</p>
//         </div>
//       </div>

//       {/* Signup button */}
//       <button
//         onClick={handleSignup}
//         className="mt-8 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
//       >
//         {t("Sign Up")}
//       </button>
//     </div>
//   );
// };

// export default Role_sel;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Microscope, CircleUserRound } from "lucide-react";
// import Header from "../components/Header";

// const Role_sel = () => {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();

//   // Language options
//   const languages = [
//     { code: "en", label: "English" },
//     { code: "ml", label: "Malayalam" },
//     { code: "hi", label: "Hindi" },
//   ];

//   const [selectedLanguage, setSelectedLanguage] = useState("en");

//   const handleLanguageChange = (event) => {
//     const lang = event.target.value;
//     setSelectedLanguage(lang);
//     i18n.changeLanguage(lang);
//   };

//   //Save role to backend + navigate
//  const handleAction = (role, action) => {
//     // integration placeholder: API call to log role selection
//     // integration placeholder: update Supabase users.role if logged in
//     navigate(`/${action}?role=${role}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//       {/* Header with language switch */}
//       <header className="absolute top-4 right-4">
//         <select
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//           className="border p-2 rounded"
//         >
//           {languages.map((lang) => (
//             <option key={lang.code} value={lang.code}>
//               {lang.label}
//             </option>
//           ))}
//         </select>
//       </header>
//       <main>
        
//         <h1 className="text-3xl font-bold mb-8">{t("Choose Your Role")}</h1>

//         {/* Role Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Lab */}
//           <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
//             <Microscope className="w-10 h-10 text-primary mb-3" />
//             <h2 className="text-lg font-semibold">{t("Lab")}</h2>
//             <p className="text-sm text-gray-500">
//               {t("Verify & Upload patient health records")}
//             </p>
//             <section className="space-x-4 mt-4">
//               <button
//                 onClick={() => handleAction("lab", "signup")}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//               >
//                 {t("Sign Up")}
//               </button>
//               <button
//                 onClick={() => handleAction("lab", "login")}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//               >
//                 {t("Log In")}
//               </button>
//             </section>
//           </div>

//           {/* Worker */}
//           <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
//             <CircleUserRound className="w-10 h-10 text-primary mb-3" />
//             <h2 className="text-lg font-semibold">{t("Migrant Worker")}</h2>
//             <p className="text-sm text-gray-500">
//               {t("Manage your own digital health records")}
//             </p>
//             <section className="space-x-4 mt-4">
//               <button
//                 onClick={() => handleAction("worker", "signup")}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//               >
//                 {t("Sign Up")}
//               </button>
//               <button
//                 onClick={() => handleAction("worker", "login")}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//               >
//                 {t("Log In")}
//               </button>
//             </section>
//           </div>
//         </div>
//       </main>
      
//     </div>
//   );
// };

// export default Role_sel;

// Role_sel.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Microscope, CircleUserRound } from "lucide-react";
import Header from "../components/Header";

const Role_sel = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "English" },
    { code: "ml", label: "Malayalam" },
    { code: "hi", label: "Hindi" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  const handleAction = (role, action) => {
    // Placeholder for backend API integration if needed
    // e.g., save role selection to Supabase or your database
    navigate(`/${action}?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header component with dynamic language selector */}
      <Header
        languages={languages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-bold mb-12">{t("Choose Your Role")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Lab Card */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <Microscope className="w-12 h-12 text-primary mb-3" />
            <h2 className="text-lg font-semibold">{t("Lab")}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
              {t("Verify & Upload patient health records")}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAction("lab", "signup")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                {t("Sign Up")}
              </button>
              <button
                onClick={() => handleAction("lab", "login")}
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
              >
                {t("Log In")}
              </button>
            </div>
          </div>

          {/* Worker Card */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
            <CircleUserRound className="w-12 h-12 text-primary mb-3" />
            <h2 className="text-lg font-semibold">{t("Migrant Worker")}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
              {t("Manage your own digital health records")}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAction("worker", "signup")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                {t("Sign Up")}
              </button>
              <button
                onClick={() => handleAction("worker", "login")}
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
              >
                {t("Log In")}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Role_sel;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Microscope, CircleUserRound } from "lucide-react";

// const Role_sel = () => {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");

//   const handleLanguageChange = (e) => {
//     const lang = e.target.value;
//     setSelectedLanguage(lang);
//     i18n.changeLanguage(lang);
//     localStorage.setItem("i18nextLng", lang);
//     // 🔌 integration placeholder: update backend language preference
//   };

//   const handleAction = (role, action) => {
//     // 🔌 integration placeholder: API call to log role selection
//     // 🔌 integration placeholder: update Supabase users.role if logged in
//     navigate(`/${action}?role=${role}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       {/* Language Selector */}
//       <header className="absolute top-4 right-4">
//         <select
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//           className="border p-2 rounded"
//         >
//           <option value="en">English</option>
//           <option value="ml">Malayalam</option>
//           <option value="hi">Hindi</option>
//         </select>
//       </header>

//       {/* Roles Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
//         {/* Lab Card */}
//         <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
//           <Microscope className="mx-auto mb-3" />
//           <h2 className="text-lg font-semibold">{t("Lab")}</h2>
//           <p className="mb-4">{t("Verify & Upload patient health records")}</p>
//           <div className="space-x-3">
//             <button
//               onClick={() => handleAction("lab", "signup")}
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               {t("Sign Up")}
//             </button>
//             <button
//               onClick={() => handleAction("lab", "login")}
//               className="px-4 py-2 border rounded"
//             >
//               {t("Log In")}
//             </button>
//           </div>
//         </div>

//         {/* Worker Card */}
//         <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
//           <CircleUserRound className="mx-auto mb-3" />
//           <h2 className="text-lg font-semibold">{t("Migrant Worker")}</h2>
//           <p className="mb-4">{t("Manage your own digital health records")}</p>
//           <div className="space-x-3">
//             <button
//               onClick={() => handleAction("worker", "signup")}
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               {t("Sign Up")}
//             </button>
//             <button
//               onClick={() => handleAction("worker", "login")}
//               className="px-4 py-2 border rounded"
//             >
//               {t("Log In")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Role_sel;
