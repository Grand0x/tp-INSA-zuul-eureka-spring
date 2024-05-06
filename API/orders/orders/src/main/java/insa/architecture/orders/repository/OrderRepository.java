package insa.architecture.orders.repository;

import insa.architecture.orders.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByClientId(Long clientId);
}

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
