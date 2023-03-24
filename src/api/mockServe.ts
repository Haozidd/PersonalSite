import axios from "axios";

const mockServe = axios.create({
    baseURL:"/mock"
})

export default mockServe


