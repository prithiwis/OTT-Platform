function myfunction()
{
    var x=document.getElementById("p1");
    if(x.style.display=="none")
    {
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

function myfunction1()
{
    var y=document.getElementById("p2");
    if(y.style.display=="none")
    {
        y.style.display="block";
    }
    else{
        y.style.display="none";
    }
}

function myfunction2()
{
    var z=document.getElementById("p3");
    if(z.style.display=="none")
    {
        z.style.display="block";
    }
    else{
        z.style.display="none";
    }
}

function myfunction3()
{
    var a=document.getElementById("p4");
    if(a.style.display=="none")
    {
        a.style.display="block";
    }
    else{
        a.style.display="none";
    }
}

function myfunction4()
{
    var b=document.getElementById("p5");
    if(b.style.display=="none")
    {
        b.style.display="block";
    }
    else{
        b.style.display="none";
    }
}

function myfunction5()
{
    var c=document.getElementById("p6");
    if(c.style.display=="none")
    {
        c.style.display="block";
    }
    else{
        c.style.display="none";
    }
}


// for navbar

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display=='none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// for movies load-more and load-lees btn

let loadMoreBtn = document.querySelector('#load-more');
let loadLessBtn = document.querySelector('#load-less');
let currentitem=5;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (var i = currentitem; i < currentitem + 5; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentitem += 5;
    if (currentitem >= 5) {
        loadLessBtn.style.display = 'inline-block';
    }

}
if (currentitem <= 5) {
        loadLessBtn.style.display = 'none';
    }


loadLessBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (var i = currentitem-1; i > currentitem-6; i--) {
        boxes[i].style.display = 'none';
    }
    currentitem -= 5;
    if (currentitem <= 5) {
        loadLessBtn.style.display = 'none';
    }
}

// for carsouel

const slides= document.querySelectorAll('.slide');
var counter=0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    if(index<=3){
        
    }
}
)

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

const goNext = () => {
    counter++;
    slideImage();
    if(counter>=3){
        counter = 0; // Reset to the first slide
    }
}

const goPrev = () => {
    counter--;
    slideImage();
}

// for selction of movies (Bengali vs global)
function selectMovie(){
    var select=document.getElementById("my-select");
    var selectedValue = select.options[select.selectedIndex].value;
    if(selectedValue=="Bengali"){
        var boxes = document.querySelectorAll('.box');
        boxes[0].style.display="inline-block";
        boxes[1].style.display="inline-block";
        boxes[2].style.display="inline-block";
        boxes[3].style.display="inline-block";
        boxes[4].style.display="inline-block";
        boxes[5].style.display="none";
        var empty= document.querySelector(".empty-container");
        empty.style.display="none";
        var loadMoreBtn = document.querySelector('#load-more');
        loadMoreBtn.style.display="block";
    }
    else{
        var empty= document.querySelector(".empty-container");
        empty.style.display="block";
        var boxes = document.querySelectorAll('.box');
        boxes[0].style.display="none";
        boxes[1].style.display="none";
        boxes[2].style.display="none";
        boxes[3].style.display="none";
        boxes[4].style.display="none";
        var loadMoreBtn = document.querySelector('#load-more');
        loadMoreBtn.style.display="none";
    }
}

// for selction of movies (Recent vs old)
function selectMovie1(){
    var select=document.getElementById("m");
    var selectedValue = select.options[select.selectedIndex].value;
    if(selectedValue=="Recent"){
        var boxes = document.querySelectorAll('.box');
        boxes[0].style.display="none";
        boxes[1].style.display="inline-block";
        boxes[2].style.display="inline-block";
        boxes[3].style.display="inline-block";
        boxes[4].style.display="none";
        boxes[5].style.display="inline-block";
        boxes[6].style.display="none";
        boxes[7].style.display="inline-block";
        boxes[8].style.display="inline-block";
        boxes[9].style.display="none";
        boxes[10].style.display="inline-block";
        boxes[11].style.display="none";
        boxes[12].style.display="none";
        boxes[13].style.display="inline-block";
        boxes[14].style.display="inline-block";
        boxes[15].style.display="inline-block";
        boxes[16].style.display="inline-block";
        boxes[17].style.display="inline-block";
        boxes[18].style.display="inline-block";
        boxes[19].style.display="inline-block";
        var loadMoreBtn = document.querySelector('#load-more');
        loadMoreBtn.style.display="none";
        
    }
    else{
        var boxes = document.querySelectorAll('.box');
        boxes[0].style.display="inline-block";
        boxes[1].style.display="none";
        boxes[2].style.display="none";
        boxes[3].style.display="none";
        boxes[4].style.display="inline-block";
        boxes[5].style.display="none";
        boxes[6].style.display="inline-block";
        boxes[7].style.display="none";
        boxes[8].style.display="none";
        boxes[9].style.display="inline-block";
        boxes[10].style.display="none";
        boxes[11].style.display="inline-block";
        boxes[12].style.display="none";
        boxes[13].style.display="none";
        boxes[14].style.display="none";
        boxes[15].style.display="none";
        boxes[16].style.display="none";
        boxes[17].style.display="none";
        boxes[18].style.display="none";
        boxes[19].style.display="none";
        var loadMoreBtn = document.querySelector('#load-more');
        loadMoreBtn.style.display="none";
    }
}

//for play of movies

function playMovie(){
    var tariler=document.querySelector(".trailer");
    tariler.classList.toggle("active");
}