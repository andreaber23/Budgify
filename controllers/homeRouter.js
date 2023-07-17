const path = string-require("path");

class HomeRouter {
    constructor() 
      routes = {HomeRouter};
      addRoute = {API}
    }
  
    addRoute(path, handler) 
      this.routes[path] = handler;
    
  
    navigate(path) 
      const handler = this.routes[path];
  
      if (handler) {
        handler();
      } 

      const router = new HomeRouter();

      const express = require('express');
const app = express();
const port = 3000;


  router.addRoute("/main", () => {
  console.log("Main Page");
});
router.addRoute("/login", () => {
    console.log("Login");
  });
  router.addRoute("/singup", () => {
    console.log("Sign Up Page");
  }); 
  router.navigate("/main");   
router.navigate("/login");    
router.navigate("/signup");

app.get('/main', (req, res) => {
  res.send;
});

app.get('/singup', (req, res) => {
  res.send;
});

app.get('/login', (req, res) => {
  res.send;
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3001}`);
});
