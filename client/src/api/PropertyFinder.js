import axios from "axios";

/**
 * Axios just helps us write an http request easier.
 * The baseURL is what will be prepended to our calls to the backend api
 */
export default axios.create({
    baseURL: "http://localhost:3000/"
})