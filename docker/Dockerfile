FROM node:12
MAINTAINER VarunVemala

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY ../node/ .

# Expose running port of the node application
EXPOSE 1236

CMD npm start
#CMD tail -f /dev/null

