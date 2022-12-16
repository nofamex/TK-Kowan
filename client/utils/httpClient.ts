import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
