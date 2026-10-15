package com.unistore.bookstore.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "books")
public class Book {
    
    @Id
    private String id;
    private String title;
    private String price;
    private String img;
    private String category;
    private LocalDateTime createdAt;
    
    public Book() {
        this.createdAt = LocalDateTime.now();
    }
    
    public Book(String title, String price, String img, String category) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.category = category;
        this.createdAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }
    
    public String getImg() { return img; }
    public void setImg(String img) { this.img = img; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
