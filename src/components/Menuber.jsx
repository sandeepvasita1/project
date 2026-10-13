
import React from "react";
import { Link } from "react-router-dom";

export default function Menubar() {
    return (
        <nav className="bg-blue-600 shadow-md">
            <div className="max-w-7xl mx-auto px-6">
                <ul className="flex items-center gap-8 py-4">

                    <li>
                        <Link
                            to="/"
                            className="text-white font-medium hover:text-blue-200 transition duration-200"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/Count"
                            className="text-white font-medium hover:text-blue-200 transition duration-200"
                        >
                            Count
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/Services"
                            className="text-white font-medium hover:text-blue-200 transition duration-200"
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/employees"
                            className="text-white font-medium hover:text-blue-200 transition duration-200"
                        >
                            Employees
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}