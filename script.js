console.log("hello world");

let curVal = 0;
let curOp = null;
let newVal = 0;

const num_keys = document.querySelectorAll(".num");
const disp = document.querySelector("#display");

num_keys.forEach((key) => {
    key.addEventListener("click", function (e) {
        display(e.target.textContent);
        newVal = updateNewVal(newVal, e.target.textContent)
    });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function (e) {
    clear();
});

const opKeys = document.querySelectorAll(".op");
opKeys.forEach((key) => {
    key.addEventListener("click", function (e) {
        // display(e.target.textContent);
        clear();
        curVal = operate(curVal, curOp, newVal);
        newVal = 0;
        disp.textContent = curVal;
        curOp = e.target.textContent;
    });
});

const enterBtn = document.querySelector("#enter");
enterBtn.addEventListener("click", function (e) {
    clear();
    curVal = operate(curVal, curOp, newVal);
    newVal = 0;
    disp.textContent = curVal;
    curOp = null;
});


function updateNewVal(curVal, digit) {
    return parseFloat(curVal + digit)
}

function display(newValue) {
    let prev_string = disp.textContent;
    prev_string += newValue;
    disp.textContent = prev_string;
}

function clear() {
    disp.textContent = null;
}

function operate(curVal, opn, newVal) {
    console.log(curVal, opn, newVal);
    // curVal = parseFloat(curVal);
    // newVal = parseFloat(newVal);

    if (opn == null) {
        curVal = newVal;
    }
    else if (opn == "+") {
        curVal = curVal + newVal;
    }
    else if (opn == "-") {
        curVal = curVal - newVal;
    }
    else if (opn == "*") {
        curVal = curVal * newVal;
    }
    else if (opn == "/") {
        curVal = curVal / newVal;
    }

    // curVal = toString(curVal);

    console.log(curVal);
    return curVal;
}