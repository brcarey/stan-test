# Stan coding challenge

Repository contains a solution for the Stan coding challenge found at https://github.com/StreamCo/react-coding-challenge

Solution is a simple react UI built with typescript. I have used a simple webpack config for build tooling, bringing in 
only the bare minimum required to get up and running (compile typescript to js and load a css file).

Simply checkout the repository, run `npm install` and then follow one of the following 2 options:

## Dev mode
To run the app in development mode you can use the npm script `npm run dev` which will spin up a webpack dev server so the app can be viewed
at http://localhost:8080

## Build mode
To build a dist version of the app you can use the npm script `npm run build` which will build the application and place everything required 
(html + js + css + images) into the dist folder. The built version requires that the html file be served from a web server, so that the 
sample.json file can be read over http.

## Notable ommissions
I ran out of time to write any tests. Started writing some unit tests for the FeedService, but had trouble stubbing the `window.fetch` API,
and did not have enough time to research a solution.

I would have also liked to write some unit tests around the `<Entries />` component, that consumes the FeedService renders the tiles using
Enzyme, but just did not have time to introduce the required webpack config.

I would also have preferred to use Redux with react-router, but this is not something I have done before, so elected to crack on and just
manage state internally within the Entries component. This means that it can not be a dumb component just receiving props and re-rendering
as I would have liked.