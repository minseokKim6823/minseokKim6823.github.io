const slides =document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function(slide, index){
    slide.style.left =`${index * 100}%`;
});
let counter =0;
nextBtn.addEventListener("click", function() {
    counter++;
    imgslide();
});

prevBtn.addEventListener("click", function() {
    counter--;
    imgslide();
});

function imgslide(){
    if(counter<slides.length -1){
        nextBtn.style.display="block";
    }else{
        nextBtn.style.display = "block";
    }
    if(counter > 0){
        prevBtn.style.display = "block";
    }else{
        prevBtn.style.display = "block";
    }
    slides.forEach(function(slide){
        if(counter<0){
            counter=slides.length-1;
        }
        if(counter>slides.length-1){
            counter=0
        }
        slide.style.transform=`translateX(-${counter * 100}%)`;

    });
}