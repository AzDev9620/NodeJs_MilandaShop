const Partner = require('../models/partnerModels')

const partnerCtrl = {
    getPartner: async (req, res) =>{
        try {
            const partner = await Partner.find()
            res.json(partner)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPartner: async (req, res) =>{
        try {
            const {company,  phone, offer} = req.body;
            const partners = await Partner.findOne({company})
            if(partners) return res.status(400).json({msg: "This cstegory already exists"})

            const newPartner = new Partner({company,  phone, offer})

            await newPartner.save()
            res.json({msg: "You offer has been delivered"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deletePartner: async (req, res) =>{
        try {
            await Partner.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Partner"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


module.exports = partnerCtrl