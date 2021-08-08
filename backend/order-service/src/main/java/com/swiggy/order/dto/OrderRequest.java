package com.swiggy.order.dto;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class OrderRequest implements Serializable {

  private String orderName;
  private Date orderDate;
  private String address;
}
