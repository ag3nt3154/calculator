console.log("hello world");

const num_keys = document.querySelectorAll(".num");
const disp = document.querySelector("#display");

num_keys.forEach((key) => {
    key.addEventListener("click", function (e) {
        display(e.target.textContent);
    });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function (e) {
    clear();
});

const opKeys = document.querySelectorAll(".op");
opKeys.forEach((key) => {
    key.addEventListener("click", function (e) {
        display(e.target.textContent);
    });
});




function display(newValue) {
    let prev_string = disp.textContent;
    prev_string += newValue;
    disp.textContent = prev_string;
}

function clear() {
    disp.textContent = null;
}

