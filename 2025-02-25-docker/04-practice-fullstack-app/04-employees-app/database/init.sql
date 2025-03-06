-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 05, 2025 at 04:24 PM
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
-- Database: `jb_employees`
--
CREATE DATABASE IF NOT EXISTS `jb_employees` DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_general_ci;

USE `jb_employees`;

-- --------------------------------------------------------
--
-- Table structure for table `employees`
--
CREATE TABLE
    `employees` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `job_id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `employment_date` datetime NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--
INSERT INTO
    `employees` (
        `id`,
        `job_id`,
        `first_name`,
        `last_name`,
        `address`,
        `employment_date`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '2ddfcb28-f9de-11ef-bedc-0242ac110002',
        'a9010d6c-f9dd-11ef-bedc-0242ac110002',
        'israel',
        'israeli',
        'petach-tiqwa',
        '2024-03-06 18:20:01',
        '2025-03-05 16:20:01',
        '2025-03-05 16:20:01'
    ),
    (
        '2ddfd095-f9de-11ef-bedc-0242ac110002',
        'a90110ac-f9dd-11ef-bedc-0242ac110002',
        'ilan',
        'attal',
        'natanya',
        '2024-03-13 18:20:01',
        '2025-03-05 16:20:01',
        '2025-03-05 16:20:01'
    ),
    (
        '2ddfd403-f9de-11ef-bedc-0242ac110002',
        'a90110ac-f9dd-11ef-bedc-0242ac110002',
        'mishel',
        'donde',
        'petach-tiqwa',
        '2022-03-23 18:21:48',
        '2025-03-05 16:20:01',
        '2025-03-05 16:20:01'
    ),
    (
        '2ddfd750-f9de-11ef-bedc-0242ac110002',
        'a90113c3-f9dd-11ef-bedc-0242ac110002',
        'tamir',
        'dwek',
        'jerusalem',
        '2024-03-21 18:21:48',
        '2025-03-05 16:20:01',
        '2025-03-05 16:20:01'
    ),
    (
        '2ddfda80-f9de-11ef-bedc-0242ac110002',
        'a90110ac-f9dd-11ef-bedc-0242ac110002',
        'ido',
        'kahana',
        'hadera',
        '2024-03-03 18:21:48',
        '2025-03-05 16:20:01',
        '2025-03-05 16:20:01'
    );

-- --------------------------------------------------------
--
-- Table structure for table `jobs`
--
CREATE TABLE
    `jobs` (
        `id` char(36) CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_bin NOT NULL,
            `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--
INSERT INTO
    `jobs` (`id`, `name`, `created_at`, `updated_at`)
VALUES
    (
        'a9010770-f9dd-11ef-bedc-0242ac110002',
        'fullstack developer',
        '2025-03-05 16:17:55',
        '2025-03-05 16:17:55'
    ),
    (
        'a9010d6c-f9dd-11ef-bedc-0242ac110002',
        'web developer',
        '2025-03-05 16:17:55',
        '2025-03-05 16:17:55'
    ),
    (
        'a90110ac-f9dd-11ef-bedc-0242ac110002',
        'salesman',
        '2025-03-05 16:17:55',
        '2025-03-05 16:17:55'
    ),
    (
        'a90113c3-f9dd-11ef-bedc-0242ac110002',
        'saleswoman',
        '2025-03-05 16:17:55',
        '2025-03-05 16:17:55'
    );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `employees`
--
ALTER TABLE `employees` ADD PRIMARY KEY (`id`),
ADD KEY `job_id` (`job_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs` ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--
--
-- Constraints for table `employees`
--
ALTER TABLE `employees` ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;