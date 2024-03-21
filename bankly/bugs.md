1. The first error I found was that in the createToken.js, there is no timeout function for the JWT token nor is there a test for it. This would likely lead to a large security risk. I fixed this bug by adding a 1 hour time out. 

2.  Next I found an error in the user.js file where in get(username) it wasn't throwing the new ExpressError. It was simply saying new ExpressError. I have corrected that within the code. 

3. I believe I found an error in the routes/auth.js route in our post('/login') function because there was no await before the let user = User.authenticate(username, password);. By adding await this will allow the user variable contain the resolved value of the auth process. 

4. I think I found another in app.js? I'm not positive if it's really a bug or a mistake but I think the bug I found in app.js is a double module.exports = app; which I have since removed. 

5. I believe I found a bug in config.js where the require('dotenv') did not have a .config on the back end of it. I consulted another app I had written and it did have .config() on the end so this may or may not be one of the bugs but I found it. 

6. I could not find the last bug for the middleware.auth.js bug. Hopefully I did well on this assignment! Let me know if you'd like me to find something more specific or if something needs to be changed. Thanks!

