<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label for="userid">아이디</label>
        <input type="text" class="form-control" id="userid" v-model="userid">
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
    </div>
    <div class="card-footer text-right">
      <button type="button" class="btn btn-dark" @click="login">
        로그인
      </button>
    </div>
  </div>
</template>

<script>
import  * as authApi from '@/api/auth';

export default {
  name: "login",
  data() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login() {
      authApi.login(this.userid, this.password).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
        console.log(error.response);
      });
    }
  }
}
</script>

<style scoped>

</style>