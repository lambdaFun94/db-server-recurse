Database Server for Recurse Center Application 

## Description
A simple http server to store and retrieve key-value pairs in main memory. 

## Specification
Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.

During your interview, you will pair on saving the data to a file. You can start with simply appending each write to the file, and work on making it more efficient if you have time.

[Link to Recurse Center](https://www.recurse.com/pairing-tasks)

## Usage
- `npm install`
Install required dependencies
- `npm run dev` 
Run in development environment with nodemon
- `npm start` 
Run in production 

#### Information
- Author: Andrew Sanchez
- Date: February 2021)
