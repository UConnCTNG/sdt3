class UpdateMonitor {

    constructor(data) {
        this.data = data;
    }

    async queryMonitors(c) {
        // Convert gossip object to JSON
        let Newquery = {
          Client_URL: c.Config.Client_URL,
          LastUpdatePeriod: c.LastUpdatePeriod,
        };
        
        let msg = JSON.stringify(Newquery);
        // HTTP POST the data to the url or IP address.
        let resp = c.Client.post(
          "http://" + c.Config.Default_update_monitor + "/monitor/get-updates",
          "application/json",
          new Buffer(msg)
        );
        if (err) {
          for (let url of c.Config.Monitor_URLs) {
                // HTTP POST the data to the url or IP address.
                let _ = c.Client.post(
                      "http://" + url + "/monitor/get-updates",
                      "application/json",
                      new Buffer(msg));
                  continue;
            } 
          
        } else {
          // close the response body
          resp.Body.Close();
        }
    }
      
}