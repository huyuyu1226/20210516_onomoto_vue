<template>
  <div id="edit">
    <form>
      <label for="name">あなたのお名前<span>{{name}}</span></label>
      <br>
      <input type="text" id="name" placeholder="名前を入力してください" v-model="Newname">
      <button @click="edit()">変更する</button>
      <button @click="$router.replace('/main')">戻る</button>
      <button @click="change()">変更</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email:this.$store.state.user.email,
      name:this.$store.state.user.name,
      Newname:""
    }
  },
  methods: {
     edit() {
       axios.put('http://127.0.0.1:8000/api/user',
      {
        emai:this.email,
        name:this.Newname
      })
      .then(response => (console.log(response)))
      .catch(error => console.log(error))
    },
  },
}
</script>