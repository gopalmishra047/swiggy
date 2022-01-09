package com.swiggy.order.controller;

import com.swiggy.order.dto.OrderRequestDto;
import com.swiggy.order.dto.OrderResponseDto;
import com.swiggy.order.service.OrderService;
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
  public OrderResponseDto createOrder(@RequestBody OrderRequestDto request) {
    return orderService.createOrder(request);
  }
}
