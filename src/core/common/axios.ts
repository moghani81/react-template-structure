import axios, { Axios } from "axios";

export class UserClient {
  private static instance: Axios;

  public static getInstance(): Axios {
    this.instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return this.instance;
  }
}
