import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:8000/api/v1/users/me",
                    {},
                    {
                        withCredentials: true,
                    },
                );

                setUser(res.data?.data);
            } catch (error) {
                console.error(
                    error.response?.data?.message || "Failed to load user",
                );
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            setLoggingOut(true);

            await axios.post(
                "http://localhost:8000/api/v1/users/logout",
                {},
                {
                    withCredentials: true,
                },
            );

            navigate("/login");
        } catch (error) {
            console.error(error.response?.data?.message || "Logout failed");
        } finally {
            setLoggingOut(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 text-xl font-bold text-slate-900"
                    >
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm">
                            N
                        </div>
                        Nodemailer Auth
                    </Link>

                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="text-sm font-medium text-slate-600 hover:text-red-600 transition disabled:opacity-50"
                    >
                        {loggingOut ? "Logging out..." : "Logout"}
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <p className="text-sm text-blue-600 font-medium">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                        Welcome, {user?.username}!
                    </h1>

                    <p className="mt-3 text-slate-500">
                        You have successfully logged in to your account.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <p className="text-sm text-slate-500">Account</p>

                        <p className="mt-2 font-semibold text-slate-900">
                            {user?.email}
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <p className="text-sm text-slate-500">Authentication</p>

                        <p className="mt-2 font-semibold text-slate-900">
                            Active
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <p className="text-sm text-slate-500">Email</p>

                        <p className="mt-2 font-semibold text-slate-900">
                            {user?.isVerified ? "Verified" : "Not verified"}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
