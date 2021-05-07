DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `question_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NOT NULL,
  `question` VARCHAR(255) NULL DEFAULT NULL,
  `answer` VARCHAR(50) NULL DEFAULT NULL,
  `type` VARCHAR(10) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`question_id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NOT NULL,
  `user_name` VARCHAR(25) NOT NULL DEFAULT 'NOT NULL',
  `password` VARCHAR(10) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`user_id`)
);

-- ---
-- Table 'pages'
--
-- ---

DROP TABLE IF EXISTS `pages`;

CREATE TABLE `pages` (
  `page_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NOT NULL,
  `page_name` VARCHAR(25) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`page_id`)
);

-- ---
-- Table 'questions_pages'
--
-- ---

DROP TABLE IF EXISTS `questions_pages`;

CREATE TABLE `questions_pages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NOT NULL,
  `page_id` INTEGER NOT NULL DEFAULT NOT NULL,
  `question_id` INTEGER NOT NULL DEFAULT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `questions_pages` ADD FOREIGN KEY (page_id) REFERENCES `pages` (`page_id`);
ALTER TABLE `questions_pages` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`question_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions_pages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `questions` (`question_id`,`question`,`answer`,`type`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`user_id`,`user_name`,`password`) VALUES
-- ('','','');
-- INSERT INTO `pages` (`page_id`,`page_name`) VALUES
-- ('','');
-- INSERT INTO `questions_pages` (`id`,`page_id`,`question_id`) VALUES
-- ('','','');