FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install typescript

COPY . /usr/src/app
EXPOSE 3000

CMD [ "npm", "start" ]