setInterval(() => {
    var inputs;
    inputs = document.getElementsByTagName('input');

    //reveal each password field's length and show passwords in them
    for (var i = 0; i < inputs.length; i++) {
        var field = inputs[i];
        if (field.type != "password") continue;

        field.style.border = field.maxLength >= 0 ? "1px solid orange" : "1px solid green";
        field.placeholder = field.maxLength >= 0 ? "Limit: "+field.maxLength+" chars" : "No limit";
        field.title = field.value;
    }

}, 2000);
