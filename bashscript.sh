#!/bin/bash

git add .
git commit -m "new deploy"
git subtree push --prefix frontend/build origin gh-pages
git subtree push --prefix serverside heroku master
git push origin master



