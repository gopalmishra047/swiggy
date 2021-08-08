package com.swiggy.order.repository;

import com.swiggy.order.entity.Meals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealsRepository extends JpaRepository<Meals, String> {}
