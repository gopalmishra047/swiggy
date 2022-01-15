DROP DATABASE IF EXISTS `food-order`;
CREATE DATABASE `food-order`;
USE `food-order`;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS `meals`
(
    `uuid`        char(32)     NOT NULL,
    `name`        varchar(60)  NOT NULL,
    `description` varchar(100) NOT NULL,
    `price`       bigint(12)   NOT NULL,
    PRIMARY KEY (`uuid`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `orders`
(
    `uuid`           char(32)    NOT NULL,
    `customer_name`  varchar(50) NOT NULL,
    `order_date`     datetime    NOT NULL,
    `street`         varchar(50) NOT NULL,
    `city`           varchar(50) NOT NULL,
    `postal_code`    varchar(10) NOT NULL,
    `total_quantity` int(3)      NOT NULL,
    `total_price`    bigint(12)  NOT NULL,
    PRIMARY KEY (`uuid`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `order_meals`
(
    `uuid`       char(32)   NOT NULL,
    `quantity`   int(3)     NOT NULL,
    `price`      bigint(12) NOT NULL,
    `order_uuid` CHAR(32)   NOT NULL,
    `meal_uuid`  CHAR(50)   NOT NULL,
    PRIMARY KEY (`uuid`),
    FOREIGN KEY (`order_uuid`) REFERENCES `orders` (`uuid`),
    FOREIGN KEY (`meal_uuid`) REFERENCES `meals` (`uuid`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `meals` (`uuid`, `name`, `description`, `price`)
VALUES ('a21257a61cba48aebe5be2729b17853e', 'Sushi', 'Finest fish and veggies', 22.00),
       ('9c5dd6ecca8440199f3328c8864a3763', 'Schnitzel', 'A german specialty!', 38.00),
       ('222f230ae479429888f0614b152977ed', 'Barbecue Burger', 'American, raw, meaty', 16.00),
       ('be265f7656f64a069709a5ac3cf26ce8', 'Green Bowl', 'Healthy...and green...', 49.00);