const text = document.getElementById('notify-text')
const notify = document.getElementById('send-button')
const log = document.getElementById('show-log')
//const counter = document.getElementById('notify-count')

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
  // chrome.storage.local.clear()
  // text.value = ''
  // console.log('test')
  chrome.runtime.log('TEST')
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Update Successful!',
  })
})

notify.addEventListener('click', () => {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Update Successful',
  })
})

// function readLogFile(filePath) {
//   fetch(filePath).then(response => response.text())

//   //if this works
//   // chrome.runtime.sendMessage('', {
//   //   type: 'notification',
//   //   message: "Update Successful!",
//   // })
// }
