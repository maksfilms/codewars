function abbrevName(name){
    let arr = name.split('');
    let answer = ' ';

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === ' ') {
            i++;
            answer = arr[0] + '.' + arr[i];
        }
    }
    return(answer.toUpperCase());
}

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/
