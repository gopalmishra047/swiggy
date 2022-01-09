package com.swiggy.order.exception;

public class MealNotFoundException extends RuntimeException {

  public MealNotFoundException(String msg) {
    super(msg);
  }
}
