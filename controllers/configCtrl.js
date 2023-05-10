const Config = require('../models/adminConfigModels')

const configCtrl = {
    getConfig: async (req, res) =>{
        try {
            const config = await Config.find()
            res.json(config)
        } catch (err) {
           return res.status(500).json({msg: err.message})
        }
    },
    createConfig: async (req, res) =>{
        try {
            const {bannerTitleRu, bannerInfoRu, bannerServicesRu, bannerServicesInfo1Ru, bannerServicesInfo2Ru, bannerServicesInfo3Ru, bannerBestProductRu, bannerNewProductRu, bannerAboutTitlBodyeRu, footerInfoRu, footerPhone, footerEmail, openShopRu, closeShopRu, aboutTitleBodyRu, aboutTitleHeadRu, aboutHeadInfoRu, aboutMapTitleRu, categoryTitleRu, cooperationTitleRu, bannerTitleUz, bannerInfoUz, bannerServicesUz, bannerServicesInfo1Uz, bannerServicesInfo2Uz, bannerServicesInfo3Uz, bannerBestProductUz, bannerNewProductUz, bannerAboutTitlBodyeUz, footerInfoUz, openShopUz, closeShopUz, aboutTitleBodyUz, aboutTitleHeadUz, aboutHeadInfoUz, aboutMapTitleUz, categoryTitleUz, cooperationTitleUz} = req.body;

            const newConfig = Config({
                bannerTitleRu, bannerInfoRu, bannerServicesRu, bannerServicesInfo1Ru, bannerServicesInfo2Ru, bannerServicesInfo3Ru, bannerBestProductRu, bannerNewProductRu, bannerAboutTitlBodyeRu, footerInfoRu, footerPhone, footerEmail, openShopRu, closeShopRu, aboutTitleBodyRu, aboutTitleHeadRu, aboutHeadInfoRu, aboutMapTitleRu, categoryTitleRu, cooperationTitleRu, bannerTitleUz, bannerInfoUz, bannerServicesUz, bannerServicesInfo1Uz, bannerServicesInfo2Uz, bannerServicesInfo3Uz, bannerBestProductUz, bannerNewProductUz, bannerAboutTitlBodyeUz, footerInfoUz, openShopUz, closeShopUz, aboutTitleBodyUz, aboutTitleHeadUz, aboutHeadInfoUz, aboutMapTitleUz, categoryTitleUz, cooperationTitleUz
            })

            await newConfig.save()
            res.json({msg: "Created a  Configs"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateConfig: async (req, res) =>{
        try {
            const {bannerTitleRu, bannerInfoRu, bannerServicesRu, bannerServicesInfo1Ru, bannerServicesInfo2Ru, bannerServicesInfo3Ru, bannerBestProductRu, bannerNewProductRu, bannerAboutTitlBodyeRu, footerInfoRu, footerPhone, footerEmail, openShopRu, closeShopRu, aboutTitleBodyRu, aboutTitleHeadRu, aboutHeadInfoRu, aboutMapTitleRu, categoryTitleRu, cooperationTitleRu, bannerTitleUz, bannerInfoUz, bannerServicesUz, bannerServicesInfo1Uz, bannerServicesInfo2Uz, bannerServicesInfo3Uz, bannerBestProductUz, bannerNewProductUz, bannerAboutTitlBodyeUz, footerInfoUz, openShopUz, closeShopUz, aboutTitleBodyUz, aboutTitleHeadUz, aboutHeadInfoUz, aboutMapTitleUz, categoryTitleUz, cooperationTitleUz} = req.body;

            await Config.findOneAndUpdate({_id: req.params.id}, {
                bannerTitleRu, bannerInfoRu, bannerServicesRu, bannerServicesInfo1Ru, bannerServicesInfo2Ru, bannerServicesInfo3Ru, bannerBestProductRu, bannerNewProductRu, bannerAboutTitlBodyeRu, footerInfoRu, footerPhone, footerEmail, openShopRu, closeShopRu, aboutTitleBodyRu, aboutTitleHeadRu, aboutHeadInfoRu, aboutMapTitleRu, categoryTitleRu, cooperationTitleRu, bannerTitleUz, bannerInfoUz, bannerServicesUz, bannerServicesInfo1Uz, bannerServicesInfo2Uz, bannerServicesInfo3Uz, bannerBestProductUz, bannerNewProductUz, bannerAboutTitlBodyeUz, footerInfoUz, openShopUz, closeShopUz, aboutTitleBodyUz, aboutTitleHeadUz, aboutHeadInfoUz, aboutMapTitleUz, categoryTitleUz, cooperationTitleUz
            })

            res.json({msg: "Update a product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteConfig: async (req, res) =>{
        try {
            await Config.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted a Config"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = configCtrl