import excelData from "./getExcelData";
import numberToAlph from "./numberToAlph";

export default (excelInfo, craneData) => {
  const {
    craneName,
    craneCode
  } = craneData;
  const result = [];

  excelInfo.allSheetName.map((sheetName, index) => {
    if (sheetName === craneName) {
      const offset = 1;
      const { row, column } = excelInfo.length[index];
      let wireDataArray = new Array();
    
      for (let i = 1; i < column; i++) {
        let charIndex = numberToAlph(i);
        if (i > 25 && i < 52) charIndex = numberToAlph(0) + numberToAlph(i - 26 * 1); // Z이후 엑셀은 AA AB AC AD ...
        if (i >= 52) charIndex = numberToAlph(1) + numberToAlph(i - 26 * 2); // AA이후 엑셀은 BA BB BC BD ...
    
        const conDataArray = excelData(excelInfo.data[sheetName], charIndex, row, offset);
    
        if (conDataArray[0] === craneCode) {
          wireDataArray.push(conDataArray.slice(3));
        }
      
      }
      // 이거는 왜 안돼었을까?
      // const wireObject = {
      //   from: {
      //     name: "String",
      //     number: 1,
      //   },
      //   to: {
      //     name: "String",
      //     number: 2,
      //   },
      // };

      // wireObject들을 요소로 가지는 wireDataArray길이의 배열 생성
      for (let i = 0; i < wireDataArray[0].length; i++) {
        const wireObject = {
          from: {},
          to: {},
        };
        result.push(wireObject);
      }
    
      for (let i = 0; i < wireDataArray.length; i++) {
        switch (i) {
          // from의 name
          case 0:
            for (let j = 0; j < wireDataArray[i].length; j++) result[j].from.name = wireDataArray[i][j];
            break;
          // from의 number
          case 1:
            for (let j = 0; j < wireDataArray[i].length; j++) result[j].from.number = wireDataArray[i][j];
            break;
          // to의 name
          case 2:
            for (let j = 0; j < wireDataArray[i].length; j++) result[j].to.name = wireDataArray[i][j];
            break;
          // to의 number
          case 3:
            for (let j = 0; j < wireDataArray[i].length; j++) result[j].to.number = wireDataArray[i][j];
            break;
        }
      }
    }
  });

  return result;
};
