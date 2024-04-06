import loginBackground from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12 ">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-lg">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url(${loginBackground})`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none bg-background">
            <h3 className="pt-4 text-2xl text-center">Login</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg rounded">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="mt-1 px-4 py-1 sm:py-2 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id="username"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="mt-1 px-4 py-1 sm:py-2 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id="password"
                  type="password"
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full mt-4 py-3 md:mt-10 bg-accent/80 hover:bg-accent rounded-md text-white font-semibold"
                  type="button"
                  onClick={() => {
                    navigate("/catalogue");
                  }}
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-accent/80 align-baseline hover:text-accent"
                  to="/signup"
                >
                  Create an Account!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
