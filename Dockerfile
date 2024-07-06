FROM node:18.3.0-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN ["npm", "install"]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]