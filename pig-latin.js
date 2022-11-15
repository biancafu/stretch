const convert = function(word) {
  let result = "";
  for(let i = 1; i < word.length; i++){
    result+=word.charAt(i);
  }
  return result+word[0]+"ay";
}; 
let result = "";
for(let i = 2; i < process.argv.length; i++){
  result+=convert(process.argv[i])+" ";
};
console.log(result.substring(0,result.length-1)); //remove last space if needed 