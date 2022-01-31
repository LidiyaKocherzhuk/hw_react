import axios from "axios";

import baseURL from "../config/urls";
import baseUrlPlaceholder from "../config/url.placeholder";

export const axiosService = axios.create({baseURL});
export  const axiosServicePlaceholder = axios.create({baseUrlPlaceholder})
