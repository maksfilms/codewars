const reverseSeq = n => {
    if (n < 1) {
        return [];
    } else {
        let arr = reverseSeq(n - 1);
        arr.unshift(n);
        return arr;
    }
}

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/
