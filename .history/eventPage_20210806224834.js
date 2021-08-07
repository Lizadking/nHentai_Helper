
var contextMenuItem = 
{
    "id": "searchnHentai",
    "title":"Search with nHentai",
    "contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((OnClickData) => {console.log(OnClickData.selectionText)})
