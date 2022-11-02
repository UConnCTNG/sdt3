// ----------------------------------- Slightly more useful ----------------------------------------------------

// Can save this anywhere, will create a local storage solution
// {
//     "permissions": [
//         "storage"
//     ]
// }

//  LOCAL Storage

// Save data to storage locally, in just this browser...

chrome.storage.local.set({ phasersTo: 'awesome' }, function () {
  //  Data's been saved boys and girls, go on home
})

chrome.storage.local.get(/* String or Array */ ['phasersTo'], function (items) {
  //  items = [ { "phasersTo": "awesome" } ]
})

// Research Materials : https://developer.chrome.com/docs/extensions/reference/storage/#type-StorageArea
