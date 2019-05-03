#!/bin/bash

npm run build &&
npm run lint &&
npm run format &&
npm run lint-test &&
npm run test &&
rm -rf ol &&
cp -r @types/ol . &&
cp package.json ol
