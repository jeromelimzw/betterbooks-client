if (process.env.NODE_ENV === "production") {
  global.server = "https://betterbooks-server.herokuapp.com/";
} else {
  global.server = "http://localhost:8080/";
}
