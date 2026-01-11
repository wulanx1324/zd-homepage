<template>
  <div id="publications" class="section publications-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "论文合集" : "Publications" }}
        </h4>
      </div>

      <!-- 年份标签 -->
      <div class="year-tags">
        <div
          v-for="year in availableYears"
          :key="year"
          class="year-tag"
          :class="{ active: selectedYear === year }"
          @click="selectedYear = year"
        >
          {{ year }}
        </div>
      </div>

      <!-- 论文列表 - 所有论文在一个box中 -->
      <div class="publications-box">
        <transition-group :name="transitionName" tag="div">
          <div
            v-for="(pub, index) in filteredPublications"
            :key="`${pub.year}-${index}`"
            class="publication-item"
          >
            <h5 class="publication-title">{{ pub.title }}</h5>
            <p class="publication-authors">{{ pub.authors }}</p>
            <!-- 分割线，最后一个不显示 -->
            <div
              v-if="index < filteredPublications.length - 1"
              class="publication-divider"
            ></div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { publicationsData } from "../data/publicationsData";

export default {
  name: "PublicationsSection",
  setup() {
    const { currentLang } = useLanguage();

    // 获取所有可用的年份并排序
    const availableYears = computed(() => {
      const years = [...new Set(publicationsData.map((pub) => pub.year))];
      return years.sort((a, b) => b - a); // 降序排列
    });

    // 默认选中最新的年份
    const selectedYear = ref(availableYears.value[0]);
    const previousYear = ref(availableYears.value[0]);
    const transitionName = ref("slide-left");

    // 监听年份变化，判断方向
    watch(selectedYear, (newYear, oldYear) => {
      previousYear.value = oldYear;
      // 年份变大（时间更晚）从右侧滑入，年份变小（时间更早）从左侧滑入
      transitionName.value = newYear > oldYear ? "slide-left" : "slide-right";
    });

    // 根据选中的年份过滤论文
    const filteredPublications = computed(() => {
      return publicationsData.filter((pub) => pub.year === selectedYear.value);
    });

    return {
      currentLang,
      availableYears,
      selectedYear,
      filteredPublications,
      transitionName,
    };
  },
};
</script>

<style scoped>
.project-container {
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 模块标题样式 */
.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

.publications-section {
  background-color: #f7f8fc;
  padding: 150px 0;
}

/* 年份标签容器 */
.year-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 60px;
}

/* 年份标签 */
.year-tag {
  width: 200px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 26px;
  color: #222222;
  line-height: 37px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 20px;
}

.year-tag:hover {
  background-color: #1ebab2;
  font-size: 36px;
  color: #ffffff;
  line-height: 50px;
  border-color: #1ebab2;
}

.year-tag.active {
  background-color: #1ebab2;
  font-size: 36px;
  color: #ffffff;
  line-height: 50px;
  border-color: #1ebab2;
}

/* 论文box - 一个大的容器 */
.publications-box {
  width: 100%;
  max-width: 1580px;
  background: #ffffff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 40px;
  padding: 50px 60px;
  transition: all 0.3s ease;
}

.publications-box:hover {
  box-shadow: 0 10px 24px 0 rgba(21, 34, 50, 0.12);
}

/* 论文项 */
.publication-item {
  position: relative;
  padding: 30px 0 0;
}

.publication-item:first-child {
  padding-top: 0;
}

.publication-item:last-child {
  padding-bottom: 0;
}

/* 论文标题 */
.publication-title {
  font-weight: 600;
  font-size: 32px;
  color: #222222;
  line-height: 45px;
  margin-bottom: 12px;
}

/* 论文作者 */
.publication-authors {
  font-weight: 400;
  font-size: 26px;
  color: #8c8c8c;
  line-height: 37px;
  margin: 0;
}

/* 分割线 */
.publication-divider {
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  margin-top: 30px;
}

/* 论文切换动画 - 向左滑动（年份变大） */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-move {
  transition: transform 0.4s ease;
}

/* 论文切换动画 - 向右滑动（年份变小） */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-move {
  transition: transform 0.4s ease;
}

@media (max-width: 768px) {
  .project-container {
    padding: 0 60px;
  }

  .year-tags {
    gap: 50px 15px;
  }

  .year-tag {
    width: 180px;
  }
}
</style>
