<template>
  <header
    class="sigma_header style-5 can-sticky"
    :class="{ 'is-home-page': isHomePage, 'is-scrolled': scrollY > 0 }"
    :style="{ '--scroll-progress': scrollProgress }"
  >
    <div class="sigma_header-bottom">
      <div class="container">
        <div class="navbar">
          <div class="sigma_logo-wrapper">
            <router-link to="/" class="sigma_logo">
              <span
                class="logo-text"
                :style="logoStyle"
                style="font-size: 28px; font-weight: bold"
                >Data X AI</span
              >
            </router-link>
          </div>
          <ul class="navbar-nav">
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/news"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "实验室新闻" : "News" }}
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/projects"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "项目研究" : "Projects" }}
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/team"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "研究团队" : "People" }}
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/publications"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "发表论文" : "Publications" }}
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/opensource"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "开源系统" : "Open Source" }}
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="['lang', 'lang-' + currentLang]"
                to="/contact"
                :style="linkStyle"
              >
                {{ currentLang === "zh" ? "联系我们" : "Contact" }}
              </router-link>
            </li>
            <li class="menu-item">
              <a
                @click="switchLanguage"
                :style="linkStyle"
                style="cursor: pointer"
              >
                {{ currentLang === "zh" ? "EN" : "中文" }}
              </a>
            </li>
          </ul>
          <!-- 移动端菜单按钮 -->
          <div class="aside-toggle aside-trigger" @click="toggleAside">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- 移动端侧边栏菜单 -->
  <aside class="sigma_aside" :class="{ 'aside-open': isAsideOpen }">
    <div class="sigma_close aside-trigger" @click="toggleAside">
      <span></span><span></span>
    </div>
    <div class="sigma_logo-wrapper">
      <router-link to="/" class="sigma_logo" @click="closeAside">
        <span
          class="logo-text"
          style="font-size: 24px; font-weight: bold; color: #20b9b2"
          >Data X AI</span
        >
      </router-link>
    </div>
    <ul>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/news"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "实验室新闻" : "News" }}
        </router-link>
      </li>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/projects"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "项目研究" : "Projects" }}
        </router-link>
      </li>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/team"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "研究团队" : "People" }}
        </router-link>
      </li>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/publications"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "发表论文" : "Publications" }}
        </router-link>
      </li>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/opensource"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "开源系统" : "Open Source" }}
        </router-link>
      </li>
      <li class="menu-item">
        <router-link
          :class="['lang', 'lang-' + currentLang]"
          to="/contact"
          @click="closeAside"
        >
          {{ currentLang === "zh" ? "联系我们" : "Contact" }}
        </router-link>
      </li>
      <li class="menu-item">
        <a @click="handleLanguageSwitch" style="cursor: pointer">
          {{ currentLang === "zh" ? "EN" : "中文" }}
        </a>
      </li>
    </ul>
  </aside>

  <!-- 遮罩层 -->
  <div v-if="isAsideOpen" class="aside-overlay" @click="toggleAside"></div>
</template>

<script>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const { currentLang, switchLanguage, initLanguage } = useLanguage();
    const route = useRoute();
    const scrollY = ref(0);
    const isAsideOpen = ref(false);

    // 判断是否在首页
    const isHomePage = computed(() => route.path === "/");

    // 计算滚动进度 (0-1)
    const scrollProgress = computed(() => {
      const maxScroll = 100; // 滚动100px时完全变白
      return Math.min(scrollY.value / maxScroll, 1);
    });

    // 计算链接文字颜色
    const linkStyle = computed(() => {
      if (!isHomePage.value) {
        return { color: "#222222" };
      }

      const maxScroll = 100;
      const progress = Math.min(scrollY.value / maxScroll, 1);

      // 从白色(255,255,255)渐变到黑色(34,34,34)
      const r = Math.round(255 - (255 - 34) * progress);
      const g = Math.round(255 - (255 - 34) * progress);
      const b = Math.round(255 - (255 - 34) * progress);

      return { color: `rgb(${r}, ${g}, ${b})` };
    });

    // 计算logo文字颜色
    const logoStyle = computed(() => {
      if (!isHomePage.value) {
        return { color: "#20b9b2" };
      }

      const maxScroll = 100;
      const progress = Math.min(scrollY.value / maxScroll, 1);

      // 从白色(255,255,255)渐变到主题色(32,185,178)
      const r = Math.round(255 - (255 - 32) * progress);
      const g = Math.round(255 - (255 - 185) * progress);
      const b = Math.round(255 - (255 - 178) * progress);

      return { color: `rgb(${r}, ${g}, ${b})` };
    });

    const handleScroll = () => {
      scrollY.value = window.pageYOffset || document.documentElement.scrollTop;
    };

    const toggleAside = () => {
      isAsideOpen.value = !isAsideOpen.value;
      // 切换body类以控制overflow
      if (isAsideOpen.value) {
        document.body.classList.add("aside-open");
      } else {
        document.body.classList.remove("aside-open");
      }
    };

    const closeAside = () => {
      isAsideOpen.value = false;
      document.body.classList.remove("aside-open");
    };

    const handleLanguageSwitch = () => {
      switchLanguage();
      closeAside();
    };

    onMounted(() => {
      initLanguage();
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 初始化
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      currentLang,
      switchLanguage,
      scrollY,
      scrollProgress,
      linkStyle,
      logoStyle,
      isHomePage,
      isAsideOpen,
      toggleAside,
      closeAside,
      handleLanguageSwitch,
    };
  },
};
</script>

<style scoped>
/* 首页header默认样式 */
.sigma_header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  --scroll-progress: 0;
}

/* 非首页header样式 */
.sigma_header:not(.is-home-page) {
  background-color: #fff !important;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.03) !important;
}

.sigma_header:not(.is-home-page) :deep(.sigma_header-bottom) {
  background-color: #fff !important;
}

/* 首页header - 使用CSS变量实现渐变 */
.sigma_header.is-home-page {
  background-color: rgba(255, 255, 255, var(--scroll-progress)) !important;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, calc(0.03 * var(--scroll-progress))) !important;
}

.sigma_header.is-home-page :deep(.sigma_header-bottom) {
  background-color: transparent !important;
}

/* 链接文字颜色过渡 */
:deep(.navbar-nav li a) {
  transition: color 0.3s ease;
}

:deep(.logo-text) {
  transition: color 0.3s ease;
}

/* hover效果保持主题色 */
:deep(.navbar-nav li a:hover),
:deep(.navbar-nav li.active > a) {
  color: #20b9b2 !important;
}

/* 侧边栏样式 */
.sigma_aside {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 9999;
  overflow-y: auto;
  padding: 20px;
}

.sigma_aside.aside-open {
  right: 0;
}

:deep(body.aside-open) {
  overflow: hidden;
}

/* 侧边栏关闭按钮 */
.sigma_close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
}

.sigma_close span {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #222;
  top: 50%;
  left: 0;
}

.sigma_close span:first-child {
  transform: rotate(45deg);
}

.sigma_close span:last-child {
  transform: rotate(-45deg);
}

/* 侧边栏logo */
.sigma_aside .sigma_logo-wrapper {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

/* 侧边栏菜单 */
.sigma_aside ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sigma_aside ul li {
  margin-bottom: 15px;
}

.sigma_aside ul li a {
  display: block;
  padding: 10px 0;
  color: #222;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.sigma_aside ul li a:hover {
  color: #20b9b2;
}

/* 遮罩层 */
.aside-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  transition: opacity 0.3s ease;
}

:deep(body.aside-open) {
  overflow: hidden;
}
</style>
