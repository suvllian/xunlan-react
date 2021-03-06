CREATE DATABASE homepage DEFAULT CHARACTER SET gbk COLLATE gbk_chinese_ci;

CREATE TABLE IF NOT EXISTS friendlink (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  src varchar(512) NOT NULL,
  content text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS newscontent (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  title varchar(512) NOT NULL,
  aTime date NOT NULL,
  imgSrc varchar(512) NOT NULL,
  link varchar(512) NOT NULL,
  content text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `timeyear` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS `timevent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` text NOT NULL,
  `refYear` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `refYear` (`refYear`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

ALTER TABLE `timevent`
  ADD CONSTRAINT `timeline` FOREIGN KEY (`refYear`) REFERENCES `timeyear` (`id`);