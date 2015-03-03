function windowHeight(){
  var mainWindow = chrome.app.window.get("mainWindow");
  var height = mainWindow.innerBounds.height;
  var textarea = document.getElementById("textarea");
  var newHeight = parseInt(height);
  var fixedHeight = newHeight * 0.04;
  var height = newHeight - fixedHeight;
  var height = height.toString();

  textarea.style.height = height + "px";
}

document.addEventListener("DOMContentLoaded", function(){
  var target = window.innerHeight;

  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      chrome.app.window.onBoundsChanged.addListener(windowHeight());
    });
  });

  var config = {attributes:false, childList:false, characterData:true};

  observer.observe(target,config);
});