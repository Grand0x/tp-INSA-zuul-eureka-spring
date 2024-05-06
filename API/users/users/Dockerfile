FROM openjdk:11
ADD target/service-users.jar service-users.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "service-users.jar"]
