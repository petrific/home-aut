FROM node:carbon
RUN apt-get update
RUN apt-get install -y libpcap-dev
RUN npm install ping
RUN npm install node-dash-button
WORKDIR ./App
COPY Dash-Listener.js .
EXPOSE 68
EXPOSE 67

CMD ["node", "Dash-Listener.js"]



