FROM node

RUN mkdir -p /app
WORKDIR /app


COPY package.json /app/
RUN npm install
RUN npm install typescript

COPY . /app
EXPOSE 3000

CMD [ "npm", "start" ]