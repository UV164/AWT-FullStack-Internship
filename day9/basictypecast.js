let numex=3.14;
document.write("<br/>"+numex .toExponential(1));
document.write("<br/>"+numex .toExponential(2));
document.write("<br/>"+numex .toExponential(4));
document.write("<br/>"+numex.toExponential(6));

let numfixed=3.14;
document.write("<br/>"+numfixed .toFixed(1));
document.write("<br/>"+numfixed .toFixed(2));
document.write("<br/>"+numfixed .toFixed(4));
document.write("<br/>"+numfixed .toFixed(6));

let numprec=3.14;
document.write("<br/>"+numprec.toPrecision(1));
document.write("<br/>"+numprec.toPrecision(2));
document.write("<br/>"+numprec.toPrecision(4));
document.write("<br/>"+numprec.toPrecision(6));


document.write("<br/>"+Number.MIN_VALUE);
document.write("<br/>"+Number.MAX_VALUE);
document.write("<br/>"+Number.POSITIVE_INFINITY);
document.write("<br/>"+Number.NEGATIVE_INFINITY);

document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("-10 20 30"));
document.write("<br/>"+parseInt("year is:10"));

document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("-10 20 30"));
document.write("<br/>"+parseFloat("year is:10"));



document.write("<br/>"+new Date());
document.write("<br/>"+new Date(2003-5-28));
document.write("<br/>"+new Date(2018,11,24,10,33,30,0));
document.write("<br/>"+new Date("October 13, 2014 11:13:00"));

var d=new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCstring());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+getTime());
document.write("<br/>"+getDate());
document.write("<br/>"+getDay());
document.write("<br/>"+getFullYear());
document.write("<br/>"+getHours());
document.write("<br/>"+getMonth());

