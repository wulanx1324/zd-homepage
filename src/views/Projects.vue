<template>
  <div>
    <div
      class="sigma_subheader style-2 dark-overlay"
      style="background-image: url(@assets/img/subheader.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <h1>{{ currentLang === "zh" ? "项目研究" : "Projects" }}</h1>
        </div>
      </div>
    </div>

    <div class="section section-padding">
      <div class="container">
        <!-- Healthcare Projects -->
        <div class="section-title text-center">
          <h4 class="title">
            {{
              currentLang === "zh"
                ? "面向医疗的智能数据系统"
                : "Data and AI Systems for Healthcare"
            }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="project in healthcareProjects"
            :key="project.name"
            class="col-lg-6 col-md-6"
          >
            <div class="sigma_service style-1">
              <div class="sigma_service-thumb">
                <img
                  :src="project.image"
                  :alt="project.name"
                  style="max-height: 200px; object-fit: cover"
                />
              </div>
              <div class="sigma_service-body">
                <h5>
                  <a :href="project.link" target="_blank">{{ project.name }}</a>
                </h5>
                <p>
                  {{
                    currentLang === "zh"
                      ? project.descriptionZh
                      : project.descriptionEn
                  }}
                </p>
                <a :href="project.link" target="_blank" class="btn-link mt-3">
                  {{ currentLang === "zh" ? "了解更多" : "Learn More" }}
                  <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Systems Projects -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{
              currentLang === "zh"
                ? "人工智能驱动的核心数据系统"
                : "Core Data + AI Systems"
            }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="project in aiSystemProjects"
            :key="project.name"
            class="col-lg-6 col-md-6"
          >
            <div class="sigma_service style-1">
              <div class="sigma_service-thumb">
                <img
                  :src="project.image"
                  :alt="project.name"
                  style="max-height: 200px; object-fit: cover"
                />
              </div>
              <div class="sigma_service-body">
                <h5>
                  <a :href="project.link" target="_blank">{{ project.name }}</a>
                </h5>
                <p>
                  {{
                    currentLang === "zh"
                      ? project.descriptionZh
                      : project.descriptionEn
                  }}
                </p>
                <a :href="project.link" target="_blank" class="btn-link mt-3">
                  {{ currentLang === "zh" ? "了解更多" : "Learn More" }}
                  <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced Database Projects -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{
              currentLang === "zh"
                ? "高级数据库技术"
                : "Advanced Database Technologies"
            }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="project in advancedDatabaseProjects"
            :key="project.name"
            class="col-lg-6 col-md-6"
          >
            <div class="sigma_service style-1">
              <div class="sigma_service-thumb">
                <img
                  :src="project.image"
                  :alt="project.name"
                  style="max-height: 200px; object-fit: cover"
                />
              </div>
              <div class="sigma_service-body">
                <h5>
                  <a :href="project.link" target="_blank">{{ project.name }}</a>
                </h5>
                <p>
                  {{
                    currentLang === "zh"
                      ? project.descriptionZh
                      : project.descriptionEn
                  }}
                </p>
                <a :href="project.link" target="_blank" class="btn-link mt-3">
                  {{ currentLang === "zh" ? "了解更多" : "Learn More" }}
                  <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Incubating Projects -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{ currentLang === "zh" ? "孵化项目" : "Incubating Projects" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="project in incubatingProjects"
            :key="project.name"
            class="col-lg-3 col-md-6"
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
                      ? project.descriptionZh
                      : project.descriptionEn
                  }}
                </p>
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
import {
  healthcareProjects,
  aiSystemProjects,
  incubatingProjects,
  advancedDatabaseProjects,
} from "../data/projectsData";

export default {
  name: "Projects",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      healthcareProjects,
      aiSystemProjects,
      incubatingProjects,
      advancedDatabaseProjects,
    };
  },
};
</script>
