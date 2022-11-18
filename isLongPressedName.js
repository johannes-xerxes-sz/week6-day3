/* Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might 
get long pressed, and the character will be typed 1 or more times.
You examine the typed characters of the keyboard. Return True if it is possible that it was your 
friends name, with some characters (possibly none) being long pressed.
Example 1:
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
Constraints:
1 <= name.length, typed.length <= 1000
name and typed consist of only lowercase English letters.
*/

var isLongPressedName = function(name, typed) {
    if (name.length < 1 || typed.length > 1000 || typed.length < name.length) return false;
    if(name === typed) return true
    let namePtr = 0,
        typedPtr = 0,
        last
    if(name[0] !== typed[0]) return false
    while(namePtr < typed.length){
        if(typed[namePtr] === name[typedPtr]){
            namePtr++
            typedPtr++
            last = undefined
        }else{
            if(last === undefined){
                last = typed[namePtr]
            }else{
                if(last !== typed[namePtr]) return false
            }
            namePtr++
        }
    }
    return typedPtr === name.length
};

console.log(isLongPressedName("alex", "aaleex"))//true
console.log(isLongPressedName("saeed", "ssaaedd"))//false
console.log(isLongPressedName("alex","alexxr"))//false
console.log(isLongPressedName("saeed", "ssaaeedd"))//false
