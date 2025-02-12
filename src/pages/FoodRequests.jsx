import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const FoodRequests = () => {
  const { user } = useContext(AuthContext);
  const { data: myFoods, isLoading } = useQuery({
    queryKey: ["requestedFoods"],
    queryFn: async () => {
      const res = await axios.get(
        `https://shareplate-smoky.vercel.app/foods/requested?email=${user.email}`,
        { withCredentials: true }
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  } else if (!myFoods.length) {
    return (
      <h1 className="text-center text-3xl my-10">
        You have not requested any foods!
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Donor Name</th>
              <th>Expiry Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {myFoods.map((food) => {
              const {
                foodName,
                expiredDateTime,
                foodImage,
                pickupLocation,
                requestDate,
              } = food;
              const expireDate = new Date(expiredDateTime).toLocaleString();
              const reqDate = new Date(requestDate).toLocaleString();
              return (
                <tr key={food._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={foodImage} alt="Food Image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="text-sm opacity-50">
                          {pickupLocation}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {food.donator.name}
                  </td>
                  <td>
                    {expireDate}
                  </td>
                  <th>
                    {reqDate}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequests;
