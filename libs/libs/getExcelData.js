const excelData = (data, alphIndex, length, offset) => {   //data, 행문자, 열 길이
  let tmpData = [];
  for(let i = offset ; i <= length; i++ ){
    //엑셀값이 존재하면
    if(data[alphIndex + i ])  tmpData[i - offset] = data[alphIndex + i].v;
    else if(offset === 16) tmpData[i - offset] = null;
  }
  return tmpData;
};

export default excelData;