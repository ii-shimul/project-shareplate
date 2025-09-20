import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaUtensils,
  FaStickyNote,
} from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { food } = location.state;
  const {
    foodName,
    foodImage,
    donator,
    pickupLocation,
    expiredDateTime,
    foodStatus,
    foodQuantity,
    additionalNotes,
  } = food;

  const formattedDateTime = new Date(expiredDateTime).toLocaleString();
  // additional note
  const [additionalNote, setAdditionalNote] = useState("");
  // get local time
  const currentTime = new Date();
  const localTime = new Date(
    currentTime.getTime() - currentTime.getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 16);
  const handleRequest = () => {
    const requestData = {
      userEmail: user.email,
      requestDate: localTime,
      foodStatus: "requested",
      additionalNotes: additionalNote,
    };
    axios
      .put(
        `https://shareplate-smoky.vercel.app/foods/${food._id}`,
        requestData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Food request successful!",
            icon: "success",
          });
        }
      })
      .catch((error) => console.error("Error updating food:", error));
  };
  return (
    <>
      <div className="py-10">
        <div className="glass flex max-md:flex-col gap-5 max-sm:gap-3 rounded-xl border max-w-[95%] lg:max-w-[70%] mx-auto p-8 shadow-xl bg-white dark:bg-black">
          {/* Image Section */}
          <div className="max-w-[55%] max-lg:max-w-full rounded-md object-contain animate__animated animate__fadeInLeft">
            <img
              src={foodImage}
              alt={foodName}
              className="rounded-md object-cover w-full h-auto shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold mb-1 text-[#4389D0] max-sm:text-3xl">
              {foodName}
            </h1>
            <div className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <FaUser className="text-[#4389D0]" />
              Donator:{" "}
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={donator.image} />
                </div>
              </div>{" "}
              <span className="font-medium">{donator?.name}</span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#4389D0]" />
              Location: <span className="font-medium">{pickupLocation}</span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <FaClock className="text-[#4389D0]" />
              Expiry Date:{" "}
              <span className="font-medium">{formattedDateTime}</span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <FaUtensils className="text-[#4389D0]" />
              Quantity: <span className="font-medium">{foodQuantity}</span>
            </p>
            {additionalNotes && (
              <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <FaStickyNote className="text-[#4389D0]" />
                Notes: <span className="font-medium">{additionalNotes}</span>
              </p>
            )}
            <p
              className={`text-lg font-medium py-2 px-4 rounded-md ${
                foodStatus === "available"
                  ? "text-green-700 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              Status: {foodStatus}
            </p>
            <div className="grow"></div>
            <AwesomeButton
              onPress={() => document.getElementById("my_modal_5").showModal()}
              className="mt-4"
            >
              Request
            </AwesomeButton>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2 className="text-center text-xl">Request Food</h2>
          <form onSubmit={handleRequest} className="space-y-4">
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Name
              </label>
              <input
                readOnly
                defaultValue={food.foodName}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Image
              </label>
              <input
                readOnly
                defaultValue={food.foodImage}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Id
              </label>
              <input
                readOnly
                defaultValue={food._id}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Donator
              </label>
              <input
                readOnly
                defaultValue={food.donator.name}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Donator Email
              </label>
              <input
                readOnly
                defaultValue={food.donator.email}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                User Email
              </label>
              <input
                readOnly
                defaultValue={user.email}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Food Quantity
              </label>
              <input
                readOnly
                defaultValue={food.foodQuantity}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Pickup Location
              </label>
              <input
                readOnly
                defaultValue={food.pickupLocation}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Expired Date/Time
              </label>
              <input
                readOnly
                defaultValue={food.expiredDateTime}
                type="datetime-local"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Request Date/Time
              </label>
              <input
                readOnly
                defaultValue={localTime}
                type="datetime-local"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm input-xs font-medium text-gray-700 dark:text-gray-300">
                Additional Notes
              </label>
              <textarea
                onChange={(e) => setAdditionalNote(e.target.value)}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <AwesomeButton onPress={handleRequest} className="w-full">
                Request
              </AwesomeButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default FoodDetails;
