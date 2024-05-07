package insa.architecture.products.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double alcoholDegree;
    private Integer capacity;
    private Double priceHt;
    private Integer stock;

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAlcoholDegree() {
        return alcoholDegree;
    }

    public void setAlcoholDegree(Double alcoholDegree) {
        this.alcoholDegree = alcoholDegree;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Double getPriceHt() {
        return priceHt;
    }

    public void setPriceHt(Double priceHt) {
        this.priceHt = priceHt;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
