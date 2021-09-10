## Build stage
#FROM maven:3.6.0-jdk-11-slim
#COPY src /home/app/src
#COPY pom.xml /home/app
#RUN mvn -f /home/app/pom.xml clean package

# Package stage
FROM openjdk:8

ADD target/order-service-0.1.1-SNAPSHOT.jar order-service-0.1.1-SNAPSHOT.jar

EXPOSE 8000

LABEL owner=GopalMishra
LABEL Team=Swiggy
LABEL Product=Swiggy-OrderService
LABEL GitRepo=https://github.com/gopalmishra047/swiggy

CMD java -jar order-service-0.1.1-SNAPSHOT.jar
