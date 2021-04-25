
function incrementString (strng) { 
  let newNumStr="";
  let digStrng=strng.match(/\d+/g)
  if (!digStrng){digStrng=0;}
  numStrng=parseInt(digStrng, 10);
  numStrngInc=numStrng+1;
  numStrngIncL=numStrngInc.toString().length;
  if (numStrngIncL < digStrng.toString().length) {
    console.log("difference",digStrng.toString().length-numStrngIncL)
    for (a=0; a<digStrng.toString().length-numStrngIncL; a++){
     newNumStr = newNumStr + "0";
    }
  }
  txtStrng=strng.match(/[a-zA-Z]+/g)
  if(!txtStrng){txtStrng="";}
  return txtStrng+newNumStr+numStrngInc.toString();
}
