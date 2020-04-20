# Smoothie App

This place is a message...and part of a system of messages...learn from this repo, but do not clone!! See note heading below.

Heavily based on https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/ - first project. Diverted a bit as a challenge.

Basic CRUD/Firestore app to manage smoothie recipes.

Was a bit clever with the Create/Edit (they're the same component, just different routes);
Also quite pleased with the UI for Add Ingredient, it feels right.

### note for future erin:

You broke it somehow when creating a git repo for it but creating the repo in the parent folder by accident and making a commit and then reverting that commit....basically (presumably due to the reverted commit?) a bunch of necessary files disappeared and `npm install` etc couldn't fix it. So you reproduced it in this new app, copied necessary files over etc, but `npm run serve` didn't seem to be updating / gave compile error because firestore was being imported but not used, except it was being used, like 10 lines down.....

.
.
.
.
.

# smoothie-app2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
