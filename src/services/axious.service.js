import axios from "axios";
import {baseURL} from "../config/urls";

export const AxiosService = axios.create({baseURL});