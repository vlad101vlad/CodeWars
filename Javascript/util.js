codeWarsName = "Convert string to camel case"

function convertCodeWarsName() {
    codeWarsName = codeWarsName.replaceAll(" ", "-");
    console.log(codeWarsName);
}

convertCodeWarsName()