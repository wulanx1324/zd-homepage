<template>
  <div class="section contact-section">
    <div class="container">
      <div class="section-title text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "关于我们" : "About Us" }}
        </h4>
      </div>
      <div class="sigma_product-additional-info">
        <div class="tab-content">
          <div class="tab-pane fade show active">
            <p class="contact-description">
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
</template>

<script>
import { useLanguage } from "../composables/useLanguage";

export default {
  name: "ContactSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      currentLang,
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

.contact-section {
  background-color: #fff;
  padding: 150px 0;
}

.contact-description {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
}
</style>
