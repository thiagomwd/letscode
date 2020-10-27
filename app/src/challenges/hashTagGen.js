String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function generateHashtag (str) {
  let result;
  str = str.trim();
  if(str) {
    result = [];
    str.trim().split(' ').forEach(subStr => {
      if(subStr) {
        result.push(subStr.capitalize());
      }
    });
    result = result.join('');
  }
  return result && result.length < 140 ? `#${result}` : false;
}