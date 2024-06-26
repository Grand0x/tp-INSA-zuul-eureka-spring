package insa.architecture.users.controller;

import insa.architecture.users.model.User;
import insa.architecture.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:8050", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE }, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        String token = generateToken(savedUser); // Supposons une méthode qui génère un token JWT
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("userId", savedUser.getId());
        response.put("firstName", savedUser.getFirstName());
        response.put("isAdmin", savedUser.isAdmin());
        return ResponseEntity.created(URI.create("/users/" + savedUser.getId())).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User login) {
        User user = userRepository.findByEmail(login.getEmail());
        if (user != null && user.getPassword().equals(login.getPassword())) {
            String token = generateToken(user); // Supposons une méthode qui génère un token JWT
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("userId", user.getId());
            response.put("firstName", user.getFirstName());
            response.put("isAdmin", user.isAdmin());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String token) {
        // Validate token and retrieve user details
        User user = findUserByToken(token); // This is pseudo code
        return ResponseEntity.ok(user);
    }

    @PutMapping("/profile")
    public ResponseEntity<User> updateUserProfile(@RequestHeader("Authorization") String token,
            @RequestBody User userDetails) {
        // Validate token and update user
        User user = findUserByToken(token); // Pseudo code
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setAddress(userDetails.getAddress());
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/profile")
    public ResponseEntity<Void> deleteUserProfile(@RequestHeader("Authorization") String token) {
        // Validate token and delete user
        User user = findUserByToken(token); // Pseudo code
        userRepository.delete(user);
        return ResponseEntity.noContent().build();
    }

    // Helper method to simulate token validation and user retrieval
    private User findUserByToken(String token) {
        // This should actually check a token store or similar
        return userRepository.findById(Long.valueOf(token)).orElse(null);
    }

    // Helper method to simulate token generation
    private String generateToken(User user) {
        // This should actually generate a JWT token
        return String.valueOf(user.getId());
    }
}