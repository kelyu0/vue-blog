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
    <br />

    <h4>code</h4>
    <div>
      <a :href="project.vueIssueBlog.code"> vue-issue-blog</a>
      <br />
      <a :href="project.reactIssueBlog.code"> react-issue-blog</a>
    </div>
    <br />
    <h4>demo</h4>
    <div>
      <a :href="project.vueIssueBlog.demo"> Version Vue </a>
      <br />
      <a :href="project.reactIssueBlog.demo"> Version React </a>
    </div>
  </div>
</template>

<script>
  import { thirdPartySite, project } from "../config";
  export default {
    name: "About",
    data() {
      return {
        thirdPartySite,
        project,
      };
    },
  };
</script>

<style></style>
