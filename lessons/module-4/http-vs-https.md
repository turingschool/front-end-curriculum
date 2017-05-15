---
title: HTTP vs HTTPS
length: 120
tags: http, https, security, ssl
---

## What is HTTPS?

Hyper Text Transfer Protocol (HTTP) is the protocol over which data is transferred between your browser and a website. HTTPS (HTTP Secure) is a more secure version of this transfer protocol, in which all communications between the browser and website are encrypted. It is often used to protect sensitive data in transactions that occur during online banking or shopping.

## Why?

Many companies are being urged to switch over to HTTPS. While it may seem like everything on the internet changes in the blink of an eye, this switch to HTTPS has been a slow one. For a long time HTTPS was only used within e-commerce sites, on pages that included order forms. It was only recently that [usa.gov](https://www.usa.gov/) switched over. However, many have been weary of non-https sites for quite some time now, and Google began to cite [HTTPS as a ranking signal](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) for SEO in 2014.

So why the urgency?

When communicating over a regular HTTP connection, all of the data is sent back and forth in plain text, and could be read by anyone who gained access to the connection between your browser and website. Similar to how you've learned that we don't want to store passwords in a database in plain text, it is much safer to encrypt this type of sensitive information. If a user is purchasing something online and fills out an order form containing their credit card information, their financial details are much more easily stolen if they can be read in plain text. With HTTPS, all of these details would be encrypted and a hacker would not be able to decrypt any of the data. In order to decrypt the information, they would also need access to a **private key** that is stored strictly on the server.

## SSL & TLS

HTTPS pages typically use one of two secure protocols to encrypt communications - SSL (Secure Sockets Layer) or TLS (Transport Layer Security). Both the TLS and SSL protocols use what is known as an 'asymmetric' Public Key Infrastructure (PKI) system.

### Public Key Infrastructure

An asymmetric system uses two keys to encrypt communications, a public key and a private key. Anything encrypted with the public key can only be decrypted by the private key and vice-versa. 

As the names suggest, the 'private' key should be kept strictly protected and should only be accessible the owner of the private key. In the case of a website, the private key remains securely ensconced on the web server. Conversely, the public key is intended to be distributed to anybody and everybody that needs to be able to decrypt information that was encrypted with the private key.

### How Does SSL Work?

When you make a request to a site over an HTTPS connection, the website will first send its SSL certificate to your browser. The certificate will typically contain information such as:

* The public key
* A digital signature created by the private key
* Information about who issued the certificate and who it is issued to
* The rights and privileges granted (expiration date/time, hostnames where the certificate is valid, how the certificate can be used)

You can view a site's SSL certificate by going to the 'Security' panel in dev tools and clicking on 'View Certificate'.

![SSL Certificate](/assets/images/lessons/https-ssl/ssl-certificate.png)

The certificate itself seems to give a lot of information away for free. You might wonder how someone couldn't decrypt data from the website when given all of the encryption algorithms and certificate data. Remember you still need access to that private key in order to decrypt anything -- think of a typical master lock. We know the algorithm for opening the lock is:

1. Turn 3 rotations to the right and stop
2. Turn 1 rotation to the left, passing the first number and stopping on the second
3. Turn 1 rotation to the right and stop on third number

Even though we know this algorithm and it is well-documented, if we don't know the 3 numbers to stop on, we won't be able to open the master lock.

The browser will then validate the SSL certificate based on the information it provides, and encrypt a new session key based on the public key provided. The server will then be able to access this valid session key for future requests. This generation of shared secrets is known as the 'SSL handshake'. It establishes a uniquely secure connection between your interactions on a website and the data they're transmitting.

![how-ssl-works](/assets/images/lessons/https-ssl/how-ssl-works.jpg)

### Extended Validation SSL

Websites that communicate over https will have urls that begin with `https://` rather than `http://`. Because this difference is so subtle and can be easily missed, most browsers have implemented a small green padlock icon in their URL bars to signify that you are communicating over HTTPS.

As the highest ‘class’ of SSL available, Extended Validation SSL Certificates (EV SSL) activate both the padlock and the green address bar in all major browsers. EV SSL Certificates provide the strongest encryption level available and enable the organization behind a website to present its own verified identity to website visitors. EV SSL Certificates offer a stronger guarantee that the owner of the website passed a thorough, and globally standardized, identity verification process defined within the EV guidelines (a set of vetting principles and policies ratified by the CA/Browser forum). The Extended Validation identity verification process requires the applicant to prove exclusive rights to use a domain, confirm its legal, operational and physical existence, and prove the entity has authorized the issuance of the Certificate.


## Switching from HTTP to HTTPS

The process for converting an entire site from HTTP to HTTPS is fairly simple, though it does require quite a few steps. The larger your site or application, the more involved this process can get. At a high-level, the transition includes the following processes:

* Purchasing an SSL certificate from your hosting provider about 100/yr)
* Install and configure the SSL certificate - this process can vary depending on your application setup. DigitalOcean has a solid [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-an-ssl-certificate-from-a-commercial-certificate-authority) that can give you some insight into the installation & configuration process
* Ensure a complete backup of your application in its HTTP state exists in case the transition needs to be rolled back for any reason
* Rewrite any hard-coded, internal links within you application from `http://` to `https://`
* Redirect any external links you control to `https://`
* Implement permanent 301 redirects for each page
* Rewire your application in [Google Search Console](https://www.google.com/webmasters/tools/home?hl=en&pli=1), Google Analytics, and other tracking tools you might be using

## Certs are not foul-proof

One thing the green padlock does guarantee (within certain reasonable limits) is that the you are talking to the site in the address bar. So if you are on amazon.com and see a green padlock, then you are securely talking to amazon.com. However if you are on amaz0n.com with a green padlock then you will be securely talking to amaz0n, but there is no guarantee that this is the international retailer amazon.com and in all likelihood it is not and it is a fake phishing site, set up to trick you into thinking you are on Amazon.









 SSL Certificates are issued by trusted, commercial Certificate Authorities (CAs)
