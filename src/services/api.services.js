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
const updateUserApi = (_id, fullName, phone) => {
    const BASE_URL = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.patch(BASE_URL, data);
}
const deleteUserApi = (_id) => {
    const BASE_URL = `/api/v1/user/${_id}`;
    return axios.delete(BASE_URL, { data: { _id: _id } });
}
const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}
export { createUserApi, updateUserApi, fetchAllUserAPI, deleteUserApi }