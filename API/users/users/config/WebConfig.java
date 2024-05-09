import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // ** signifie pour toutes les routes
                .allowedOrigins("http://localhost:8050") // Autorise l'accès de localhost:3000
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Les méthodes HTTP autorisées
                .allowedHeaders("*") // Autorise tous les headers
                .allowCredentials(true); // Autorise les cookies et les données d'authentification
    }
}
