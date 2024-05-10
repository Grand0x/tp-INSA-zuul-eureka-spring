package insa.architecture.orders.controller;

import insa.architecture.orders.model.Order;
import insa.architecture.orders.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8050", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE }, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        try {
            // Si les items viennent avec l'order, il faut les relier explicitement à
            // l'order avant la sauvegarde
            if (order.getItems() != null) {
                order.getItems().forEach(item -> item.setOrder(order)); // Assurez-vous que chaque item a une référence
                                                                        // à l'order
            }
            System.out.println("Received order: " + order);
            Order savedOrder = orderRepository.save(order); // Sauvegarde de l'order avec ses items
            return ResponseEntity.created(URI.create("/orders/" + savedOrder.getId())).body(savedOrder);
        } catch (Exception e) {
            System.out.println("Error creating order: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        return orderRepository.findById(id)
                .map(order -> {
                    // Update order details here
                    orderRepository.save(order);
                    return ResponseEntity.ok(order);
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrder(@PathVariable Long id) {
        return orderRepository.findById(id)
                .map(order -> {
                    orderRepository.delete(order);
                    return ResponseEntity.noContent().build();
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllOrders() {
        orderRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}