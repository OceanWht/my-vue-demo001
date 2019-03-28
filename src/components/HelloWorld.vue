<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>-->
    <!--<ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>-->
    <h1>{{ title }}</h1>
    <ul class="todos">
      <li v-for="(todo,index) in todos":class="{'checked':todo.done}">
        <label>{{ index }}.{{ todo.value }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  moment.locale('zh-cn')

  export default {
    name: 'HelloWorld',
    data() {
      return {
        title: 'Wht Demo',
        msg: 'Welcome to Your Vue.js App',
        todos: [
          {
            value: "阅读一本关于开发的书",
            done: false,
            created: Date.now()
          },
          {
            value: "补充代码示例",
            done: true,
            created: Date.now()+300000
          },
          {
            value: "写心得",
            done: false,
            created: Date.now()-300000
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
