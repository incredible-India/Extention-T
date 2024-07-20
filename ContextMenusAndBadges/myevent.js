var Contaxt = {
    "id":"MyContext",
    "title":"MyExtension2",
    "contexts": ["selection",
        "link"
    ]
}
chrome.contextMenus.create(Contaxt);

chrome.contextMenus.onClicked.addListener(function(e) {

if(e.menuItemId == "MyContext")
{
    console.log(e,e.selectionText);
    alert(e.selectionText);
}else{
    console.log("na re",e);
}

})

chrome.browserAction.setBadgeText({"text": "12"});
