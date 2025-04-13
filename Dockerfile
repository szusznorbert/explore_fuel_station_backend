FROM node:18

WORKDIR /usr/src/app

# Copy package files and install with yarn
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the source and build it
COPY . .
RUN yarn add tsc
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]