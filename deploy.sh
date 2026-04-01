#!/bin/bash

# PRODUCTION
git checkout master
git reset --hard
git pull origin master

npm install -g yarn
npm install -g serve

yarn install
yarn build
pm2 start "yarn run start:prod" --name=NIMORA-REACT

# DEVELOPMENT
# npm i yarn -g
# yarn
# pm2 start "yarn run start" --name=NIMORA-REACT