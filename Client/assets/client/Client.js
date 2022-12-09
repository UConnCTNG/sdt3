// write the client class with all its important structs

class Client {

    constructor(config = {}, context = {}, query = {}, crypto = {}) {
        this.config = config;
        this.context = context;
        this.query = query;
        this.crypto = crypto;
    }

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