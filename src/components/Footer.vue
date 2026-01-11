<template>
  <footer class="footer-custom">
    <!-- Logo居中 -->
    <div class="footer-logo" @click="scrollToTop">
      <span class="logo-text">Data X AI</span>
    </div>

    <!-- 分割线 -->
    <div class="footer-divider"></div>

    <!-- 底部信息 -->
    <div class="footer-bottom">
      <div class="footer-left">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          浙ICP备2025188821号
        </a>
        ｜All Rights Reserved.
      </div>
      <div class="footer-right">
        联系我们：
        <a href="mailto:xiezl@zju.edu.cn" class="footer-link">
          xiezl@zju.edu.cn
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted } from "vue";
import { useLanguage } from "../composables/useLanguage";

export default {
  name: "Footer",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return {
      currentLang,
      scrollToTop,
    };
  },
};
</script>

<style scoped>
.footer-custom {
  background: #474747;
  padding: 80px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  margin-bottom: 60px;
}

.footer-divider {
  width: 100%;
  max-width: 1580px;
  height: 1px;
  border: 1px solid #979797;
  margin-bottom: 11px;
}

.logo-text {
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.footer-bottom {
  width: 100%;
  max-width: 1580px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

.footer-left,
.footer-right {
  font-weight: 400;
  font-size: 20px;
  color: #9a9b9f;
  line-height: 28px;
}

.footer-left {
  text-align: left;
}

.footer-right {
  text-align: right;
}

.footer-link {
  color: #9a9b9f;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #fff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-left {
    width: 240px;
  }
  .footer-right {
    width: 200px;
  }
}
</style>
