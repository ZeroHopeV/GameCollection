-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: gamedatabase
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `run_forever`
--

DROP TABLE IF EXISTS `run_forever`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `run_forever` (
  `run_forever_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `easyhighscore` float DEFAULT NULL,
  `normalhighscore` float DEFAULT NULL,
  `hardhighscore` float DEFAULT NULL,
  PRIMARY KEY (`run_forever_id`),
  KEY `fk_runner_game_userinfo_idx` (`user_id`),
  CONSTRAINT `fk_runner_game_userinfo` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `run_forever`
--

LOCK TABLES `run_forever` WRITE;
/*!40000 ALTER TABLE `run_forever` DISABLE KEYS */;
INSERT INTO `run_forever` VALUES (1,1,1007,421,201),(2,2,78,87,56),(3,3,125,31,38),(4,5,15,130,46),(5,6,38,48,30),(6,7,NULL,NULL,70),(7,8,45,NULL,NULL);
/*!40000 ALTER TABLE `run_forever` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'ZeroHopeV','$2y$10$Ss2y3.eT5PB5VJJsc4exauc3fv.6WEEm8NViETyHV9B0BC2bWDQvW'),(2,'ulreik','$2y$10$FQ/oJq.D4b0yOzvRFR9P.eN8Vd24UAUvAmOmi0n7ljS0OHFWiC19W'),(3,'M','$2y$10$tA9Yzo5uCEbr0lE/L1ICYeHUjJe7Ph7ribTkSV7SnWI4bIqvsoFzm'),(4,'Anders','$2y$10$HQDMGs6IAh1pzATCfXaes.DAXrfESYKtZGiyA/aAsbRBSR2rfeFNm'),(5,'UBN','$2y$10$JPkE541cTuIApWaC5OyILe3sQQw//iMjjpsQ0CJWHVaAld8IWDwvi'),(6,'sigurd','$2y$10$mk9wcobef8jGHfVIdQsOgOZg9zfKE47v9K80G758RZ/AFC9PLj0tW'),(7,'ulrikbrukernr40','$2y$10$aI1.wEu6u8OEbTn52m5M.eajMSkFxWFfYCIHi2MSZ4Iot6.MQYj2q'),(8,'kubenIT','$2y$10$BRjnet/zh/KsuQWVmORGMOLepHEVhmIVZzdxvL8Z2EI89tgvj12tu');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-05  9:08:43
