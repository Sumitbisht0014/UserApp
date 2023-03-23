# UserApp
User App having basic CRUD functionalities. This repository has 2 projects in it.
UserMgmtApi : This is a dotnet core webapi which is created on dotnet core 6. 
user-app : This is a react application, which will list user details and provides CRUD functionality.

React application will get authenticated based on APIKey which will be passed from apiCaller.js file and is hardcoded for now. 
If you want to change the apiKey, you can change in above mentioned file in react and same should be added in appSettings.json file of dotnet core project.


#Installation
A step-by-step guide on how to install and set up the project.
To load react dependencies either goto React app (user-app) and run `npm install` command
        or
Open solution file in Visual Studio and configure solution for multiple project at startup. Run the application. Npm install and all related dependencies will added automatically.

Note: Swagger doc is exposed in dotnet core which will help with more API specifications.
