<template>
  <div class="home">
    <h1>新規登録</h1>
    <input type="name" v-model="name" placeholder="名前">
    <input type="email" v-model="email" placeholder="メールアドレス">
    <input type="password" v-model="password" placeholder="パスワード">
    <button @click="register()">新規登録ボタン</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      name:"",
      email:"",
      password:""
    }
  },
  methods: {
    register() {
      axios.post('http://127.0.0.1:8000/api/register',
      {
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then((response) => {
        console.log(response);
        this.$router.replace('/about')
      })
      .catch((error => {
        alert(error)
      }));
    }
  }
}
</script>
