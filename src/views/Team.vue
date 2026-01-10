<template>
  <div>
    <div
      class="sigma_subheader style-2 dark-overlay"
      style="background-image: url(@assets/img/subheader.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <h1>{{ currentLang === "zh" ? "研究团队" : "People" }}</h1>
        </div>
      </div>
    </div>

    <div class="section section-padding">
      <div class="container">
        <!-- PI Section -->
        <div class="section-title text-center">
          <h4 class="title">
            {{ currentLang === "zh" ? "团队负责人" : "Principal Investigator" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="member in piData"
            :key="member.name"
            class="col-lg-3 col-md-6"
          >
            <div class="modern-team-card">
              <div class="team-card-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card-content">
                <h5 class="team-card-name">
                  {{ currentLang === "zh" ? member.name : member.name_en }}
                </h5>
                <p class="team-card-position">
                  {{
                    currentLang === "zh" ? member.position : member.position_en
                  }}
                </p>
                <p class="team-card-description">
                  {{
                    currentLang === "zh"
                      ? member.description
                      : member.description_en
                  }}
                </p>
                <div class="team-card-actions">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="team-card-action"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="team-card-action"
                  >
                    <i class="far fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Faculty Section -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{ currentLang === "zh" ? "教师" : "Faculty" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="member in facultyData"
            :key="member.name"
            class="col-lg-3 col-md-6"
          >
            <div class="modern-team-card">
              <div class="team-card-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card-content">
                <h5 class="team-card-name">
                  {{ currentLang === "zh" ? member.name : member.name_en }}
                </h5>
                <p class="team-card-position">
                  {{
                    currentLang === "zh" ? member.position : member.position_en
                  }}
                </p>
                <p class="team-card-description">
                  {{
                    currentLang === "zh"
                      ? member.description
                      : member.description_en
                  }}
                </p>
                <div class="team-card-actions">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="team-card-action"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="team-card-action"
                  >
                    <i class="far fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Assistant Section -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{ currentLang === "zh" ? "助理" : "Assistant" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="member in assistantData"
            :key="member.name"
            class="col-lg-3 col-md-6"
          >
            <div class="modern-team-card">
              <div class="team-card-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card-content">
                <h5 class="team-card-name">
                  {{ currentLang === "zh" ? member.name : member.name_en }}
                </h5>
                <p class="team-card-position">
                  {{
                    currentLang === "zh" ? member.position : member.position_en
                  }}
                </p>
                <div class="team-card-actions">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="team-card-action"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Students Section -->
        <div class="section-title text-center" style="margin-top: 50px">
          <h4 class="title">
            {{ currentLang === "zh" ? "学生" : "Students" }}
          </h4>
        </div>
        <div class="row">
          <div
            v-for="member in studentsData"
            :key="member.name"
            class="col-lg-3 col-md-6"
          >
            <div class="modern-team-card">
              <div class="team-card-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-card-content">
                <h5 class="team-card-name">
                  {{ currentLang === "zh" ? member.name : member.name_en }}
                </h5>
                <p class="team-card-position">
                  {{
                    currentLang === "zh" ? member.position : member.position_en
                  }}
                </p>
                <p class="team-card-description">
                  {{
                    currentLang === "zh"
                      ? member.description
                      : member.description_en
                  }}
                </p>
                <div class="team-card-actions">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="team-card-action"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="team-card-action"
                  >
                    <i class="far fa-globe"></i>
                  </a>
                </div>
              </div>
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
import {
  piData,
  facultyData,
  assistantData,
  studentsData,
} from "../data/teamData";

export default {
  name: "Team",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      piData,
      facultyData,
      assistantData,
      studentsData,
    };
  },
};
</script>
