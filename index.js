function encrypt() {

    let textInput = document.getElementById("textInput").value;
    let encryptText = textInput.value.toLowerCase()
        .replace(/a/gi, "%")
        .replace(/e/gi, "~")
        .replace(/i/gi, '#')
        .replace(/o/gi, '-')
        .replace(/u/gi, '@')
        .replace(/c/gi, '€')
        .replace(/d/gi, '¿')
        .replace(/l/gi, '¬')
        .replace(/m/gi, 'µ')
        .replace(/n/gi, 'º')
        .replace(/p/gi, 'þ')
        .replace(/r/gi, '¶')
        .replace(/s/gi, 'ß')
        .replace(/t/gi, 'ŧ');

    if (textInput.value != '') {

    textOutput.value = encryptText;
    alert('Successfully encrypted text')

    } else {

    alert('Input some text')

    }
}


function decrypt() {

    let textInput = document.getElementById("textInput").value;
    let decryptText = textInput.toLowerCase()
        .replace(/%/gi, "a")
        .replace(/~/gi, "e")
        .replace(/#/gi, 'i')
        .replace(/-/gi, 'o')
        .replace(/@/gi, 'u')
        .replace(/€/gi, 'c')
        .replace(/¿/gi, 'd')
        .replace(/¬/gi, 'l')
        .replace(/µ/gi, 'm')
        .replace(/º/gi, 'n')
        .replace(/þ/gi, 'p')
        .replace(/¶/gi, 'r')
        .replace(/ß/gi, 's')
        .replace(/ŧ/gi, 't');

    if (textInput.value != '') {

        textOutput.value = decryptText;
        alert('Successfully decrypted text')
        
    } else {
            
        alert('Input some text')
        
    }
}



