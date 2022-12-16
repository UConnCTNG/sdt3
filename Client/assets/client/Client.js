// write the client class with all its important structs

document.getElementById("send-button").addEventListener("click", loadDB());
document.getElementById("add-button").addEventListener("click", addToDB());
document.getElementById("clear-log").addEventListener("click", clearDB());

function test() {
    console.log("test")
}

function clearDB() {
    chrome.storage.local.clear();
}

function addToDB() {
    let k1 = "certificates";
    let value = [ "CERT1EXAMPLE", "CERT2EXAMPLE", "CERT3EXAMPLE", "CERT4EXAMPLE", "CERT5EXAMPLE" ];
    chrome.storage.local.set({ k1: value }).then(() => {
        for (x in value) {
            console.log(x + " added to the database.");
        }
    });
}

function loadDB() {
    // chrome.storage.local.get(["key"]).then((result) => {
    //     console.log("Value currently is " + result.key);
    // });
    
    chrome.storage.local.get(null, function(items) {
        for (key in items) {
            console.log(key)
        }
     });
}

class Client {

    static test = "Hello";
    
    constructor(config = {}, context = {}, query = {}, crypto = {}) {
        this.config = config;
        this.context = context;
        this.query = query;
        this.crypto = crypto;
        this.db = db;
    }

    // async loadDb() {
    //     let k1 = "cert";
    //     let value = "CERT1EXAMPLE";
    //     chrome.storage.local.set({ k1: value }).then(() => {
    //         console.log("Certificate is: " + value);
    //     });
    //     //chrome.storage.local.clear();
    
    //     chrome.storage.local.get(["key"]).then((result) => {
    //         console.log("Value currently is " + result.key);
    //     });
    // }

    // write a function to open up an SQLite file and load it into an object
    // async loadDb() {
    //     const sqlite3 = require('sqlite3');
    //     const db = new sqlite3.Database('../../db/database.db');
    //     console.log(db.get("SELECT * FROM database"));
    // }

    // write a function to save data into an SQLite file
    // async saveDb() {
    //     // 
    // }

    // #region helpers

    async loadClientConfig(path, cryptopath) {
        const configResponse = await fetch(path);
        const jsonConfig = await response.text();
        this.config = JSON.parse(jsonData);
      
        // Show config in log 
        console.log(this.config);

        cryptoResponse = await fetch(cryptopath);
        jsonCrypto = await response.text();
        this.config = JSON.parse(jsonData);
        console.log(this.crypto)
    }

    async periodicTasks() {
    	// Immediately queue up the next task to run at the next MMD.
    	// queues up the next task irrespective of the rest of the function
    	function queueTask() {
      	periodicTasks();
    	}
    	setTimeout(queueTask, this.config.MMD * 1000);
    	// Run the periodic tasks through the UpdateMonitor API.
    	UpdateMonitor.queryMonitors(this.context);
    }

    async startClientServer() {
        this.context.lastUpdatePeriod = "0";
        let tr = {};
        c.Client = {
          Transport: tr,
        };
        // Start a periodic loop to perform tasks every period
        periodicTasks();
        // Start an HTTP server loop to listen and handle requests
        handleClientRequests(c); //not yet implemented
    }
    
    async postRequest(URL) { //In Progress
        var xhr = new XMLHttpRequest();
        xhr.open("POST", URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            value: value
        }));
    }


    // #endregion

    // #region GettersSetters

    get config() {
        return this.config;
    }

    set config(newConfig) {
        this.config = newConfig;
    }

    get context() {
        return this.context;
    }

    set context(newContext) {
        this.context = newContext;
    }

    get query() {
        return this.query;
    }

    set query(newQuery) {
        this.query = newQuery;
    }

    get crypto() {
        return this.crypto;
    }

    set crypto(newCrypto) {
        return this.crypto;
    }


    // #endregion


}