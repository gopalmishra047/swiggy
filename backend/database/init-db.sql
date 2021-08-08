-- --------------------------------------------------------
-- Host:                         192.168.33.10
-- Server version:               10.6.3-MariaDB-1:10.6.3+maria~focal - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for food-order
CREATE DATABASE IF NOT EXISTS `food-order` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `food-order`;

-- Dumping structure for table food-order.meals
CREATE TABLE IF NOT EXISTS `meals` (
  `id` varchar(32) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table food-order.meals: ~11 rows (approximately)
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `meals` (`id`, `name`, `description`, `price`) VALUES
	('a21257a61cba48aebe5be2729b17853e', 'Sushi', 'Finest fish and veggies', 22.00),
	('9c5dd6ecca8440199f3328c8864a3763', 'Schnitzel', 'A german specialty!', 38.00),
	('222f230ae479429888f0614b152977ed', 'Barbecue Burger', 'American, raw, meaty', 16.00),
	('be265f7656f64a069709a5ac3cf26ce8', 'Green Bowl', 'Healthy...and green...', 49.00);
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
