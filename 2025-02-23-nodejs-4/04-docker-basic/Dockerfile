# the EXISTING image that i want to start with
# i.e add layers on top of it
FROM node:22-alpine

# in the existing image, create a directory name /app
# and from now on, each command will happen inside the app
# directory
WORKDIR /app

# transfer the files that i need
# this is actually the 3rd layer
COPY ./app.js ./

# every image, when it is loaded into a container
# needs to run a command to start the program
CMD node app.js