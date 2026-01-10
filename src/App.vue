<template>
  <div id="app">
    <!-- 加载CSS -->
    <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
    <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
    <link rel="stylesheet" href="/assets/css/plugins/font-awesome.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    <link rel="stylesheet" href="/assets/css/custom-mobile.css" />

    <!-- Header组件 -->
    <Header />

    <!-- 路由视图 -->
    <router-view />

    <!-- Footer组件 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* 全局样式已通过外部CSS加载 */

/* 覆盖外部CSS的header默认样式 - 只针对首�?*/
[data-home-page] .sigma_header.style-5 {
  background-color: transparent;
  box-shadow: none;
}

[data-home-page] .sigma_header .sigma_header-bottom {
  background-color: transparent;
}

/* 为固定header添加的全局样式 */
body {
  padding-top: 0;
}

/* 非首页需要顶部padding以适应固定header */
.sigma_subheader {
  margin-top: 80px;
}

/* 首页不需要margin */
[data-home-page] ~ * .sigma_subheader,
[data-home-page] .sigma_subheader {
  margin-top: 0;
}
</style>
