import Start from './Pages/Start';
import Lottie from 'lottie-react';
import shield from './Animations/shield.json'
const Home = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="grid grid-cols-1 gap-4 text-center">
                <div className="tablet:self-center">
                    <Lottie
                        animationData={shield}
                        height={300}
                        width={300}
                        className="mx-auto"
                    />
                </div>
                <div className="tablet:flex tablet:flex-col tablet:justify-center">
                    <div className="font-bold text-3xl tablet:text-4xl mb-4">
                        Welcome to Covid 19 Care Tracker!
                    </div>
                </div>
            </div>
            <footer>
                <Start />
            </footer>
        </div>
    );
}

export default Home;