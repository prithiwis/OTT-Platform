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
}

loadLessBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (var i = currentitem-1; i > currentitem-6; i--) {
        boxes[i].style.display = 'none';
    }
    currentitem -= 5;
}

// for pop-up movies watching

function toggle(){
    var video=document.querySelector(".video");
    video.classList.toggle("active");
    video.currentTime=0;
}

