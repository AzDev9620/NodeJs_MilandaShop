const mongoose = require('mongoose')

const configSchema = new mongoose.Schema({
    bannerTitleRu:{
        type: String,
        default: "Быстрый и удобный шоппинг, не выходя из дома.",
        unique: true
    },
    bannerInfoRu: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet quis erat.",
        unique: true
    },

    bannerServicesRu:{
        type: String,
        default: "Наши преимущества",
        unique: true
    },
    bannerServicesInfo1Ru:{
        type: String,
        default: "Лучший сервис",
        unique: true
    },bannerServicesInfo2Ru:{
        type: String,
        default: "Экспресс доставка",
        unique: true
    },bannerServicesInfo3Ru:{
        type: String,
        default: "Лучшее качество в стране",
        unique: true
    },

    bannerBestProductRu:{
        type: String,
        default: "Лучшие товары",
        unique: true
    },
    bannerNewProductRu:{
        type: String,
        default: "Новые товары",
        unique: true
    },

    bannerAboutTitlBodyeRu:{
        type: String,
        default: "Создай свой лук на все случаи жизни в “Imperia”",
        unique: true
    },

    footerInfoRu: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium aenean dignissim sit cursus dictumst adipiscing nunc.",
        unique: true
    },
    footerPhone: {
        type: String,
        default: "+998 90 958 78 87",
        unique: true
    },
    footerEmail: {
        type: String,
        default: "support@fonon.uz",
        unique: true
    },
    openShopRu: {
        type: String,
        default: "По будням 9:00 to 18:00",
        unique: true
    },
    closeShopRu: {
        type: String,
        default: "В выходные 11:00 to 18:00",
        unique: true
    },
    
    aboutTitleBodyRu: {
        type: String,
        default: "О нас",
        unique: true
    },
    aboutTitleHeadRu: {
        type: String,
        default: "«Потрясающий опыт, мне это нравится много. Спасибо команде.",
        unique: true
    },
    aboutHeadInfoRu: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo, in sit tellus fermentum donec quisque diam molestie. Enim purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia donec nunc viverra. Eu nullam cras eget egestas dui id platea magna. Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis.",
        unique: true
    },
    aboutMapTitleRu:{
        type: String,
        default: "Работаем по всему миру.",
        unique: true
    },

    categoryTitleRu: {
        type: String,
        default: "Категории",
        unique: true
    },

    cooperationTitleRu: {
        type: String,
        default: "Здравствуйте, оставьте заявку для сотрудничества",
        unique: true
    },


    // Uzb Language

    bannerTitleUz:{
        type: String,
        default: "Uyingizdan chiqmasdan tez va qulay xaridlar.",
        unique: true
    },
    bannerInfoUz: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet quis erat.",
        unique: true
    },

    bannerServicesUz:{
        type: String,
        default: "Bizning afzalliklarimiz",
        unique: true
    },
    bannerServicesInfo1Uz:{
        type: String,
        default: "Eng yaxshi xizmat",
        unique: true
    },bannerServicesInfo2Uz:{
        type: String,
        default: "Tez etkazib berish",
        unique: true
    },bannerServicesInfo3Uz:{
        type: String,
        default: "Mamlakatdagi eng yaxshi sifat",
        unique: true
    },

    bannerBestProductUz:{
        type: String,
        default: "Eng yaxshi mahsulotlar",
        unique: true
    },
    bannerNewProductUz:{
        type: String,
        default: "Yangi mahsulotlar",
        unique: true
    },

    bannerAboutTitlBodyeUz:{
        type: String,
        default: "“Imperia” da barcha holatlar uchun o'z kamoningizni yarating",
        unique: true
    },

    footerInfoUz: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium aenean dignissim sit cursus dictumst adipiscing nunc.",
        unique: true
    },
    openShopUz: {
        type: String,
        default: "Ish kunlari soat 9:00 dan 18:00 gacha",
        unique: true
    },
    closeShopUz: {
        type: String,
        default: "Dam olish kunlari soat 11:00 dan 18:00 gacha",
        unique: true
    },
    
    aboutTitleBodyUz: {
        type: String,
        default: "Biz haqimizda",
        unique: true
    },
    aboutTitleHeadUz: {
        type: String,
        default: "«Ajoyib tajriba, menga bu juda yoqadi. Jamoaga rahmat.",
        unique: true
    },
    aboutHeadInfoUz: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo, in sit tellus fermentum donec quisque diam molestie. Enim purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia donec nunc viverra. Eu nullam cras eget egestas dui id platea magna. Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis.",
        unique: true
    },
    aboutMapTitleUz:{
        type: String,
        default: "Biz butun dunyoda ishlaymiz.",
        unique: true
    },

    categoryTitleUz: {
        type: String,
        default: "Kategoriyalar",
        unique: true
    },

    cooperationTitleUz: {
        type: String,
        default: "Salom, hamkorlik uchun so'rov qoldiring",
        unique: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model("Config", configSchema)