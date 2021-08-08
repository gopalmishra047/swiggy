package com.swiggy.order.controller;

import com.swiggy.order.dto.MealRequest;
import com.swiggy.order.dto.OrderDTO;
import com.swiggy.order.dto.OrderRequest;
import com.swiggy.order.entity.Meals;
import com.swiggy.order.service.OrderService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order/")
@RequiredArgsConstructor
public class OrderController {

  private final OrderService orderService;

  @GetMapping("/status")
  public String status() {
    return "Order service started...";
  }

  @PostMapping("/create")
  public OrderDTO createOrder(@RequestBody OrderRequest request) {
    return orderService.createOrder(request);
  }

  @PostMapping("/addMeal")
  public Meals addMeals(@RequestBody MealRequest mealRequest) {
    return orderService.addMeals(mealRequest);
  }

  @GetMapping("/getAllMeals")
  public List<Meals> getAllMeals() {
    return orderService.getAllMeals();
  }
}
