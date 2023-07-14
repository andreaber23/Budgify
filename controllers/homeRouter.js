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

