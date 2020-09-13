SrtParser = (function() {
    return {}
})();


SrtParser.parse = function(text) {
    var captions = [], text = text.replace("\r", "")
    var pattern = new RegExp(
        "([0-9]+)\\s*\\n" + 
        "([0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3})\\s*-->\\s*([0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3})\\s*\\n" + 
        "((.|\\n)+?)\\n\\n", "g"
    )

    while ((m = pattern.exec(text)) !== null) {
        console.log(m[4].replace("\n", " "))
        captions.push({
            "number":m[1],
            "begin-time":m[2].replace(",", "."),
            "end-time":m[3].replace(",", "."),
            "caption":m[4].replace("\n", " ")
        })
    }

    return captions
}

__MODULE__ = SrtParser;