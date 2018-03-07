FROM arm32v7/debian
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y gnupg
RUN curl -sL "https://deb.nodesource.com/setup_8.x" | bash
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y libpcap-dev
RUN npm install ping
RUN apt-get install -y git
RUN apt-get install -y make
RUN apt-get install -y g++
RUN npm install node-dash-button
WORKDIR ./App
COPY Dash-Listener.js .
EXPOSE 68
EXPOSE 67

CMD ["node", "Dash-Listener.js"]



