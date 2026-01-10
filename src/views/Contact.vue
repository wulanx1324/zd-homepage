<template>
  <div>
    <div
      class="sigma_subheader dark-overlay dark-overlay-2"
      style="background-image: url(@assets/img/contact-banner.jpg)"
    >
      <div class="container">
        <div class="sigma_subheader-inner">
          <div class="sigma_subheader-text">
            <h1>{{ currentLang === "zh" ? "关于我们" : "About Us" }}</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Information Start -->
    <div class="section light-bg" style="padding: 50px">
      <div class="container">
        <div class="sigma_product-additional-info">
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <p>
                {{
                  currentLang === "zh"
                    ? "浙江大学软件学院数据库系统研究组是数据库组的一个子团队，主要开展数据库系统、分布式与区块链系统、机器学习与大规模分析等方向的研究，涵盖系统架构、性能问题、安全性、准确性与正确性等多个方面。我们的团队与业界紧密合作（例如在医疗健康分析和糖尿病前期预防方面，与国大医院、裕廊健康、陈笃生医院、新加坡中央医院、KK妇幼医院合作；在金融分析方面，与银行和投资公司合作），并积极探索5G等信息技术在医疗、金融、智慧城市等应用领域中的颠覆性创新潜力。"
                    : "The database system research group, a subgroup of the database group at School of Software Technology Zhejiang University, conducts research in database systems, distributed and blockchain systems, machine learning and large scale analytics, in the aspects of system architectures, performance issues, security, accuracy and correctness. Our group works closely with the industry (eg. National University Hospital, Jurong Health, Tan Tok Seng Hospital, Singapore General Hospital, KK Hospital on healthcare analytics and prediabetes prevention, and banks and investment firms on financial analytics), and exploits IT and technoogy such as 5G for disruption and innovation in various appplication domains, such as healthcare, finance and smart city."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Additional Information End -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useLanguage } from "../composables/useLanguage";

export default {
  name: "Contact",
  setup() {
    const { currentLang, initLanguage } = useLanguage();

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
    };
  },
};
</script>
