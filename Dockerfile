#use node docker image
FROM node:22

#working directory root
WORKDIR /app

#download package.json files to root
COPY package*.json ./

#install dependencies
RUN npm install

#copy codesbase to root
COPY . .

#expose port
EXPOSE 1936

RUN --mount=type=secret,id=env,target=/app/.env \
    npm run build

#run command for docker
CMD ["npm", "run", "preview"]