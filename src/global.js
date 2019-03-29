global.server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://betterbooks-server.herokuapp.com/";

global.isAuthorized = false;
