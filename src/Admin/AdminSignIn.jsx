import { Link } from "react-router-dom"
import SuccessAlert from "../Alerts/SuccessAlert";
import Loading from "../Components/Pages/Loading";

const AdminSignIn = () => {
    return (
        <div class="bg-gray-100 h-screen flex items-center justify-center mt-3">
            <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
                <form>
                    <div class="mb-4">
                        <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <Link to="/adminDashBoard"><button class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        onClick={SuccessAlert}
                        >Sign In</button></Link>
                    </div>
                </form>
                <p class="text-sm text-gray-600">New user? Sign up here.<Link to="/adminSignUp" onClick={Loading} class="text-blue-500 hover:underline">Sign Up.</Link></p>
            </div>
        </div>

    );
}

export default AdminSignIn;