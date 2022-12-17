import axios from "axios";

import { useCookie } from "next-cookie";

const cookie = useCookie();

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${cookie.get("token")}`,
  },
});
