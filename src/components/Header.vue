<template>
  <div class="header">
    <span class="header-logo">KK's Blog</span>
    <input type="text" class="header-search" v-model="keyword" @keyup.enter="getIssues()" placeholder="文章标题或内容..." />
    <div class="header-dropdown">
      <button class="dropdown-button">Tags</button>
      <div class="dropdown-content">
        <a v-for="tag in tags" :key="tag" href="#">{{ tag }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        tags: ["1", "2"],
      };
    },
    methods: {
      getIssues() {},
    },
  };
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
    /* flex-basis: auto; */
    /* justify-content: space-between; */
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    align-items: center;
    box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.1);
  }
  .header-logo {
    flex: 5 1 auto;
    margin-left: 40px;
    font-size: 20px;
    text-align: start;
    color: #4b595f;
    font-weight: bold;
  }

  .header-search {
    flex: 1 1 69px;
    margin-right: 30px;
    height: 16px;
    padding: 10px;
    border: solid 1px #eeeeee;
    font-size: 14px;
    color: #4b595f;
    outline: none;
    border-radius: 50px;
  }
  .header-dropdown {
    flex: 1 1 auto;
    margin-left: 20px;
    position: relative;
    display: inline-block;
  }

  .dropdown-button {
    font-size: 14px;

    background-color: inherit;
    border: none;
    cursor: pointer;
    color: #2c3e50;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid #eeeeee;
    border-radius: 0.3em;
    padding: 0.6em 0;
    text-align: left;
    /* min-width: 160px; */
  }

  .dropdown-content a {
    /* color: #2c3e50; */
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .header-dropdown:hover .dropdown-content {
    display: block;
  }
</style>
