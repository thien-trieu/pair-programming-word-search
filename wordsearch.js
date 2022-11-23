const wordSearch = (letters, word) => {
  let results = false;
  if (letters.length <= 0) {
    return results;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = m => m[0].map((x, i) => m.map(x => x[i]));

  let verticalArr = verticalJoin(letters);
  for (let l of verticalArr) {
 
    if (l.join('').includes(word)) {
      return true;
    }
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return results;
};

module.exports = wordSearch;

