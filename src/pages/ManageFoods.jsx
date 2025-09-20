import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://shareplate-smoky.vercel.app/foods/user/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyFoods(res.data);
      })
      .catch((error) => console.log("Error while fetching data: ", error));
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://shareplate-smoky.vercel.app/foods/${id}`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setMyFoods(myFoods.filter((food) => food._id !== id));
          Swal.fire("Deleted!", "Your food has been deleted.", "success");
        }
      } catch (error) {
        console.error("Error deleting food: ", error);
      }
    }
  };

  if (!myFoods.length) {
    return (
      <h1 className="text-center text-3xl my-10">
        You have not added any foods!
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="overflow-x-auto">
        <table className="table">
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
                    <AwesomeButton onPress={() => handleDelete(food._id)}>
                      Delete
                    </AwesomeButton>
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
