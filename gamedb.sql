-- MariaDB dump 10.19  Distrib 10.6.16-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: gamedatabase
-- ------------------------------------------------------
-- Server version	10.6.16-MariaDB-0ubuntu0.22.04.1

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
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creator_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_announcement_userinfo1_idx` (`creator_id`),
  CONSTRAINT `fk_announcement_userinfo1` FOREIGN KEY (`creator_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (1,1,'New game in progress...','2024-01-29 09:58:37'),(2,1,'New game mainly done, available to play','2024-05-15 09:32:42');
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roguelike_survival`
--

DROP TABLE IF EXISTS `roguelike_survival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roguelike_survival` (
  `roguelike_survival_id` int(11) NOT NULL,
  `highscore` float NOT NULL,
  PRIMARY KEY (`roguelike_survival_id`),
  CONSTRAINT `fk_roguelike_survival_userinfo1` FOREIGN KEY (`roguelike_survival_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roguelike_survival`
--

LOCK TABLES `roguelike_survival` WRITE;
/*!40000 ALTER TABLE `roguelike_survival` DISABLE KEYS */;
INSERT INTO `roguelike_survival` VALUES (1,36975),(2,43);
/*!40000 ALTER TABLE `roguelike_survival` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `run_forever`
--

DROP TABLE IF EXISTS `run_forever`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `run_forever` (
  `run_forever_id` int(11) NOT NULL,
  `easyhighscore` float NOT NULL,
  `normalhighscore` float NOT NULL,
  `hardhighscore` float NOT NULL,
  PRIMARY KEY (`run_forever_id`),
  KEY `fk_runner_game_userinfo_idx` (`run_forever_id`),
  CONSTRAINT `fk_runner_game_userinfo` FOREIGN KEY (`run_forever_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `run_forever`
--

LOCK TABLES `run_forever` WRITE;
/*!40000 ALTER TABLE `run_forever` DISABLE KEYS */;
INSERT INTO `run_forever` VALUES (1,1007,256,201),(2,0,0,3);
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
  `admin` tinyint(4) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'ZeroHopeV','$2y$10$cbj47VXGatbQqnJg/Yr7Se4sOnG2yJTtLhd84mhUuNIRFLlzO5YZS',1),(2,'testuser','$2y$10$GSroXn8s25kgJ5ewTmaU0OPOvrn8C2zHROVyqIAyzZaWaWUxlUgrm',0),(3,'ulrik','$2y$10$7.3HWrx69XjUHmUcDJfgv.Sso4gKtOYmYVqqyG.QpaCskresez/CC',0);
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

-- Dump completed on 2024-05-16 11:15:56
