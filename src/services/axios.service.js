import axios from "axios";

import baseURL from "../gonfig/urls";

export const axiosService = axios.create({baseURL})
