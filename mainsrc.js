

//Event for the search button
document.getElementById('submission').addEventListener('click',function()
    {
        let defaultUrl= "https://nhentai.net/g/"
        let from = document.forms.nHentaiHelper;
        let elm = from.elements.ntag;
        let strElm = String(elm.value);
        console.log(strElm);
        let finalUrl = defaultUrl+=strElm+"/";
        
        chrome.tabs.create({url:finalUrl});
    });
