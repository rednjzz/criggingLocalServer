import excelData from "./getExcelData";
import numberToAlph from "./numberToAlph";
import partsNameCombination from "./partsNameCombination";

const offset = 1;

const getPartsNameArray = (data, row, column, code, modeName, mainBoomLength, flyFixLuffing) => {
  let mainParts = [];
  let jibParts = [];
  
  for (let i = 1; i < column; i++) {  // B열부터 시작.
    let charIndex = numberToAlph(i); // B, C, D, E, F, ...
    if (i > 25 && i < 52) charIndex = numberToAlph(0) + numberToAlph(i - 26 * 1); // Z이후 엑셀은 AA AB AC AD ...
    if (i >= 52) charIndex = numberToAlph(1) + numberToAlph(i - 26 * 2); // AA이후 엑셀은 BA BB BC BD ...

    const partsAnalysisTable = excelData(data, charIndex, row, offset);

    // craneCode와 동일한 code일 경우
    if (partsAnalysisTable[0] === code) { 
      mainParts = partsAnalysisTable.slice(1);
      mainParts[1] = mainParts[1] + "_" + mainBoomLength;
    }
    // modeName(Fix, Luffing)이 같고 해당 길이가 같을 때
    if (partsAnalysisTable[0] === modeName && partsAnalysisTable[1] === flyFixLuffing) 
      jibParts = partsAnalysisTable.slice(2);
  }

  return partsNameCombination(mainParts, jibParts);
};

export default getPartsNameArray;
