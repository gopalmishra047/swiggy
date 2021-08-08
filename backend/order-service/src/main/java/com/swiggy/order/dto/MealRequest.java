package com.swiggy.order.dto;

import java.io.Serializable;
import lombok.Data;

@Data
public class MealRequest implements Serializable {

  private String name;

  private String description;

  private Long price;
}
