



chrome.runtime.onInstalled.addListener( () => {
   
  });
  

  chrome.contextMenus.onClicked.addListener( ( info) => 
  {
    console.log(info.selectionText)
  } );
  