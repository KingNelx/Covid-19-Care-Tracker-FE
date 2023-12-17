import Swal from "sweetalert2";

const Registered = () => {
    Swal.fire({
        position: "text-center",
        icon: "success",
        title: "Account Successfully Created",
        showConfirmButton: false,
        timer: 1500
    });
}
 
export default Registered;