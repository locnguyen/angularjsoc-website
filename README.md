angularjsoc-website
===================
Node.js is a development dependency. This project relies on Grunt and Bower and they require Node installed. Download the binaries from http://nodejs.org. If you are on OS X and have Homebrew installed

```
brew install node
```

Once that is complete, install Grunt and Bower:
```
npm install -g bower

npm install -g grunt-cli
```
Install project's Node dependencies listed in package.json
```
npm install
```
Install project' client-side dependencies listed in bower.json
```
bower install
```
Then run the local Node web server:
```
grunt server
```
Go to http://localhost:8000 in your web browser. The livereload plug-in should automatically reload your browser whenever you make changes to the application. Neat!