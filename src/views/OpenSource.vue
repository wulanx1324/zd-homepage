<template>
  <div>
    <div
      class="sigma_subheader style-2 dark-overlay"
      style="background-image: url(@assets/img/subheader.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <h1>{{ currentLang === "zh" ? "开源系统" : "Open Source" }}</h1>
        </div>
      </div>
    </div>

    <div class="section section-padding">
      <div class="container">
        <div class="row">
          <div
            v-for="project in opensourceData"
            :key="project.name"
            class="col-lg-4 col-md-6"
            style="display: flex"
          >
            <article class="sigma_post">
              <div class="sigma_post-thumb2">
                <p>{{ project.type }}</p>
                <a :href="project.link" target="_blank">
                  <img
                    :src="project.img"
                    style="
                      background-color: white;
                      border: solid rgba(0, 0, 0, 0.08);
                      border-radius: 8px;
                    "
                  />
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
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { opensourceData } from "../data/opensourceData";

export default {
  name: "OpenSource",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      opensourceData,
    };
  },
};
</script>
