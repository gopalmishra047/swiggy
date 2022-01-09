package com.swiggy.order.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Meals {

  @Id private String uuid;

  private String name;

  private String description;

  private long price;

  //  @ToString.Exclude
  //  @EqualsAndHashCode.Exclude
  //  @ManyToOne(
  //      fetch = FetchType.EAGER,
  //      cascade = {CascadeType.PERSIST, CascadeType.MERGE})
  //  private Order order;
}
