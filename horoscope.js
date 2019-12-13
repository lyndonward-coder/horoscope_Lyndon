
var signs = ["Capricon", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra","Scorpio","Sagittarius", "illegal date"]
var horoscope = ["Strength and happiness will come to your family","Be wary your friends will come to your with dire news","Find number 3 in your life. It'll bring you joy",
    "Stay confident and the truth will find its way to you","You will meet a reliable figure in your next outing","An affectionate person will walk into your life be gentle",
"Be creative and the solution to all your issues will unveil itself","A cheerful present will be opened in the coming days","Look for the beige sign and freedom will be yours","A pink star will be your future",
"Do not fear rust, embrace the ability to improve upon yourself","An arrow will fly and piece the path to your future", "The date you inserted is wrong"]
var image = ["images/zodiac images/capricon.jpeg" , "images/zodiac images/aquarius.jpeg" , "images/zodiac images/pisces.jpeg" , "images/zodiac images/aries.jpeg" , "images/zodiac images/taurus.jpeg" , "images/zodiac images/gemini.jpeg" , "images/zodiac images/cancer.jpeg" , "images/zodiac images/leo.jpeg" , "images/zodiac images/virgo.jpeg" , "images/zodiac images/libra.jpeg" , "images/zodiac images/scorpio.jpeg" , "images/zodiac images/sagittarius.jpeg", " "]

function signDeterminer(userday, usermonth) {
    if(usermonth == 1 && userday >= 29){
        return 12;
    }
    if(usermonth == 3 && userday >= 30){
        return 12;
    }
    if(usermonth == 5 && userday >= 30){
        return 12;
    }
    if(usermonth == 8 && userday >= 30){
        return 12;
    }
    if(usermonth == 10 && userday >= 30){
        return 12;
    }
    if (usermonth == 0 && userday <= 19) {
        return 0;
    } else if (usermonth == 0 && userday >= 20) {
        return 1;
    }
    if (usermonth == 1 && userday <= 18) {
        return 1;
    } else if (usermonth == 1 && userday >= 19) {
        return 2;
    }
    if (usermonth == 2 && userday <= 20) {
        return 2;
    } else if (usermonth == 2 && userday >= 21) {
        return 3;
    }
    if (usermonth == 3 && userday <= 19) {
        return 3;
    } else if (usermonth == 3 && userday >= 20) {
        return 4;
    }
    if (usermonth == 4 && userday <= 20) {
        return 4;
    } else if (usermonth == 4 && userday >= 21) {
        return 5;
    }
    if (usermonth == 5 && userday <= 20) {
        return 5;
    } else if (usermonth == 5 && userday >= 21) {
        return 6;
    }
    if (usermonth == 6 && userday <= 22) {
        return 6;
    } else if (usermonth == 6 && userday >= 23) {
        return 7;
    }
    if (usermonth == 7 && userday <= 23) {
        return 7;
    } else if (usermonth == 7 && userday >= 24) {
        return 8;
    }
    if (usermonth == 8 && userday <= 22) {
        return 8;
    } else if (usermonth == 4 && userday >= 23) {
        return 9;
    }
    if (usermonth == 9 && userday <= 22) {
        return 9;
    } else if (usermonth == 9 && userday >= 23) {
        return 10;
    }
    if (usermonth == 10 && userday <= 22) {
        return 10;
    } else if (usermonth == 10 && userday >= 23) {
        return 11;
    }
    if (usermonth == 11 && userday <= 21) {
        return 11;
    } else if (usermonth == 11 && userday >= 22) {
        return 0;
    }

}



function go(){
    var userday = document.getElementById('day').value;
    var usermonth = document.getElementById('month').value;
    var username = document.getElementById('username').value;
    var sign = signDeterminer(userday,usermonth);
    var bday = birthday(userday, usermonth);
    document.getElementById('message').innerHTML = bday + "  " + username + " you are a " + signs[sign] + " , " + horoscope[sign];
    document.getElementById('sign').src = image[sign];
}





function birthday(userday,usermonth){
    var dayofBirth = "";
    var b_day = new Date();
    var todayDay = b_day.getDate();
    var todayMonth = b_day.getMonth();
    if(usermonth == todayMonth && userday == todayDay) {
        dayofBirth = "Happy Birthday!";
    }
    return dayofBirth;
}