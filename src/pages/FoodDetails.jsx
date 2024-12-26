import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaUtensils,
  FaStickyNote,
} from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";

const FoodDetails = () => {
  const location = useLocation();
  const { food } = location.state;
  console.log(food);
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

return (
  <div className="py-10" >
    <div className="glass flex max-md:flex-col gap-5 max-sm:gap-3 rounded-xl border max-w-[95%] lg:max-w-[70%] mx-auto p-8 shadow-xl bg-white">
      {/* Image Section */}
      <div className="max-w-[55%] max-lg:max-w-full rounded-md object-contain animate__animated animate__fadeInLeft">
        <img
          src={foodImage}
          alt={foodName}
          className="rounded-md object-cover w-full h-auto shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-5 animate__animated animate__fadeInRight">
        <h1 className="text-4xl font-bold mb-1 text-[#4389D0] max-sm:text-3xl">
          {foodName}
        </h1>
        <p className="text-lg text-gray-700 flex items-center gap-2">
          <FaUser className="text-[#4389D0]" />
          Donator: <span className="font-medium">{donator?.name}</span>
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#4389D0]" />
          Location: <span className="font-medium">{pickupLocation}</span>
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-2">
          <FaClock className="text-[#4389D0]" />
          Expiry Date: <span className="font-medium">{formattedDateTime}</span>
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-2">
          <FaUtensils className="text-[#4389D0]" />
          Quantity: <span className="font-medium">{foodQuantity}</span>
        </p>
        {additionalNotes && (
          <p className="text-lg text-gray-700 flex items-center gap-2">
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
        <AwesomeButton className="mt-4">Request</AwesomeButton>
      </div>
    </div>
  </div>
);
};

export default FoodDetails;
