package com.swiggy.order.service;

import com.swiggy.order.dto.MealRequestDto;
import com.swiggy.order.dto.OrderRequestDto;
import com.swiggy.order.dto.OrderResponseDto;
import com.swiggy.order.entity.Meals;
import com.swiggy.order.entity.Order;
import com.swiggy.order.entity.OrderMeals;
import com.swiggy.order.repository.OrderRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

  private final OrderRepository orderRepository;
  private final MealService mealService;
  private final OrderMealsService orderMealsService;
  private static final ModelMapper modelMapper = new ModelMapper();

  public OrderResponseDto createOrder(OrderRequestDto request) {

    Map<String, Integer> mealAndQuantityMap =
        request.getMeals().stream()
            .collect(Collectors.toMap(MealRequestDto::getUuid, MealRequestDto::getQuantity));

    List<Meals> allMealsById = mealService.findAllById(mealAndQuantityMap.keySet());
    Order order =
        Order.builder()
            .uuid(getRandoeUuid())
            .customerName(request.getCustomerName())
            .orderDate(new Date())
            .street(request.getStreet())
            .city(request.getCity())
            .postalCode(request.getPostalCode())
            .totalQuantity(mealAndQuantityMap.values().stream().mapToInt(Integer::valueOf).sum())
            .totalPrice(calculateTotalPrice(request, allMealsById))
            .build();
    List<OrderMeals> orderMealsList = new ArrayList<>();

    Order createdOrder = orderRepository.save(order);

    for (Meals meal : allMealsById) {
      OrderMeals orderMeals = new OrderMeals();
      orderMeals.setUuid(getRandoeUuid());
      orderMeals.setOrder(order);
      orderMeals.setMeals(meal);
      Integer quantity = mealAndQuantityMap.get(meal.getUuid());
      orderMeals.setQuantity(quantity);
      orderMeals.setPrice(meal.getPrice() * quantity);
      orderMealsList.add(orderMeals);
    }
    orderMealsService.createOrderMeals(orderMealsList);
    return modelMapper.map(createdOrder, OrderResponseDto.class);
  }

  private String getRandoeUuid() {
    return UUID.randomUUID().toString().replace("-", StringUtils.EMPTY).substring(0, 32);
  }

  private long calculateTotalPrice(OrderRequestDto request, List<Meals> allMealsById) {
    return allMealsById.stream()
        .mapToLong(
            meal ->
                request.getMeals().stream()
                    .filter(dto -> meal.getUuid().equals(dto.getUuid()))
                    .mapToLong(dto -> (meal.getPrice() * dto.getQuantity()))
                    .sum())
        .sum();
  }
}
