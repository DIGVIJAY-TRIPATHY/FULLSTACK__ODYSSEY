import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
    const { token } = useParams();

    const [status, setStatus] = useState("verifying"); // "verifying" | "success" | "error"
    const [message, setMessage] = useState("");

    const hasVerified = useRef(false);

    useEffect(() => {
        if (hasVerified.current) return;
        hasVerified.current = true;

        const verify = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8000/api/v1/users/verify-email/${token}`,
                    { withCredentials: true },
                );
                setStatus("success");
                setMessage(res.data?.message || "Email verified successfully.");
            } catch (err) {
                setStatus("error");
                setMessage(
                    err.response?.data?.message ||
                        "Invalid or expired verification link.",
                );
            }
        };

        if (token) {
            verify();
        } else {
            setStatus("error");
            setMessage("No verification token provided.");
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center">
                    <div
                        className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                            status === "error" ? "bg-red-50" : "bg-blue-50"
                        }`}
                    >
                        <svg
                            className={`w-8 h-8 ${
                                status === "error"
                                    ? "text-red-600"
                                    : "text-blue-600"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>

                    <h1 className="mt-6 text-2xl font-semibold text-slate-900">
                        {status === "verifying" && "Verify your email"}
                        {status === "success" && "Email verified"}
                        {status === "error" && "Verification failed"}
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        {status === "verifying"
                            ? "We're verifying your email address. Please wait while we complete the verification."
                            : message}
                    </p>

                    {status === "verifying" && (
                        <div className="mt-7">
                            <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
                        </div>
                    )}

                    {status !== "verifying" && (
                        <p className="mt-6 text-sm text-slate-500">
                            {status === "success" ? (
                                <>
                                    You can now{" "}
                                    <Link
                                        to="/login"
                                        className="text-blue-600 font-medium hover:text-blue-700"
                                    >
                                        login
                                    </Link>
                                    .
                                </>
                            ) : (
                                <>
                                    Try registering again from the{" "}
                                    <Link
                                        to="/register"
                                        className="text-blue-600 font-medium hover:text-blue-700"
                                    >
                                        sign up page
                                    </Link>
                                    .
                                </>
                            )}
                        </p>
                    )}
                </div>

                <p className="text-center text-xs text-slate-400 mt-6">
                    Nodemailer Authentication Demo
                </p>
            </div>
        </div>
    );
}

export default VerifyEmail;
