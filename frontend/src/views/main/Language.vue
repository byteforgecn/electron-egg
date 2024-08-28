<script setup>
import { useI18n } from 'vue-i18n'
const I18n = useI18n()
const { locale } = useI18n()

const changeLang = (lang) => {
  localStorage.setItem('language', lang.type ?? 'zh-cn')
  locale.value = lang.type
}

</script>

<template>
  <h1>语言</h1>
  <el-row :gutter="20">
    <el-col :span="6" v-for="lang in I18n.messages.value">
      <el-card style="max-width: 200px;"
               :class="locale === lang.type?'currentLanguage':''"
               @click="changeLang(lang)">
        <template #header>
          <div class="card-header">
            <span>{{lang.name}}</span>
          </div>
        </template>
        <p>{{lang.describe}}</p>
<!--        <template #footer>Footer content</template>-->
      </el-card>
    </el-col>
  </el-row>

</template>

<style scoped>
.currentLanguage {
  background-color: #409EFF;
}
</style>
