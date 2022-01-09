package com.swiggy.order.dto;

import java.io.Serializable;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderResponseDto implements Serializable {

  private String uuid;

  private String customerName;

  private Date orderDate;

  private String street;

  private String postalCode;

  private String city;

  private String quantity;

  private String totalPrice;
}
