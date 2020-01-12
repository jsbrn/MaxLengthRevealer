setInterval(() => {
    var inputs;
    inputs = document.getElementsByTagName('input');

    //attempt to find fields in frames, doesn't always work
    for (var f = 0; f < window.frames.length; f++) {
        var frame = window.frames[f];
        var frame_fields = frame.document.getElementsByTagName('input');
        for (var ff = 0; ff < frame_fields.length; ff++) {
            if (frame_fields[ff].type == "password") inputs.push(frame_fields[ff]);
        }
    }

    //reveal each password field's length and show passwords in them
    for (var i = 0; i < inputs.length; i++) {

        var field = inputs[i];
        if (field.type != "password") continue;

        field.type = "text";
        field.style.border = field.maxLength >= 0 ? "3px dotted orange" : "4px dotted green";
        field.placeholder = field.maxLength >= 0 ? "Max length: "+field.maxLength : "";

    }
}, 2000);
