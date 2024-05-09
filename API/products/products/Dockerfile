# Étape de build
FROM maven:3.8.4-openjdk-17-slim AS build

# Copie du pom.xml et des sources
COPY pom.xml .
COPY src ./src

# Compilation du projet et skip des tests
RUN mvn clean package -DskipTests

# Étape finale pour l'exécution
FROM openjdk:17-slim

# Copie du jar construit à l'étape de build
COPY --from=build /target/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]