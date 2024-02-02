const module = (function() {
    return {
        parse: function(text) {
            const captions = [];
            const pattern = new RegExp(
                "([0-9]+)\\s*\\n" + 
                "([0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3})\\s*-->\\s*([0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3})\\s*\\n" + 
                "((.|\\n)+?)\\n\\n", "g"
            );

            text = text.replace("\r", "");
        
            while ((m = pattern.exec(text)) !== null) {
                captions.push({
                    "number": m[1],
                    "begin-time": m[2].replace(",", "."),
                    "end-time": m[3].replace(",", "."),
                    "caption": m[4].replace("\n", " ")
                });
            }
        
            return captions;
        },
    }
})();

__MODULE__ = module;
