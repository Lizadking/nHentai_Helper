
chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create({
    "id": "searchnHentai",
    "title":"Search with nHentai",
      contexts:[ "selection" ]
  
    });
  });
  

  chrome.contextMenus.onClicked.addListener( ( info) => 
  {
    console.log(info.selectionText)
  } );
  