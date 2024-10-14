import api from "@/api";

const BASE_URL = "/api/users";
// const headers = { "Content-Type": "application/json" };

export default {
  async getUser(userId) {
    console.log("userId: ", userId);
    const user = (await api.get(`${BASE_URL}/${userId}`)).data;
    console.log("Api user: ", user);
    return user;
  },
};
