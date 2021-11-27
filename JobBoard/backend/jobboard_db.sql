/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `people`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50),
  `password` varchar(50),
  `email` varchar(50),
  `address` varchar(50),
  `phone_code` varchar(50),
  `city` varchar(100),
  `birth_date` date,
  `cv` varchar(50),
  `website` varchar(100),
  `picture` text,
  `gender` varchar(10),
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message`
(
  `id` int(11),
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50),
  `activies` varchar(100),
  `address` varchar(200),
  `postal_code` int(5),
  `city` varchar(100),
  `siret` int(14),
  `password` varchar(50),
  `number_employes` int(100),
  `website` text,
  `phone` varchar(50),
  `email` text,
  `contact_name` varchar(50),
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `advertisements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advertisements`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50),
  `description_courte` longtext,
  `description_longue` longtext,
  `date` date,
  `published` boolean,
  `companie_id` int(11),
  `contrat_type` varchar(100),
  `salaire` varchar(50),
  `lieu` varchar(100),
  `temps de travail` varchar(50),
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `applied`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applied`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `advertissement_id` int(11),
  `people_id` int(11),
  `motivation_people` text,
  PRIMARY KEY
(`id`)
);

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin`
(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100),
  `lastname` varchar(100),
  `email` text,
  `password` varchar(100),
  `role` int,
  `companies_id` int(11),
  `people_id` int(11),
  PRIMARY KEY(`id`)
);
