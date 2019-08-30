window.CodeLoader = (function(){
    var CodeLoader = { loadFileToElement: loadFileToElement}

    function loadFileToElement(filePath, elementToDisplayID){

        var client = new XMLHttpRequest();
        client.open('GET', filePath);
        
        client.onreadystatechange = onreadystatechange
        client.send();
        
        function onreadystatechange() {
            document.getElementById(elementToDisplayID).textContent = client.responseText;
            setTimeout(hljs.initHighlighting);
        }
    }    

    return CodeLoader
})()

