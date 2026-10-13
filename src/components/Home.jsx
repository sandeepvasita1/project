const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Employee Management System
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                        Manage employee information, skills, projects and
                        departments from one simple application.
                    </p>

                    <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        View Employees
                    </button>
                </div>
            </section>

            {/* Information Cards */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Employees */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Employees
                        </h2>

                        <p className="text-gray-600">
                            View employee details including name, contact,
                            salary, experience and department.
                        </p>

                        <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            View Employees
                        </button>
                    </div>

                    {/* Projects */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Projects
                        </h2>

                        <p className="text-gray-600">
                            Explore the projects assigned to different
                            employees and their areas of work.
                        </p>

                        <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            View Projects
                        </button>
                    </div>

                    {/* Skills */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            Skills
                        </h2>

                        <p className="text-gray-600">
                            Explore technical and professional skills across
                            different employees and departments.
                        </p>

                        <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            View Skills
                        </button>
                    </div>

                </div>
            </section>

            {/* Simple Statistics */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
                <div className="bg-white rounded-xl shadow-md p-8">

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        Employee Overview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">
                                15
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Employees
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-green-600">
                                6
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Departments
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-purple-600">
                                30+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Projects
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;