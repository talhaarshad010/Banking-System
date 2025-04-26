import React from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import {
  Building2,
  LogOut,
  User as UserIcon,
  Users,
  ArrowRightLeft,
} from "lucide-react";

export function Layout() {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <Building2 className="h-8 w-8" />
                <span className="text-xl font-bold">SecureBank</span>
              </Link>

              {user && (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                      location.pathname === "/dashboard"
                        ? "bg-blue-700"
                        : "hover:bg-blue-700"
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/transactions"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                      location.pathname === "/transactions"
                        ? "bg-blue-700"
                        : "hover:bg-blue-700"
                    }`}
                  >
                    <ArrowRightLeft className="h-5 w-5" />
                    <span>Transactions</span>
                  </Link>
                  {isAdmin && (
                    <Link
                      to="/users"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                        location.pathname === "/users"
                          ? "bg-blue-700"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      <Users className="h-5 w-5" />
                      <span>Users</span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {user && (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                    location.pathname === "/profile"
                      ? "bg-blue-700"
                      : "hover:bg-blue-700"
                  }`}
                >
                  <UserIcon className="h-5 w-5" />
                  <span>{user.email}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-gray-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
