# MERN-DOCKER-COMPOSE
Building MERN stack app and deploying with Docker

MERN
 -> Three Tier aarchitecture
    |-> Presentation (UI / Frontend)
    |-> Bussiness Logic (Server / Backend)
    |-> DATA (db)

Frontend docker build
   -> create Dockerfile
   -> add in that

         FROM node:18.9.1 

         WORKDIR /app

         COPY package.json .

         RUN npm install

         COPY . .

         EXPOSE 5173

         CMD ["npm", "run", "dev"]
   -> take a build by using this command "docker build -t mern-frontend ."
   -> create docker network to communicate containers "docker network create mern"
   -> add frontend docker build in network "docker run --name=frontend --network=mern -d -p 5176:5173 mern-frontend

   Backend docker build
   -> create Dockerfile
   -> add in that

         FROM node:18.9.1 

         WORKDIR /app

         COPY package.json .

         RUN npm install

         COPY . .

         EXPOSE 5173

         CMD ["npm", "start"]
   -> take a build by using this command "docker build -t mern-backend ."
   -> now use same network which was created earlier for frontend.
   -> add backend docker build in network "docker run --network=mern --name=backend -d -p 5051:5051 mern-backend"

Docker for mongoDB
 -> "docker run --network=mern --name mongodb -d -p 27017:27017 -v ~/opt/data/data/db mongo:latest"


Note: using Docker compose we can create a single file for both frontend and backend, no need to create a seperate network for communcations

Docker Compose
   -> yaml file
   -> used to run multiple containers
   -> containers dependency is taken care
   -> providing common networking for containers   

Docker compose file pattern

      Services:
            Frontend:
                  {

                  }
            Backend:
                  {
                  -> depends.on:db
                  }             
      networ:
            {
                  
            }
      Volume:{

            }

Youtube Tutorial: https://www.youtube.com/watch?v=IUpsu2xemrA&t=193s