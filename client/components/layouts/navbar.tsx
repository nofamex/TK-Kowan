import Link from "next/link";
import AuthModal from "../auth/modal";
import { useCookie } from "next-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const cookie = useCookie();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (cookie.has("token")) {
      setIsLogin(true);
    }
  }, []);

  const loginMenu = [
    { href: "/listing", title: "My Listing" },
    { href: "/booking", title: "My Booking" },
  ];

  const logoutHandler = () => {
    cookie.remove("token");
    setInterval(() => router.reload(), 1500);
  };

  return (
    <>
      <AuthModal />
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {isLogin &&
                loginMenu.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link href={menu.href}>{menu.title}</Link>
                    </li>
                  );
                })}

              {isLogin ? (
                <li
                  className="px-4 py-2 text-md cursor-pointer hover:bg-gray-200 rounded-md"
                  onClick={logoutHandler}
                >
                  Logout
                </li>
              ) : (
                <label
                  htmlFor="auth-modal"
                  className="px-4 py-2 text-md cursor-pointer hover:bg-gray-200 rounded-md"
                >
                  Login
                </label>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            AirDxD
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}
