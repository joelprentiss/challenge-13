const router = require('express').Router();
const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try{
  const categoriesData = await Category.findAll();
  include :[{model: Product, through: Category, as: 'category_id'}]
  res.status(200).json(categoriesData);
  // be sure to include its associated Products
}catch(err){
  res.status(500).json(err);
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try{
    const categoriesData = await Category.findbyPK(req.params.id,{
      include: [{model: Product, through: Category, as:'category_id'}]
    
    });
    res.status(200).json(categoriesData);
  } 
   catch(err){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const categoriesData = await Category.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log(req.body)
  const categoriesData = await Category();
  let id = req.params.id;
  let results = await Category.findOne({
    id: new Category.afterCreate(results)
    
  })
  res.status(200).json(id)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{
    const categoriesData = await Category.destroy({
      where:{
        id: req.params.id
      }
    });
    if (!categoriesData){
      res.status(404).json({message: 'No category found with this ID'});
      return
    }
    res.status(200).json(categoriesData);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
