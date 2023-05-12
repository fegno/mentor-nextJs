import { CONFIG } from "@/config/config";
import axios from "axios";

export const http = axios.create({
  baseURL: `${CONFIG.baseUrl}/api`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // 'mode':'cors',
  },
});
