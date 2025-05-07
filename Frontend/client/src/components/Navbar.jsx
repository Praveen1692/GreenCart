import React, { useDeferredValue, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    showUserLogin,
    navigate,
    setShowUserLogin,
    searchQuery,
    setSearchQuery,
    getCartCount
  } = useAppContext();
  console.log("showUserLogin", showUserLogin);

  const logout = async () => {
    console.log("logout called");

    setUser(null);
    navigate("/");
  };
  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  const toggleProfile = () => {};

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/contacts">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />

          <img src={assets.search_icon} alt="search" className="w-6 h-5" />
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 h-6 opacity-80"
          />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              onClick={toggleProfile}
              src={assets.profile_icon}
              alt="profile"
              className="w-10  rounded-full "
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("/orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu_icon" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        {user && (
          <NavLink to="/orders" onClick={() => setOpen(false)}>
            My Orders
          </NavLink>
        )}
        <NavLink to="/contacts" onClick={() => setOpen(false)}>
          Contact
        </NavLink>

        <button
          onClick={() => {
            setOpen(false); // Close modal/menu
            if (showUserLogin) {
              logout(); // Call logout function when user is logged in
            }
          }}
          className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
        >
          {showUserLogin ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
