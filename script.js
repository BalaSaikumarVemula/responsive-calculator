const ans = document.getElementById("result-bar");

function append(input) {
    ans.value += input;
}

function clearResult() {
    ans.value = "";
}

function calculate() {
    try {
        ans.value = eval(ans.value);
    } catch (error) {
        ans.value = "Error";
    }
}
