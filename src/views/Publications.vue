<template>
  <div>
    <div
      class="sigma_subheader style-2 dark-overlay"
      style="background-image: url(/assets/img/subheader.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <h1>{{ currentLang === "zh" ? "发表论文" : "Publications" }}</h1>
        </div>
      </div>
    </div>

    <div class="section section-padding">
      <div class="container">
        <div v-for="year in years" :key="year" class="mb-5">
          <h4 class="mb-4">{{ year }}</h4>
          <div class="publication-list">
            <div
              v-for="(pub, index) in getPublicationsByYear(year)"
              :key="index"
              class="publication-item mb-3 p-3"
              style="
                background-color: #f8f9fa;
                border-left: 3px solid #007bff;
                border-radius: 4px;
              "
            >
              <h5 class="mb-2">{{ pub.title }}</h5>
              <p class="text-muted mb-0">{{ pub.authors }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { publicationsData } from "../data/publicationsData";

export default {
  name: "Publications",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    // 获取所有不重复的年份，降序排列
    const years = computed(() => {
      const yearSet = new Set(publicationsData.map((pub) => pub.year));
      return Array.from(yearSet).sort((a, b) => b - a);
    });

    // 根据年份获取论文
    const getPublicationsByYear = (year) => {
      return publicationsData.filter((pub) => pub.year === year);
    };

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      years,
      getPublicationsByYear,
    };
  },
};
</script>
