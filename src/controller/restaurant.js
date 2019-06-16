import mongoose from 'mongoose';

import {Router} from 'express';
import Restaurant from '../model.restaurant';


export default({config, db}) => {
  let api = Router();

  //'/v1/restaurant/add'
  api.post('./add'(req, res){
    let newRest = new Restaraunt();

    newRest.name = request.body.name;

    newRest.save(err => {
      if(err){
        res.send(err);
      }
      res.json({message: 'Restaraunt saved successfully'});
    });
  });

  return api;
}
