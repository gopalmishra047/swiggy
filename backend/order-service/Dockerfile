FROM java/java11-jdk

LABEL owner=LyraNetwork
LABEL Team=PZL
LABEL Product=PZL-PaymentEngine
LABEL GitRepo=https://git.lbg.office.fr.lyra/pzl/backend

COPY src/main/resources/ssm/ /opt/lyra/pzl/ssm/
COPY target/payment-engine-*[^source].jar payment-engine.jar

CMD java -jar payment-engine.jar
