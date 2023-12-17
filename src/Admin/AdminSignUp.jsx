import { Link } from "react-router-dom";
import Loading from "../Components/Pages/Loading";
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Registered from "../Alerts/Registered";

const AdminSignUp = () => {

    const navigate = useNavigate()

    const [admin, setAccount] = useState({
        adminUserName: "",
        contactNumber: "",
        adminEmail: "",
        adminPassword: ""
    })

    const { adminUserName, contactNumber, adminEmail, adminPassword } = admin

    const updateFormField = (e) => {
        const { name, value } = e.target
        setAccount({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/admin/create-account", admin)
            if (response.status === 200) {
                setAccount(response.data)
                navigate("/adminSignIn")
            }
        } catch (error) {
            alert(" SOMETHING WENT WRONG: " + error)
            console.log(" SOMETHING WENT WRONG: " + error)
        }
    }

    return (
        <div class="bg-gray-100 h-screen flex items-center justify-center mt-3">
            <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
                <form onSubmit={(e) => submitForm(e)}>
                    <div class="mb-4">
                        <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                        <input type={"text"} placeholder="Enter your username"
                            name="adminUserName"
                            value={adminUserName}
                            onChange={(e) => updateFormField(e)}
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-4">
                        <label for="contact number" class="block text-gray-700 font-semibold mb-2">Contact Number</label>
                        <input type={"text"} placeholder="Enter your contact number"
                            name="contactNumber"
                            value={contactNumber}
                            onChange={(e) => updateFormField(e)}
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type={"email"} placeholder="Enter your email"
                            name="adminEmail"
                            value={adminEmail}
                            onChange={(e) => updateFormField(e)}
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type={"password"} placeholder="Enter your password"
                            name="adminPassword"
                            value={adminPassword}
                            onChange={(e) => updateFormField(e)}
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            onClick={Registered}
                        >Sign Up</button>
                    </div>
                </form>
                <p class="text-sm text-gray-600">Already have an account? <Link to="/adminSignIn" onClick={Loading} class="text-blue-500 hover:underline">Log in here.</Link></p>
            </div>
        </div>

    );
}

export default AdminSignUp;