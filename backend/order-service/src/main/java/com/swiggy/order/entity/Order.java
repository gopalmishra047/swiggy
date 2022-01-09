package com.swiggy.order.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Builder
@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
public class Order {

  @Id private String uuid;

  @Column(name = "customer_name")
  private String customerName;

  @Column(name = "order_date")
  private Date orderDate;

  @Column(name = "street")
  private String street;

  @Column(name = "postal_code")
  private String postalCode;

  @Column(name = "city")
  private String city;

  @Column(name = "total_quantity")
  private int totalQuantity;

  @Column(name = "total_price")
  private long totalPrice;

  //  @ToString.Exclude
  //  @EqualsAndHashCode.Exclude
  //  @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  //  private List<OrderMeals> orderMeals;
}
