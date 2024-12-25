import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";

const AddFood = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/foods", {
        ...data,
        donator: {
          image: user.photoURL,
          name: user.displayName,
          email: user.email,
        },
        status: "available",
        createdAt: new Date(),
      });
      if (response.status === 200) {
        reset();
        console.log("Food added successfully!");
      }
    } catch (error) {
      console.error("Error adding food: ", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Add Food</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            {...register("foodName", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Image
          </label>
          <input
            {...register("foodImage", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Quantity
          </label>
          <input
            {...register("foodQuantity", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            {...register("pickupLocation", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expired Date/Time
          </label>
          <input
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
            {...register("additionalNotes")}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <AwesomeButton>Submit Food</AwesomeButton>
      </form>
    </div>
  );
};

export default AddFood;
