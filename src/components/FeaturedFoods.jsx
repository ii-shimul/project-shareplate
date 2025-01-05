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
      <div
        className="h-14 flex justify-center items-center"
      >
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    return (
      <div
        className="flex justify-center items-center h-14"
      >
        <span className="text-red-500">Error: {error.message}</span>
      </div>
    );
  }

  if (!data || !data.length) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 376.5px)" }}
      >
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const sortedFoods = data
    .sort((a, b) => b.foodQuantity - a.foodQuantity)
    .slice(0, 6);
  return (
    <div className="pt-10">
      <h1 className="text-3xl text-center mb-5">Featured Foods</h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 w-[85%] mx-auto">
        {sortedFoods.map((food) => {
          return (
            <div
              key={food._id}
              data-aos="fade-up"
              className="card card-side max-lg:flex-col shadow-xl p-5"
            >
              <figure className="lg:w-1/2">
                <img
                  src={food.foodImage}
                  alt="food Poster"
                  className="rounded-lg object-cover h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  {food.foodName}
                </h2>
                <p className="text-sm italic">Quantity: {food.foodQuantity}</p>
                <p className="text-sm">
                  Expire Date: {new Date(food.expiredDateTime).toLocaleString()}
                </p>
                <p className="text-sm">Donator: {food.donator.name}</p>
                <div className="card-actions mt-4 justify-end">
                  <Link
                    to={`/food-details/${food._id}`}
                    state={{ food }}
                    className="btn btn-sm btn-outline btn-accent"
                  >
                    See Details
                  </Link>
                </div>
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
