const text = document.getElementById('notify-text')
const notify = document.getElementById('send-button')
const log = document.getElementById('show-log')
const savedLog = document.getElementById('saved-log')
const clearLog = document.getElementById('clear-log')
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
  chrome.storage.local.get('log', function(result) {
    savedLog.value = result.log
  });

  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: 'Update Successful!',
  })
})

notify.addEventListener('click', () => {
  chrome.storage.local.set({'log': text.value}, function() {
    alert('Log successfully saved!');
  });
 
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