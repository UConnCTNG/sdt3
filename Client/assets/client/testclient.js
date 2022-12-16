/*
Where is localStorage stored?
In Google Chrome, web storage data is saved in an SQLite file 
in a subfolder in the user’s profile. The subfolder is located at 
\AppData\Local\Google\Chrome\User Data\Default\Local Storage on Windows machines and 
~/Library/Application Support/Google/Chrome/Default/Local Storage on macOS
*/

document.getElementById('add-single-item-to-ls').addEventListener("click", function(){
    window.localStorage.setItem('key', 'value');
    updateUI();
});

document.getElementById('add-another-item-to-ls').addEventListener("click", function() {
    localStorage.setItem('users', JSON.stringify({name: "key", value: 'Value'})
    );
    updateUI();
});

document.getElementById('get-single-item-from-ls').addEventListener("click", function(){
    const user = JSON.parse(localStoage.getItem('users'));
    document.getElementById('ls-currently').textContent = user.value;
});

document.getElementById('remove-single-item-from-ls').addEventListener("click", function(){

})

if (typeof(storage) !== "undefined"){
    // code for local storage
}
else{
    // No web storage support
} 