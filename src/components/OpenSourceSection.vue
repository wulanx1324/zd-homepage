<template>
  <div class="section opensource-section">
    <div class="container">
      <div class="section-title text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "开源系统" : "Open Source" }}
        </h4>
      </div>
      <div class="row">
        <div
          v-for="project in opensourceData"
          :key="project.name"
          class="col-lg-4 col-md-6 opensource-card-col"
        >
          <article class="sigma_post">
            <div class="sigma_post-thumb2">
              <p>{{ project.type }}</p>
              <a :href="project.link" target="_blank">
                <img :src="project.img" class="opensource-image" />
              </a>
            </div>
            <div class="sigma_post-body2">
              <h5>
                <a :href="project.link" target="_blank">{{ project.name }}</a>
              </h5>
              <p>
                {{
                  currentLang === "zh"
                    ? project.description_zh
                    : project.description_en
                }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import { opensourceData } from "../data/opensourceData";

export default {
  name: "OpenSourceSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      currentLang,
      opensourceData,
    };
  },
};
</script>

<style scoped>
/* 模块标题样式 */
.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #252525;
  line-height: 84px;
}

.opensource-section {
  background-color: #f7f8fc;
  padding: 150px 0;
}

.opensource-card-col {
  display: flex;
}

.opensource-image {
  background-color: white;
  border: solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}
</style>
