const Ordered = require('../models/orderedregister')

const orderedCtrl = {
    getOrdered: async (req, res) =>{
        try {
            const ordered = await Ordered.find(
                res.json(ordered)
            )
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    registerOrdered: async (req, res) =>{
        try {
            const {name, fullAddress, phone, products, payme, click} = req.body;

            const newOrdered = new Ordered({name, fullAddress, phone, products, payme, click})

            await newOrdered.save()
            res.json({msg: "Create Ordered"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteOrdered: async (req, res) =>{
        try {
            await Ordered.findOneAndDelete(req.params.id)
            res.json({msg: "Deleted Ordered"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = orderedCtrl