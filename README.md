# Project Name

- Vegan Africa

## Built With

- Next.js
- Material-ui


## Getting Started

- Clone the project and cd into the directory. Run ```npm install``` to install dependencies and ```npm run dev``` to start the application in your browser.

- To deploy changes run ```npx serverless```.

## Deploy on aws lightsail
#### Run the following steps in that order.
- ```cd htdocs/veganAfrica/ ```
- ```pm2 stop all```
- ```git pull origin main ```
- ```export NODE_OPTIONS=--max_old_space_size=7096```- (Note: You have to run this anytime you have to run npm build).
- ``` npm run build ``` 
- ```  pm2 start npm -- start ```


## Todos and Questions
  - what's this? 34s › nextJsApp › CredentialsError: Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1 <on npx serverless
  - can we just remove the env files from the gitignore since this is a private repo? or is there a better way to manage that?
  - let's prune the requirements! requests is deprecated! there are a bunch of different projects trying to set random numbers? 1307 dependencies!!!
  -
