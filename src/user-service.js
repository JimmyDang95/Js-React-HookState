import axios from "axios";

export function loadUserApi(){
    return axios.get("https://jsonplaceholder.typicode.com/users")
}