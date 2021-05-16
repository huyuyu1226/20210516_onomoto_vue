<template>
  <div class="about">
    <h1>ログイン画面</h1>
    <input type="text" v-model="email" placeholder="メールアドレス">
    <input type="password" v-model="password" placeholder="パスワード">
    <button @click="auth()">ログイン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email:"",
      password:""
    }
  },
  methods: {
    auth() {
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      })
    }
  }
}
</script>