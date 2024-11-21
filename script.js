let mountain1img = document.getElementById("m1");
let trees2img = document.getElementById("t2");
let mountain21img = document.getElementById("m2");
let trees1img = document.getElementById("t1");
let manimg = document.getElementById("man");
let plantsimg = document.getElementById("plants");

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    mountain1img.style.top = value * 0.4 + 'px';


});
