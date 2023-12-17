const AdminDashBoard = () => {

    const males = [
        { id: 1, name: 'Jonel Tapia', age: 30 },
        { id: 2, name: 'Jonel Tapia', age: 25 },
        // Add more male data as needed
    ];

    const females = [
        { id: 1, name: 'Emily Johnson', age: 28 },
        { id: 2, name: 'Emily Johnson', age: 32 },
        // Add more female data as needed
    ];


    return (
        <div>
            <div className="bg-gray-500 min-h-screen p-4">
                <header className="bg-white shadow-md p-4 mb-4 rounded-lg">
                    <h1 className="text-xl font-semibold text-center">Admin Dashboard</h1>
                    {/* Other header elements */}
                </header>

                <main>
                 
                    <section className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-center">Total Covid Patients Recorded</h2>
                        {/* Recent activity content */}
                    </section>

                    <section className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Lists</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-md font-semibold mb-2">Males</h3>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left">ID</th>
                                            <th className="text-left">Name</th>
                                            <th className="text-left">Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {males.map((male) => (
                                            <tr key={male.id}>
                                                <td>{male.id}</td>
                                                <td>{male.name}</td>
                                                <td>{male.age}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold mb-2">Females</h3>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left">ID</th>
                                            <th className="text-left">Name</th>
                                            <th className="text-left">Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {females.map((female) => (
                                            <tr key={female.id}>
                                                <td>{female.id}</td>
                                                <td>{female.name}</td>
                                                <td>{female.age}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-white shadow-md rounded-lg p-4">
                    <p className="text-sm text-gray-600">&copy; 2023 Admin Dashboard</p>
                    {/* Other footer elements */}
                </footer>
            </div>
        </div>
    );
}

export default AdminDashBoard;