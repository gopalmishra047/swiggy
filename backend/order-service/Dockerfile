FROM java/java11-jdk

LABEL owner=Gopal Mishra
LABEL Team=food-order
LABEL Product=Swiggy - Order Service
LABEL GitRepo=https://github.com/gopalmishra047/food-order-app


COPY target/order-service*[^source].jar order-service.jar

CMD java -jar order-service.jar
