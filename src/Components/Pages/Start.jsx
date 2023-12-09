import Loading from "./Loading";


const Start = () => {
    return (
        <div className="text-center">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
            onClick={Loading} >
                Get Started
            </button>
        </div>

    );
}

export default Start;