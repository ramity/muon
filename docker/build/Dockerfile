FROM node:slim

RUN apt update
RUN apt upgrade -y
RUN apt install git -y
RUN apt install wine64 -y

WORKDIR /muon

ENTRYPOINT [ "sleep", "infinity" ]
