<template>
  <div class="tabs">
    <ul>
      <router-link :to="{name:'Home'}" tag="li">
        <div>
          <img src="../assets/home.svg">
        </div>
        <div>首页</div>
      </router-link>

      <router-link :to="{name: 'ShoppingCart'}" tag="li">
        <div>
          <img src="../assets/cart.svg">
        </div>
        <div>购物车</div>
      </router-link>
      <router-link :to="{name: 'Category'}" tag="li">
        <div>
          <img src="../assets/category.svg">
        </div>
        <div>分类</div>
      </router-link>
      <router-link :to="{name: 'Me'}" tag="li">
        <div>
          <img src="../assets/me.svg">
        </div>
        <div>我</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped lang="less">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;

    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }

    ul {
      display: table;
      width: 100%;

      & > li {
        text-align: center;
        font-size: 10px;
        display: table-cell;
        padding: 8px 12px;

        &.active {
          color: #D0021B;
        }
      }
    }
  }
</style>
