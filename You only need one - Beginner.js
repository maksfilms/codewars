/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

    Array can contain numbers or strings. X can be either.

    Return true if the array contains the value, false if not.*/

function check(a, x) {
    for (let i = 0; i <= a.length -1; i++) {
        if (a.indexOf(x) >= 0) {
            return true;
        } else {
            return false;
        }
    }
}