<template>
  <div id="news" class="section news-carousel-section">
    <div class="news-container">
      <div class="section-title text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "最新新闻" : "Latest News" }}
        </h4>
      </div>

      <div class="news-carousel-wrapper">
        <!-- 左箭头 -->
        <button class="carousel-arrow carousel-arrow-left" @click="prevNews">
          <i class="fa fa-chevron-left"></i>
        </button>

        <!-- 新闻轮播容器 -->
        <div class="news-carousel-container">
          <div class="news-carousel-track" :style="carouselStyle">
            <div
              v-for="(news, index) in displayNews"
              :key="`${news.id}-${index}`"
              class="news-carousel-item"
              :class="getItemClass(index)"
              @click="handleNewsClick(index)"
            >
              <article class="news-card">
                <div class="news-card-image">
                  <img :src="news.image" alt="news" />
                </div>
                <div class="news-card-content">
                  <div class="news-card-header">
                    <div class="news-card-date">
                      <img
                        src="/assets/img/materials/news/time-icon.png"
                        alt="time"
                        class="time-icon"
                      />
                      <span>{{
                        currentLang === "zh" ? news.date_zh : news.date_en
                      }}</span>
                    </div>
                    <img
                      src="/assets/img/materials/news/right-arrow-icon.png"
                      alt="arrow"
                      class="arrow-icon"
                    />
                  </div>
                  <h5 class="news-card-title">
                    {{ currentLang === "zh" ? news.title_zh : news.title_en }}
                  </h5>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- 右箭头 -->
        <button class="carousel-arrow carousel-arrow-right" @click="nextNews">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>

      <!-- 锚点导航 -->
      <div class="news-pagination">
        <span
          v-for="(news, index) in newsData"
          :key="news.id"
          class="pagination-dot"
          :class="{ active: currentIndex === index }"
          @click="goToNews(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useLanguage } from "../composables/useLanguage";
import { newsData } from "../data/newsData";

export default {
  name: "NewsSection",
  setup() {
    const { currentLang } = useLanguage();
    const router = useRouter();
    const currentIndex = ref(0);
    const isAnimating = ref(false);

    // 显示的新闻（取5个，中间的是焦点）
    const displayNews = computed(() => {
      const news = [];
      const totalNews = newsData.length;

      // 显示当前索引前后各2个新闻，共5个
      for (let i = -2; i <= 2; i++) {
        const index = (currentIndex.value + i + totalNews) % totalNews;
        news.push(newsData[index]);
      }

      return news;
    });

    // 轮播样式
    const carouselStyle = computed(() => {
      return {
        transform: "translateX(0)",
        transition: "none",
      };
    });

    // 获取卡片样式类
    const getItemClass = (index) => {
      if (index === 2) return "center";
      if (index === 1 || index === 3) return "side";
      return "outer";
    };

    // 上一个新闻
    const prevNews = () => {
      if (isAnimating.value) return;
      isAnimating.value = true;

      currentIndex.value =
        (currentIndex.value - 1 + newsData.length) % newsData.length;

      setTimeout(() => {
        isAnimating.value = false;
      }, 600);
    };

    // 下一个新闻
    const nextNews = () => {
      if (isAnimating.value) return;
      isAnimating.value = true;

      currentIndex.value = (currentIndex.value + 1) % newsData.length;

      setTimeout(() => {
        isAnimating.value = false;
      }, 600);
    };

    // 点击卡片
    const handleNewsClick = (index) => {
      if (isAnimating.value) return;

      if (index === 2) {
        // 点击中间卡片，跳转到详情页
        const news = displayNews.value[2];
        router.push(`/news/${news.id}`);
      } else {
        // 点击左侧或右侧卡片，直接切换到该卡片
        isAnimating.value = true;

        const steps = index - 2; // 计算需要移动的步数，负数表示向左，正数表示向右
        currentIndex.value =
          (currentIndex.value + steps + newsData.length) % newsData.length;

        setTimeout(() => {
          isAnimating.value = false;
        }, 600);
      }
    };

    // 跳转到指定新闻
    const goToNews = (index) => {
      if (isAnimating.value || currentIndex.value === index) return;
      isAnimating.value = true;

      currentIndex.value = index;

      setTimeout(() => {
        isAnimating.value = false;
      }, 600);
    };

    return {
      currentLang,
      currentIndex,
      displayNews,
      carouselStyle,
      getItemClass,
      prevNews,
      nextNews,
      handleNewsClick,
      isAnimating,
      newsData,
      goToNews,
    };
  },
};
</script>

<style scoped>
.news-container {
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 模块标题样式 */
.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #252525;
  line-height: 84px;
}

/* 模块标题样式 */
.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #252525;
  line-height: 84px;
}

/* 新闻轮播样式 */
.news-carousel-section {
  background-color: #f7f8fc;
  padding: 150px 0;
  overflow: hidden;
}

.news-carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.news-carousel-container {
  width: 100%;
  max-width: 1580px;
  position: relative;
}

.news-carousel-track {
  display: flex;
  gap: -30px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
}

.news-carousel-item {
  flex-shrink: 0;
  width: min(800px, calc(100vw - 180px));
  max-width: 800px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

/* 外侧卡片 */
.news-carousel-item.outer {
  opacity: 1;
  transform: scale(0.6);
  filter: blur(1px);
  z-index: 1;
  margin: 0 -20px;
}

/* 侧边卡片 */
.news-carousel-item.side {
  opacity: 1;
  transform: scale(0.8);
  z-index: 2;
  margin: 0 -580px;
}

/* 中间卡片 */
.news-carousel-item.center {
  opacity: 1;
  transform: scale(1);
  z-index: 10;
  margin: 0;
}

.news-carousel-item.outer:hover {
  transform: scale(0.65);
}

.news-carousel-item.side:hover {
  transform: scale(0.85);
}

.news-carousel-item.center:hover {
  transform: scale(1.05);
}

/* 新闻卡片样式 */
.news-card {
  width: 100%;
  height: auto;
  aspect-ratio: 8 / 7;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 21px;
  background: #fff;
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  will-change: transform, box-shadow;
}

.news-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.news-card-image {
  width: 100%;
  height: 64.3%;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.news-carousel-item.center .news-card-image {
  height: 64.3%;
}

.news-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-card-image img {
  transform: scale(1.1);
}

.news-card-content {
  padding: 5%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.news-card-date {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 21px;
  color: #b2b2b2;
  line-height: 29px;
}

.time-icon {
  width: 26px;
  height: 26px;
}

.arrow-icon {
  width: 42px;
  height: 42px;
}

.news-card-title {
  font-weight: 400;
  font-size: 28px;
  color: #252525;
  line-height: 40px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px; /* 40px * 2 = 80px */
}

/* 箭头按钮 */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #20b9b2;
  color: #20b9b2;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.carousel-arrow:hover {
  background: #20b9b2;
  color: #fff;
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow-left {
  left: 20px;
}

.carousel-arrow-right {
  right: 20px;
}

/* 锚点导航 */
.news-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.pagination-dot {
  width: 18px;
  height: 18px;
  border: 1px solid #979797;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot:hover {
  border-color: #1ebab2;
}

.pagination-dot.active {
  background: #1ebab2;
  border: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .news-container {
    padding: 0 60px;
  }

  /* 移动端只显示中间卡片 */
  .news-carousel-item.outer,
  .news-carousel-item.side {
    display: none;
  }

  .news-carousel-item.center {
    transform: scale(1);
    margin: 0;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .carousel-arrow-left {
    left: -20px;
  }

  .carousel-arrow-right {
    right: -20px;
  }

  .news-carousel-container {
    padding: 0 20px;
  }

  .news-card-title {
    -webkit-line-clamp: 1;
    height: 40px;
  }
}
</style>
