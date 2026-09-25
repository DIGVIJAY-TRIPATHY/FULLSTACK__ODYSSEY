import { Link } from "react-router-dom";

function AuthLayout({ children, title, description }) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900"
                    >
                        <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                            N
                        </div>
                        Nodemailer Auth
                    </Link>

                    <h1 className="mt-8 text-2xl font-semibold text-slate-900">
                        {title}
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">{description}</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-7">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
