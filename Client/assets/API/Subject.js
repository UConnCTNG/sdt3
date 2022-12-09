import "client/Client";
import "UpdateMonitor";

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