<template>
  <div data-home-page>
    <!-- Banner Start -->
    <div class="sigma_banner banner-3 home-banner">
      <div class="sigma_banner-slider">
        <div
          class="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat dark-overlay"
          style="background-image: url(/assets/img/home-banner.jpg)"
        >
          <div class="sigma_banner-text">
            <div class="container">
              <div class="row justify-content-center">
                <div
                  class="col-lg-6 text-center"
                  :class="currentLang === 'zh' ? 'lang-zh' : 'lang-en'"
                >
                  <template v-if="currentLang === 'zh'">
                    <h2 class="title text-white">浙江大学</h2>
                    <h2 class="title text-white">数据库实验室</h2>
                    <h5 class="text-white">
                      我们专注于人工智能与数据库系统的协同设计，构建面向科学与应用的智能数据平台，推动自优化、自学习的新一代数据系统发展
                    </h5>
                  </template>
                  <template v-else>
                    <h3 class="title text-white">ZJU Data System</h3>
                    <h3 class="title text-white">Research Group</h3>
                    <h4 class="text-white">
                      We focus on the collaborative design of artificial
                      intelligence and database systems, build intelligent data
                      platforms for science and applications, and promote the
                      development of a new generation of self-optimizing and
                      self-learning data systems
                    </h4>
                  </template>
                  <div
                    class="section-button d-flex align-items-center justify-content-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner End -->

    <!-- Latest News Section -->
    <div class="section section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="title">
            {{ currentLang === "zh" ? "最新新闻" : "Latest News" }}
          </h4>
        </div>

        <div class="row">
          <div
            v-for="news in newsData.slice(0, 3)"
            :key="news.id"
            class="col-lg-4 col-md-6"
            style="display: flex"
          >
            <article class="sigma_post post-2">
              <div class="sigma_post-thumb">
                <a :href="`/news/${news.id}.html`">
                  <img :src="news.image" alt="post" />
                </a>
              </div>
              <div class="sigma_post-body">
                <a class="sigma_post-category">{{
                  currentLang === "zh" ? news.date_zh : news.date_en
                }}</a>
                <h5>
                  <a :href="`/news/${news.id}.html`">
                    {{ currentLang === "zh" ? news.title_zh : news.title_en }}
                  </a>
                </h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Healthcare Data Systems Section -->
    <div class="section section-padding pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-1 order-lg-1">
            <div class="mr-lg-30">
              <div class="section-title text-left">
                <h4 class="title" style="font-size: 35px">
                  {{
                    currentLang === "zh"
                      ? "面向医疗的智能数据系统"
                      : "Data and AI Systems for Healthcare"
                  }}
                </h4>
              </div>
              <p>
                {{
                  currentLang === "zh"
                    ? "本研究方向探索智能数据和人工智能系统的设计，以应对医疗保健领域的关键挑战。我们专注于构建基于通用数据技术的智能平台，以高效管理、处理和分析复杂的医疗数据，从而支持预测模型、个性化护理和全人群健康洞察。关键领域包括基于队列的分析、多模态医疗数据集成以及用于诊断和决策支持的特定领域大语言模型。通过结合数据系统、机器学习和领域知识的创新，我们旨在推动值得信赖、可扩展且可操作的医疗保健技术的发展。"
                    : "This research direction explores the design of intelligent data and AI systems to address critical challenges in healthcare. We focus on building platforms that can efficiently manage, process, and analyze complex medical data to support predictive modeling, personalized care, and population-level health insights. Key areas include cohort-based analysis, multimodal medical data integration, and domain-specific large language models(LLMs) for diagnosis and decision support. By combining innovations in data systems, machine learning, and domain knowledge, we aim to advance the development of trustworthy, scalable, and actionable healthcare technologies."
                }}
              </p>
              <div style="height: 30px"></div>
            </div>
          </div>
          <div class="col-lg-6 order-2 order-lg-2">
            <div class="row">
              <div
                v-for="(item, index) in [
                  {
                    name: 'HealthGPT',
                    url: 'https://github.com/DCDmllm/HealthGPT',
                  },
                  {
                    name: 'EyecareGPT',
                    url: 'https://github.com/DCDmllm/EyecareGPT',
                  },
                  {
                    name: 'HeartcareGPT',
                    url: 'https://github.com/DCDmllm/Heartcare-Suite',
                  },
                  {
                    name: 'Cohort Study',
                    url: 'https://www.comp.nus.edu.sg/~dbsystem/cohort/',
                  },
                ]"
                :key="item.name"
                class="col-lg-6 mt-20"
              >
                <div class="sigma_icon-block icon-block-4">
                  <span class="number">{{
                    String(index + 1).padStart(2, "0")
                  }}</span>
                  <div class="sigma_icon-block-content">
                    <a class="btn-link" :href="item.url" target="_blank">
                      <h5>{{ item.name }}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Data Systems -->
    <div class="section section-padding pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="mr-lg-30">
              <div class="section-title text-left">
                <h4 class="title" style="font-size: 35px">
                  {{
                    currentLang === "zh"
                      ? "人工智能驱动的核心数据系统"
                      : "Core Data + AI Systems"
                  }}
                </h4>
              </div>
              <p>
                {{
                  currentLang === "zh"
                    ? "该方向专注于将人工智能深度集成到核心数据系统架构中。我们的目标是设计智能、自优化的平台，以实现分析自动化、提升系统性能并降低运营复杂性。通过将人工智能功能嵌入到数据堆栈的每个主要组件中，这些系统支持数据库内学习、自适应优化和人工智能原生查询处理。这种人工智能与数据基础设施的协同设计，助力打造专为人工智能工作负载构建的新一代系统。"
                    : "This direction focuses on the deep integration of AI into the architecture of core data systems. We aim to design intelligent, self-optimizing platforms that automate analytics, enhance system performance, and reduce operational complexity. By embedding AI capabilities into every major component of the data stack, these systems support in-database learning, adaptive optimization, and AI-native query processing. This co-design of AI and data infrastructure enables a new generation of systems purpose-built for AI workloads."
                }}
              </p>
            </div>
          </div>
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="row">
              <div
                v-for="(item, index) in [
                  { name: 'NeurDB', url: 'https://neurdb.com/' },
                  {
                    name: 'HAKES',
                    url: 'https://www.comp.nus.edu.sg/~dbsystem/hakes/',
                  },
                  {
                    name: 'Falcon',
                    url: 'https://www.comp.nus.edu.sg/~dbsystem/fintech-Falcon/',
                  },
                  {
                    name: 'MLCask',
                    url: 'https://www.comp.nus.edu.sg/~dbsystem/mlcask/',
                  },
                ]"
                :key="item.name"
                class="col-lg-6 mt-20"
              >
                <div class="sigma_icon-block icon-block-4">
                  <span class="number">{{
                    String(index + 1).padStart(2, "0")
                  }}</span>
                  <div class="sigma_icon-block-content">
                    <a class="btn-link" :href="item.url" target="_blank">
                      <h5>{{ item.name }}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data-centric AI for Science -->
    <div class="section section-padding pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-1 order-lg-1">
            <div class="mr-lg-30">
              <div class="section-title text-left">
                <h4 class="title" style="font-size: 35px">
                  {{
                    currentLang === "zh"
                      ? "以数据为中心的科学智能探索"
                      : "Data-centric AI for Science"
                  }}
                </h4>
              </div>
              <p>
                {{
                  currentLang === "zh"
                    ? "本方向研究数据和人工智能如何加速不同领域的科学发现。我们专注于构建能够提取模式、生成假设并支持科学工作流程中决策的人工智能模型和数据系统。应用包括人工智能驱动的材料特性分析和预测，展现智能系统揭示新见解和指导实验研究的潜力。通过将领域知识与先进的以数据为中心的人工智能技术相结合，我们旨在实现更高效、更具影响力的科学进步。"
                    : "This direction investigates how data and AI can accelerate scientific discovery across diverse domains. We focus on building AI models and data systems that can extract patterns, generate hypotheses, and support decision-making in scientific workflows. Applications include AI-driven analysis and prediction of material properties, demonstrating the potential of intelligent systems to reveal new insights and guide experimental research. By bridging domain knowledge with advanced data-centric AI techniques, we aim to enable more efficient and impactful scientific progress."
                }}
              </p>
            </div>
          </div>
          <div class="col-lg-6 order-2 order-lg-2">
            <div class="row">
              <div class="col-lg-6 mt-20">
                <div class="sigma_icon-block icon-block-5">
                  <div class="sigma_icon-block-content">
                    <span class="number">01</span>
                    <a><h5>Concrete composition analysis</h5></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-20">
                <div class="sigma_icon-block icon-block-5">
                  <div class="sigma_icon-block-content">
                    <span class="number">02</span>
                    <a><h5>Structure prediction in metal halides</h5></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Incubating Projects -->
    <div class="section section-padding pt-0">
      <div class="container">
        <div class="section-title text-center">
          <h4 class="title">
            {{ currentLang === "zh" ? "孵化项目" : "Incubating Projects" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="project in incubatingProjects"
            :key="project.name"
            class="col-lg-3 col-md-6"
            style="display: flex"
          >
            <article class="sigma_post">
              <div class="sigma_post-thumb2">
                <a :href="project.link" target="_blank">
                  <img :src="project.image" style="background-color: white" />
                </a>
              </div>
              <div class="sigma_post-body">
                <h5>
                  <a :href="project.link" target="_blank">{{ project.name }}</a>
                </h5>
                <p>
                  {{
                    currentLang === "zh"
                      ? project.descriptionZh.substring(0, 50) + "..."
                      : project.descriptionEn.substring(0, 50) + "..."
                  }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Publications CTA -->
    <div class="section" style="background-color: #e0f2f1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 d-none d-lg-block">
            <img
              src="https://www.comp.nus.edu.sg/~dbsystem/static/slide-tag-cloud-e257ee6d6bd7cb84255a551840275178.png"
              alt="img"
            />
          </div>
          <div class="col-lg-6">
            <div class="mr-lg-30">
              <div class="section-title text-left">
                <h4 class="title">
                  {{ currentLang === "zh" ? "论文合集" : "Publications" }}
                </h4>
              </div>
              <p>
                {{
                  currentLang === "zh"
                    ? "我们的研究成果已在国际顶级计算机科学会议和期刊上发表并被重点报道"
                    : "Our work have been published and featured in top-tier international computer science conferences and journals"
                }}
              </p>
              <div class="space" style="height: 30px"></div>
              <router-link to="/publications.html">
                <button type="button" class="sigma_btn-custom mt-3 btn-block">
                  {{ currentLang === "zh" ? "查看论文" : "VIEW PUBLICATIONS" }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { incubatingProjects } from "../data/projectsData";
import { newsData } from "../data/newsData";

export default {
  name: "Home",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      incubatingProjects,
      newsData,
    };
  },
};
</script>

<style scoped>
/* Banner贴顶显示 */
.home-banner {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Banner内容区域添加顶部padding以适应固定header */
.home-banner :deep(.sigma_banner-text) {
  padding-top: 80px;
}
</style>
