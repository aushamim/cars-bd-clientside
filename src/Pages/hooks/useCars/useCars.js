import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://immense-peak-33349.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return { cars };
};

export default useCars;
