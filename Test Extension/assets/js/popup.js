const text = document.getElementById('notify-text')
const notify = document.getElementById('send-button')
const log = document.getElementById('show-log')
const savedLog = document.getElementById('saved-log')
const clearLog = document.getElementById('clear-log')
//const counter = document.getElementById('notify-count')
let fileHandle;

async function saveFile(text) {
  
  // create a new handle
  const newHandle = await window.showSaveFilePicker();
  fileHandle = newHandle;

  // debug purposes
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'FileHandle created!',
  })

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'WritableStream created!',
  })

  // these blobs are needed to write to the file
  const blob = new Blob([text], {
    type: "text/html",
  });

  // write our file
  await writableStream.write(blob);

  // close the file and write the contents to disk.
  await writableStream.close();
}


chrome.storage.local.get(['notifyCount'], data => {
  let value = data.notifyCount || 0
  //counter.innerHTML = value
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.notifyCount) {
    let value = changes.notifyCount.newValue || 0
    //counter.innerHTML = value
  }
})

log.addEventListener('click', async () => {
  chrome.storage.local.get('log', function(result) {
    //savedLog.value = result.log
  });

  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  // get file contents
  const fileData = await fileHandle.getFile();
  contents = await fileData.text();
  savedLog.value = contents // JSON.stringify(fileData);


  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Update Successful!',
  })
})

notify.addEventListener('click', async () => {
    saveFile(text.value)

    chrome.runtime.sendMessage('', {
      type: 'notification',
      message: 'Update Successful',
    })
  })


clearLog.addEventListener('click', () => {
  chrome.storage.local.clear()
  alert("Log cleared!")
  savedLog.value = ""

  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Clear Successful',
  })
})