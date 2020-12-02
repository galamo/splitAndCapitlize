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
