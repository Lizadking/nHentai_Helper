
var contextMenuItem = 
{
    "id": "searchnHentai",
    "title":"Search with nHentai",
    "contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    console.log(clickData)
    console.log(tab)
  })