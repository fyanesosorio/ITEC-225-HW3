function accordions(){
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function () {
            this.classList.toggle('is-open');

            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}


// part 1
function computeForce() {
    let mass = parseInt(document.getElementById("mass").value);
    let accel = parseInt(document.getElementById("accel").value);
    
    total = mass* accel;
    
    document.getElementById("forceTotal").innerHTML = total;
}


// part 2
function computeAvgVelocity() {
    let initalVelo = parseInt(document.getElementById("initalVelo").value);
    let time = parseInt(document.getElementById("time").value);
    let accel = parseInt(document.getElementById("accel").value);
    
    let displacement = initalVelo * time - (0.5) * accel * Math.pow(time,2);

    document.getElementById("displaceTotal").innerHTML = displacement;
}


// part 3
function computeQuad() {
    let sideA = parseInt(document.getElementById("sideA").value);
    let sideB = parseInt(document.getElementById("sideB").value);
    let sideC = parseInt(document.getElementById("sideC").value);
    
    let sqrt = (sideB * sideB) - (4 * sideA * sideC);

    if(sqrt > 0){
        minus = (-sideB - Math.sqrt(sqrt)) / (2 * sideA);
        plus = (-sideB + Math.sqrt(sqrt)) / (2 * sideA);
    } else {
        minus = "Undefined";
        plus = "Undefined";
    }

    document.getElementById("posSide").innerHTML = plus;
    document.getElementById("negSide").innerHTML = minus;
}

// part 4
function computePrinciple() {
    let pmt = parseInt(document.getElementById("PMT").value);
    let interest = parseFloat(document.getElementById("interestRate").value);
    let num = parseInt(document.getElementById("n").value);

    interest = interest / 100;
    
    let step1 = Math.pow((1 + interest), num);
    let step2 = (1 / (step1));
    let step3 = 1 - (step2);
    let step4 = step3 / interest;
    let total = pmt * step4; 

    document.getElementById("p").innerHTML = total;
}
