function getNext(num) {
  let possible = false;
  let stringNumber = String(num);
  let oSplited = stringNumber.split('');
  let splited = stringNumber.split('');
  const greatNumber = splited.sort().reverse()[0];
  const indexGreatNumber = stringNumber.indexOf(greatNumber);

  
  if(indexGreatNumber > 0) {
    possible = true;
    let aux = oSplited[indexGreatNumber - 1];
    oSplited[indexGreatNumber] = aux;
    oSplited[indexGreatNumber - 1] = greatNumber
    let as = oSplited.splice(indexGreatNumber, Number.MAX_VALUE);
    oSplited = oSplited.concat(as.sort());
  }
    
  return possible ? oSplited.join('') : possible;
}

console.log(getNext(11121));