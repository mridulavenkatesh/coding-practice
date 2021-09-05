const balancedParanthesis = str => {
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
    const bracketsMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = [];
    for(let val of str){
        if(openingBrackets.includes(val)){
            stack.push(val);
        } else if(closingBrackets.includes(val)){
            if(stack.length === 0) return false;
            if(stack[stack.length - 1] === bracketsMap[val]){
                stack.pop();
            } else return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedParanthesis("([])(){}(())()()"));