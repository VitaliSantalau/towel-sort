module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) return [];

  const result = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      const column = (i % 2 === 0) ? j : (matrix[i].length - 1 - j);
      result.push(matrix[i][column]);
    }
  }
  return result;
}