import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh_CN'
import enUS from './locales/en_US'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("language") || "zh-cn",
    messages: {
        'zh-cn': zhCN,
        'en-us': enUS
    }
})
console.log(localStorage.getItem("language"))
export default i18n
