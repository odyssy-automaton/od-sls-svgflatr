od-sls-svgfltr 
===

A simple working example of running PhantomJS on AWS Lambda via NodeJS
---
starter used (lambda-node-phantom)
This repository contains a complete, working example of running a simple PhantomJS script on AWS Lambda through a NodeJS child process.

First, clone this repository (or download the zip).  Next, [compress the contents of the folder](http://stackoverflow.com/a/34640743/2282538), and upload the zip file to an AWS Lambda function.

The PhantomJS binary is included in this repository


takes a name, an array of svg urls and a html url, html should contain a div with id of "surface"