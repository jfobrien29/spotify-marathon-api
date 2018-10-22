# Spotify API
API development repository for Spotify interaction

# Starting
Run `npm start` to begin the server. The server will adapt to it's environment with various configurations (dev vs prod)

# API components

There are ___ sets folders for the various components of app functionality:
Inside each of these folders you will find a a `Routes` file, a `Controller` file, a `Service` file, and a `*spec` file
* The `Routes` file defines the endpoints to interact with that component
* The `Controller` file defines data validation and enlists services to process the requests
* The `Service` file defines business logic to process the request
* The `spec` file defines the testing scripts for that particular component