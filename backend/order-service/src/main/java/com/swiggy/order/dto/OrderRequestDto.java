package com.swiggy.order.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import lombok.Data;

@Data
public class OrderRequestDto implements Serializable {

  private String customerName;
  private Date orderDate;
  private String street;
  private String postalCode;
  private String city;
  private List<MealRequestDto> meals;
  private Double totalPrice;
}
