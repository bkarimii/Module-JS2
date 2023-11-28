// function setAlarm() {
//   const alarmInput= document.getElementById('alarmSet');
//   const timeRemaining=document.getElementById('timeRemaining');

//   // get duration from input box
//   const duration=parseInt(alarmInput.value ,10);

//   // check user input a valid input for timer
//   if(isNaN(duration)|| duration<=0){
//     alert('Enetr a valid time to set the timer');
//     return
//   }

//   let timerTime=duration;
//   let numberOfFlash=5;  // number of times screen flashes after timer gets 0

//   updateTimeDisplay();

//   const timerInterval=setInterval(function(){
//     updateTimeDisplay();
//     if(timerTime<=0){
//     flashBackground(numberOfFlash);
//     clearInterval(timerInterval);
//     playAlarm();
//     }
//     timerTime--;
//   },1000)

//   function flashBackground(numberOfFlash) {
//     if (numberOfFlash > 0) {
//         document.body.style.background = 'red';

//         // Flash back to the original color after 500 milliseconds 
//         setTimeout(function () {
//             document.body.style.background = ''; 
//             flashBackground(numberOfFlash - 1);
//         }, 1000);
//     }
//     else{
//       document.body.style.background='';
//     }
//   }

//   function updateTimeDisplay(){
//     const minutes=Math.floor(timerTime/60);
//     const seconds=timerTime%60;
//     timeRemaining.textContent=`Time Remaining: ${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
//   }


//   const pause=document.getElementById("Pause");
//   pause.addEventListener('click',function(){

//   })
  

// //   setTimeout(() => {
// //     playAlarm();
// // }, duration * 1000);


// }
///////////////////////////////////////////////////////////////////////////
// function setAlarm() {
//   const alarmInput = document.getElementById('alarmSet');
//   const timeRemaining = document.getElementById('timeRemaining');

//   // Get the duration from the input field
//   const duration = parseInt(alarmInput.value, 10);

//   // Validate if the input is a positive number
//   if (isNaN(duration) || duration <= 0) {
//     alert('Please enter a valid positive number for the alarm.');
//     return;
//   }

//   let seconds = duration;

//   // Update the timer immediately
//   updateTimeDisplay();

//   // Update the timer every second
//   const timerInterval = setInterval(function() {
//     updateTimeDisplay();

//     // If the timer reaches 0, stop the interval
//     if (seconds <= 0) {
//       clearInterval(timerInterval);
//       playAlarm();
//     }

//     // Decrease the remaining time
//     seconds--;
//   }, 1000);

//   function updateTimeDisplay() {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   }
// }





const timeRemaining=document.getElementById("timeRemaining");
let seconds;
let timeHolder=0;
let timerBoolean=false;
let updaterInterval;

function displayTimer(duration){
    const remainedMinutes=Math.floor(duration/60);
    const remainedSeconds=duration%60;
    timeRemaining.innerText=`Time remianing: ${String(remainedMinutes).padStart(2,'0')}:${String(remainedSeconds).padStart(2,'0')}`;
  }
  
function updateTimer(){
    updaterInterval=setInterval(() => {
      
      displayTimer(seconds);
      seconds--;
      timeHolder=seconds;
      if(seconds<0){
      playAlarm();
      clearInterval(updaterInterval);
    }
      
    }, 1000);
    
  }


function setAlarm(){

  const inputValue=document.getElementById("alarmSet");
  seconds=parseInt(inputValue.value , 10);
  displayTimer(seconds);
  updateTimer()
  }


  
  const pauseButton=document.getElementById("Pause" );
  pauseButton.addEventListener('click',function(){
    if(timerBoolean===false){
      clearInterval(updaterInterval);
      timerBoolean=true;
    }
    else{
      updateTimer();
      timerBoolean=false;
    }
  })


// DO NOT EDIT BELOW HERE
//////////////////////////////////////////////////////////////////////////

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;


