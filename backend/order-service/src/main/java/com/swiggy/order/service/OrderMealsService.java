package com.swiggy.order.service;

import com.swiggy.order.entity.OrderMeals;
import com.swiggy.order.repository.OrderMealsRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderMealsService {

  private final OrderMealsRepository repository;

  public void createOrderMeals(List<OrderMeals> orderMeals) {
    repository.saveAll(orderMeals);
  }
}
