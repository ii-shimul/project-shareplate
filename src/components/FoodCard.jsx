import PropTypes from "prop-types";
import { AwesomeButton } from "react-awesome-button";
import { FaLocationDot } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { foodName, foodImage, pickupLocation, expiredDateTime } = food;
  const date = new Date(expiredDateTime);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.03]">
      <img
        src={foodImage}
        alt="Delicious Food"
        className="w-full h-full object-cover"
      />
      <div className="text-white absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h1 className="text-xl lg:text-2xl">{foodName}</h1>
        <p className="opacity-80 flex items-center justify-center gap-1 ">
          <FaLocationDot />
          {pickupLocation}
        </p>
        <p className="opacity-80 flex items-center justify-center gap-1 mb-3">
          <FcExpired />
          {formattedDate}
          <span> at </span>
          {formattedTime}
        </p>
        <Link to={`/food-details/${food._id}`} state={{ food }}>
          <AwesomeButton type="twitter">View Details</AwesomeButton>
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.shape({
    foodName: PropTypes.string.isRequired,
    foodImage: PropTypes.string.isRequired,
    pickupLocation: PropTypes.string.isRequired,
    expiredDateTime: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;
