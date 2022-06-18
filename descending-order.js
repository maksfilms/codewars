/* Your task is to make a function that can take any non-negative integer as an argument and return
it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

function descendingOrder(n){
    let string = n.toString();
    let array = string.split('');

    for (let i = 0; i <= array.length - 2; i++) {
        let maxValue = array[i];

        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[j] > maxValue) {
                maxValue = array[j];
                let swap = array[i];
                array[i] = maxValue;
                array[j] = swap;
            }
        }
    }
    let finalStr = array.join('');
    let finalInt = Number(finalStr);

    return(finalInt);
} 
