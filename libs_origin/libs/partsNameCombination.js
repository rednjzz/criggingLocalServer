const partsNameCombination = (mainParts, jibParts) => {
  // F, N index 찾기
  mainParts.forEach((partsName, index) => {
    if (partsName === "F" || partsName === "N")
      mainParts.splice(index, 1, ...jibParts); // F, N 문자 제거하고 partsName삽입
  });
  return mainParts;
};

export default partsNameCombination;
