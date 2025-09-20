import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";
import anim from "../assets/add-food-lottie.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://shareplate-smoky.vercel.app/foods",
        {
          ...data,
          donator: {
            image: user.photoURL,
            name: user.displayName,
            email: user.email,
          },
          foodStatus: "available",
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/available-foods");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Food added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding food: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse py-10 md:flex-row items-center justify-center gap-3 md:gap-10 max-w-[85%] mx-auto">
      <div className="max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-center">
          Add Food
        </h2>
        <p className="text-center mb-2 opacity-70">
          Add food to share with others
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Food Name
            </label>
            <input
              {...register("foodName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Food Image
            </label>
            <input
              {...register("foodImage", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Food Quantity
            </label>
            <input
              {...register("foodQuantity", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Pickup Location
            </label>
            <input
              {...register("pickupLocation", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Expired Date/Time
            </label>
            <input
              type="datetime-local"
              {...register("expiredDateTime", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Additional Notes
            </label>
            <textarea
              {...register("additionalNotes")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <AwesomeButton className="w-full">
            {loading ? "Submitting..." : "Submit Food"}
          </AwesomeButton>
        </form>
      </div>
      <Lottie animationData={anim} className="max-md:w-[50%]"></Lottie>
    </div>
  );
};

export default AddFood;
