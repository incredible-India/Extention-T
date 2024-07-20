// chrome.tabs.query({active:true,currentWindow:true},function(e){
//     chrome.pageAction.show(e[0].id)
// }) // this will show only in loead extension tab




chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "ShowIcon")
    {
        chrome.tabs.query({active:true,currentWindow:true},function(e){
            chrome.pageAction.show(e[0].id)
        })
    }
})