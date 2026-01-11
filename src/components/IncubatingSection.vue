<template>
  <!-- Incubating Projects -->
  <div id="incubating" class="section incubating-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "孵化项目" : "Incubating Projects" }}
        </h4>
      </div>
      <div class="project-tags">
        <div
          v-for="item in incubatingProjectsList"
          :key="item.name"
          class="project-tag"
          :class="{ active: selectedIncubating === item.name }"
          @click="selectedIncubating = item.name"
        >
          {{ item.name }}
        </div>
      </div>

      <!-- 项目详情 -->
      <Transition name="fade" mode="out-in">
        <div
          class="project-detail"
          v-if="selectedIncubating"
          :key="selectedIncubating"
        >
          <div class="project-detail-left">
            <div class="project-year">
              {{ getIncubatingProject(selectedIncubating).year }}
            </div>
            <p class="project-detail-description">
              {{
                currentLang === "zh"
                  ? getIncubatingProject(selectedIncubating).descriptionZh
                  : getIncubatingProject(selectedIncubating).descriptionEn
              }}
            </p>
            <a
              :href="getIncubatingProject(selectedIncubating).url"
              target="_blank"
              class="project-detail-link"
            >
              <img
                src="/assets/img/materials/news/right-arrow-icon.png"
                alt="arrow"
                class="detail-arrow-icon"
              />
            </a>
          </div>
          <div class="project-detail-right">
            <img
              :src="getIncubatingProject(selectedIncubating).icon"
              alt="project icon"
              class="project-icon"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { incubatingProjects } from "../data/projectsData";

export default {
  name: "IncubatingSection",
  setup() {
    const { currentLang } = useLanguage();

    // 默认选中第一个项目
    const selectedIncubating = ref(incubatingProjects[0]?.name || "");

    // 适配孵化项目数据
    const incubatingProjectsList = incubatingProjects.map((project) => ({
      ...project,
      url: project.link,
      icon: project.image,
    }));

    const getIncubatingProject = (name) => {
      return incubatingProjectsList.find((p) => p.name === name);
    };

    return {
      currentLang,
      incubatingProjectsList,
      selectedIncubating,
      getIncubatingProject,
    };
  },
};
</script>

<style scoped>
.project-container {
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 60px;
}

/* 模块标题样式 */
.module-title {
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

/* 医疗数据系统模块 - 白色背景 */
.healthcare-section {
  background-color: #fff;
  padding: 150px 0;
}

/* 核心数据系统模块 - 灰色背景 */
.core-section {
  background-color: #f7f8fc;
  padding: 150px 0;
}

/* 孵化项目模块 - 白色背景 */
.incubating-section {
  background-color: #fff;
  padding: 150px 0;
}

/* 项目描述 */
.project-description {
  max-width: 100%;
  margin: 0 auto 80px;
  font-weight: 400;
  font-size: 22px;
  color: #8c8c8c;
  line-height: 50px;
  text-align: left;
}

/* 项目标签容器 */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
}

/* 项目标签 */
.project-tag {
  width: 300px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 35px;
  display: inline-block;
  background-color: #f7f8fc;
  border: 1px solid #e0e0e0;
  font-weight: 600;
  font-size: 26px;
  color: #222222;
  line-height: 70px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
}

.project-tag:hover {
  background-color: #1ebab2;
  color: #fff;
  border-color: #1ebab2;
  transform: translateY(-2px);
}

.project-tag.active {
  background-color: #1ebab2;
  color: #fff;
  border-color: #1ebab2;
}

/* 项目详情 */
.project-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  gap: 100px;
}

.project-detail-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-year {
  font-weight: 600;
  font-size: 32px;
  color: #222222;
  line-height: 45px;
}

.project-detail-description {
  font-weight: 400;
  font-size: 22px;
  color: #8c8c8c;
  line-height: 50px;
  margin: 0;
}

.project-detail-link {
  margin-top: 16px;
  width: 140px;
  height: 40px;
  background: #fff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.project-detail-link:hover {
  transform: scale(1.1);
  background-color: #1ebab2;
  box-shadow: 0 5px 16px 0 rgba(30, 186, 178, 0.3);

  .detail-arrow-icon {
    filter: brightness(0) invert(1);
  }
}

.detail-arrow-icon {
  width: 32px;
  height: 32px;
}

.project-detail-right {
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.project-icon {
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 移动端响应式样式 */
@media (max-width: 768px) {
  .project-container {
    padding: 0 60px;
  }

  /* 医疗数据系统模块 - 白色背景 */
  .healthcare-section {
    background-color: #fff;
    padding: 100px 0;
  }

  /* 核心数据系统模块 - 灰色背景 */
  .core-section {
    background-color: #f7f8fc;
    padding: 100px 0;
  }

  /* 孵化项目模块 - 白色背景 */
  .incubating-section {
    background-color: #fff;
    padding: 100px 0;
  }

  .module-title {
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 30px;
  }

  /* project-tags的gap变小 */
  .project-tags {
    gap: 40px 20px;
  }

  .project-tag {
    width: calc(50% - 20px);
    max-width: 300px;
    height: 70px;
    font-size: 26px;
    color: #222222;
    line-height: 70px;
  }

  /* 项目详情上下排列 */
  .project-detail {
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;
  }

  .project-detail-left {
    gap: 12px;
  }

  .project-description {
    margin-bottom: 40px;
  }

  /* 详情字体变小 */
  .project-year {
    font-weight: 600;
    font-size: 32px;
    color: #222222;
    line-height: 45px;
  }

  .project-detail-description {
    font-size: 26px;
    color: #222222;
    line-height: 50px;
  }

  .project-detail-link {
    width: 120px;
    height: 36px;
    margin-top: 12px;
  }

  .detail-arrow-icon {
    width: 24px;
    height: 24px;
  }

  .project-detail-right {
    width: 100%;
    height: auto;
    max-width: 300px;
  }

  .project-icon {
    max-width: 100%;
    max-height: 250px;
  }

  .incubating-section {
    padding: 80px 0;
  }

  .project-detail-link {
    transform: scale(1.1);
    background-color: #1ebab2;
    box-shadow: 0 5px 16px 0 rgba(30, 186, 178, 0.3);

    .detail-arrow-icon {
      filter: brightness(0) invert(1);
    }
  }
}
</style>
