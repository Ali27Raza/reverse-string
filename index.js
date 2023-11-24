

function reverseString(inputString, callback) {

    var reversedString = inputString.split('').reverse().join('');
    
    callback(reversedString);
}

function displayReversedString(result) {
    console.log("Reversed String: " + result);
}

module.exports = {
    reverseString: reverseString,
    displayReversedString: displayReversedString
};
