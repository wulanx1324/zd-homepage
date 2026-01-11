<template>
  <header
    class="sigma_header style-5 can-sticky"
    :class="{ 'is-home-page': isHomePage, 'is-scrolled': scrollY > 0 }"
    :style="{ '--scroll-progress': scrollProgress }"
  >
    <div class="sigma_header-bottom">
      <div class="header-container">
        <div class="navbar">
          <div class="sigma_logo-wrapper">
            <a
              @click.prevent="handleLogoClick"
              class="sigma_logo"
              style="cursor: pointer"
            >
              <span
                class="logo-text"
                :style="logoStyle"
                style="font-size: 28px; font-weight: bold"
                >Data X AI</span
              >
            </a>
          </div>
          <ul class="navbar-nav">
            <li class="menu-item">
              <a
                :class="['lang', 'lang-' + currentLang]"
                href="#news"
                :style="linkStyle"
                @click.prevent="scrollToSection('news')"
              >
                {{ currentLang === "zh" ? "实验室新闻" : "News" }}
              </a>
            </li>
            <li class="menu-item">
              <a
                :class="['lang', 'lang-' + currentLang]"
                href="#projects"
                :style="linkStyle"
                @click.prevent="scrollToSection('projects')"
              >
                {{ currentLang === "zh" ? "项目研究" : "Projects" }}
              </a>
            </li>
            <li class="menu-item">
              <a
                :class="['lang', 'lang-' + currentLang]"
                href="#incubating"
                :style="linkStyle"
                @click.prevent="scrollToSection('incubating')"
              >
                {{ currentLang === "zh" ? "孵化项目" : "Incubating" }}
              </a>
            </li>
            <li class="menu-item">
              <a
                :class="['lang', 'lang-' + currentLang]"
                href="#publications"
                :style="linkStyle"
                @click.prevent="scrollToSection('publications')"
              >
                {{ currentLang === "zh" ? "发表论文" : "Publications" }}
              </a>
            </li>
            <li class="menu-item">
              <a
                :class="['lang', 'lang-' + currentLang]"
                href="#team"
                :style="linkStyle"
                @click.prevent="scrollToSection('team')"
              >
                {{ currentLang === "zh" ? "研究团队" : "People" }}
              </a>
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
      <a
        @click.prevent="scrollToTopAndClose"
        class="sigma_logo"
        style="cursor: pointer"
      >
        <span
          class="logo-text"
          style="font-size: 24px; font-weight: bold; color: #20b9b2"
          >Data X AI</span
        >
      </a>
    </div>
    <ul>
      <li class="menu-item">
        <a
          :class="['lang', 'lang-' + currentLang]"
          href="#news"
          @click.prevent="scrollToSectionAndClose('news')"
        >
          {{ currentLang === "zh" ? "实验室新闻" : "News" }}
        </a>
      </li>
      <li class="menu-item">
        <a
          :class="['lang', 'lang-' + currentLang]"
          href="#projects"
          @click.prevent="scrollToSectionAndClose('projects')"
        >
          {{ currentLang === "zh" ? "项目研究" : "Projects" }}
        </a>
      </li>
      <li class="menu-item">
        <a
          :class="['lang', 'lang-' + currentLang]"
          href="#incubating"
          @click.prevent="scrollToSectionAndClose('incubating')"
        >
          {{ currentLang === "zh" ? "孵化项目" : "Incubating" }}
        </a>
      </li>
      <li class="menu-item">
        <a
          :class="['lang', 'lang-' + currentLang]"
          href="#publications"
          @click.prevent="scrollToSectionAndClose('publications')"
        >
          {{ currentLang === "zh" ? "发表论文" : "Publications" }}
        </a>
      </li>
      <li class="menu-item">
        <a
          :class="['lang', 'lang-' + currentLang]"
          href="#team"
          @click.prevent="scrollToSectionAndClose('team')"
        >
          {{ currentLang === "zh" ? "研究团队" : "People" }}
        </a>
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
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Header",
  setup() {
    const { currentLang, switchLanguage, initLanguage } = useLanguage();
    const route = useRoute();
    const router = useRouter();
    const scrollY = ref(0);
    const isAsideOpen = ref(false);

    // 判断是否在首页
    const isHomePage = computed(() => route.path === "/");

    // 计算滚动进度 (0-1)
    const scrollProgress = computed(() => {
      const maxScroll = 300; // 滚动100px时完全变白
      return Math.min(scrollY.value / maxScroll, 1);
    });

    // 计算链接文字颜色
    const linkStyle = computed(() => {
      if (!isHomePage.value) {
        return { color: "#222222" };
      }

      const maxScroll = 300;
      const progress = Math.min(scrollY.value / maxScroll, 1);

      // 从白色(255,255,255)渐变到黑色(34,34,34)
      const r = Math.round(255 - (255 - 34) * progress);
      const g = Math.round(255 - (255 - 34) * progress);
      const b = Math.round(255 - (255 - 34) * progress);

      return { color: `rgb(${r}, ${g}, ${b})` };
    });

    // 计算logo文字颜色
    const logoStyle = computed(() => {
      // 如果在新闻详情页，使用#1EBAB2
      if (route.path.startsWith("/news/")) {
        return { color: "#1EBAB2" };
      }

      if (!isHomePage.value) {
        return { color: "#222222" };
      }

      const maxScroll = 300;
      const progress = Math.min(scrollY.value / maxScroll, 1);

      // 从白色(255,255,255)渐变到#1EBAB2(30,186,178)
      const r = Math.round(255 - (255 - 30) * progress);
      const g = Math.round(255 - (255 - 186) * progress);
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

    const scrollToSection = (sectionId) => {
      // 如果不在首页，先跳转到首页，并传递目标section
      if (!isHomePage.value) {
        router.push({ path: "/", hash: `#${sectionId}` });
        return;
      }

      // 在首页，直接滚动到对应位置
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // header的高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const scrollToSectionAndClose = (sectionId) => {
      closeAside();
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300); // 等待侧边栏关闭动画完成
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const handleLogoClick = () => {
      if (isHomePage.value) {
        // 如果在首页，滚动到顶部
        scrollToTop();
      } else {
        // 如果不在首页，跳转到首页
        router.push("/");
      }
    };

    const scrollToTopAndClose = () => {
      closeAside();
      setTimeout(() => {
        scrollToTop();
      }, 300);
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
      scrollToSection,
      scrollToSectionAndClose,
      scrollToTop,
      scrollToTopAndClose,
      handleLogoClick,
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

.header-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
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
  position: relative;
  padding-bottom: 5px;
  display: inline-block;
}

:deep(.logo-text) {
  transition: color 0.3s ease;
}

/* hover效果 - 底部主题色线 */
.is-home-page :deep(.navbar-nav li a::after) {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #1ebab2;
  transition: width 0.3s ease;
}

.is-home-page :deep(.navbar-nav li a:hover::after),
.is-home-page :deep(.navbar-nav li.active > a::after) {
  width: 100%;
}

/* 非首页hover效果 - 主题色底线 */
.sigma_header:not(.is-home-page) :deep(.navbar-nav li a::after) {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #1ebab2;
  transition: width 0.3s ease;
}

.sigma_header:not(.is-home-page) :deep(.navbar-nav li a:hover::after),
.sigma_header:not(.is-home-page) :deep(.navbar-nav li.active > a::after) {
  width: 100%;
}

/* hover和选中状态文字颜色变化 */
:deep(.navbar-nav li a:hover),
:deep(.navbar-nav li.active > a) {
  color: #1ebab2 !important;
}

/* logo hover效果 */
:deep(.logo-text:hover) {
  color: #1ebab2 !important;
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

  .lang {
    font-size: 22px !important;
  }
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
  position: relative;
  z-index: 1;
}

.sigma_aside ul li {
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.sigma_aside ul li a {
  display: block;
  padding: 10px 0;
  color: #222;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
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
  z-index: 999;
  transition: opacity 0.3s ease;
}

:deep(body.aside-open) {
  overflow: hidden;
}

.menu-item {
  margin-right: 20px;
}
</style>
