FROM node:latest

WORKDIR /workspace
COPY package.json /workspace/package.json
RUN npm i
COPY ./ /workspace

RUN chmod +x ./docker-entrypoint.sh
EXPOSE 8090

ENTRYPOINT ["./docker-entrypoint.sh"]
