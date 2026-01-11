<template>
  <!-- Healthcare Data Systems -->
  <div id="projects" class="section healthcare-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{
            currentLang === "zh"
              ? "面向医疗的智能数据系统"
              : "Data and AI Systems for Healthcare"
          }}
        </h4>
      </div>
      <p class="project-description">
        {{
          currentLang === "zh"
            ? "本研究方向探索智能数据和人工智能系统的设计，以应对医疗保健领域的关键挑战。我们专注于构建基于通用数据技术的智能平台，以高效管理、处理和分析复杂的医疗数据，从而支持预测模型、个性化护理和全人群健康洞察。关键领域包括基于队列的分析、多模态医疗数据集成以及用于诊断和决策支持的特定领域大语言模型。通过结合数据系统、机器学习和领域知识的创新，我们旨在推动值得信赖、可扩展且可操作的医疗保健技术的发展。"
            : "This research direction explores the design of intelligent data and AI systems to address critical challenges in healthcare. We focus on building platforms that can efficiently manage, process, and analyze complex medical data to support predictive modeling, personalized care, and population-level health insights. Key areas include cohort-based analysis, multimodal medical data integration, and domain-specific large language models(LLMs) for diagnosis and decision support. By combining innovations in data systems, machine learning, and domain knowledge, we aim to advance the development of trustworthy, scalable, and actionable healthcare technologies."
        }}
      </p>
      <div class="project-tags">
        <div
          v-for="item in healthcareProjects"
          :key="item.name"
          class="project-tag"
          :class="{ active: selectedHealthcare === item.name }"
          @click="selectedHealthcare = item.name"
        >
          {{ item.name }}
        </div>
      </div>

      <!-- 项目详情 -->
      <Transition name="fade" mode="out-in">
        <div
          class="project-detail"
          v-if="selectedHealthcare"
          :key="selectedHealthcare"
        >
          <div class="project-detail-left">
            <div class="project-year">
              {{ getHealthcareProject(selectedHealthcare).year }}
            </div>
            <p class="project-detail-description">
              {{
                currentLang === "zh"
                  ? getHealthcareProject(selectedHealthcare).descriptionZh
                  : getHealthcareProject(selectedHealthcare).descriptionEn
              }}
            </p>
            <a
              :href="getHealthcareProject(selectedHealthcare).url"
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
              :src="getHealthcareProject(selectedHealthcare).icon"
              alt="project icon"
              class="project-icon"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <!-- Core Data + AI Systems -->
  <div class="section core-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{
            currentLang === "zh"
              ? "人工智能驱动的核心数据系统"
              : "Core Data + AI Systems"
          }}
        </h4>
      </div>
      <p class="project-description">
        {{
          currentLang === "zh"
            ? "该方向专注于将人工智能深度集成到核心数据系统架构中。我们的目标是设计智能、自优化的平台，以实现分析自动化、提升系统性能并降低运营复杂性。通过将人工智能功能嵌入到数据堆栈的每个主要组件中，这些系统支持数据库内学习、自适应优化和人工智能原生查询处理。这种人工智能与数据基础设施的协同设计，助力打造专为人工智能工作负载构建的新一代系统。"
            : "This direction focuses on the deep integration of AI into the architecture of core data systems. We aim to design intelligent, self-optimizing platforms that automate analytics, enhance system performance, and reduce operational complexity. By embedding AI capabilities into every major component of the data stack, these systems support in-database learning, adaptive optimization, and AI-native query processing. This co-design of AI and data infrastructure enables a new generation of systems purpose-built for AI workloads."
        }}
      </p>
      <div class="project-tags">
        <div
          v-for="item in coreDataProjects"
          :key="item.name"
          class="project-tag"
          :class="{ active: selectedCore === item.name }"
          @click="selectedCore = item.name"
        >
          {{ item.name }}
        </div>
      </div>

      <!-- 项目详情 -->
      <Transition name="fade" mode="out-in">
        <div class="project-detail" v-if="selectedCore" :key="selectedCore">
          <div class="project-detail-left">
            <div class="project-year">
              {{ getCoreProject(selectedCore).year }}
            </div>
            <p class="project-detail-description">
              {{
                currentLang === "zh"
                  ? getCoreProject(selectedCore).descriptionZh
                  : getCoreProject(selectedCore).descriptionEn
              }}
            </p>
            <a
              :href="getCoreProject(selectedCore).url"
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
              :src="getCoreProject(selectedCore).icon"
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
import {
  healthcareProjects as healthcareProjectsData,
  aiSystemProjects,
} from "../data/projectsData";

export default {
  name: "ProjectsSection",
  setup() {
    const { currentLang } = useLanguage();

    // 默认选中第一个项目
    const selectedHealthcare = ref(healthcareProjectsData[0]?.name || "");
    const selectedCore = ref(aiSystemProjects[0]?.name || "");

    // 适配医疗项目数据（添加url和icon字段）
    const healthcareProjects = healthcareProjectsData.map((project) => ({
      ...project,
      url: project.link,
      icon: project.image,
    }));

    // 适配核心数据系统项目（使用aiSystemProjects的前4个）
    const coreDataProjects = aiSystemProjects.slice(0, 4).map((project) => ({
      ...project,
      url: project.link,
      icon: project.image,
    }));

    const getHealthcareProject = (name) => {
      return healthcareProjects.find((p) => p.name === name);
    };

    const getCoreProject = (name) => {
      return coreDataProjects.find((p) => p.name === name);
    };

    return {
      currentLang,
      healthcareProjects,
      coreDataProjects,
      selectedHealthcare,
      selectedCore,
      getHealthcareProject,
      getCoreProject,
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
