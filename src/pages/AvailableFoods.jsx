import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { AwesomeButton } from "react-awesome-button";
import { LuLayoutGrid } from "react-icons/lu";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [perFoods, setPerFoods] = useState([]);
  const [header, setHeader] = useState("Available Foods");
  const { data, isPending, isError, error, isLoading } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const res = await axios.get(
        "https://shareplate-smoky.vercel.app/foods/available"
      );
      setAvailableFoods(res.data);
      setPerFoods(res.data);
      return res.data;
    },
  });

  const [cols, setCols] = useState(0);
  const handleLayout = (e) => {
    e.preventDefault();
    const val = e.target.cols.value;
    if (!isNaN(val)) {
      setCols(parseInt(val));
    } else return;
  };

  // sorting logic
  const handleSort = () => {
    const sorted = [...availableFoods].sort((a, b) => {
      const dateA = new Date(a.expiredDateTime);
      const dateB = new Date(b.expiredDateTime);
      return dateA - dateB;
    });
    setAvailableFoods(sorted);
    setHeader("Sorted Foods");
  };

  // searching logic
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    if (searchVal === "") {
      setAvailableFoods(perFoods);
      setHeader("Available Foods");
      return;
    }
    const filterBySearch = perFoods.filter((food) => {
      if (food.foodName.toLowerCase().includes(searchVal.toLowerCase())) {
        return food;
      }
    });
    setAvailableFoods(filterBySearch);
    setHeader("Search Results");
  }, [searchVal, perFoods]);

  if (isPending || isLoading) {
    <div
      className="flex justify-center items-center h-14"
    >
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
  if (isError) {
    return <h1 className="text-center text-3xl my-10">{error.message}</h1>;
  }
  return (
    <div className="py-10 w-[85%] mx-auto max-sm:w-[95%]">
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-600 text-center">
          {header}
        </h1>
        <p className="text-center mt-1 opacity-90">Find your favorite food</p>
      </div>
      <div className="sm:hidden mt-3">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
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
      <div className="mb-6 mt-3 grid grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
        <div className="lg:col-span-3 max-sm:hidden">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearchVal(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
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
          <AwesomeButton onPress={() => handleSort()} className="w-fit ">
            Sort by Exp. Date
          </AwesomeButton>
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
            : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {availableFoods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
