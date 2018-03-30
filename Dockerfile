FROM node
RUN mkdir /src

ADD /server /src
WORKDIR /src/server
RUN npm install

EXPOSE 3000

CMD npm start