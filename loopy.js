function loopyLighthouse(range, multiples, words){

  for(let i = range[0];i <= range[1];i++){
    const firstCondition = i % multiples[0] === 0;
    const secondCondition = i % multiples[1] === 0;
    if(firstCondition && secondCondition){
      console.log(words.join(''));
    }
    else if(firstCondition){
      console.log(words[0]);
    }
    else if(secondCondition){
      console.log(words[1]);
    }
    else{
      console.log(i);
    }
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);