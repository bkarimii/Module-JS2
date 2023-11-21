
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

    const forwardBtn=document.getElementById("forward-btn");
    forwardBtn.addEventListener('click',function(){
        if(counter===3){
            counter=0;
            img.setAttribute('src',images[counter]);
            counter++;
        }
        else{
            counter++;
            img.setAttribute('src',images[counter]);
        }
    })

    const backWard=document.getElementById("backward-btn")
    backWard.addEventListener('click',function(){
        if(counter===0){
            counter=3;
            img.setAttribute('src',images[counter]);
            counter--;
        }
        else{
            counter--;
            img.setAttribute('src',images[counter]);
        }
    })
})



// Write your code here