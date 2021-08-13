FROM node:10.16.3-alpine as debug

WORKDIR /work/

COPY ./package.json /work/package.json
RUN npm install
RUN npm install -g nodemon

COPY ./ /work/

ENTRYPOINT [ "nodemon","--inspect=0.0.0.0","./app.js" ]

FROM node:10.16.3-alpine as prod

WORKDIR /work/
COPY ./package.json /work/package.json
RUN npm install
COPY ./ /work/
CMD node .