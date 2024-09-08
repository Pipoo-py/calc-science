export const plusNumbers = (...num)=>{
    let inputValueInString = num.toString();
    let inputRealValue = inputValueInString.split("+");
    let result = 0;
    for(let i = 0; i < inputRealValue.length; i++){
        if(inputRealValue[i].match(/\W/) == "-"){
            let miniOp = inputRealValue[i];
            let miniResult = minusNumbers(miniOp);
            result += miniResult;
            inputRealValue.splice(i,1,0);
        };
        result += parseFloat(inputRealValue[i]);
    };
    return result;
};

export const minusNumbers = (...num)=>{
    let inputValueInString = num.toString();
    let inputRealValue = inputValueInString.split("-");
    let result = 0;
    for(let i = 0; i < inputRealValue.length; i++){
        if(i > 0) result -= parseFloat(inputRealValue[i]);
        else result += parseFloat(inputRealValue[i]);
    };
    return result;
};

export const productNumbers = (...num)=>{
    let inputValueInString = num.toString();
    let inputRealValue = inputValueInString.split("x");
    let result = 0;
    for(let i = 0; i < inputRealValue.length; i++){
        if(i > 0) result *= parseFloat(inputRealValue[i]);
        else result += parseFloat(inputRealValue[i]);
    };
    return result;
};

export const divNumbers = (...num)=>{
    let inputValueInString = num.toString();
    let inputRealValue = inputValueInString.split("÷");
    let result = 0;
    for(let i = 0; i < inputRealValue.length; i++){
        if(i > 0) result /= parseFloat(inputRealValue[i]);
        else result += parseFloat(inputRealValue[i]);
    };
    return result;
};

export const percentNumbers = (...num)=>{
    let inputValueInString = num.toString();
    let inputRealValue = inputValueInString.split("x");
    let numberOfPorcent = inputRealValue[1].split("%")[0];
    let result = (inputRealValue[0]*numberOfPorcent) / 100;
    return result;
};

export const trygonometry = (...num)=>{
    let inputValueInString = num.toString();
    if(inputValueInString.match(RegExp("Cos"))){
        let opArray = inputValueInString.split("Cos");
        return Math.cos(opArray[1]);
    } else if(inputValueInString.match(RegExp("tan"))){
        let opArray = inputValueInString.split("tan");
        return Math.tan(opArray[1]);
    }
    else if(inputValueInString.match(RegExp("Sin"))){
        let opArray = inputValueInString.split("Sin");
        return Math.sin(opArray[1]);
    };
};

export const logarithms = (...num)=>{
    let inputValueInString = num.toString();
    let arrayWithNumber = inputValueInString.split("log");
    return Math.log(arrayWithNumber[1]);
};

export const mathSqrt = (...num)=>{
    let inputValueInString = num.toString();
    let arrayWithNumber = inputValueInString.split("√");
    return Math.sqrt(arrayWithNumber[1]);
};

export const factorial = (...num)=>{
    let inputValueInString = num.toString();
    let arrayWithNumber = inputValueInString.split("!");
    let counter = 0;
    let result;
    for(let i = 0; i < arrayWithNumber[0]; i++){
        counter++;
        if(i < 1) result = 1;
        else result *= counter;
    };
    return result;
};