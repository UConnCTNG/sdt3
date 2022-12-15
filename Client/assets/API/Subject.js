import "client/Client";
import "UpdateMonitor";

class Subject {
    constructor() {

    }

    async sendClientUpdate() {
 
        // get rid from ClientUpdate monitor struct
        const RID = ClientUpdate.REV;
  
        // get extension field using rid
        const extension = CTngExtension_init(rid);
  
        // get STH, POI, and RID from extension field
        const sth = extension.STH;
        const poi = extension.POI;
        const rid = extension.RID;
  
        // get url from ClientQuery monitor struct
        const url = ClientQuery.Client_URL;
  
        // fetch certificate from website
        const cert = new X509Certificate();
        const response = await fetch(url);
        const data = await response.arrayBuffer();
  
        // load the certificate data into the X509Certificate object
        cert.load(data);
  
        // update ClientVerify attributes
        ClientVerify.Certificate = cert;
        ClientVerify.STH = sth;
        ClientVerify.POI = poi;
        ClientVerify.RID = rid;
  
        return ClientVerify;
    }
}

async function SendUpdate(Client) {
    const cert = new X509Certificate();

    // Then, use the `fetch` function to get the certificate from the website
    const response = await fetch('https://www.example.com/certificate.cer');
    const data = await response.arrayBuffer();

    // Next, load the certificate data into the X509Certificate object
    cert.load(data);

    // You can now access the certificate information using the X509Certificate object
    console.log(cert.issuer);
    console.log(cert.subject);

    // get rev from monitor
    // where to access sth and poi?
}