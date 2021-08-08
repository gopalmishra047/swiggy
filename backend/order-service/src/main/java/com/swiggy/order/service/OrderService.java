package com.swiggy.order.service;

import com.swiggy.order.dto.MealRequest;
import com.swiggy.order.dto.OrderDTO;
import com.swiggy.order.dto.OrderRequest;
import com.swiggy.order.entity.Meals;
import com.swiggy.order.entity.Order;
import com.swiggy.order.repository.MealsRepository;
import com.swiggy.order.repository.OrderRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

  private final OrderRepository orderRepository;
  private final MealsRepository mealsRepository;
  private static final ModelMapper modelMapper = new ModelMapper();

  public OrderDTO createOrder(OrderRequest request) {
    Order order =
        Order.builder()
            .id(UUID.randomUUID().toString().replace("-", StringUtils.EMPTY).substring(0, 32))
            .orderName(request.getOrderName())
            .orderDate(request.getOrderDate())
            .address(request.getAddress())
            .build();

    Order createdOrder = orderRepository.save(order);
    return modelMapper.map(createdOrder, OrderDTO.class);
  }

  public List<Meals> getAllMeals() {
    return mealsRepository.findAll();
  }

  public Meals addMeals(MealRequest mealReauest) {
    Meals meals =
        Meals.builder()
            .id(UUID.randomUUID().toString().replace("-", StringUtils.EMPTY).substring(0, 32))
            .name(mealReauest.getName())
            .description(mealReauest.getDescription())
            .price(mealReauest.getPrice())
            .build();
    return mealsRepository.save(meals);
  }
}
