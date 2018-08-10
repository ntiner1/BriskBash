<template>
  <div class="test">
    <input type="text" v-model="title">
    <h1>{{ title }}</h1>
    <p v-if="showName">{{ user.first_name }}</p>
    <p v-else>{{ user.last_name }}</p>
    <ul>
      <li v-for="item in items" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
    <button v-on:click="flipName">Change Name</button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <br/>
    <label>First Name: </label><input type="text" v-model="user.first_name">
    <br/>
    <label>Last Name: </label><input type="text" v-model="user.last_name">
    <h3>{{ fullName }}</h3>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'Hello',
      user: {
        first_name: 'Nick',
        last_name: 'Tiner'
      },
      showName: true,
      items: [
        {title: 'Harry Potter'},
        {title: 'Space Balls'},
        {title: 'Pirates of the Caribbean'}
      ]
    }
  },
  methods: {
    flipName: function () {
      this.showName = !this.showName
    },
    pressKey: function (key) {
      console.log(key.target.value)
    },
    enterHit: function () {
      console.log('You hit enter')
    }
  },
  computed: {
    fullName: function () {
      return this.user.first_name + ' ' + this.user.last_name
    }
  }
}
</script>

<style scoped>
</style>
