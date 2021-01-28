<template>
  <div class="list">
    <h2 class="category">All</h2>
    <ul v-if="!isNoData" ref="issueList">
      <li class="list-post" v-for="issue in issues" :key="issue.id">
        <router-link tag="a" :to="{ name: 'BlogDetail', params: { number: issue.number, issue: issue } }">
          {{ issue.title }}
        </router-link>
        <span class="list-label" v-for="label in issue.labels" :key="label.id">
          {{ label.name }}
        </span>
        <span class="time">{{ $moment(issue.created_at).format("YYYY-MM-DD") }}</span>
      </li>
    </ul>
    <div v-if="isNoData">
      <div></div>
      <span>该分类下还没有文章哦</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        totalNum: 0,
        currentPage: 1,
        issues: [],
        isNoData: false,
      };
    },
  };
</script>

<style></style>
