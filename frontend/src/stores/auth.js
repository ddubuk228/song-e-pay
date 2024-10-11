import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import userApi from "@/api/userApi";

const initState = {
  token: "",
  user: {
<<<<<<< HEAD
    userId: "",
    countryCode: "",
=======
    username: '',
    countryCode: '',
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
    roles: [],
  },
};

export const useAuthStore = defineStore("auth", () => {
  const state = ref({ ...initState });
  const user = ref(null);

  const isLogin = computed(() => !!state.value.user.username);
<<<<<<< HEAD
  const userId = computed(() => state.value.user.userId);
=======
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff

  const fetchUser = async (userId) => {
    try {
      const userData = await userApi.getUser(userId);
      user.value = userData;
      console.log("fetch user : ", user.value);
    } catch (error) {
      console.error("사용자 정보를 가져오는 데 실패했습니다:", error);
    }
  };

<<<<<<< HEAD
  const load = async () => {
    const auth = localStorage.getItem("auth");
    if (auth != null) {
      state.value = JSON.parse(auth);
      if (state.value.token && state.value.userId) {
        await fetchUser(state.value.user.userId);
        console.log("load user : ", user.value);
      }
=======
  const user = computed(() => state.value.user);

  const load = () => {
    const auth = localStorage.getItem('auth');
    if (auth != null) {
      state.value = JSON.parse(auth);
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
    }
  };

  const login = async (member) => {
<<<<<<< HEAD
    try {
      const response = await axios.post("/api/auth/login", member.value);
      console.log("response : ", response);
      console.log("response.data : ", response.data);

      state.value = { ...response.data };

=======
    console.log('login: ', member);
    console.log('username: ', member.value.username);
    console.log('password: ', member.value.password);

    try {
      const response = await axios.post('/api/auth/login', member.value);
      console.log('response : ', response);
      console.log('response.data : ', response.data);
      state.value = { ...response.data };
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
      switch (state.value.user.countryCode) {
        case 0:
          state.value.user.country = "한국";
          state.value.user.language = "ko";
          break;
        case 1:
          state.value.user.country = "미국";
          state.value.user.language = "en";
          break;
        case 2:
          state.value.user.country = "인도네시아";
          state.value.user.language = "id";
          break;
        case 3:
          state.value.user.country = "베트남";
          state.value.user.language = "vi";
          break;
      }
      localStorage.setItem("auth", JSON.stringify(state.value));
      await fetchUser(state.value.user.userId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // 프로필 변경 시 state 업데이트 및 localStorage 저장
  const updateProfileState = (updatedData) => {
    Object.assign(state.value.user, updatedData);
<<<<<<< HEAD
    console.log("updateProfileState : ", updatedData);
=======
    console.log('updateProfileState : ', updatedData);
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff

    // countryCode에 따른 국가와 언어 설정
    switch (state.value.user.countryCode) {
      case 0:
        state.value.user.country = "한국";
        state.value.user.language = "ko";
        break;
      case 1:
        state.value.user.country = "미국";
        state.value.user.language = "en";
        break;
      case 2:
        state.value.user.country = "인도네시아";
        state.value.user.language = "id";
        break;
      case 3:
        state.value.user.country = "베트남";
        state.value.user.language = "vi";
        break;
    }

    // localStorage에 업데이트된 사용자 정보 저장
    localStorage.setItem("auth", JSON.stringify(state.value));
  };

  const logout = () => {
    localStorage.clear();
    state.value = { ...initState };
<<<<<<< HEAD
    user.value = null;
=======
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
  };

  //const getToken = () => state.value.token;

  const changeProfile = (member) => {
    state.value.user.userId = member.email;
    localStorage.setItem("auth", JSON.stringify(state.value));
  };

  load();

  // 토큰을 가져오고, 사용자의 이메일을 업데이트하며, 초기 상태를 불러오는 기능을 수행
  // getToken(): 현재 상태(state.value)에서 token 값을 반환합니다.
  // changeProfile(member): 사용자의 이메일을 주어진 member.email로 변경하고, 변경된 상태를 localStorage에 저장합니다.
  // load(): 페이지가 로드될 때 localStorage에서 저장된 인증 정보를 불러와 state에 설정

  //   return { state, username, email, isLogin, changeProfile, login, logout, getToken };
<<<<<<< HEAD

  return {
    state,
    userId,
=======
  return {
    state,
    userNo,
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
    user,
    isLogin,
    changeProfile,
    login,
    logout,
    updateProfileState,
<<<<<<< HEAD
    fetchUser,
=======
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
  };
});
