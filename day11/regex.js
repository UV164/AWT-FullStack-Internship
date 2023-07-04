const regex=/catholic/g;
const str1="nory was a catholic because her mother was catholic"
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex, "hindu"));

var regex1=/nory/i;
var output=regex1.exec(str1);
document.write("<br/>", output);
console.log(output);

var matchcase=regex1.test(str1);
document.write("<br>/",matchcase);

let txt="PUSHPA PUSHPA abhilash 178 178!!!";
let result=txt.match(/[0-9,PUSHPA]/g);

document.write("<br/>",result);
