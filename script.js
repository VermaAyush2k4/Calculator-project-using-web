let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (err) {
                input.value = "Error";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML === '^') {
            string += '**';
            input.value = string;
        } else if (e.target.classList.contains('trig')) {
            const operation = e.target.dataset.operation;
            if (operation === 'ln') {
                string += 'Math.log(';
            } else {
                string += `Math.${operation}(`;
            }
            input.value = string;
        } else if (e.target.id === 'expBtn') {
            string += 'Math.exp(';
            input.value = string;
        } else if (e.target.id === 'piBtn') {
            string += 'Math.PI';
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});