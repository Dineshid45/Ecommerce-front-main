import axios from "axios";

const BASE_URL = "https://amazon.herokuapp.com/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc5N2YwZTlhZWNmNDkyMjgwYmFhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTIxNzI1MSwiZXhwIjoxNjQ1NDc2NDUxfQ.MIJaiN1coUl4OO7AEElImv09uC8UcXqWz776CE_x39o";
// const token=localStorage.setItem("token");
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});

//https://amazon.herokuapp.com/api
// http://localhost:3000/api
