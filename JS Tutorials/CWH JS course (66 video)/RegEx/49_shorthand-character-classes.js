console.log("This is tutorial 49");

// Character classes
let regex = /\war/;     //word character - _ or alphabet or numbers
regex = /\w+d1r/;       // \w+ means one or more word characters
regex = /\Wbhai/;       // Non word character
regex = /\W+bhai/;      // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/;   // \d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/;  // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters[ \r\t\f\n\v]
regex = /\Ska number/;  // Match non whitespace character[^ \r\t\f\n\v]
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/;  // word boundary

// Assertions-->(Lookaheads)
regex = /h(?=y)/; //y thakle (only)h return
regex = /h(?!y)/;  //y na thakle (only)h return
str = "&%$$%%^^%hyrh7rd1r4r5r y%%$@bhai hdrryika number 899999harry9999";



let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
