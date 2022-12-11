# Routes for non-dev env with build files

## Description

This package provides the modules that are used to serve the HTML file in DIT environment (cloud env) and 
also serve the built static cs/jss files. It has two modules, build() and builtStaticFiles(). 

# Installing and Requiring the package

In package.json file paste the below line
@kaavian-sys/build-files-module : https://github.com/Kaavian-Systems-Pvt-Ltd/routes-for-non-dev-env-with-build-files.git

After pasting that install the below dependency

**npm i @kaavian-sys/build-files-module**

After installing, you can require the package to your files..

## build() Module - Serve HTML file

*build()* - For any other request, serve HTML in DIT environment (cloud env). This function requires three parameters
*Parameters Required - { expressApplication, rootDirectory, filePath }*

**expressApplication** - *express()* Express application function
**rootDirectory** - *__dirname* Root directoty from the current file or folder
**filePath** - */path/build/index.html* Exact path of the build index.html file from the root directory.

## builtStaticFiles() Module - Serve build static cs/jss files

*builtStaticFiles()* - Function that is used for serving built static cs/jss files. This function requires five parameters
*Parameters Required - { expressApplication, express, folderName, rootDirectory, filePath }*

**expressApplication** - *express()* Express application function
**express** - *express* Express object
**folderName** - */static* Name of the folder
**rootDirectory** - *__dirname* Root directoty from the current file or folder
**filePath** - */path/build/static* Exact path of the build static file from the root directory.
