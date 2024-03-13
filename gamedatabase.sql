-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13. Mar, 2024 09:23 AM
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
-- Tabellstruktur for tabell `announcement`
--

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `datetime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `announcement`
--

INSERT INTO `announcement` (`id`, `creator_id`, `content`, `datetime`) VALUES
(1, 1, 'New game in progress...', '2024-01-29 09:58:37');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `roguelike_survival`
--

CREATE TABLE `roguelike_survival` (
  `roguelike_survival_id` int(11) NOT NULL,
  `highscore` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `roguelike_survival`
--

INSERT INTO `roguelike_survival` (`roguelike_survival_id`, `highscore`) VALUES
(1, 4575),
(2, 17);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `run_forever`
--

CREATE TABLE `run_forever` (
  `run_forever_id` int(11) NOT NULL,
  `easyhighscore` float NOT NULL,
  `normalhighscore` float NOT NULL,
  `hardhighscore` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `run_forever`
--

INSERT INTO `run_forever` (`run_forever_id`, `easyhighscore`, `normalhighscore`, `hardhighscore`) VALUES
(1, 1007, 256, 201),
(2, 0, 0, 3);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `userinfo`
--

CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `admin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `userinfo`
--

INSERT INTO `userinfo` (`user_id`, `username`, `pwd`, `admin`) VALUES
(1, 'ZeroHopeV', '$2y$10$cbj47VXGatbQqnJg/Yr7Se4sOnG2yJTtLhd84mhUuNIRFLlzO5YZS', 1),
(2, 'testuser', '$2y$10$GSroXn8s25kgJ5ewTmaU0OPOvrn8C2zHROVyqIAyzZaWaWUxlUgrm', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_announcement_userinfo1_idx` (`creator_id`);

--
-- Indexes for table `roguelike_survival`
--
ALTER TABLE `roguelike_survival`
  ADD PRIMARY KEY (`roguelike_survival_id`);

--
-- Indexes for table `run_forever`
--
ALTER TABLE `run_forever`
  ADD PRIMARY KEY (`run_forever_id`),
  ADD KEY `fk_runner_game_userinfo_idx` (`run_forever_id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Begrensninger for dumpede tabeller
--

--
-- Begrensninger for tabell `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `fk_announcement_userinfo1` FOREIGN KEY (`creator_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Begrensninger for tabell `roguelike_survival`
--
ALTER TABLE `roguelike_survival`
  ADD CONSTRAINT `fk_roguelike_survival_userinfo1` FOREIGN KEY (`roguelike_survival_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Begrensninger for tabell `run_forever`
--
ALTER TABLE `run_forever`
  ADD CONSTRAINT `fk_runner_game_userinfo` FOREIGN KEY (`run_forever_id`) REFERENCES `userinfo` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
