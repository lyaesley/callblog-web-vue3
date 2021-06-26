import axios from 'axios';

const instance = axios.create({
    // baseURL: process.env.VUE_APP_API
    // 여기에 설정하면 CROS 오류로 vue.config.js 에 proxy 설정으로 해결함
});

export default instance;