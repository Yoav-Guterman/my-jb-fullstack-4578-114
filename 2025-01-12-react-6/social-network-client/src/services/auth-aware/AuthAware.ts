import { AxiosInstance } from "axios";

export default abstract class AuthAware {
    constructor(public axsiosIntance: AxiosInstance) { }
}

