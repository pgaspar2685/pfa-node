-- mysql -u root -p pfa-db

CREATE TABLE `fc-modules` (
  `id` int(32) NOT NULL PRIMARY KEY,
  `name` varchar(150) NOT NULL,
  `description` varchar(255) NULL,
  `dt_created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `fc-modules` (`id`, `name`, `description`) VALUES
(1, 'Docker', 'Trabalhar com docker'),
(2, 'Git e GitHub', 'Padrões e técnica avançadas com Git e GitHub'),
(3, 'CI', 'Integração Continua'),
(4, 'Kubernetes', 'Como trabalhar com Kubernetes');