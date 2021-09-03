/** PROBLEM: 
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
 */

/** SOLUTION: 
 * can solve this problem using stacks in O(N) = N
 * we use an additional array called stack, so it will be S(N) = N
 */

const stripBackspace = (str) => {
    let stack = [];
    for(let letter of str) {
        if(letter === "#"){
            stack.length > 0 && stack.pop(); //pop the character before the backspace
        } else {
            stack.push(letter); // keep adding the letter to the stack 
        }
    }
    return stack.join('');
}

const backspaceCompare = (str1, str2) => {
    const result = stripBackspace(str1) === stripBackspace(str2);
    return result;
}

console.log(backspaceCompare('xy#z', 'xzz#'));
console.log(backspaceCompare('xy#z', 'xyz#'));
console.log(backspaceCompare('xp#', 'xyz##'));
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));