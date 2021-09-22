
var menuItem = {
    "id": "Search_me",
    "title": "Search_me",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Search_me" && clickData.selectionText){    
        var Search_meUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": Search_meUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});
