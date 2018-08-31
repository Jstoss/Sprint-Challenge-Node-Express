# Review Questions

## What is Node.js?
    A server runtime that allows us to use javascript to power our backend

## What is Express?
    A framework that for nodejs to make building applications and APIs on nodejs
    simpler

## Mention two parts of Express that you learned about this week.
    Router and Middleware

## What is Middleware?
    In general, a function we place to modify data between sender and receiver,
    in express specifically, one that's used between the server request and the
    request handler

## What is a Resource?
    Information that the server is providing, accessible via published endpoints
    managed over HTTP methods

## What can the API return to help clients know if a request was successful?
    A response object which gives a status code amongst other things.

## How can we partition our application into sub-applications?
    Express.Router()

## What is express.json() and why do we need it?
    A piece of middleware that parses JSON inside a request before passing it on
