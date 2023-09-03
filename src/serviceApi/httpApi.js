import axios from "axios";
import configFile from "../config.json";

let host = configFile.apiEndpoint
let protocol = document.location.protocol
let base_url = `https://${host}/api/`

const http = axios.create({
    baseURL: base_url,
});


const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete
};

export default httpService;
