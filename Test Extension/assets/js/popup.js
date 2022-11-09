const text = document.getElementById('notify-text')
const notify = document.getElementById('send-button')
const log = document.getElementById('show-log')
const savedLog = document.getElementById('saved-log')
const clearLog = document.getElementById('clear-log')
//const counter = document.getElementById('notify-count')
let fileHandle;

async function getNewFileHandle() {
  
   // For Chrome 86 and later...
  const opts = {
    types: [{
      description: 'Text file',
      accept: {'text/plain': ['.txt']},
    }],
    // writable: true, 
    // mode: 'readwrite'
  };
  return await window.showOpenFilePicker();
  
}

async function writeFile(contents) {
  
  fileHandle = await getNewFileHandle()
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'FileHandle created!',
  })
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'FileSystemWritableFileStream Created!',
  })
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
}

// async function readFile(fileHandle) {
//   // open file picker
//   // [fileHandle] = await window.showOpenFilePicker(pickerOpts);

//   // get file contents
//   const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
//   // get file contents
//   const fileData = await fileHandle.getFile();
//   return fileData;

  
// }

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

log.addEventListener('click', () => {
  chrome.storage.local.get('log', function(result) {
    savedLog.value = result.log
  });

  //readFile(fileHandle)

  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Update Successful!',
  })
})

notify.addEventListener('click', async () => {
  
  writeFile(text.value).then(() => {
      chrome.storage.local.set({'log': text.value}, function() {
      alert('Log successfully saved!');
    });
  
    chrome.runtime.sendMessage('', {
      type: 'notification',
      message: 'Update Successful',
    })
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