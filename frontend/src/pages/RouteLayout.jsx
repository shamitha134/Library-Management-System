import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import BurgerMenu from "../components/BurgerMenu";
import catalogueSvg from "../assets/catalogue.svg";
import reservedBookSvg from "../assets/reserved_book.svg";
import historySvg from "../assets/history.svg";
import addBookSvg from "../assets/add_book.svg";
import profileSvg from "../assets/profile.svg";
import userGroupSvg from "../assets/user_group.svg";
import logoutSvg from "../assets/logout.svg";

const userRoutes = [
  { routeName: "Catalogue", routePath: "/catalogue", icon: catalogueSvg },
  {
    routeName: "Reserved Books",
    routePath: "/reserved-books",
    icon: reservedBookSvg,
  },
  { routeName: "History", routePath: "/history", icon: historySvg },
  { routeName: "Profile", routePath: "/profile", icon: profileSvg },
];

const adminRoutes = [
  { routeName: "Catalogue", routePath: "/catalogue", icon: catalogueSvg },
  { routeName: "Add Book", routePath: "/add-book", icon: addBookSvg },
  { routeName: "Users", routePath: "/users", icon: userGroupSvg },
];

function generateNavLinks(routes) {
  return routes.map((route, index) => {
    return (
      <NavLink
        className={({ isActive }) => {
          return (
            "block hover:bg-bhover w-full active:bg-background p-2 rounded-md " +
            (isActive ? "bg-bhover" : "")
          );
        }}
        key={index}
        to={route.routePath}
      >
        <li className="font-medium text-text">
          <div className="flex gap-3">
            <img
              width="24px"
              height="24px"
              src={route.icon}
              alt="icon"
              className="opacity-60"
            />
            <span>{route.routeName}</span>
          </div>
        </li>
      </NavLink>
    );
  });
}

const profileImg =
  "https://cdn-icons-png.flaticon.com/128/10412/10412383.png";
const userName = "Admin";
const role = "user";

const RouteLayout = () => {
  const navbarRef = useRef();
  const navigate = useNavigate();
  function showNavbar() {
    navbarRef.current.classList.toggle("left-0");
  }

  const navLinks =
    role === "user"
      ? generateNavLinks(adminRoutes)
      : generateNavLinks(userRoutes);
  return (
    <div className="pt-12 sm:pt-14 min-h-screen bg-background">
      <header className="fixed w-full top-0 z-40 bg-[white] h-12 sm:h-14 p-4 sm:px-8 shadow-sm flex items-center justify-between">
        <h1 className="font-['Pacifico'] text-2xl sm:text-3xl text-accent">
          library
        </h1>
        <BurgerMenu onClick={showNavbar} />

        <div className="flex gap-3 items-center">
          <img
            className="w-10 aspect-square object-cover rounded-full"
            src={profileImg}
            alt="profile pic"
          />
          <button className="border-none text-text relative group mb-1">
            <span className="font-medium text-sm">{userName}</span>
            <span className="ml-1 text-2xl translate-x-1/2">&#8964;</span>

            <div className="p-4 -right-4 hidden group-hover:block scale-0 group-hover:scale-100 transition-[scale_150ms] origin-top absolute bg-white rounded-lg">
              <button
                className="px-3 py-2 rounded-md hover:bg-bhover"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <img src={logoutSvg} className="opacity-60" alt="logout icon" />
                logout
              </button>
            </div>
          </button>
        </div>
      </header>

      <nav
        ref={navbarRef}
        className="fixed bg-background h-screen p-4 md:p-6 w-52 text-sm md:text-base md:w-60 -left-full duration-300 md:left-0"
      >
        <ul className="space-y-2">{navLinks}</ul>
      </nav>

      <main className="p-4 md:ml-60">
        <Outlet />
      </main>
    </div>
  );
};

RouteLayout.propTypes = {};

export default RouteLayout;
