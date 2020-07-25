console.log("hello world");

const calculator = {
    curVal: null,
    newVal: null,
    opn: null,
    curDisp: document.querySelector("#curVal"),
    opnDisp: document.querySelector("#opn"),
    newDisp: document.querySelector("#newVal"),
    text: null,
    display: function () {
        this.curDisp.textContent = this.curVal;
        this.opnDisp.textContent = this.opn;
        this.newDisp.textContent = this.newVal;
    },
    clear: function () {
        this.newVal = null;
        this.opn = null;
        this.curVal = null;
        this.display();
    },
    evaluate: function () {
        if (this.opn == "+") {
            this.curVal += this.newVal;
        }
        else if (this.opn == "-") {
            this.curVal -= this.newVal;
        }
        else if (this.opn == "*") {
            this.curVal *= this.newVal;
        }
        else if (this.opn == "/") {
            this.curVal /= this.newVal;
        }
        else if (this.opn == null) {
            this.curVal = this.newVal;
        }

        this.text = toString(this.curVal);
        this.newVal = null;
        this.opn = null;
    },
    updateNewVal: function (text) {
        if (this.newVal == null) {
            this.newVal = parseFloat(text);
        }
        else {
            this.newVal = parseFloat(this.newVal + text);
        }
    },
    del: function () {
        this.text = this.newVal.toString();
        if (this.text.length == 1) {
            this.newVal = null;
        }
        else {
            this.newVal = parseFloat(this.text.slice(0, -1));
        }
        
    }
}

calculator.display();



const num_keys = document.querySelectorAll(".num");
num_keys.forEach((key) => {
    key.addEventListener("click", function (e) {
        calculator.updateNewVal(e.target.textContent);
        calculator.display();
    });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function (e) {
    calculator.clear();
});

const enterBtn = document.querySelector("#enter");
enterBtn.addEventListener("click", function (e) {
    calculator.evaluate();
    calculator.display();
});

const opKeys = document.querySelectorAll(".op");
opKeys.forEach((key) => {
    key.style.fontSize = "20px";
    key.addEventListener("click", function (e) {
        if (calculator.newVal != null) {
            calculator.evaluate();
        }
        calculator.opn = e.target.textContent;
        calculator.display();
    });
});

const delKey = document.querySelector("#del");
delKey.addEventListener("click", function(e) {
    if (calculator.newVal != null) {
        calculator.del();
    }
    else if (calculator.opn != null) {
        calculator.opn = null;
    }
    calculator.display();
});