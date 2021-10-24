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