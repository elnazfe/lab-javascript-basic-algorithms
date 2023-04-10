// Iteration 1: Names and Input

let hacker1 = "Elnaz";
let hacker2 = "Bruno";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

let hacker1Char = "";
for (let i = 0; i<hacker1.length; i++) {
    hacker1Char += hacker1[i]+ " ";
}
console.log(hacker1Char.toUpperCase())

let hacker2Rev = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Rev += hacker2[i]
}
console.log(hacker2Rev);

let answer = hacker1.localeCompare(hacker2)
if ( answer === -1) {
    console.log(`${hacker1} goes first.`)
}
    else if (answer === 1) {
        console.log(`Yo, ${hacker2} goes first definitely.`)
    }
    else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc tortor, scelerisque non diam sit amet, interdum porttitor arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis sit amet tortor ac elementum. Suspendisse in orci sem. Quisque vitae ante sed neque eleifend mattis vel vel orci. Aliquam eleifend malesuada ex sed viverra. In venenatis nec magna at feugiat. Nam malesuada lorem eget arcu egestas convallis a eu nulla. Nam scelerisque diam ut pharetra venenatis. Maecenas placerat egestas dignissim. Proin at condimentum lacus. Nulla semper mi et nunc vehicula, quis dapibus elit aliquet. Integer ut elementum velit. Maecenas pulvinar condimentum auctor.

Fusce elementum tincidunt lacus, at vulputate sapien accumsan eget. Phasellus tempor augue est, eu tincidunt ipsum tempor at. Curabitur enim urna, aliquam vel lacus id, tincidunt iaculis erat. Pellentesque blandit ex nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis blandit pretium ligula sed gravida. Maecenas molestie maximus gravida. Proin eu molestie nunc. Sed euismod nunc erat, a pharetra lorem rhoncus at. Donec laoreet tortor ac dui fermentum, vitae sagittis sapien lacinia. Quisque mattis accumsan consectetur. Aliquam erat volutpat.

Donec ac dictum felis. Fusce pretium pellentesque justo. Donec tristique, velit ac pharetra pretium, magna lacus auctor velit, id sagittis lorem leo a est. Cras tincidunt convallis ipsum, ut lacinia odio aliquam in. Aenean ac mi magna. Aliquam interdum justo vitae auctor iaculis. Etiam imperdiet turpis ligula, et feugiat lacus mattis vitae. Integer blandit leo quis sollicitudin scelerisque. Praesent pellentesque odio ac leo convallis luctus. Maecenas arcu orci, luctus ut eros sed, facilisis iaculis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`


let wordCount = longText.split(" ").length;
console.log(wordCount);


/*
let wordCount = 1
for (i = 0; i<longText.length; i++){
    if(longText[i] === " "){
wordCount +=1
    }
}
console.log(wordCount);

let etCount;
for (i = 0; i<longText.length; i++) {
    if(longText.char[i] === e && longText.char[i+1] === t) {
        etCount +=1
    }
}
*/

let etCount = longText.split("et").length;
console.log(etCount);