import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setSubmitting(true);

            await axios.post(
                "http://localhost:8000/api/v1/users/login",
                {
                    email: formData.email,
                    password: formData.password,
                },
                {
                    withCredentials: true,
                },
            );

            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    "Login failed. Please try again.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AuthLayout title="Welcome back" description="Login to your account">
            <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-slate-700">
                            Password
                        </label>

                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
                >
                    {submitting ? "Logging in..." : "Login"}
                </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="text-blue-600 font-medium hover:text-blue-700"
                >
                    Create one
                </Link>
            </p>
        </AuthLayout>
    );
}

export default Login;
