import axios from "axios";

export type DogData = {
  message: string;
  status: "success" | "error";
};

export const fetchDog = () => {
  return axios.get<DogData>("<dogUrl>");
};

export type CatData = {
  breeds: [];
  height: number;
  id: string;
  url: string;
  width: number;
}[];

export const fetchCat = () => {
  return axios.get<CatData>("<catUrl");
};
