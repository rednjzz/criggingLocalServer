import getExcelData from "./excelConvert";
import getConnectionDataArray from "./getConnectionDataArray";
import getPartsNameDataArray from "./getPartsNameDataArray";

const partsArray = (craneData) => {
  let analysisIndex = 0;
  let dataIndex = 0;
  let connectionIndex = 0;

  const partsDataTable = getExcelData("partsDataTable");
  // searching for excel name index
  for (let i = 0; i < partsDataTable.length; i++) {
    switch (partsDataTable[i].fileName) {
      case "partsAnalysisTable":
        analysisIndex = i;
        break;
      case "byPartsData":
        dataIndex = i;
        break;
      case "connectionData":
        connectionIndex = i;
        break;
    }
  }

  const partsNameArray = getPartsNameDataArray(partsDataTable[analysisIndex], craneData);
  return {
    partsList: partsNameArray,
    partsData: getPartsNameDataArray(partsDataTable[dataIndex], craneData, partsNameArray),
    connectionData: getConnectionDataArray(partsDataTable[connectionIndex], craneData),
  };
};

export default partsArray;
