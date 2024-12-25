import PropTypes from "prop-types";
import { AwesomeButton } from "react-awesome-button";
import { FaLocationDot } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";

const FoodCard = ({ food }) => {
  const { foodName, foodImage, pickupLocation, expiredDateTime } = food;
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
          {expiredDateTime}
        </p>
        <AwesomeButton type="twitter">View Details</AwesomeButton>
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
  }).isRequired,
};

export default FoodCard;
