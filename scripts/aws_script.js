var postMessage = (msg) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "message": msg });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://pdd6h97kk3.execute-api.eu-central-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}

var getMessage = () => {
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
    };
    // make API call with parameters and use promises to get response
    fetch("https://pdd6h97kk3.execute-api.eu-central-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => showText(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}

let showText = (res) => {
    // clear previous text..
    document.getElementById("typedtext").innerHTML = "";
    clearTimeout("typewriter()", 500);

    console.log(res);

    // set up text to print, each item in array is new line
    let str = "There are only 10 types of people in the world:;Those who understand binary, and those who don't."
    var aText = res ? res.split(";") : str.split(";")

    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    typewriter = function () {
        try {
            sContents = ' ';
            iRow = Math.max(0, iIndex - iScrollAt);
            var destination = document.getElementById("typedtext");

            while (iRow < iIndex) {
                sContents += aText[iRow++] + '<br />';
            }
            destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
            if (iTextPos++ == iArrLength) {
                iTextPos = 0;
                iIndex++;
                if (iIndex != aText.length) {
                    iArrLength = aText[iIndex].length;
                    setTimeout("typewriter()", 500);
                }
            } else {
                setTimeout("typewriter()", iSpeed);
            }
        } catch (error) {

        }
    }

    typewriter();
}