import getCraneData from "./getCraneData";
import modeSelect from "./modeSelect";
import getCraneDistance from "./getCraneDistance";
import getExcelData from "./excelConvert";

const getRiggingData = (workValue) => {
  const specTableInfo = getExcelData('craneSpecTable');
  // 초과치 입력시 처리. 한계조건 : 무게 1200, 작업높이 136, 작업거리 136
  let craneInfo = new Array; // 전체 크레인에 대한 리깅가능한 데이터를 모아둔 배열.

  if(workValue.workWeight > 1200 || workValue.workBuilding.height > 170 || workValue.workBuilding.vertical > 129 ||workValue.workWeight < 1 || workValue.workBuilding.height < 1 || workValue.workBuilding.vertical <= 0){
    console.log("입력한 조건값이 올바르지 않습니다.");
    return craneInfo;
  }
  specTableInfo.forEach( (excelInfo) => {  // 엑셀파일 전부
    let preCraneCode = '';
    // let printPreCode = '';
    let craneDistance = 0;
    const craneName = excelInfo.fileName; // 500t, 750t, 1200t 구분
    const selectCraneLocation = getCraneDistance(craneName);

    switch(workValue.craneLocation){
      case 'back' :
        craneDistance = selectCraneLocation.rearDistance;
        break;
      case 'front' :
        craneDistance = selectCraneLocation.frontDistance;
        break;
      case 'side' :
        craneDistance = selectCraneLocation.trigger;
        break;
    };

    // if(craneName === 'L_11200_9.1'){ // 테스트용 if 1
    // crane 이름, 코드명 출력을 위한 콘솔
    // console.log(craneName);
    excelInfo.allSheetName.map( (sheetName, index) => { // 엑셀 파일의 sheet
      // if(sheetName === 'T7_202t_TAB1780121'){ // 테스트용 if 2 
      const { row, column } = excelInfo.length[index];
      // const row = excelInfo.length[index].row;  // sheet의 row 길이
      // const column = excelInfo.length[index].column;  // sheet의 column 길이
      const craneCode = sheetName.split('_')[0];  // TN, TY3, TNZF, TYVENZF 등 모드별 이름
      const modeName = modeSelect(sheetName); // main, fix, luffing 구분
      const craneData = getCraneData(excelInfo.data[sheetName], row, column, modeName, workValue, craneDistance); // 작업값을 만족하는 craneData 계산
      // crane 이름, 코드명 출력을 위한 콘솔
      // if(printPreCode !== craneCode){
      //   console.log(craneCode);
      // }
      // printPreCode = craneCode;
      // console.log(craneCode);
      if(craneData){  // 작업값들을 만족하는 제원표의 계산데이터
        if(preCraneCode !== craneCode){
          craneInfo.push({
            craneName : craneName,
            craneCode : craneCode,
            craneModeName : modeName,
            excelSheetName : sheetName,
            craneData : craneData,
          });
          preCraneCode = craneCode;
        }
      }
    // }// 테스트용 if 2
    });
  }
  // }// 테스트용 if 1
  );
  if(craneInfo.length) {
    craneInfo.sort( (a, b) => a.craneName.split('_')[1] - b.craneName.split('_')[1] );  // 크레인이름 오름차순 정렬
    return craneInfo;
  } else return craneInfo;
};

export default getRiggingData;