const reverseString = function(string) {
  let result = "";
  for(let i = string.length-1; i >= 0; i--){
    result+=string[i];
  }
  return result;
};

for(let i = 2; i < process.argv.length; i++) {
  console.log(reverseString(process.argv[i]));
};

