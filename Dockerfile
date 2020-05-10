FROM registry.access.redhat.com/ubi8/nodejs-10
COPY package.json .
RUN npm install
COPY . .
ENV PORT 5000
ENV NODE_ENV production

EXPOSE 5000
CMD [ "npm", "start" ]
