import mongoose from 'mongoose';

import {Router} from 'express';
import Restaurant from '../model.restaurant';


export default({config, db}) => {
  let api = Router();

  //crud = create read update delete

  //'/v1/restaurant/add' - create
  api.post('./add', (req, res){
    let newRest = new Restaraunt();

    newRest.name = request.body.name;

    newRest.save(err => {
      if(err){
        res.send(err);
      }
      res.json({message: 'Restaraunt saved successfully'});
    });
  });

  // '/v1/restaurant' - Read
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants)=>{
      if(err){
        res.send(err);
      }
      res.json(restaurants);
    });
  });

// '/v1/restaurant/:id' -Read 1
api.get('/:id', (req, res)=>{
  Restaurants.findById(req.params.id, (err, restaurant)=>{
      if(err){
        res.send(err);
      }
      res.json(restaurant);
  });
});



  // update    '/v1/restaurant/:id'- update
api.put('/:id', (req, res)=>{
  Restaurant.findById(req.params.id, (err, restaurant)=>{
    if(err){
      res.send(err);
    }
    restaurant.name = req.body.name;
    restaurant.save(err =>{
      if(err){
        res.send(err);
      }
      res.json({message: "Restaurant info updated"});
    });
  });
});


  //delete






  return api;
}
