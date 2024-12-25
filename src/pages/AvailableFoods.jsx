import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const { foods } = useContext(AuthContext);
  const availableFoods = foods.filter(
    (food) => food.foodStatus === "available"
  );
  return (
    <div className="py-10">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl text-center font-bold">Available Foods</h1>
        <p className="text-center mt-1 opacity-90">Find your favorite food</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[85%] mx-auto">
        {availableFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
