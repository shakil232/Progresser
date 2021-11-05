// HTML-PROGRESS
let HtmlNumber = document.getElementById('htmlNumber');
let HtmlCounter = 0;
setInterval(() => {
    if (HtmlCounter === 90) {
        clearInterval()
    }
    else {
        HtmlCounter += 1;
        HtmlNumber.innerHTML = HtmlCounter + '%';
    }
}, 20);

// CSS-PROGRESS
let CssNumber = document.getElementById('cssNumber');
let CssCounter = 0;
setInterval(() => {
    if (CssCounter === 80) {
        clearInterval()
    }
    else {
        CssCounter += 1;
        CssNumber.innerHTML = CssCounter + '%';
    }
}, 24);

// BOOTSTRAP-PROGRESS
let BootstrapNumber = document.getElementById('bootstrapNumber');
let BootstrapCounter = 0;
setInterval(() => {
    if (BootstrapCounter === 85) {
        clearInterval()
    }
    else {
        BootstrapCounter += 1;
        BootstrapNumber.innerHTML = BootstrapCounter + '%';
    }
}, 24);

// JAVASCRIPT-PROGRESS
let JavascriptNumber = document.getElementById('javascriptNumber');
let JavascriptCounter = 0;
setInterval(() => {
    if (JavascriptCounter === 65) {
        clearInterval()
    }
    else {
        JavascriptCounter += 1;
        JavascriptNumber.innerHTML = JavascriptCounter + '%';
    }
}, 24);



// PROGRESS COUNTER ANIMATION-JS
const counters = document.querySelectorAll('.counter-number');
const countSpeed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerHTML;
        const increment = target / countSpeed;

        if (count < target) {
            counter.innerHTML = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        }
        else {
            count.innerHTML = target;
        }
    }
    updateCount()
});


// BOOTSTRAP & CUSTOMS PROGRESS BAR 
const ProgressBar = $('.progress-bar');
const ProgressNumber = 0 ;

setInterval(function() {
    ProgressNumber++;
    ProgressBar.css('width', ProgressNumber + '%');
    ProgressBar.attr('aria-valuenow' , ProgressNumber);
}, 500);

// const ProgressBar = $('.progress-bar');
// const ProgressNumber = 0 ;

// setInterval(function() {
//     ProgressNumber++;
//     ProgressBar.css('width', ProgressNumber + '%');
//     ProgressBar.attr('aria-valuenow' , ProgressNumber);
// }, 500);



/* STEP PROGRESS BAR  */
const Progress = document.getElementById("stepProgress");
const Prev = document.getElementById("prev");
const Next = document.getElementById("next");
const Circles = document.querySelectorAll(".circle");

let currentActive = 1;
Next.addEventListener("click", () => {
    currentActive++;
    if(currentActive > Circles.length){
        currentActive = Circles.length;
    }
    update();
});
Prev.addEventListener("click", () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});
function  update() {
    Circles.forEach((circle, idx)=>{
    if(idx < currentActive){
        circle.classList.add('active');
    }
    else{
        circle.classList.remove('active');
    }
    });
    const actives = document.querySelectorAll('active');
    Progress.style.width = ( (actives.length - 1 ) / (Circles.length - 1)) * 100 + "%";
    
    if ( currentActive === 1){
        Prev.disabled = true;
    }
    else if ( currentActive === Circles.length){
        Next.disabled = true;
    }
    else{
        Prev.disabled = false;
        Next.disabled = false;
    }
};