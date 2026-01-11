<template>
  <div data-home-page>
    <!-- Banner Start -->
    <BannerSection />
    <!-- Banner End -->

    <!-- Latest News Section -->
    <NewsSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Incubating Projects Section -->
    <IncubatingSection />

    <!-- Publications CTA -->
    <PublicationsSection id="publications" />

    <!-- Team Section -->
    <TeamSection id="team" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "../composables/useLanguage";
import BannerSection from "../components/BannerSection.vue";
import NewsSection from "../components/NewsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import IncubatingSection from "../components/IncubatingSection.vue";
import TeamSection from "../components/TeamSection.vue";
import PublicationsSection from "../components/PublicationsSection.vue";

export default {
  name: "Home",
  components: {
    BannerSection,
    NewsSection,
    ProjectsSection,
    IncubatingSection,
    TeamSection,
    PublicationsSection,
  },
  setup() {
    const { currentLang, initLanguage } = useLanguage();
    const route = useRoute();

    onMounted(() => {
      initLanguage();

      // 检查是否有hash参数，如果有则滚动到对应位置
      if (route.hash) {
        const sectionId = route.hash.substring(1); // 移除#号
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // 等待页面渲染完成
      } else {
        // 如果没有hash参数，滚动到顶部（从其他页面点击logo返回时）
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    });

    return {
      currentLang,
    };
  },
};
</script>

<style scoped>
/* 首页主要区域容器 - 响应式 */
:deep(.container) {
  width: 100%;
  max-width: 1920px;
}
</style>
