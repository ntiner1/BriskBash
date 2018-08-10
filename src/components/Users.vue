<template>
  <div class="users">
    <h3>Users</h3>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name"
      placeholder="Enter name">
      <br/>
      <input type="text" v-model="newUser.email"
      placeholder="Enter name">
      <br/>
      <input type="submit" value="Submit">
    </form>
    <ul>
      <li v-for="user in users" v-bind:key="user.name">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{ user.name }}: {{ user.email }}
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      newUser: {},
      users: []
    }
  },
  methods: {
    addUser: function (event) {
      console.log('add')
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      })
      event.preventDefault()
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      this.users = response.body
    })
  }
}
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
