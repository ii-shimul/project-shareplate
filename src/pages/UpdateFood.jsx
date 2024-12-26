import { useForm } from "react-hook-form";
import axios from "axios";
import { AwesomeButtonProgress } from "react-awesome-button";
import anim from "../assets/add-food-lottie.json";
import Lottie from "lottie-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UpdateFood = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const location = useLocation();
  const { food } = location.state;
  const navigate = useNavigate();
  const { setFetching } = useContext(AuthContext);
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://localhost:5000/foods/${id}`, {
        ...data,
      });
      if (response.status === 200) {
        setFetching((prev) => prev + 1);
        navigate("/manage-food");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your food has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error updating food: ", error);
    }
  };

  return (
    <div className="flex flex-col-reverse py-10 md:flex-row items-center justify-center gap-3 md:gap-10 max-w-[85%] mx-auto">
      <div className="max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-center">
          Update Food
        </h2>
        <p className="text-center mb-2 opacity-70">Update your food details.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              defaultValue={food.foodName}
              {...register("foodName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Image
            </label>
            <input
              defaultValue={food.foodImage}
              {...register("foodImage", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Quantity
            </label>
            <input
              defaultValue={food.foodQuantity}
              {...register("foodQuantity", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <input
              defaultValue={food.pickupLocation}
              {...register("pickupLocation", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expired Date/Time
            </label>
            <input
              defaultValue={food.expiredDateTime}
              type="datetime-local"
              {...register("expiredDateTime", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              defaultValue={food.additionalNotes}
              {...register("additionalNotes")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <AwesomeButtonProgress type="secondary" className="w-full">
            Update
          </AwesomeButtonProgress>
        </form>
      </div>
      <Lottie animationData={anim} className="max-md:w-[50%]"></Lottie>
    </div>
  );
};

export default UpdateFood;
