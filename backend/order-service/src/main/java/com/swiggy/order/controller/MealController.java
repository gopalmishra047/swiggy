package com.swiggy.order.controller;

import com.swiggy.order.dto.AddMealRequestDto;
import com.swiggy.order.entity.Meals;
import com.swiggy.order.service.MealService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("admin/meals/")
@RestController
@RequiredArgsConstructor
public class MealController {

  private final MealService mealService;

  @PostMapping("/addMeal")
  public Meals addMeals(@RequestBody AddMealRequestDto mealRequestDto) {
    return mealService.addMeals(mealRequestDto);
  }

  @GetMapping("/getAllMeals")
  public List<Meals> getAllMeals() {
    return mealService.getAllMeals();
  }
}
