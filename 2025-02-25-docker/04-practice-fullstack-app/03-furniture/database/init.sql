-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 02, 2025 at 07:51 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furniture`
--
CREATE DATABASE IF NOT EXISTS `furniture` DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_general_ci;

USE `furniture`;

-- --------------------------------------------------------
--
-- Table structure for table `furniture`
--
CREATE TABLE
    `furniture` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `type_id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `size` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
            `color` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
            `price` decimal(10, 2) NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `furniture`
--
INSERT INTO
    `furniture` (
        `id`,
        `type_id`,
        `size`,
        `color`,
        `price`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        'c8238ff5-f79e-11ef-8440-0242ac110002',
        '96f87cec-f79d-11ef-8440-0242ac110002',
        '30x50x150',
        'white',
        3200.00,
        '2025-03-02 19:36:20',
        '2025-03-02 19:36:20'
    ),
    (
        'c82394f8-f79e-11ef-8440-0242ac110002',
        '96f87cec-f79d-11ef-8440-0242ac110002',
        '50x100x300',
        'brown',
        4000.00,
        '2025-03-02 19:36:20',
        '2025-03-02 19:36:20'
    ),
    (
        'c823979a-f79e-11ef-8440-0242ac110002',
        '96f879c4-f79d-11ef-8440-0242ac110002',
        '20x50x70',
        'black',
        800.00,
        '2025-03-02 19:36:20',
        '2025-03-02 19:36:20'
    );

-- --------------------------------------------------------
--
-- Table structure for table `types`
--
CREATE TABLE
    `types` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `name` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `types`
--
INSERT INTO
    `types` (`id`, `name`, `created_at`, `updated_at`)
VALUES
    (
        '96f86621-f79d-11ef-8440-0242ac110002',
        'chair',
        '2025-03-02 19:34:36',
        '2025-03-02 19:34:36'
    ),
    (
        '96f879c4-f79d-11ef-8440-0242ac110002',
        'desk',
        '2025-03-02 19:34:36',
        '2025-03-02 19:34:36'
    ),
    (
        '96f87cec-f79d-11ef-8440-0242ac110002',
        'sofa',
        '2025-03-02 19:34:36',
        '2025-03-02 19:34:36'
    );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture` ADD PRIMARY KEY (`id`),
ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types` ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--
--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture` ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;