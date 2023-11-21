
document.addEventListener('DOMContentLoaded',function(){
    const images = [
        './animal/cat.jpg',
        "./animal/coala.jpeg",
        "./animal/dog.jpg",
        './animal/panda.jpg'
    ];
    let counter=0;

    const img=document.getElementById('carousel-img');
    img.setAttribute('src',images[counter]);



    function forwardAction(){
        if(counter===3){
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
            counter=3;
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
    const backWard=document.getElementById("backward-btn")
    backWard.addEventListener('click',backwardAction);

    // setiing up stop button 
    const stop=document.getElementById('stop-btn');
    stop.addEventListener('click',function(){
        counter=0;
        img.setAttribute('src',images[counter]);
        clearInterval(autoForwardInterval);
        clearInterval(autoBackwardInterval);
        
    })

    //setting up auto-forward btn
    const autoForward=document.getElementById("auto-forward-btn");
    autoForward.addEventListener('click',function(){
        autoForwardInterval=setInterval(() => {
            
            forwardAction();
            
            
        }, 1000);
        clearInterval(autoBackwardInterval);
    })

    // setting up auto backward button
    const autoBackward=document.getElementById("auto-backward-btn");
    autoBackward.addEventListener('click',function (){
        autoBackwardInterval=setInterval(() => {
            backwardAction();
            
        }, 1000);
        clearInterval(autoForwardInterval);
    })
})



// Write your code here