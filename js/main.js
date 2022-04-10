// DOM
var time = document.getElementById('time');
var good = document.getElementById('good');
var phrase = document.getElementById('phrase');
var coolThing = document.getElementById('coolThing');

// Digital clock
function clock(){
    let clockTime = new Date();
    let hour = theZero(clockTime.getHours());
    let min = theZero(clockTime.getMinutes());
    let sec = theZero(clockTime.getSeconds());
    
    time.innerHTML = `${hour}:${min}:${sec}`;

    setTimeout(clock, 1000);
}

// Let 0 before the hours/min/sec between 1 to 9
function theZero(number){
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Here we get the name just one time with the prompt and localStorage
function askTheName(){
    let theName = localStorage.getItem('theName');
    let name = document.getElementById('name');
    if(!theName){
        theName = prompt('Enter your name:');
    }
    if(theName != null){
        localStorage.setItem('theName', theName);
        document.title = 'Keep in Focus ' + theName + '!';
        name.textContent = theName;
    }
}

// Backgrounds and Phrase
function bgAndPhrase(){
    let today = new Date();
    hour = today.getHours();
    if(hour < 12){
        good.textContent = 'Good Morning';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1024x720/?morning,sunrise')";
    } else if(hour < 18){
        good.textContent = 'Good Afternoon';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1024x720/?afternoon,golden+hour')";
    } else{
        good.textContent = 'Good Evening';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1024x720/?evening,night')";
    }
}

// Run the functions
askTheName();
clock();
bgAndPhrase();