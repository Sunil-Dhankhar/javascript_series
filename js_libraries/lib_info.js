/* 
    JavaScript has a wide range of libraries that serve different purposes—ranging from DOM manipulation to data visualization, 
    UI components, and backend development. Here's a categorized list of popular and useful JavaScript libraries:

        🧩 General Purpose / Utilities

            Lodash – Utility functions for common programming tasks (arrays, objects, etc.) 
                (   => its a utility library that is useful for working with arrays objects etc. its mainly used like array sorting, want to create deep clone, object merging etc. ).

            Underscore.js – Similar to Lodash; offers functional helpers.
                (   => its a utility Library that is developed for working with array and object in smarter way for make coding life easy with help of ready-made Function, its mainly follow the functional style for make code easy and faster like map,reduce,filter,find,uniq,isEqual etc.)

            Moment.js (deprecated in favor of modern options) – Date/time manipulation.

            Day.js – Lightweight alternative to Moment.js.
                (   => its a Lightweight Library that is used for manupulate dates and time. mainly used in when you required to make time differnce and date foematting etc.)

            Date-fns – Modern date utility with modular design.

        🎨 UI / DOM Manipulation
        
            jQuery – DOM manipulation, event handling (used less often in modern apps).
                (   => its known as old is gold, that its famoues for easy to working with DOM Elements (HTML Elements). it make easy to when you want to perform a quick job with help of event perfom )

            Anime.js – Animation library for DOM elements, SVG, and more.

            GSAP (GreenSock) – Powerful animation library, often used in creative web design.
                (   => its an Advanced animation library. that is used for make Professional Level Animation on website like scroll animations, logo animation, sliders etc. )

            Popper.js – Tooltip and popover positioning engine.

        🧰 Framework Ecosystems (Core Libraries)
       
            React – UI library for building components and interfaces.
                (   => its a advanced level javascript library that is used for design UI Interface especially for Single page Aplication. when you want to create Interactive Web App like instagram or gmail then you should be go with React Library. 
                        its create Reusable Components for faster experience )

            Vue.js – Progressive framework for building user interfaces.

            Svelte – Compiler that turns declarative components into efficient JS code.

            Alpine.js – Lightweight framework for adding interactivity in HTML (similar to Tailwind's philosophy).

        📊 Data Visualization
        
            D3.js – Powerful for building custom visualizations using SVG/Canvas.

            Chart.js – Easy-to-use charting library.
                (   =>  this is a Simple Chart library that is used to make statistics in user dashboard, you can use in user dashboard various type of charts like pie chart, bar chart, line chart etc. )

            Plotly.js – Interactive graphs and visualizations.

            Three.js – 3D graphics using WebGL.

        🗄️ State Management
            
            Redux – Predictable state container (commonly used with React).
                (   => this library belongs to State management. its very usefull when in your react app, manage multiple values as globally like login state, cart data etc.)

            Zustand – Minimalistic state manager for React.

            MobX – Simple, scalable state management.

            XState – State machines and statecharts for managing complex states.

        🌐 HTTP / Networking

            Axios – Promise-based HTTP client.
                ( => its a HTTP client that send and receive data from the server. its mainly used when you want data to fetch data or submit form data through the Api from the server or on server).

            Fetch API (native) – Modern browser-based HTTP requests.

            Superagent – Lightweight HTTP request library.

        🔐 Authentication & Security

            jsonwebtoken (JWT) – JSON Web Token implementation.

            bcrypt.js – Library to hash passwords.

        🧪 Testing

            Jest – Zero-config testing framework (commonly used with React).
                (   => its a JavaScript testing framework that is mainly used in write a test of your code that everything is working fine or not.   )

            Mocha – Feature-rich testing framework.

            Chai – Assertion library used with Mocha.

            Cypress – End-to-end testing.

        ⚙️ Build Tools / Transpilers

            Webpack – Module bundler.

            Vite – Fast build tool and dev server (especially for modern frameworks).

            Babel – Transpile modern JS to older versions.

        🧑‍💻 Backend (Node.js)
    
            Express.js – Minimal web framework for Node.js.
                (   => its a  Server-side (backend) framework of Node.js that is mainly used to like you want to create Rest Api or Backend Service then you should go with this library. 
                   its a Super Popular and simple library that enhance your site on Next level.)
                   

            Koa.js – Next-gen web framework from the creators of Express.

            Socket.io – Real-time communication (WebSocket).

            NestJS – Scalable server-side framework (built with TypeScript).



    we are Working with Some Important => Underscore.js, Lodash, Express.js, Node.js, React, jwt, GSAP  Libraries
    ( Lodash And underscore both are similar but lodash is much faster and superier then underscore. Lodash provide extra comfort and extra functionality then underscore js library,
     so we learning here lodash Library( Underscore is automatically cover with this).
     @@@@ =>  where undersocre profide a functional style environment that provide readymade function for working with array and objects.
     @@@@ =>  the Lodash Libary also provide a functional style environment that provide readymade function for working with array, objects, strings, functions and collection.

     Installation 

     in browser => underscore   =>  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js"></script>
     in browser => Lodash       =>  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>


     in Node Envirenment = > underscore => npm install underscore (type in terminal), then add this line into script file like const _ = require('underscore');
     in Node Envirenment = > Lodash => npm install Lodash (type in terminal), then add this line into script file like const _ = require('lodash');
     )
*/