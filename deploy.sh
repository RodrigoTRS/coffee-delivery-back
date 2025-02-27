#!/bin/bash

zip -r lambda.zip . -x "db/*" -x "deploy.sh" -x ".gitignore" -x "docker-compose.yml" -x "nodemon.json"
aws lambda update-function-code --function-name lambda-name-here --zip-file fileb://lambda.zip --profile rodrigosilva
rm lambda.zip
