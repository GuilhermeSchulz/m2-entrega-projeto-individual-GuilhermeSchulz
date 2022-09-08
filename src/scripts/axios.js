const token = localStorage.getItem("kenzie@companies:token");
const admin = localStorage.getItem("kenzie@companies:admin")

export const instance = axios.create({
    baseURL: "http://localhost:6278/",
    headers: {
        "Content-Type": "application/json"}
});
export const instanceWithToken = axios.create({
  baseURL: "http://localhost:6278/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});