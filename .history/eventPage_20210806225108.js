
var contextMenuItem = 
{
    "id": "searchnHentai",
    "title":"Search with nHentai",
    "contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((OnClickData) => {
    let selection = OnClickData.selectionText
    console.log(selection)
    let defaultUrl= "https://nhentai.net/g/"
    let finalUrl = defaultUrl+=strElm+"/";
    //may change this line below 
    window.open(finalUrl);


});
