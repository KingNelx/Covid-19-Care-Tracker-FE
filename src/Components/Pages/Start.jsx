import Loading from "./Loading";
import { Link } from "react-router-dom";
const Start = () => {
    return (
        <div className="text-center">
            <Link to="/adminHome">
                <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                    onClick={Loading} >
                    Get Started
                </button>
            </Link>
        </div>
    );
}

export default Start;