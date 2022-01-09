package com.swiggy.order.service;

import com.swiggy.order.dto.AddMealRequestDto;
import com.swiggy.order.entity.Meals;
import com.swiggy.order.repository.MealsRepository;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MealService {

  private final MealsRepository mealsRepository;

  public Meals addMeals(AddMealRequestDto mealRequest) {
    Meals meals =
        Meals.builder()
            .uuid(UUID.randomUUID().toString().replace("-", StringUtils.EMPTY).substring(0, 32))
            .name(mealRequest.getName())
            .description(mealRequest.getDescription())
            .price(mealRequest.getPrice())
            .build();
    return mealsRepository.save(meals);
  }

  public List<Meals> getAllMeals() {
    return mealsRepository.findAll();
  }

  public List<Meals> findAllById(Set<String> id) {
    return mealsRepository.findAllById(id);
  }
}
