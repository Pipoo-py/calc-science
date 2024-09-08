import * as mathFunctions  from "./functions.mjs";

const buttonsContainer = document.querySelector(".buttons-container");
const input = document.getElementById("input-results");
const spanOfOperations = document.querySelector(".historial");

const replaceButtonsToCience = ()=>{
    let newButtonsCode = `
                <button class="button symbol">Sin</button>
                <button class="button number">π</button>
                <button class="button number">Cos</button>
                <button class="button number">log</button>
                <button class="button symbol">e</button>
                <button class="button number">tan</button>
                <button class="button number">√</button>
                <button class="button number">x!</button>
                <button class="button number" id="equal">=</button>
                <button class="button number material-symbols-outlined" id="options-normal">menu</button>
    `;
    buttonsContainer.innerHTML = newButtonsCode;
};

const verifyTypeOfOperation = (totalValue)=>{
    for(let i = 0; i < totalValue.length; i++){
        if(totalValue[i] == "+"){
            return parseFloat(mathFunctions.plusNumbers(totalValue));
        }
        else if(totalValue[i] == "-"){
            return parseFloat(mathFunctions.minusNumbers(totalValue));
        }
        else if(totalValue.match(/\W/) == "%"){
            return parseFloat(mathFunctions.percentNumbers(totalValue));
        }
        else if(totalValue[i] == "x"){
            return parseFloat(mathFunctions.productNumbers(totalValue));
        }
        else if(totalValue[i] == "÷"){
            return parseFloat(mathFunctions.divNumbers(totalValue));
        }
        else if(totalValue.match(RegExp("Cos")) || totalValue.match(RegExp("Sin")) || totalValue.match(RegExp("tan"))){
            return parseFloat(mathFunctions.trygonometry(totalValue));
        }
        else if(totalValue.match(RegExp("log"))){
            return parseFloat(mathFunctions.logarithms(totalValue));
        }
        else if(totalValue[i] == "√"){
            return parseFloat(mathFunctions.mathSqrt(totalValue));
        }
        else if(totalValue.match(RegExp("!"))){
            return parseFloat(mathFunctions.factorial(totalValue));
        }
    }
};
buttonsContainer.addEventListener("click",(e)=>{
    if(e.target.textContent == "AC") input.value = "";
    else if(e.target.id == "equal"){
        spanOfOperations.textContent = input.value;
        spanOfOperations.classList.add("span-animated");
        input.value = `${verifyTypeOfOperation(input.value)}`;
        setTimeout(()=>{
            spanOfOperations.classList.remove("span-animated");
        },300);
    }
    else if(e.target.id == "options") replaceButtonsToCience();
    else if(e.target.id == "options-normal"){
        let normalButtons = `
            <button class="button symbol">(</button>
                <button class="button symbol">)</button>
                <button class="button symbol">%</button>
                <button class="button symbol">AC</button>
                <button class="button number">7</button>
                <button class="button number">8</button>
                <button class="button number">9</button>
                <button class="button symbol">÷</button>
                <button class="button number">4</button>
                <button class="button number">5</button>
                <button class="button number">6</button>
                <button class="button symbol">x</button>
                <button class="button number">1</button>
                <button class="button number">2</button>
                <button class="button number">3</button>
                <button class="button symbol">-</button>
                <button class="button number">0</button>
                <button class="button number">.</button>
                <button class="button number" id="equal">=</button>
                <button class="button symbol">+</button>
                <button class="button number material-symbols-outlined" id="options">menu</button>
        `;
        buttonsContainer.innerHTML = normalButtons;
    }
    else if (e.target.textContent == "π") input.value += parseFloat(Math.PI);
    else if (e.target.textContent == "e") input.value += parseFloat(Math.E);
    else if (e.target.textContent == "x!") input.value += "!";
    else input.value += e.target.textContent;
});