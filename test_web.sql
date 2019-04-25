-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 25 Février 2019 à 17:00
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `test_web`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=299 ;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`, `image`) VALUES
(295, 'cuisine', 'appareil-electromenager-villeneuve-sur-lot.jpg'),
(296, 'salon', 'imagesE05KISVG.jpg'),
(298, 'salle de bain', '240_F_134038032_ddB3Mj8zd211npL9NxF6leqsKMPmYPO2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE IF NOT EXISTS `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix` float NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `reduction` int(50) NOT NULL,
  `fournisseur` varchar(50) NOT NULL,
  `type` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=59 ;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `genre`, `description`, `quantite`, `prix`, `couleur`, `image`, `reduction`, `fournisseur`, `type`) VALUES
(50, 'tv_GH854_smart', 'salon', 'yy', 4, 55, 'Gris', 'tes.png', 0, 'SAMSUNG', ''),
(51, 'MICROANDE', 'cuisine', 'yy', 8, 20, 'Gris', 'oiu.png', 0, 'LG', 'Micronade'),
(52, 'ttv_GH456', 'salon', 'yy', 87, 65, 'Gris', 'zetz.png', 0, 'SAMSUNG', ''),
(53, 'machine_ZI_598R', 'cuisine', 'yy', 4, 64, 'Blanc', 'tetet.png', 0, 'BRANDT', 'machineAlaver'),
(54, 'chauf_bain', 'salle de bain', 'yy', 2, 20, 'Blanc', 'poip.png', 0, 'BRANDT', ''),
(55, 'frigo_DD77', 'cuisine', 'YY', 2, 65, 'Noir', 'uy.png', 0, 'LENEVO', 'Frigider'),
(56, 'BLAC_EE8845', 'cuisine', 'cc', 4, 55, 'Noir', 'ezef.png', 0, 'LG', 'Cuisinaire'),
(57, 'ff_V65', 'cuisine', 'cc', 4, 20, 'Gris', 'iuuiu.png', 0, 'SAMSUNG', ''),
(58, 'frigider_QQ987', 'cuisine', 'aa', 10, 64, 'Gris', 'uyt.png', 0, 'SAMSUNG', 'Frigider');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL,
  `pseudo` varchar(500) NOT NULL,
  `mot_de_passe` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `adresse` varchar(500) NOT NULL,
  `Numero_telephone` int(11) NOT NULL,
  `role` varchar(50) NOT NULL,
  `etats` varchar(500) NOT NULL,
  `carte_banquaire` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `full_name`, `pseudo`, `mot_de_passe`, `email`, `adresse`, `Numero_telephone`, `role`, `etats`, `carte_banquaire`) VALUES
(2, 'zaki boutamine', 'client', 'client', 'zaki@esprit.tn', 'tunis', 2665555, 'client', 'desactive', '565656565'),
(3, 'sasa meth', 'admin', 'admin', 'sasa@email.tn', 'tunis', 50526875, 'admin', 'desactive', '656596565');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
