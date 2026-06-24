import "./App.css";

function App() {
  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg p-8 shadow-2xl  max-w-sm w-full">
        <h2 className="text-center text-3xl text-white mb-6 font-bold">
          LOGIN
        </h2>
        <form action="">
          <div className="mb-04 ">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-300 mb-2 "
            >
              email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-300 mb-2 "
            >
              password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 shadow-2xl transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
