import Swal from "sweetalert2";

const SuccessAlert = () => {
    Swal.fire({
        position: "text-center",
        icon: "success",
        title: "Sucessfully Login",
        showConfirmButton: false,
        timer: 1500
    });
}

export default SuccessAlert;