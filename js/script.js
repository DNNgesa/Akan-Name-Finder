function validate(){
    var DD = parseInt(document.forms["dateForm"]["bd"].value);
    var MM = parseInt(document.forms["dateForm"]["mnth"].value);
    var YY = parseInt((document.forms["dateForm"]["yr"].value).slice(2, 4));
    var CC = parseInt((document.forms["dateForm"]["yr"].value).slice(0, 2));
    var MF = document.getElementById('myGender').value;

    var day = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) % 7;
    var dayName = Math.round(day);
    // alert(dayName)
  
    
    if(dayName === 0 && MF === "male"){
      alert("Your name is Kwasi");
    }
    else if(dayName === 0 && MF === "female"){
      alert("Your name is Akosua");
    }
    if(dayName === 1 && MF === "male"){
        alert("Your name is Kwadwo");
    }
    else if(dayName === 1 && MF === "female"){
      alert("Your name is Adwoa");
    }
    if(dayName === 2 && MF === "male"){
        alert("Your name is Kwabena");
    }
    else if(dayName === 2 && MF === "female"){
      alert("Your name is Abenaa");
    }
    if(dayName === 3 && MF === "male"){
        alert("Your name is Kwaku");
    }
    else if(dayName === 3 && MF === "female"){
      alert("Your name is Akua");
    }
    if(dayName === 4 && MF === "male"){
        alert("Your name is Yaw");
    }
    else if(dayName === 4 && MF === "female"){
      alert("Your name is Yaa");
    }
    if(dayName === 5 && MF === "male"){
        alert("Your name is Kofi");
    }
    else if(dayName === 5 && MF === "female"){
      alert("Your name is Afua");
    }
    if(dayName === 6 && MF === "male"){
        alert("Your name is Kwame");
    }
    else if(dayName === 6 && MF === "female"){
      alert("Your name is Ama");
    }
        
    
}