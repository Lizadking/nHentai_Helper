



/*
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('submit');

    btn.addEventListener('click', function() 
    {
        let defaultUrl= "https://nhentai.net/g/"
        let from = document.forms.nHentaiHelper;
        let elm = from.elements.ntag;
        let strElm = String(elm.value);
        console.log(strElm);
        let finalUrl = defaultUrl+=strElm+"/";
        chrome.tabs.create({ url: finalUrl})
    
    });
}  );
*/

console.log(document.getElementById('submission'))
