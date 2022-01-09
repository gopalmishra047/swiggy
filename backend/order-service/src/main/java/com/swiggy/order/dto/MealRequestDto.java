package com.swiggy.order.dto;

import java.io.Serializable;
import lombok.Data;

@Data
public class MealRequestDto implements Serializable {

  private String uuid;
  private Integer quantity;
}
