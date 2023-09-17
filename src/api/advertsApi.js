import axios from "axios";

axios.defaults.baseURL = "https://65044b56c8869921ae24d151.mockapi.io";

export const getAllCars = async () => {
  try {
    const { data } = await axios.get("/adverts");
    return data;
  } catch (error) {
    return console.log(error.message);
  }
};