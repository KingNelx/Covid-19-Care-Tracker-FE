import covid from '../Images/covid-logo.png'
import Start from './Pages/Start';

const AdminHome = () => {

    return (
        <div>
            <div className="grid grid-col-2 grid-flow-col gap-4 text-center">
                <div>
                    <img src={covid} alt='Covid 19 Logo' />
                </div>
                <div style={
                    { marginTop: "38vh" }
                } className="font-bold text-xl">
                    Welcome to Covid 19 Care Tracker !
                </div>
            </div>
              <footer>
              <Start />
                  </footer>
        </div>
    );
}

export default AdminHome;