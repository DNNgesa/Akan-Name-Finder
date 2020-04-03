function validate(){
    var DD = parseInt(document.forms["dateForm"]["bd"].value);
    var MM = parseInt(document.forms["dateForm"]["mnth"].value);
    var YY = parseInt((document.forms["dateForm"]["yr"].value).slice(2, 4));
    var CC = parseInt((document.forms["dateForm"]["yr"].value).slice(0, 2));
    var MF = document.getElementById('myGender');
    
    var day = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) % 7;
    var dayName = Math.round(day);

    alert(dayName)
}
