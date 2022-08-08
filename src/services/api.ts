import axios from "axios";

const api = axios.create({
  baseURL: "http://gateway.marvel.com/",
  params: {
    apikey: "d765dcf477d5840630055003db7f8ed4",
  },
});

export default api;
