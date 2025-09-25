import { useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useTranslation } from "react-i18next";

const Signupform = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Role from query (?role=worker/lab)
  const prefilledRole = searchParams.get("role") || "worker";

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: prefilledRole,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError(t("Passwords do not match"));
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { role: formData.role }, // Store role in user_metadata
        },
      });

      if (error) throw error;

      alert(t("Check your email for confirmation link"));
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">{t("Sign Up")}</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <label className="block mb-2">
          {t("Email")}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          {t("Password")}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          {t("Confirm Password")}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>

        <label className="block mb-4">
          {t("Role")}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="worker">{t("Migrant Worker")}</option>
            <option value="lab">{t("Lab")}</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? t("Signing Up...") : t("Sign Up")}
        </button>
      </form>
    </div>
  );
};

export default Signupform;
