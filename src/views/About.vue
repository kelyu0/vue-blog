<template>
  <div class="article">
    <h3>Contact me from</h3>
    <ul>
      <li :style="{ 'list-style': 'none' }" v-for="site in thirdPartySite" :key="site.href">
        <a :href="site.href">{{ site.title }}</a>
      </li>
    </ul>
    <br />

    <h3>Blog Theme</h3>
    <a href="https://github.com/kelyu0/vue-issue-blog"> vue-issue-blog</a>
  </div>
</template>

<script>
  import { thirdPartySite } from "../config";
  export default {
    data() {
      return {
        thirdPartySite,
      };
    },
  };
</script>

<style></style>
