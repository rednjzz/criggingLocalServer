const express = require('express');
const router = express.Router();
const fs = require('fs');
import partsArray from "../libs/libs/partsArray";
import startApp from "../libs/libs/riggingData";

router.get('/', (req,res,next) => {
  const workValue = { // input value  
    safetyFactor : 85,
    craneLocation : 'back',  // front, back, side

    workWeight : 25,
    workBuilding: {  // 크레인이 건물에 붙는 면을 가로.
      vertical : 5,
      horizontal : 5,
      height : 110,
    },
    block : {
      vertical1: 0,
      horizontal1: 0,
      height1: 0,
      vertical2: 0,
      height2: 0
    },
  }

  let craneDataCal;
  let craneData;
  let craneData2;
  let partsData,partsList,connectionData;

  try{
    craneDataCal = startApp(workValue);
    // craneData = craneDataCal[craneDataCal.length-20];
    craneData = craneDataCal[2];
    console.log(craneData);
    craneData2 = craneData; 
    const _ = partsArray(craneData);
    
    // console.log("크레인전체데이터",_);
    partsData = _.partsData;
    partsList = _.partsList;
    connectionData = _.connectionData;
  } catch(e) {
    console.error(e);
  }

  // console.log(craneDataCal.length);
  
  
  fs.appendFileSync("./log.txt", JSON.stringify(workValue, null, 2))
  craneDataCal.forEach((craneData, index) => {
    fs.appendFileSync("./log.txt", '[' +index + ']' + craneData.craneName + ' ' + craneData.craneCode + ' ' + craneData.craneData.mainBoom + ' ' + craneData.craneData.flyFixLuffing + '\n')
  });

  // console.log(workValue);  
  craneDataCal.forEach((craneData, index) => {
    console.log(`[${index}]`,craneData.craneName, craneData.craneCode, craneData.craneData.mainBoom, craneData.craneData.flyFixLuffing)
  })
  try{
      //  console.log(craneData);
    // console.log("~~~~~~~~~~~~~~~`");
    // console.log(partsData);
    // console.log("~~~~~~~~~~~~~~~`");
    // console.log(partsList);
    // console.log("~~~~~~~~~~~~~~~`");
    // console.log(connectionData);
  } catch (e) {
    console.log(e);
  }
  

  res.send({
    "craneData": craneData, 
    "partsData": partsData,
    "partsList": partsList,
    "wireData": connectionData,
  });
});

module.exports = router;