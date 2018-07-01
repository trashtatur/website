FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install
RUN npm install typescript

EXPOSE 3000

CMD [ "npm", "start" ]