-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2023 at 05:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `nama_file` varchar(255) DEFAULT NULL,
  `tgl_upload` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `nama_file`, `tgl_upload`, `userId`) VALUES
(1, 'schema-1689495337656.prisma', '2023-07-16 08:15:37.660', 1),
(2, 'schema-1689495339131.prisma', '2023-07-16 08:15:39.132', 1),
(3, 'schema-1689495341212.prisma', '2023-07-16 08:15:41.213', 1),
(4, 'Visi Misi Cici Dan Yusron (1)-1689495392546.docx', '2023-07-16 08:16:32.546', 1),
(5, 'Banner Pelantikan-1689495436210.png', '2023-07-16 08:17:16.233', 1),
(6, 'CamScanner 13-07-2023 14.51-1689495720032.jpg', '2023-07-16 08:22:00.034', 1),
(7, 'kripcok post 2-1689496166264.png', '2023-07-16 08:29:26.276', 1),
(8, 'frame-1689500615169.png', '2023-07-16 09:43:35.180', 2),
(10, 'RAKER - UNDANGAN UKM-1689502916828.pdf', '2023-07-16 10:21:56.841', 2),
(11, 'Opera Snapshot_2023-07-11_152044_localhost-1689506419056.png', '2023-07-16 11:20:19.063', 1),
(12, 'WhatsApp Image 2023-07-11 at 16.50.41 (1)-1689515625682.jpeg', '2023-07-16 13:53:45.685', 1),
(13, 'IMG_4100-1689515791037.jpg', '2023-07-16 13:56:31.080', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'user123@gmail.com', '$2y$10$rgCW8It7ZnxBUqNbbjNC0eD4rshhoN6i3knIQ3CD/iicWpu4dUi9C'),
(2, 'firmanarief@gmail.com', '$2y$10$FFgCYPx1MN93l/2xgmzMTuabXXNErfOMoxbic16l8HPRv3BZxJhXm');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('ac0c7d43-30ea-43d3-829d-2f24c9fc9de8', '468218bcd91d252fa1b81b5df262969e73544760dc083f83ef9389eeb2ea0b9a', '2023-07-16 07:57:45.505', '20230716075745_', NULL, NULL, '2023-07-16 07:57:45.436', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Files_userId_fkey` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `Files_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
