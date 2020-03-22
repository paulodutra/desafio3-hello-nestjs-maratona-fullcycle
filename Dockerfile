FROM node:12.16.1

ENV PATH /var/www/node_modules/.bin:$PATH

RUN npm install --silent

CMD ["npm", "run", "start:dev"]
