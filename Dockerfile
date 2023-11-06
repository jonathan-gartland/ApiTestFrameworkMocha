FROM node:20.9.0
WORKDIR /app
ADD . /app
RUN npm install
CMD npm test
