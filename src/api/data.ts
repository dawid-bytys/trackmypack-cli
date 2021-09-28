import axios from "axios";
import type { Data } from "../types";

const BASE_URL = "https://www.sendit.pl/tracking/v1/";

export const fetchData = async (id: string): Promise<Data> => {
   const response = await axios.get<Data>(BASE_URL + id);

   return response.data;
};
