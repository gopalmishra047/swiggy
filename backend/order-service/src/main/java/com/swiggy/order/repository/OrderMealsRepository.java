package com.swiggy.order.repository;

import com.swiggy.order.entity.OrderMeals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMealsRepository extends JpaRepository<OrderMeals, OrderMeals> {}
