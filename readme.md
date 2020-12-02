# create node package

run `npm init`

- After running npm init and asnwering the qestions.
  Package.json file will be created.

- if we want to run a script command, we need to give the script key the appropriate command to execute
- Create `index.js` file
- insert in `index.js` the following code:

```javascript
console.log("This code is runngin from server");
```

- Run your JS Code: `node <FileName.js>`

### Declare npm script

- lets declare an npm script `start` command
- every time we will execute `npm start`
- it eventually will run `node index.js`
- put the following command in your `package.json` file

```json
 "scripts": {
    "start": "node index.js",
  },
```

- replace the exising `scripts` key
- save the `package.json`
- open the command line and run `npm start`
- what happend?

## install create-react-app

- https://reactjs.org/docs/create-a-new-react-app.html

- run the following command in your command line
  `npm install -g create-react-app`

- `npm` prefix commandline
- `install` install the requested package ( download from registry )
- `-g` meand globally on the computer
- `create-react-app` package name


# Create your first application in react
- `npx create-react-app movies-app`

# run your react app
- after your folder created and files installed 
- cd into your folder: `movies-app`
- open command line and run `npm start`
- open your browser on localhost:3000
