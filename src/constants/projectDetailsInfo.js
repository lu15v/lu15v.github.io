export const projectDetailInfo = {
    webtry:{
        name: 'Webtry',
        image: 'webtry.png',
        description: `A blog/poems/lyrics website (with most of the content written in Spanish) It shows up the passion I have for writting and creating content that states my feelings. 
                     The site was developed using: React, GraphQL, Apollo, CSS3. With the help of LocalStorage, the site renders for the first time a simply but beautiful CSS3 animation that
                     presents the site. The site also keeps record of the number of views for every writting (thanks to the back-end of course). And a bunch of more features you really need to see.`,
        technologies: '',
        github: 'https://github.com/lu15v/Webtry',
        demo: 'https://webtry-ten.vercel.app/'
    },
    webtry_back_end:{
        name: 'Webtry Back End',
        image: 'webtry.png',
        description: `Back End for my personal blog (webtry). It was developed using: GraphQL, Mongoose, and Apollo Server. It is also possible to authenticate in it,  with the help of: jsonwebtoken, and bcrypt. The back-end has 2 Schemas: Author,
                      and Writting. An Author can have multiple Writings, and every single writing should have an unique name if it belongs to the same Author.
                      Simply but not required to make it more complex... For now.`,
        technologies: '',
        github: 'https://github.com/lu15v/Webtry-back-end',
        demo: ''
    },
    socialMedia:{
        name: 'Social Media App',
        image: 'socialMedia.png',
        description: `The site was developed using: React, GraphQL, Apollo GraphQL & Semantic-UI. 
                      The user is able to: login, logout, register,  create posts, delete (own) posts, and like other users posts. This was a great and challenging project, 
                      but quite useful for understanding better GraphQL. (Next time I shouldn't try to use as many new techs as possible... or should I?).`,
        technologies: '',
        github: 'https://github.com/lu15v/Social-Media-Front-End',
        demo: 'https://social-media-front-dq7zjff38-lu15v.vercel.app/'
    },
    socialMedia_back_end:{
        name: 'Social Media Back End',
        image: 'socialMedia.png',
        description: `Back End for the 'Social Media App'. It was developed using: GraphQL, Mongoose, and ApolloServer. The site shows up the main: characteristics, and functionallity of GraphQL. Therefore, 
                      it was such a great experience to develop it! It counts with 2 Schemas: Post and User. Every User can have multiple Posts, and they can only delete the Posts that belongs to them. 
                      Having said that, the site implements full CRUD operations (Mutations if you speak GraphQLian).`,
        technologies: '',
        github: 'https://github.com/lu15v/Social-Media-Back-End',
        demo: ''
    },
    CRM:{
        name: 'CRM',
        image: 'crmClients.png',
        description: `CRM developed with: React, GraphQL, Apollo, Next & Formik. A challenging project using state of the art technologies. The main purpose of this project was to: practice and learn more advanced features of these techs.
                      The main features of the CRM are: full CRUD operations, login, logout, redirection if it's attempted to access without permissions. 
                      It is Simple, but does the work though.`,
        technologies: '',
        github: 'https://github.com/lu15v/CRM-Clients/',
        demo: 'https://crmclient-gbu5616dt-lu15v.vercel.app/'
    },
    CRM_back_end:{
        name: 'CRM Back End',
        image: 'crmClients.png',
        description: `CRM Back-End, developed with: (love) GraphQL, Mongoose, and ApolloServer. This was a very interesting and sort of hard project, because the main purpose of it was to: learn and get familiar with these new techs. The back-end has 4 Schemas (Client, Order, Product, User). 
                      An User can have multiple an unique Clients (the User can only see the Clients that belong to them), this also allows that every single order just gets handled by the proper User. The site has auth implemented with the help of: bcryptjs and jsonwebtoken.
                      Simply but functional.`,
        technologies: '',
        github: 'https://github.com/lu15v/CRM-Clients-Back-End/',
        demo: ''
    },
    theRosa:{
        name: 'The Rosa',
        image: 'theRosa.png',
        description: `Restaurant website based. The site was developed using: HTML5, CSS3 & JS (for some animations) with the "Mobile first" design strategy. 
                      The project excels the animations and smooth transitions while the user gets more into it. Once you are in, you'd like to sit and eat here.`,
        technologies: '',
        github: 'https://github.com/lu15v/The-Rosa-Restaurant',
        demo: 'https://the-rosa-7454b.firebaseapp.com/'
    },
    photoSite:{
        name: 'Photography website',
        image: 'photoSiteMain.png',
        description: `Website developed and designed with Sketch (for the logo) and React. The Application makes use of Material UI Design framework. It shows a gallery and allows you expand every image, when you click on it.  
                      The site 'remembers' your favorite pictures with the help of LocalStorage, and the picture preview is inspired on the labels found next to the artworks, finally the header colors are inspired on the 
                      famous social network 'Instagram'. Simple project but funny to make!`,
        technologies: '',
        github: 'https://github.com/lu15v/photo-site',
        demo: 'https://photo-site-51706.firebaseapp.com/'
    },
    burger:{
        name: 'Burger Price Estimator',
        image: 'burgerSeller.png',
        description: `Burger Price Estimator, developed in React. The application renders/removes every single component when the user adds/deletes ingredientes and estimates the total price of the burger. This project is very important to me, because even if it's quite simple. 
                      It was my first approach/interaction with React! So give it some respect!`,
        technologies: '',
        github: 'https://github.com/lu15v/Burger',
        demo: 'https://my-burger-2a01a.firebaseapp.com/'
    },
    setsStore:{
        name: 'Sets Store',
        image: 'setsStore.png',
        description: `Sets store, developed in React usign "React-bootstrap". The site shows up to the user: a slider with the new arrivals, the sets show the: price, name, description, and artist. Besides, the website has implemented a cart and a login page 
                      (full implementation still pending, and I'm really sorry for that).`,
        technologies: '',
        github: 'https://github.com/lu15v/sets-store',
        demo: 'https://sets-store.firebaseapp.com/'
    },
    marsExp :{
        name: 'Mars Explorer',
        image: "marsExplorer.jpg",
        description: 'Simulation of the Mars explorer, developed with: Lua and Love2d for the AI class. Using Reactive Agents with and without operative mode.',
        technologies: ['Lua', 'Love2d'],
        github: 'https://github.com/lu15v/Mars-Explorer-',
        demo: ''
    },
    connect4 :{
        name: 'Connect 4',
        image: 'connect4.jpg',
        description: 'Implementation of the classic game Connect 4. Developed with: Lua and Love2d for the AI class. Using simulated annealing.',
        technologies: ['Lua', 'Love2d'],
        github: 'https://github.com/lu15v/Connect-4',
        demo: ''
    },
    bbreaker :{
        name: 'Block Breaker Game',
        image: 'blockBreaker.jpg',
        description: 'Implementation of the classic game block breaker, with some new features such as: special power for the bar. Game developed with: C++, OpenGL and SDL.',
        technologies: ['C++', 'OpenGL', 'SDL'],
        github: 'https://github.com/lu15v/Game-OpenGL-and-SDL',
        demo: ''
    },
    restfb :{
        name: 'Rest Facebook API',
        image: 'restFB.jpg',
        description: 'A Web Service using: RestFb 2.8.0, JDK 8 and Glassfish 4.1.2. Allowing interoperability with older versions of Glassfish and JDK. (Versions not compatible with TLSv2).',
        technologies: '',
        github: 'https://github.com/lu15v/Facebook-Web-Service',
        demo: ''
    },
    wandw :{
        name: 'Text Adventure Game',
        image: 'wandW.png',
        description: 'Implementation of an improved version of “Werewolves and Wanderer” text adventure game as explained by Tim Hartnell in his book called: Creating Adventure Games On Your Computer.',
        technologies: ['Javascript', 'SQLite', 'Sinatra'],
        github: 'https://github.com/lu15v/Text-Adventure-Game',
        demo: ''
    },
    fourClojure :{
        name: '4 Clojure',
        image: '4Clojure.jpg',
        description: 'A Set of classical funcional problems developed Using Clojure from the famous web page 4Clojure.com. 4Clojure is a web resource that helps developers to learn Clojure through interactive problems.',
        technologies: '',
        github: 'https://github.com/lu15v/TC2006',
        demo: ''
    },
    poker :{
        name: 'Poker',
        image: '../../assets/images',
        description: '',
        technologies: '',
        github: '',
        demo: ''
    },
    designPatt :{
        name: 'Design Patterns',
        image: 'designPatt.jpg',
        description: 'Custom implemetations of design patterns based on the book: "Design Patterns in Ruby".',
        technologies: '',
        github: 'https://github.com/lu15v/TC3049',
        demo: ''
    },
};