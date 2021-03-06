chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      innerBounds: {
        width: 900,
        height: 600
      }
    }
  );
});

chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    title: 'Stay on Top',
    id: 'stayontop',
    contexts: ['all']
  });
});

chrome.contextMenus.onClicked.addListener(function(itemData){
  if (itemData.menuItemId == "stayontop"){
    if (chrome.app.window.get("mainWindow").isAlwaysOnTop() == false){
      chrome.app.window.get("mainWindow").setAlwaysOnTop(true);
    }else{
      chrome.app.window.get("mainWindow").setAlwaysOnTop(false);
    }
  }
});