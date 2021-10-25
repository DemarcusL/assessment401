'use strict';

const ItemModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data); 
    await item.save();
    res.status(200).json(item);
    res.send(item.json);
    // console.log('Hello from your add request');

    // console.log(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const items = await ItemModel.find({});
  // console.log('Hello from your get ALL request');

  console.log(items);
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await ItemModel.find({_id:id});
    // console.log('Hello from your get ONE request');

    console.log(items);  
  res.status(200).json(items[0]);
}

Data.deleteOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await ItemModel.find({_id:id});

  res.status(200).json(items[0]);
    console.log(items);  

};

module.exports = Data;
