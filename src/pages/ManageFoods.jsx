import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const ManageFoods = () => {
  const { foods, user } = useContext(AuthContext);
  const myFoods = foods.filter((food) => food.donator.email === user?.email);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Expiry Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myFoods.map((food) => {
              const { foodName, expiredDateTime, foodImage, pickupLocation } =
                food;
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
                    {formattedDate} at {formattedTime}
                  </td>
                  <td>
                    <Link to={`/update-food/${food._id}`} state={{ food }}>
                      <AwesomeButton>Update</AwesomeButton>
                    </Link>
                  </td>
                  <th>
                    <AwesomeButton>Delete</AwesomeButton>
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

export default ManageFoods;
