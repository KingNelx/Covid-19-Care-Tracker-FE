import { Link } from "react-router-dom"
import SuccessAlert from "../Alerts/SuccessAlert";
import Loading from "../Components/Pages/Loading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {

    const navigate = useNavigate()
    const [admin, adminSignIn] = useState({
        adminEmail: "",
        adminUserName: "",
        adminPassword: ""
    })


    const { adminEmail, adminUserName, adminPassword } = admin

    const updateFormField = (e) => {
        const { name, value } = e.target
        adminSignIn({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            const respone = await axios.get("http://localhost:8080/admin/sign-in", { params: admin })
            if (respone.status === 200) {
                adminSignIn(respone.data)
                navigate("/adminDashBoard")
            }
        } catch (error) {
            alert(" ACCOUNT DOES NOT EXIST ")
            console.log(" SOMETHING WENT WRONG: " + error)
        }
    }

    return (
        <div class="bg-gray-100 h-screen flex items-center justify-center mt-3">
            <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
                <form onSubmit={(e) => submitForm(e)}>

                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type={"email"}
                            name="adminEmail"
                            value={adminEmail}
                            onChange={(e) => updateFormField(e)}
                            required
                            placeholder="Enter your email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div class="mb-4">
                        <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                        <input type={"text"}
                            name="adminUserName"
                            value={adminUserName}
                            onChange={(e) => updateFormField(e)}
                            required
                            placeholder="Enter your username" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type={"password"}
                            name="adminPassword"
                            value={adminPassword}
                            onChange={(e) => updateFormField(e)}
                            required
                            placeholder="Enter your password" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <button class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            onClick={SuccessAlert}
                        >Sign In</button>
                    </div>
                </form>
                <p class="text-sm text-gray-600">New user? Sign up here.<Link to="/adminSignUp" onClick={Loading} class="text-blue-500 hover:underline">Sign Up.</Link></p>
            </div>
        </div>

    );
}

export default AdminSignIn;