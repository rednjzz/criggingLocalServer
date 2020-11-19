const express = require('express');
const router = express.Router();
import partsArray from "../libs/libs/partsArray";
import startApp from "../libs/libs/riggingData";

router.get('/', (req,res,next) => {

  const workValue = { // input value  
    safetyFactor : 85,
    craneLocation : 'back',  // front, back, side

    workWeight : 20,
    workBuilding : {  // 크레인이 건물에 붙는 면을 가로.
      vertical : 18,
      horizontal : 0,
      height : 12,
    },
    block : {
      vertical1: 4,
      horizontal1: 5,
      height1: 3,
      vertical2: 3,
      height2: 0
    },
  };

  const craneDataCal = startApp(workValue);
  const craneData = craneDataCal[craneDataCal.length-45];
  console.log(craneDataCal.length);
  const {partsData, partsList, connectionData} = partsArray(craneData);
  // const {partsData, partsList, connectionData}= partsArray(craneData);  
  
  console.log(craneData);
  console.log("~~~~~~~~~~~~~~~`");
  console.log(partsData);
  console.log("~~~~~~~~~~~~~~~`");
  console.log(partsList);
  console.log("~~~~~~~~~~~~~~~`");
  console.log(connectionData);
  res.send({
    "craneData": craneData, 
    "partsData": partsData,
    "partsList": partsList,
    "wireData": connectionData,
  });
});

router.post('/', (req,res,next) => {
  const name = req.body.name;
  const mode = req.body.mode;
  console.log(name,mode);
  res.send(req.body);
  // res.end();
  
}); 

module.exports = router;
