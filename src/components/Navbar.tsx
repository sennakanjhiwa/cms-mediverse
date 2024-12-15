import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Menggunakan useLocation dan useNavigate

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Mendapatkan URL saat ini

    // Memeriksa status login berdasarkan token di localStorage
    useEffect(() => {
        const tokenData = localStorage.getItem("sb-hlptyhqudwlewwckotax-auth-token");  // Ganti dengan key yang sesuai
        if (tokenData) {
            const parsedToken = JSON.parse(tokenData);  // Parse data JSON
            setIsLoggedIn(!!parsedToken.access_token);  // Periksa ada tidaknya access_token
        } else {
            setIsLoggedIn(false); // Tidak ada token
        }
    }, []); // Menjalankan efek hanya sekali saat halaman pertama kali dimuat

    const handleLogout = () => {
        // Menghapus token dari localStorage
        localStorage.removeItem("sb-hlptyhqudwlewwckotax-auth-token");

        // Perbarui status login
        setIsLoggedIn(false);

        // Redirect ke halaman login
        navigate("/login");
    };

    // Mendapatkan nama path halaman saat ini
    const currentPath = location.pathname;

    return (
        <nav className="sticky top-0 bg-white shadow-sm z-10 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-purple-600">
                            Mediverse
                        </a>
                    </div>

                    <div>
                        <ul className="flex space-x-4">
                            {/* Tampilkan Login dan Register hanya di halaman login */}
                            {currentPath === "/login" && !isLoggedIn && (
                                <>
                                    <li>
                                        <Link to="/login" className="text-gray-500 font-semibold hover:text-purple-600">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className="text-gray-500 font-semibold hover:text-purple-600">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* Tampilkan Logout hanya di halaman dashboard jika sudah login */}
                            {currentPath === "/dashboard" && isLoggedIn && (
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="text-gray-500 font-semibold hover:text-purple-600"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
