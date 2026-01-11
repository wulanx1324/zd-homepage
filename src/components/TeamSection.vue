<template>
  <div id="team" class="section team-section">
    <div class="team-container">
      <div class="text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "研究团队" : "Our Team" }}
        </h4>
      </div>

      <!-- PI Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "学科带头人" : "Principal Investigator" }}
        </div>
        <div
          v-for="member in piData"
          :key="member.name"
          class="team-member-row"
        >
          <div class="member-avatar">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div class="member-info">
            <div class="member-name">
              <span>{{
                currentLang === "zh" ? member.name : member.name_en
              }}</span>
              <div class="member-icons">
                <a
                  v-if="member.email"
                  :href="`mailto:${member.email}`"
                  class="member-icon"
                  title="Email"
                >
                  <img
                    src="/assets/img/materials/team/email-icon.png"
                    alt="Email"
                  />
                </a>
                <a
                  v-if="member.website"
                  :href="member.website"
                  target="_blank"
                  class="member-icon"
                  title="Website"
                >
                  <img
                    src="/assets/img/materials/team/home-web-icon.png"
                    alt="Website"
                  />
                </a>
              </div>
            </div>
            <span class="member-position">
              {{ currentLang === "zh" ? member.position : member.position_en }}
            </span>
            <span class="member-description">
              {{
                currentLang === "zh"
                  ? member.description
                  : member.description_en
              }}
            </span>
          </div>
        </div>
      </div>

      <!-- Faculty Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "教师" : "Faculty" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in facultyData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Assistant Staff Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "助理老师" : "Assistant Staff" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in assistantData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Students Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "学生" : "Students" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in studentData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import {
  piData,
  facultyData,
  assistantData,
  studentsData,
} from "../data/teamData";

export default {
  name: "TeamSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      currentLang,
      piData,
      facultyData,
      assistantData,
      studentData: studentsData,
    };
  },
};
</script>

<style scoped>
.team-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 60px;
}

.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

.team-section {
  background-color: #fff;
  padding: 150px 0;
}

/* 团队分类 */
.team-category {
  margin-top: 90px;
}

/* 分类标题 */
.category-title {
  width: 300px;
  height: 70px;
  background: #1ebab2;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 35px;
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;
  line-height: 70px;
  text-align: center;
  margin-bottom: 60px;
}

/* 团队成员行 */
.team-member-row {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.team-member-row.half-width {
  width: calc(50% - 80px);
}

/* 团队网格布局 (教师和学生一行两个) */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px 160px;
}

/* 成员头像 */
.member-avatar {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 16px rgba(21, 34, 50, 0.08);
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 成员信息 */
.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.member-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 32px;
  color: #222222;
  line-height: 45px;
}

.member-name > span {
  flex-shrink: 0;
}

.member-icons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.member-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
}

.member-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.member-icon:hover img {
  filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(456%)
    hue-rotate(129deg) brightness(91%) contrast(89%);
}

.member-position {
  font-weight: 400;
  font-size: 26px;
  color: #8c8c8c;
  line-height: 37px;
  margin-top: 6px;
  text-align: justify;
}

.member-description {
  margin-top: 12px;
  font-weight: 400;
  font-size: 22px;
  color: #222222;
  line-height: 50px;
  text-align: justify;
}

/* 响应式：1200px以下一行只展示一个人 */
@media (max-width: 1200px) {
  .team-member-row.half-width {
    width: 100%;
  }

  .team-grid {
    gap: 40px;
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .team-container {
    padding: 0 60px;
  }

  .module-title {
    text-align: center;
  }

  .team-section {
    padding: 60px 0;
  }

  .team-category {
    margin-top: 50px;
  }

  /* 分类标题居中 */
  .category-title {
    margin: 0 auto 40px;
  }

  /* 团队成员行 - 移动端布局 */
  .team-member-row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  /* 上半部分：头像、名字职称、icons */
  .team-member-row .member-avatar {
    width: 150px;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .team-member-row {
    position: relative;
    padding-left: 0;
  }

  /* 信息区域容器 */
  .member-info {
    padding-top: 0;
  }

  /* 头部信息区（头像+名字职称+icons） */
  .member-info::before {
    content: "";
    display: block;
    height: 160px; /* 为头像+名字职称区域预留空间 */
  }

  .member-avatar {
    width: 150px;
    height: 150px;
  }

  /* 名字和icons的容器 */
  .member-name {
    position: absolute;
    top: 40px;
    left: 170px; /* 头像150px + 20px间距 */
    right: 80px; /* 为icons预留空间 */
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: calc(100% - 180px);
  }

  .member-name > span {
    width: 100%;
    text-align: left;
  }

  /* Icons固定在右侧 */
  .member-icons {
    position: absolute;
    top: 20px;
    right: 0;
    gap: 12px;
  }

  .member-icon img {
    filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(456%)
      hue-rotate(129deg) brightness(91%) contrast(89%);
  }

  .member-icon {
    width: 50px;
    height: 50px;
  }

  /* 职称位置 */
  .member-position {
    position: absolute;
    top: 86px;
    left: 170px;
    right: 80px;
    margin-top: 0;
  }

  /* 个人详情在最下方 */
  .member-description {
    margin-top: 0;
    text-align: left;
  }

  .team-grid {
    gap: 30px;
  }

  .team-member-row.half-width {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
