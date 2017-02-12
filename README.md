# twitter-stream-example


### Install stuff

```
npm install

```


### Run for development

```
npm run serve
```

This allows the code to be restarted on change (is using nodemon).



### Deploy 


```
npm run build
```

This will generate the `/build` directory, thats the production code.


### Test production

```
npm run production
```

This will run the code of the `/build` folder (thats the code generated after traspiling).



The es6 code should be placed on the `code` folder!


# Important!

You need to create the file `code/env.js` using `code/env.example.js` as a example (doh).

To fill the data needed to create the `env.js` file go to [here](https://apps.twitter.com) and create the twitter app (then you can get the credentials to connect).

You can use any `Website URL` you want (http://zombo.com) because we are not using any callback to anywhere.

Also dont put anything on `Callback URL`.



This example code is based on [This great article](https://www.gitbook.com/book/node-bloggers/nodejs-and-twitter-s-stream-api/details), i added some es6 magic.


For any contribution just create a PR.