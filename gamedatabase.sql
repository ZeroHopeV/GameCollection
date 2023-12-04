-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 04. Des, 2023 11:23 AM
-- Tjener-versjon: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamedatabase`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `run_forever`
--

CREATE TABLE `run_forever` (
  `run_forever_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `easyhighscore` float DEFAULT NULL,
  `normalhighscore` float DEFAULT NULL,
  `hardhighscore` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `run_forever`
--

INSERT INTO `run_forever` (`run_forever_id`, `user_id`, `easyhighscore`, `normalhighscore`, `hardhighscore`) VALUES
(1, 1, 1007, 256, 201),
(2, 2, 78, 87, 56),
(3, 3, 125, 31, 38);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `userinfo`
--

CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `pwd` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `userinfo`
--

INSERT INTO `userinfo` (`user_id`, `username`, `pwd`) VALUES
(1, 'ZeroHopeV', '$2y$10$Ss2y3.eT5PB5VJJsc4exauc3fv.6WEEm8NViETyHV9B0BC2bWDQvW'),
(2, 'ulreik', '$2y$10$FQ/oJq.D4b0yOzvRFR9P.eN8Vd24UAUvAmOmi0n7ljS0OHFWiC19W'),
(3, 'M', '$2y$10$tA9Yzo5uCEbr0lE/L1ICYeHUjJe7Ph7ribTkSV7SnWI4bIqvsoFzm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `run_forever`
--
ALTER TABLE `run_forever`
  ADD PRIMARY KEY (`run_forever_id`),
  ADD KEY `fk_runner_game_userinfo_idx` (`user_id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `run_forever`
--
ALTER TABLE `run_forever`
  MODIFY `run_forever_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Begrensninger for dumpede tabeller
--

--
-- Begrensninger for tabell `run_forever`
--
ALTER TABLE `run_forever`
  ADD CONSTRAINT `fk_runner_game_userinfo` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
