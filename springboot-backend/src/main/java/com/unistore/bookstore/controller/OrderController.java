package com.unistore.bookstore.controller;

import com.unistore.bookstore.model.Order;
import com.unistore.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class OrderController {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @PostMapping
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Order order) {
        Order savedOrder = orderRepository.save(order);
        
        Map<String, Object> response = new HashMap<>();
        response.put("id", savedOrder.getId());
        response.put("message", "Order created successfully");
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }
}
