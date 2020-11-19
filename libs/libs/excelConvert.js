import XLSX from "xlsx";
import fs from "fs";
import path from "path";

const getExcelData = (loadDirName) => {
  const cwd = path.join(__dirname, "../", "./excelData", `./${loadDirName}`);
  const filelist = fs.readdirSync(cwd);

  return filelist.map((filename) => {
    const workbook = XLSX.readFile(`${cwd}/${filename}`);
    let excelLength = [];
    workbook.SheetNames.forEach((sheetname, index) => {
      const tableRowLength = XLSX.utils.sheet_to_json(workbook.Sheets[sheetname], { header: "A" }).length; // 선택한 시트의 행의 개수
      const tableColumnLength = Object.keys(XLSX.utils.sheet_to_json(workbook.Sheets[sheetname], { header: "A" })[0])
        .length; //선택한 시트의 열의 개수
      excelLength[index] = {
        row: tableRowLength,
        column: tableColumnLength,
      };
    });

    return {
      fileName: filename.split(".xlsx")[0],
      allSheetName: workbook.SheetNames, // 엑셀파일에서 가져온 시트명.
      data: workbook.Sheets, // 시트의 데이터들. workbook.Sheets[시트명] > 시트명에 해당하는 데이터들
      length: excelLength,
    };
  });
};

export default getExcelData;
