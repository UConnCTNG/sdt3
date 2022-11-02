// Test Log File Code:  ----------------- NOT HELPFUL (server-to-server code) -----------------

<input type='button' name='button1' class='capture' />
<input type='button' name='button2' class='capture' />
<input type='button' name='button3' class='capture' />

$(".capture").click(function(){

    var buttnName=$(this).attr('name');
    $.ajax({
      type:"POST",
      data:"ClickedButton="+buttonName, 
      url: "server.php",
      success: function(data){

      alert('Written in Log File');
    }
    }); // END Ajax 
    });

// Server Side Code Below:

  $myFile = "logfile.txt"; \\Considering the text file in same directory where server.php is
  $fh = fopen($myFile, 'w') or die("can't open file");
  $stringData =$_POST['ClickedButton'] ;
  fwrite($fh, $stringData);
  fclose($fh);

// ----------------------------------- Slightly more useful ----------------------------------------------------

// Can save this anywhere, will create a local storage solution
{
    "permissions": [
        "storage"
    ]
}

//  Usage:

//  PERSISTENT Storage - Globally (not viable)
//  Save data to storage across their browsers...

chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});

//  LOCAL Storage

// Save data to storage locally, in just this browser...

chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
});