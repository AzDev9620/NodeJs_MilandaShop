const Category = require('../models/catigoryModels')

const categoryCtrl = {
    getCategories: async (req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
            //if user have role = 1 -----> admin
            //only admin can create, delete,  and update catigory

            const {name, images} = req.body;
            if(!images) 
                return res.status(400).json({msg: "No image upload"})
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "This category already exists"})

            const newCategory = new Category({name, images})

            await newCategory.save()
            res.json({msg: "Created a category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCatigory: async (req, res) =>{
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCatigory: async (req, res) =>{
        try {
            const {name, images} = req.body;
            if(!images) 
                return res.status(400).json({msg: "No image upload"})
            
            await Category.findOneAndUpdate({_id: req.params.id}, {name, images})

            res.json({msg: "Updated a Catedory"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = categoryCtrl