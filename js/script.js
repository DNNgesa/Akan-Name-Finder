function validate(){
    var DD = parseInt(document.forms["myForm"]["bd"].value);
    var MM = parseInt(document.forms["myForm"]["mnth"].value);
    var YY = parseInt((document.forms["myForm"]["yr"].value).slice(2, 4));
    var CC = parseInt((document.forms["myForm"]["yr"].value).slice(0, 2));
    var MF = document.getElementById('myGender');
    
    var day = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) % 7;
    var dayName = Math.round(day);
}
