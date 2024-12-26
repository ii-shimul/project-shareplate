import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FoodCard from "../components/FoodCard";
import { AwesomeButton } from "react-awesome-button";
import { LuLayoutGrid } from "react-icons/lu";

const AvailableFoods = () => {
  const { foods } = useContext(AuthContext);
  const [cols, setCols] = useState(0);
  const availableFoods = foods.filter(
    (food) => food.foodStatus === "available"
  );
  const handleLayout = (e) => {
    e.preventDefault();
    const val = e.target.cols.value;
    if (!isNaN(val)) {
      setCols(parseInt(val));
    } else return;
  };
  return (
    <div className="py-10 w-[85%] mx-auto max-sm:w-[95%]">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          Available Foods
        </h1>
        <p className="text-center mt-1 opacity-90">Find your favorite food</p>
      </div>
      <div className="mb-6 mt-3 grid grid-cols-3 lg:grid-cols-5 gap-4">
        <form onSubmit={handleLayout} className="flex items-center gap-2 w-fit">
          <select
            name="cols"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select Columns
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <AwesomeButton className="shrink-0">
            <LuLayoutGrid />
          </AwesomeButton>
        </form>
        <div className="lg:col-span-3">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex justify-end">
          <AwesomeButton className="w-fit ">Sort</AwesomeButton>
        </div>
      </div>
      <div
        className={
          cols
            ? `grid gap-4 ${
                cols === 1
                  ? "grid-cols-1"
                  : cols === 2
                  ? "grid-cols-2"
                  : cols === 3
                  ? "grid-cols-3"
                  : cols === 4
                  ? "grid-cols-4"
                  : ""
              }`
            : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {availableFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
