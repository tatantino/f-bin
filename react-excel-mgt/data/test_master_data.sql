-- Tank Plan Master Test Data
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (1, '2024-06-26', 
                     'Weekly', '', 
                     1, NULL, 
                     '202406', 'Alice',
                     '2024-06-26 16:44:30');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (2, '2024-06-30', 
                     'Long-term', '', 
                     1, NULL, 
                     '202406', 'Tom',
                     '2024-06-30 10:41:17');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (3, '2024-07-03', 
                     'Weekly', '18MP', 
                     1, 1, 
                     '202407', 'Sarah',
                     '2024-07-03 14:30:24');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (4, '2024-07-10', 
                     'Weekly', '', 
                     1, 3, 
                     '202407', 'Sarah',
                     '2024-07-10 12:12:55');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (5, '2024-07-17', 
                     'Weekly', '', 
                     1, 4, 
                     '202407', 'Alice',
                     '2024-07-17 12:56:12');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (6, '2024-07-24', 
                     'Weekly', '', 
                     1, 5, 
                     '202407', 'David',
                     '2024-07-24 13:53:30');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (7, '2024-07-31', 
                     'Weekly', '', 
                     1, 6, 
                     '202407', 'Kate',
                     '2024-07-31 16:00:06');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (8, '2024-07-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202407', 'Emma',
                     '2024-07-31 12:48:22');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (9, '2024-08-07', 
                     'Weekly', '', 
                     1, 7, 
                     '202408', 'John',
                     '2024-08-07 14:08:36');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (10, '2024-08-14', 
                     'Weekly', '', 
                     1, 9, 
                     '202408', 'Sarah',
                     '2024-08-14 12:40:55');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (11, '2024-08-21', 
                     'Weekly', '', 
                     1, 10, 
                     '202408', 'David',
                     '2024-08-21 17:08:53');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (12, '2024-08-28', 
                     'Weekly', '18MP', 
                     1, 11, 
                     '202408', 'Bob',
                     '2024-08-28 10:46:40');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (13, '2024-08-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202408', 'Emma',
                     '2024-08-31 14:13:47');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (14, '2024-09-04', 
                     'Weekly', '', 
                     1, 12, 
                     '202409', 'Mike',
                     '2024-09-04 09:44:43');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (15, '2024-09-11', 
                     'Weekly', '', 
                     1, 14, 
                     '202409', 'Mary',
                     '2024-09-11 12:23:16');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (16, '2024-09-18', 
                     'Weekly', '', 
                     1, 15, 
                     '202409', 'Sarah',
                     '2024-09-18 14:01:56');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (17, '2024-09-25', 
                     'Weekly', '18MP', 
                     1, 16, 
                     '202409', 'Emma',
                     '2024-09-25 17:02:03');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (18, '2024-09-30', 
                     'Long-term', 'GB', 
                     1, NULL, 
                     '202409', 'Kate',
                     '2024-09-30 09:12:07');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (19, '2024-10-02', 
                     'Weekly', '', 
                     1, 17, 
                     '202410', 'Bob',
                     '2024-10-02 14:18:36');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (20, '2024-10-09', 
                     'Weekly', '', 
                     1, 19, 
                     '202410', 'Kate',
                     '2024-10-09 15:45:45');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (21, '2024-10-16', 
                     'Weekly', '18MP', 
                     1, 20, 
                     '202410', 'Mary',
                     '2024-10-16 15:34:24');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (22, '2024-10-23', 
                     'Weekly', '', 
                     1, 21, 
                     '202410', 'Emma',
                     '2024-10-23 13:46:34');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (23, '2024-10-30', 
                     'Weekly', '', 
                     1, 22, 
                     '202410', 'Mary',
                     '2024-10-30 12:17:26');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (24, '2024-10-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202410', 'Mike',
                     '2024-10-31 13:25:30');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (25, '2024-11-06', 
                     'Weekly', '', 
                     1, 23, 
                     '202411', 'John',
                     '2024-11-06 12:35:52');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (26, '2024-11-13', 
                     'Weekly', '', 
                     1, 25, 
                     '202411', 'Kate',
                     '2024-11-13 09:26:21');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (27, '2024-11-20', 
                     'Weekly', '18MP', 
                     1, 26, 
                     '202411', 'Bob',
                     '2024-11-20 14:10:09');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (28, '2024-11-27', 
                     'Weekly', '', 
                     1, 27, 
                     '202411', 'Sarah',
                     '2024-11-27 11:24:54');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (29, '2024-11-30', 
                     'Long-term', '', 
                     1, NULL, 
                     '202411', 'Tom',
                     '2024-11-30 13:35:04');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (30, '2024-12-04', 
                     'Weekly', '', 
                     1, 28, 
                     '202412', 'Kate',
                     '2024-12-04 14:16:56');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (31, '2024-12-11', 
                     'Weekly', '', 
                     1, 30, 
                     '202412', 'Bob',
                     '2024-12-11 09:00:27');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (32, '2024-12-18', 
                     'Weekly', '', 
                     1, 31, 
                     '202412', 'David',
                     '2024-12-18 16:29:53');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (33, '2024-12-25', 
                     'Weekly', '18MP', 
                     1, 32, 
                     '202412', 'Alice',
                     '2024-12-25 16:06:18');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (34, '2024-12-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202412', 'Emma',
                     '2024-12-31 13:45:09');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (35, '2025-01-01', 
                     'Weekly', '18MP', 
                     1, 33, 
                     '202501', 'Mary',
                     '2025-01-01 09:48:08');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (36, '2025-01-08', 
                     'Weekly', '', 
                     1, 35, 
                     '202501', 'Sarah',
                     '2025-01-08 13:50:00');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (37, '2025-01-15', 
                     'Weekly', '', 
                     1, 36, 
                     '202501', 'Tom',
                     '2025-01-15 14:40:29');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (38, '2025-01-22', 
                     'Weekly', '', 
                     1, 37, 
                     '202501', 'Alice',
                     '2025-01-22 16:04:41');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (39, '2025-01-29', 
                     'Weekly', '', 
                     1, 38, 
                     '202501', 'Alice',
                     '2025-01-29 11:39:27');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (40, '2025-01-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202501', 'Tom',
                     '2025-01-31 10:00:18');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (41, '2025-02-05', 
                     'Weekly', '', 
                     1, 39, 
                     '202502', 'Sarah',
                     '2025-02-05 17:28:27');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (42, '2025-02-12', 
                     'Weekly', '', 
                     1, 41, 
                     '202502', 'Alice',
                     '2025-02-12 11:21:36');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (43, '2025-02-19', 
                     'Weekly', '', 
                     1, 42, 
                     '202502', 'John',
                     '2025-02-19 16:44:45');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (44, '2025-02-26', 
                     'Weekly', '18MP', 
                     1, 43, 
                     '202502', 'Emma',
                     '2025-02-26 11:10:51');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (45, '2025-02-28', 
                     'Long-term', '', 
                     1, NULL, 
                     '202502', 'Sarah',
                     '2025-02-28 15:01:56');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (46, '2025-03-05', 
                     'Weekly', '18MP', 
                     1, 44, 
                     '202503', 'Emma',
                     '2025-03-05 15:57:42');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (47, '2025-03-12', 
                     'Weekly', '', 
                     1, 46, 
                     '202503', 'Tom',
                     '2025-03-12 10:40:20');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (48, '2025-03-19', 
                     'Weekly', '', 
                     1, 47, 
                     '202503', 'Mary',
                     '2025-03-19 14:54:16');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (49, '2025-03-26', 
                     'Weekly', '', 
                     1, 48, 
                     '202503', 'Emma',
                     '2025-03-26 17:40:54');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (50, '2025-03-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202503', 'David',
                     '2025-03-31 16:21:38');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (51, '2025-04-02', 
                     'Weekly', '', 
                     1, 49, 
                     '202504', 'Sarah',
                     '2025-04-02 13:40:01');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (52, '2025-04-09', 
                     'Weekly', '18MP', 
                     1, 51, 
                     '202504', 'John',
                     '2025-04-09 17:10:59');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (53, '2025-04-16', 
                     'Weekly', '', 
                     1, 52, 
                     '202504', 'Emma',
                     '2025-04-16 10:08:32');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (54, '2025-04-23', 
                     'Weekly', '', 
                     1, 53, 
                     '202504', 'John',
                     '2025-04-23 16:09:17');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (55, '2025-04-30', 
                     'Weekly', '', 
                     1, 54, 
                     '202504', 'Alice',
                     '2025-04-30 15:25:11');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (56, '2025-04-30', 
                     'Long-term', '', 
                     1, NULL, 
                     '202504', 'Tom',
                     '2025-04-30 14:52:41');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (57, '2025-05-07', 
                     'Weekly', '18MP', 
                     1, 55, 
                     '202505', 'John',
                     '2025-05-07 12:54:11');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (58, '2025-05-14', 
                     'Weekly', '', 
                     1, 57, 
                     '202505', 'Emma',
                     '2025-05-14 16:35:08');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (59, '2025-05-21', 
                     'Weekly', '', 
                     1, 58, 
                     '202505', 'Emma',
                     '2025-05-21 11:41:28');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (60, '2025-05-28', 
                     'Weekly', '', 
                     1, 59, 
                     '202505', 'Sarah',
                     '2025-05-28 14:02:47');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (61, '2025-05-31', 
                     'Long-term', '', 
                     1, NULL, 
                     '202505', 'Bob',
                     '2025-05-31 11:02:10');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (62, '2025-06-04', 
                     'Weekly', '', 
                     1, 60, 
                     '202506', 'Bob',
                     '2025-06-04 13:18:47');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (63, '2025-06-11', 
                     'Weekly', '', 
                     1, 62, 
                     '202506', 'David',
                     '2025-06-11 09:16:03');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (64, '2025-06-18', 
                     'Weekly', '18MP', 
                     1, 63, 
                     '202506', 'Mary',
                     '2025-06-18 17:57:06');
INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    (65, '2025-06-25', 
                     'Weekly', '', 
                     1, 64, 
                     '202506', 'Emma',
                     '2025-06-25 14:32:26');
