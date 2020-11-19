import getPartsDataArray from "./getPartsDataArray";
import getPartsNameArray from "./getPartsNameArray";

const getPartsNameDataArray = (excelInfo, craneData, partsNameArray) => {
  const {
    craneName,
    craneCode,
    craneModeName,
    craneData: { mainBoom, flyFixLuffing },
  } = craneData;
  let excelPartsArray = new Array();

  excelInfo.allSheetName.map((sheetName, index) => {
    const { row, column } = excelInfo.length[index];
    // 유저가 선택한 크레인톤수와 파츠분석표 톤수가 같을 때
    if (sheetName === craneName && !partsNameArray)
      excelPartsArray = getPartsNameArray(
        excelInfo.data[sheetName],
        row,
        column,
        craneCode,
        craneModeName,
        mainBoom,
        flyFixLuffing
      );
    if (sheetName === craneName && partsNameArray)
      excelPartsArray = getPartsDataArray(excelInfo.data[sheetName], row, column, partsNameArray);
  });
  return excelPartsArray;
};

export default getPartsNameDataArray;
