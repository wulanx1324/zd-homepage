<template>
  <div>
    <!-- 页面头部 -->
    <div
      class="sigma_subheader style-2 dark-overlay"
      style="background-image: url(@assets/img/subheader.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <h1>{{ currentLang === "zh" ? "实验室新闻" : "News" }}</h1>
        </div>
      </div>
    </div>

    <!-- 新闻内容区域 -->
    <div class="section section-padding">
      <div class="container">
        <div class="row">
          <div
            v-for="news in newsData"
            :key="news.id"
            class="col-lg-4 col-md-6"
            style="display: flex"
          >
            <article class="sigma_post">
              <div class="sigma_post-thumb">
                <a :href="`/news/${news.id}.html`">
                  <img :src="news.image" alt="post" />
                </a>
              </div>
              <div class="sigma_post-body">
                <div class="sigma_post-meta">
                  <div class="me-3">
                    <i class="far fa-calendar"></i>
                    {{ currentLang === "zh" ? news.date_zh : news.date_en }}
                  </div>
                </div>
                <h5>
                  <a :href="`/news/${news.id}.html`">
                    {{ currentLang === "zh" ? news.title_zh : news.title_en }}
                  </a>
                </h5>
                <p>
                  {{ currentLang === "zh" ? news.summary_zh : news.summary_en }}
                </p>
                <a :href="`/news/${news.id}.html`" class="btn-link">
                  {{ currentLang === "zh" ? "阅读更多" : "Read More" }}
                  <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { newsData } from "../data/newsData";

export default {
  name: "News",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      newsData,
    };
  },
};
</script>
