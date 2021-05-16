<template>
  <div id="main">
    <button @click="$router.push('/edit')">ユーザー情報編集</button>
    <h1>ここはメイン画面です</h1>
    <p>{{name}}</p>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:this.$store.state.user.name
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
    }
  }
}
</script>