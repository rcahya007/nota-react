import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../container/Home/Home";

const Navigation = () => {
  const { state, fungsi } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    fungsi({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-zinc-700">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <button>
            <Link to={"/dashboard"}>
              <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img
                  alt="content"
                  className="h-10 w-10 "
                  src="/images/kodehack.png"
                />
                <span className="ml-3 text-xl text-white font-bold">
                  Kodehack
                </span>
              </p>
            </Link>
          </button>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <button>
              <Link to={"/dashboard"}>
                <p className="mr-5 text-white hover:text-amber-500 font-bold">
                  DASHBOARD
                </p>
              </Link>
            </button>
            <button>
              <Link to={"/barang"}>
                <p className="mr-5 text-white hover:text-amber-500 font-bold">
                  BARANG
                </p>
              </Link>
            </button>
            <button>
              <Link to={"/categorybarang"}>
                <p className="mr-5 text-white hover:text-amber-500 font-bold">
                  CATEGORY BARANG
                </p>
              </Link>
            </button>
            <button>
              <Link to={"/nota"}>
                <p className="mr-5 text-white hover:text-amber-500 font-bold">
                  NOTA TRANSAKSI
                </p>
              </Link>
            </button>
          </nav>
          {state.user === null ? null : (
            <p className="text-white pr-4">Hallo {state.user.name}</p>
          )}
          {state.user === null ? null : (
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={handleLogout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  );
};
export default Navigation;
