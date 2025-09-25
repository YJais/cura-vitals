import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heart, Users, Stethoscope, Globe, Languages } from "lucide-react";
import Header from '../components/Header.jsx';

const Landing = () => {
  const { t, i18n } = useTranslation(); // correct destructuring
  const navigate = useNavigate();

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "ml", label: "Malayalam" },
    { code: "hi", label: "Hindi" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // use i18n instance
  };

  const Role_sel = () => {
    navigate("/role_sel");
  };
//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleLogin = (route) => {
//     navigate(route);
//   };

  return (
    <div className="min-h-screen bg-background">
      {/* <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/CuraVitals_logo.png" alt="CuraVitals Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-foreground">CuraVitals</h1>
              <p className="text-xs text-muted-foreground">
                Digital Health Records for Migrant Workers
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Languages className="w-4 h-4 text-muted-foreground" />
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header> */}
   
      <Header languages={languages}/>

      <main className="p-6">
        <section className="text-center my-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t("Empowering Kerala's Migrant Workers with Digital Health")}
          </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t("Join us in revolutionizing healthcare access for all.")}
          </p>
            <div className="space-x-4">
                <button onClick={Role_sel} className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    {t("Get Started")}
                </button>
            {/* <button
              onClick={handleSignup}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {t("Sign Up")}
            </button>
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {t("Log In")}
            </button> */}
          </div>
        </section>
        <section className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <Heart className="mx-auto mb-4 text-blue-500" size={48} />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {t("Compassionate Care")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("We prioritize the health and well-being of every worker.")}
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto mb-4 text-blue-500" size={48} />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {t("Compassionate Care")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("We prioritize the health and well-being of every worker.")}
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <Stethoscope className="mx-auto mb-4 text-blue-500" size={48} />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {t("Compassionate Care")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("We prioritize the health and well-being of every worker.")}
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <Globe className="mx-auto mb-4 text-blue-500" size={48} />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {t("Compassionate Care")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("We prioritize the health and well-being of every worker.")}
            </p>
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t("Our Services")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("We offer a range of services to support migrant workers.")}
          </p>
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t("Get Involved")}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("Learn how you can support our mission and help migrant workers.")}
          </p>
        </section>
      </main>
      <footer className="bg-blue-500 text-white py-4 mt-5">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CuraVitals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
