-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09.11.2022 klo 06:38
-- Palvelimen versio: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `osoitetieto`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `osoitteet`
--

CREATE TABLE `osoitteet` (
  `etunimi` varchar(25) NOT NULL,
  `sukunimi` varchar(35) NOT NULL,
  `lahiosoite` varchar(40) NOT NULL,
  `postinumero` varchar(5) NOT NULL,
  `postitoimipaikka` varchar(25) NOT NULL,
  `maa` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `osoitteet`
--

INSERT INTO `osoitteet` (`etunimi`, `sukunimi`, `lahiosoite`, `postinumero`, `postitoimipaikka`, `maa`) VALUES
('Eeva', 'Tervala', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Harri', 'Sten', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Jenni', 'Rytivuori', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Jyri', 'Lindroos', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Nadja', 'Ekblad', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Otto', 'Miettinen', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Riikka', 'Tammisto', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Saara', 'M?nkk?nen', 'Keskikatu 3', '04200', 'Kerava', 'Suomi'),
('Vesa', 'Jokipalo', 'Keskikatu 3', '04200', 'Kerava', 'Suomi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `osoitteet`
--
ALTER TABLE `osoitteet`
  ADD PRIMARY KEY (`etunimi`,`lahiosoite`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
