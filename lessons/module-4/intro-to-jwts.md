---
title: Introduction to JSON Web Tokens
layout: presentation
tags: authentication, security, JWTs
module: 4
---

<section>
  <h2>Intro to JSON Web Tokens</h2>
  <p><b>Goals:</b></p>
  <ol>
    <li>Understand what a JSON Web Token is and how it's used</li>
    <li>Be able to protect a server-side endpoint with a JWT</li>
    <li>Understand similarities/differences between JWTs and other authentication methods</li>
  </ol>
</section>

<section>
  <section>
    <h3>What if...</h3>
    <p><i>"someone discovers a server-side endpoint used for sharing private photographs"</i></p>
  </section>
  <section>
    <p>We can <b>protect</b> access to this endpoint by requiring <b>authentication</b> through the use of a <b>JWT</b></p>
  </section>
</section>

<section>
  <section>
    <p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2V<br />ybmFtZSI6ImJyaXR0YW55IiwicGFzc3dvcmQiOiJoZWxsby<br />IsImlhdCI6MTQ5OTM0MjA5OSwiZXhwIjoxNDk5NTE0ODk5<br />fQ.PkWZL0OkYeNT1s5C2FUbB1XRpdo409A6ySa_d81dVgM</p>
  </section>
  <section>
    <p><b>With a partner, discuss the following questions:</b></p>
    <ol>
      <li>What did you use API keys for? Why did you need them?</li>
      <li>How did you use them? Where did you put them in your codebase?</li>
      <li>What problems, if any, did you run into when using them?</li>
    </ol>
  </section>
</section>

<section>
  <h3>What is a JWT?</h3>
  <ul>
    <li>a string</li>
    <li>...that is base64url-encoded</li>
    <li>...and contains authentication data for a particular user</li>
  </ul>
  <p>Let's take a look at the <a href="https://jwt.io/">anatomy of a JWT</a></p>
</section>

<section>
  <h3>How Can we use JWTs?</h3>
  <p>By passing them through a <b>request</b> to the <b>server</b>, either:</p>
  <ul>
    <li>in the request body</li>
    <li>as a query parameter</li>
    <li>as an authorization header</li>
  </ul>
</section>

<section>
  <h3>Why do we use JWTs?</h3>
  <p>To verify that a request is coming from an authentic source</p>
  <ul>
    <li>to prevent data from being exposed to unauthorized users</li>
    <li>to limit access to features of an application</li>
    <li>authentication does not equal full security</li>
  </ul>
</section>

<section>
  <h3>Resources</h3>
  <ul>
    <li><a href="https://zapier.com/engineering/apikey-oauth-jwt>Differences between API Keys, OAuth, and JWTs</a></li>
    <li><a href="https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec#.xp9snye3h">Understanding JWTs</a></li>
  </ul>
</section>
