### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT is the proposed internet standard for creating and sharing data that allows encryption. These tokens are often assigned via a public or private key or a secret. If the tokens are passed successfully, then you can access the information that the token encrypts. 

- What is the signature portion of the JWT?  What does it do?
  The signature portion is to verify that the sender of the JWT is truly the sender of the token. This will allow for an extra layer of authentication and security to ensure that it wasn't changed along the way. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, an attacker is able to read information within a JWT if they're able to intercept it so it is very important to make sure there is no sensetive information. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  A client application must send a JSON Web Token in the authorization header of the HTTP request to your back end API. An API Gateway should validate the token on my behalf and allow or decline access depending if the token request works out. 

- Compare and contrast unit, integration and end-to-end tests.
  A unit test will test the individual compenent of an entire system at a time. 
  Integration tests will test when components are working together
  An end-to-end test will test if the software is working from start to finish. All of the components of a system can run under real-world scenarios

- What is a mock? What are some things you would mock?
  A mock is a simulated object or module that acts as a stand in for a real object or module. A mock will often be used to isolate behaviors of a module or component to ensure correct behavior.  

- What is continuous integration?
  The practice of automating code changes from multiple contributors into a single project. 

- What is an environment variable and what are they used for?
  Environment variables are typically K:V figured outside your source code so that each value can change depending on environment. 

- What is TDD? What are some benefits and drawbacks?
  Test driven development is a programming approach in which in most cases you write the tests for your app FIRST and then the code second. This can be a massive benefit as it has a significantly higher chance to be successful but the drawback would be development would likely take (much) longer. 

- What is the value of using JSONSchema for validation?
  JSON Schema evaluation is an easier way of validating JSON objects in an application. It may also have the ability to cross multiple different languages. Ease of use. 

- What are some ways to decide which code to test?
  I would say the most important way to look at what code to test is what code directly affects the behavior of the overall software. Is there a segment of code that returns something that will be vitally important for the rest of the app? Absolutely test. Is there something that might put a small check or X next to something if it passes or not even though it has text saying it passed or failed? You'll likely still want to run a test but it isn't vital to the operation of your app. 

- What does `RETURNING` do in SQL? When would you use it?
  `Returning` is used to unconditionally and immediately end an SQL procedure. This will return the flow of control to the caller. You might use this to stop additional database queries to collect the data. 

- What are some differences between Web Sockets and HTTP?
  A web socket will require and maintain a persitant connection while an HTTP requires a new request for every server response. Web Socket can also be used for a bidirectional communcation rather than HTTP which is singularly lateral. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer Flask over Express by a million miles and it's not even close. Flask just makes significantly more sense in my head than Express does. I think what it comes down to is Flask takes care of some very menial and tedious tasks that Express does not so you're left doing some extra work for something that is automatically solved by Flask. 
