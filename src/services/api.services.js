// import axios from "axios";
import axios from "./axios.customize"
const createUserApi = (fullName, email, password, phone) => {
    const BASE_URL = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(BASE_URL, data);
}
const updateUserApi = () => {

}
export { createUserApi, updateUserApi } 