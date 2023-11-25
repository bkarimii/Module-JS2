
document.addEventListener('DOMContentLoaded',function(){
    const images = [
        './animal/cat.jpg',
        "./animal/coala.jpeg",
        "./animal/dog.jpg",
        './animal/panda.jpg'
    ];
    let counter=0;
    let inputTimer=5000;

    const img=document.getElementById('carousel-img');
    img.setAttribute('src',images[counter]);

    // set timer based on input box
    let slideShowTimer=document.getElementById('slideshow-timer');
    const submitTimer=document.getElementById('timer-submit');

    submitTimer.addEventListener('click',function(){
        inputTimer=parseInt(slideShowTimer.value)*1000|| 1000;
        slideShowTimer.value='';
        stopsliding();

    })



    function forwardAction(){
        if(counter===images.length-1){
            counter=0;
            img.setAttribute('src',images[counter]);
        }
        else{
            counter++;
            img.setAttribute('src',images[counter]);
        }
        }

    ////setting up backward function
    function backwardAction(){
        if(counter===0){
            counter=images.length-1;
            img.setAttribute('src',images[counter]);
        }
        else{
            counter--;
            img.setAttribute('src',images[counter]);
        }
        }


    ///// setting up forward button///////
    const forwardBtn=document.getElementById("forward-btn");
    forwardBtn.addEventListener('click',forwardAction);

    ///////////////set up for backward button/////////////////////////
    const backwardBtn=document.getElementById("backward-btn")
    backwardBtn.addEventListener('click',backwardAction);

    // setiing up stop button 

    function stopsliding(){
        counter=0;
        img.setAttribute('src',images[counter]);
        clearInterval(autoForwardInterval);
        clearInterval(autoBackwardInterval);
    }

    const stop=document.getElementById('stop-btn');
    stop.addEventListener('click',function (){
        stopsliding();
        inputTimer=5000;
    }
    );

    //setting up auto-forward btn
    const autoForwardBtn=document.getElementById("auto-forward-btn");
    autoForwardBtn.addEventListener('click',function(){
        autoForwardInterval=setInterval(() => {
            
            forwardAction();
            
            
        }, inputTimer);
        clearInterval(autoBackwardInterval);
    })

    // setting up auto backward button
    const autoBackwardBtn=document.getElementById("auto-backward-btn");
    autoBackwardBtn.addEventListener('click',function (){
        autoBackwardInterval=setInterval(() => {
            backwardAction();
            
        }, inputTimer);
        clearInterval(autoForwardInterval);
    })

    
    
})



// Write your code here