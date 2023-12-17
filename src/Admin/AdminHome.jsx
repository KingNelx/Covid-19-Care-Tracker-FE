import Lottie from "lottie-react";
import adminLoad from '../Components/Animations/adminLoad.json'
import { Link } from "react-router-dom";
import Loading from "../Components/Pages/Loading";

const AdminHome = () => {
    return (
        <div className="flex flex-col items-center justify-center h-fit w-auto">
            <Lottie
                animationData={adminLoad}
            />
            <section>
                <Link to="/adminSignIn">
                    <p className="italic"  onClick={Loading}> Already have an account? Log in here. </p>
                </Link>
                <Link to="/adminSignUp">
                    <p className="italic" onClick={Loading}>Don't have an account? Sign up now.</p>
                </Link>
            </section>
        </div>
    );
}

export default AdminHome;