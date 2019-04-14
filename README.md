# React/Redux Malicious IP Search

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project is a demonstration of a lightweight React/Redux application is intended to connect to a .NET Core API that searches for malicious IP addresses.


# How to Run

  - Download and run the .NET Core API found here:
  -- https://github.com/WiNTeR270/security-demo-.net-core-api
  - Run the .NET Core API application and determine the *localhost:port* in use
  - Update src/actions/index.js 
  -- Set the IP_SERVICE_URL variable to reflect the .NET Core API *localhost:port* value
