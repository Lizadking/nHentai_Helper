//Context menu
var contextMenuItem = 
{
    "id": "searchnHentai",
    "title":"Search with nHentai",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItem);
//event for the context menu
chrome.contextMenus.onClicked.addListener((OnClickData) => {
    let selection = OnClickData.selectionText
    console.log(selection)
    let defaultUrl= "https://nhentai.net/g/"
    let finalUrl = defaultUrl+=selection+"/";
   
    chrome.tabs.create({url:finalUrl});


});
