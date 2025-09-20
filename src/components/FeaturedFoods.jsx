import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";
AOS.init();

const FeaturedFoods = () => {
  const { data, isPending, isError, error, isLoading } = useQuery({
    queryKey: ["sortFoods"],
    queryFn: async () => {
      const res = await axios.get("https://shareplate-smoky.vercel.app/foods");
      return res.data;
    },
  });
  if (isLoading || isPending) {
    return (
      <div className="h-14 flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-14">
        <span className="text-red-500">Error: {error.message}</span>
      </div>
    );
  }

  if (!data || !data.length) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const sortedFoods = data
    .sort((a, b) => b.foodQuantity - a.foodQuantity)
    .slice(0, 8);
  return (
    <div className="pt-10 max-w-[1400px] mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold text-blue-600 text-center mb-5">
        Featured Foods
      </h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5 w-[85%] mx-auto">
        {sortedFoods.map((food) => {
          return (
            <div
              key={food._id}
              className="flex flex-col rounded-md transition-all relative overflow-hidden dark:bg-black"
            >
              <div className="h-[250px]">
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 h-full text-center bg-gray-100 p-4 dark:bg-black">
                <div className="flex-1">
                  <h3 className="text-md sm:text-lg font-bold text-gray-800 dark:text-white">
                    {food.foodName}
                  </h3>
                  <h4 className="text-xs sm:text-sm text-gray-800 opacity-80 dark:text-white">
                    Expire Date:
                    {new Date(food.expiredDateTime).toLocaleDateString()}
                  </h4>
                </div>
                <Link
                  to={`/food-details/${food._id}`}
                  state={{ food }}
                  className="w-full flex items-center justify-center gap-2 mt-3 px-2 py-2.5 sm:px-4 dark:bg-gray-600 dark:hover:bg-gray-200 bg-blue-200 hover:bg-blue-500 text-sm text-gray-800 font-semibold rounded-md transition-all"
                >
                  See Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={"/available-foods"} className="flex justify-center mt-5">
        <AwesomeButton size="large">Show All</AwesomeButton>
      </Link>
    </div>
  );
};

export default FeaturedFoods;
