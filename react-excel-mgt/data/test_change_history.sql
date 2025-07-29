-- Tank Plan Change History Test Data

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (1, 1, 
                     'T03', 'RC2',
                     '2024-03-09',
                     '2024-04-13',
                     NULL,
                     '2024-06-24',
                     '2024-07-03',
                     '2024-03-09',
                     '2024-04-13',
                     '2024-05-23',
                     '2024-06-24',
                     '2024-07-03',
                     'Inventory',
                     'Inventory level adjustment',
                     'Sarah',
                     '2024-02-27 15:20:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (2, 1, 
                     'T10', 'RC2',
                     NULL,
                     '2024-04-27',
                     '2024-05-15',
                     '2024-06-10',
                     '2024-07-02',
                     '2024-03-24',
                     '2024-04-27',
                     '2024-05-15',
                     '2024-06-10',
                     '2024-07-02',
                     'Resource',
                     'Human resource reallocation',
                     'Alice',
                     '2024-02-27 10:11:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (3, 1, 
                     'T05', 'RC3',
                     '2024-05-28',
                     '2024-07-05',
                     '2024-07-18',
                     '2024-08-30',
                     '2024-09-14',
                     '2024-05-28',
                     '2024-07-05',
                     '2024-07-18',
                     '2024-08-30',
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'Mary',
                     '2024-05-14 12:50:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (4, 2, 
                     'T04', 'RC1',
                     '2024-11-26',
                     '2024-12-15',
                     '2025-01-23',
                     NULL,
                     NULL,
                     '2024-11-26',
                     '2024-12-15',
                     '2025-01-25',
                     '2025-03-04',
                     '2025-03-08',
                     'Schedule',
                     'Schedule optimization',
                     'Alice',
                     '2024-11-05 11:05:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (5, 2, 
                     'T03', 'RC3',
                     '2024-10-25',
                     '2024-12-09',
                     '2024-12-26',
                     '2025-01-26',
                     '2025-02-10',
                     '2024-10-27',
                     '2024-12-09',
                     '2024-12-26',
                     '2025-01-30',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'Mary',
                     '2024-10-11 14:33:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (6, 2, 
                     'T06', 'RC1',
                     '2024-06-06',
                     '2024-07-20',
                     NULL,
                     '2024-09-19',
                     '2024-10-19',
                     '2024-06-06',
                     '2024-07-20',
                     '2024-08-10',
                     NULL,
                     '2024-10-19',
                     'Tanks issue',
                     'Performance issue fix',
                     'Mary',
                     '2024-05-27 15:52:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (7, 3, 
                     'T08', 'RC3',
                     '2024-10-18',
                     '2024-11-15',
                     '2024-12-20',
                     NULL,
                     '2025-02-05',
                     '2024-10-18',
                     '2024-11-17',
                     '2024-12-23',
                     NULL,
                     '2025-02-05',
                     'Lead time',
                     'Delivery time adjustment',
                     'Mary',
                     '2024-09-21 15:09:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (8, 3, 
                     'T02', 'RC3',
                     NULL,
                     '2024-11-11',
                     '2024-12-18',
                     '2025-01-16',
                     '2025-02-13',
                     '2024-10-01',
                     '2024-11-11',
                     '2024-12-18',
                     '2025-01-16',
                     '2025-02-13',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mike',
                     '2024-09-27 10:11:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (9, 3, 
                     'T02', 'RC1',
                     '2024-08-15',
                     '2024-09-13',
                     '2024-09-23',
                     '2024-10-31',
                     '2024-11-21',
                     NULL,
                     '2024-09-13',
                     '2024-09-23',
                     '2024-10-31',
                     '2024-11-21',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Kate',
                     '2024-07-18 11:21:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (10, 3, 
                     'T03', 'RC3',
                     '2024-12-25',
                     '2025-01-19',
                     NULL,
                     '2025-03-01',
                     NULL,
                     '2024-12-25',
                     '2025-01-19',
                     NULL,
                     '2025-03-01',
                     NULL,
                     'Resource',
                     'Capacity adjustment',
                     'Kate',
                     '2024-11-25 11:49:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (11, 3, 
                     'T10', 'RC1',
                     '2024-04-03',
                     '2024-04-18',
                     NULL,
                     '2024-06-25',
                     NULL,
                     '2024-04-03',
                     '2024-04-18',
                     '2024-06-04',
                     '2024-06-25',
                     NULL,
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Kate',
                     '2024-03-17 16:32:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (12, 4, 
                     'T08', 'RC1',
                     '2024-10-07',
                     NULL,
                     '2024-12-07',
                     '2025-01-13',
                     '2025-02-22',
                     '2024-10-07',
                     '2024-11-23',
                     '2024-12-07',
                     '2025-01-13',
                     '2025-02-22',
                     'Lead time',
                     'Delivery time adjustment',
                     'David',
                     '2024-10-06 12:34:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (13, 4, 
                     'T08', 'RC1',
                     '2024-08-31',
                     NULL,
                     '2024-10-27',
                     '2024-12-18',
                     NULL,
                     '2024-08-31',
                     '2024-10-11',
                     '2024-10-27',
                     '2024-12-18',
                     NULL,
                     'Cost',
                     'Cost control optimization',
                     'Sarah',
                     '2024-08-26 12:37:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (14, 4, 
                     'T03', 'RC3',
                     '2024-12-10',
                     NULL,
                     '2025-02-02',
                     '2025-03-10',
                     '2025-03-20',
                     '2024-12-11',
                     NULL,
                     '2025-02-02',
                     '2025-03-10',
                     '2025-03-20',
                     'Lead time',
                     'Production cycle optimization',
                     'Alice',
                     '2024-11-17 14:03:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (15, 4, 
                     'T05', 'RC1',
                     '2024-08-03',
                     '2024-08-19',
                     NULL,
                     '2024-10-28',
                     '2024-12-08',
                     NULL,
                     '2024-08-19',
                     '2024-10-02',
                     '2024-10-28',
                     '2024-12-08',
                     'Inventory',
                     'Stock strategy optimization',
                     'Kate',
                     '2024-07-11 11:02:33');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (16, 4, 
                     'T02', 'RC1',
                     '2024-12-17',
                     '2024-12-28',
                     '2025-02-08',
                     '2025-03-10',
                     '2025-03-27',
                     '2024-12-17',
                     '2024-12-28',
                     NULL,
                     '2025-03-10',
                     '2025-03-29',
                     'Lead time',
                     'Lead time update',
                     'Alice',
                     '2024-11-25 11:50:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (17, 5, 
                     'T09', 'RC3',
                     NULL,
                     '2024-06-21',
                     '2024-07-24',
                     '2024-09-16',
                     '2024-10-15',
                     NULL,
                     '2024-06-21',
                     '2024-07-24',
                     '2024-09-16',
                     '2024-10-15',
                     'Cost',
                     'Budget adjustment',
                     'Alice',
                     '2024-05-21 14:51:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (18, 5, 
                     'T08', 'RC1',
                     '2024-03-29',
                     '2024-04-18',
                     '2024-06-02',
                     '2024-06-14',
                     '2024-07-16',
                     '2024-03-29',
                     NULL,
                     '2024-06-02',
                     '2024-06-14',
                     '2024-07-16',
                     'Other',
                     'Minor plan update',
                     'David',
                     '2024-03-14 15:49:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (19, 5, 
                     'T04', 'RC3',
                     '2024-06-03',
                     '2024-06-28',
                     '2024-07-19',
                     NULL,
                     '2024-10-04',
                     '2024-06-03',
                     '2024-06-28',
                     '2024-07-19',
                     '2024-08-29',
                     '2024-10-04',
                     'Lead time',
                     'Lead time update',
                     'David',
                     '2024-05-10 14:33:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (20, 6, 
                     'T06', 'RC2',
                     '2024-05-23',
                     '2024-06-29',
                     '2024-08-03',
                     NULL,
                     '2024-09-22',
                     '2024-05-23',
                     '2024-06-29',
                     '2024-08-03',
                     NULL,
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'David',
                     '2024-05-18 15:49:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (21, 6, 
                     'T06', 'RC3',
                     '2024-09-17',
                     '2024-10-05',
                     '2024-11-19',
                     NULL,
                     '2024-12-30',
                     '2024-09-17',
                     '2024-10-05',
                     '2024-11-19',
                     '2024-12-19',
                     '2024-12-30',
                     'Resource',
                     'Resource allocation adjustment',
                     'Mary',
                     '2024-08-28 16:04:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (22, 6, 
                     'T04', 'RC3',
                     '2024-09-02',
                     '2024-10-02',
                     NULL,
                     NULL,
                     '2025-01-09',
                     '2024-09-02',
                     '2024-10-02',
                     NULL,
                     '2024-12-02',
                     '2025-01-09',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Mary',
                     '2024-08-19 15:39:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (23, 6, 
                     'T08', 'RC1',
                     '2024-08-08',
                     '2024-09-17',
                     '2024-11-01',
                     NULL,
                     '2024-12-25',
                     '2024-08-08',
                     '2024-09-17',
                     '2024-11-01',
                     NULL,
                     NULL,
                     'Tanks issue',
                     'Performance issue fix',
                     'Tom',
                     '2024-08-05 10:02:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (24, 7, 
                     'T07', 'RC2',
                     '2024-08-04',
                     '2024-09-11',
                     '2024-09-23',
                     '2024-11-10',
                     '2024-11-25',
                     '2024-08-04',
                     '2024-09-15',
                     NULL,
                     '2024-11-10',
                     '2024-11-25',
                     'Schedule',
                     'Timeline adjustment',
                     'David',
                     '2024-07-23 13:31:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (25, 7, 
                     'T02', 'RC1',
                     NULL,
                     '2024-06-02',
                     NULL,
                     '2024-07-16',
                     '2024-08-06',
                     NULL,
                     '2024-06-02',
                     NULL,
                     '2024-07-16',
                     '2024-08-06',
                     'Cost',
                     'Cost control optimization',
                     'Sarah',
                     '2024-04-06 09:24:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (26, 7, 
                     'T10', 'RC2',
                     '2024-07-28',
                     '2024-08-03',
                     '2024-09-10',
                     '2024-10-08',
                     '2024-11-29',
                     '2024-07-28',
                     '2024-08-03',
                     '2024-09-10',
                     '2024-10-08',
                     NULL,
                     'Other',
                     'Special requirement change',
                     'John',
                     '2024-07-03 12:09:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (27, 7, 
                     'T01', 'RC3',
                     '2024-07-19',
                     NULL,
                     '2024-09-16',
                     '2024-10-24',
                     '2024-11-08',
                     '2024-07-19',
                     '2024-09-05',
                     '2024-09-19',
                     NULL,
                     '2024-11-11',
                     'Lead time',
                     'Delivery time adjustment',
                     'Mike',
                     '2024-07-08 15:40:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (28, 8, 
                     'T06', 'RC3',
                     NULL,
                     '2024-11-27',
                     '2025-01-13',
                     NULL,
                     '2025-03-04',
                     NULL,
                     '2024-11-27',
                     '2025-01-13',
                     NULL,
                     '2025-03-04',
                     'Other',
                     'Temporary adjustment',
                     'Sarah',
                     '2024-10-25 17:39:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (29, 8, 
                     'T09', 'RC3',
                     '2024-10-07',
                     '2024-10-18',
                     '2024-11-30',
                     '2025-01-02',
                     '2025-01-19',
                     NULL,
                     '2024-10-18',
                     NULL,
                     '2025-01-02',
                     '2025-01-19',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Kate',
                     '2024-09-14 15:15:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (30, 8, 
                     'T09', 'RC2',
                     '2024-08-03',
                     NULL,
                     '2024-10-03',
                     '2024-11-07',
                     '2024-12-03',
                     '2024-08-03',
                     NULL,
                     '2024-10-03',
                     '2024-11-07',
                     '2024-12-03',
                     'Resource',
                     'Resource allocation adjustment',
                     'John',
                     '2024-07-10 11:09:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (31, 9, 
                     'T03', 'RC2',
                     '2024-04-30',
                     '2024-06-13',
                     '2024-07-09',
                     NULL,
                     '2024-09-20',
                     NULL,
                     '2024-06-13',
                     '2024-07-09',
                     '2024-08-22',
                     '2024-09-20',
                     'Other',
                     'Minor plan update',
                     'Mary',
                     '2024-04-25 15:33:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (32, 9, 
                     'T02', 'RC2',
                     NULL,
                     '2024-05-10',
                     '2024-06-07',
                     '2024-07-18',
                     '2024-08-30',
                     '2024-04-23',
                     '2024-05-10',
                     '2024-06-07',
                     '2024-07-18',
                     NULL,
                     'Other',
                     'Minor plan update',
                     'Mike',
                     '2024-04-02 10:34:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (33, 9, 
                     'T01', 'RC1',
                     '2024-07-12',
                     '2024-07-29',
                     '2024-09-20',
                     '2024-10-02',
                     NULL,
                     '2024-07-12',
                     '2024-07-29',
                     '2024-09-20',
                     '2024-10-02',
                     '2024-11-20',
                     'Resource',
                     'Capacity adjustment',
                     'Mary',
                     '2024-06-24 10:33:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (34, 9, 
                     'T04', 'RC1',
                     '2024-12-05',
                     '2025-01-01',
                     NULL,
                     '2025-03-08',
                     NULL,
                     '2024-12-05',
                     '2025-01-01',
                     '2025-02-08',
                     '2025-03-08',
                     '2025-04-09',
                     'Other',
                     'Special requirement change',
                     'Tom',
                     '2024-11-25 17:52:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (35, 9, 
                     'T05', 'RC1',
                     '2024-08-28',
                     '2024-09-22',
                     '2024-10-27',
                     NULL,
                     NULL,
                     '2024-08-28',
                     '2024-09-22',
                     '2024-10-27',
                     '2024-11-12',
                     '2025-01-09',
                     'Resource',
                     'Human resource reallocation',
                     'Alice',
                     '2024-08-13 15:02:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (36, 10, 
                     'T07', 'RC1',
                     '2024-06-08',
                     '2024-07-27',
                     '2024-08-19',
                     '2024-09-20',
                     '2024-10-09',
                     NULL,
                     '2024-07-27',
                     '2024-08-19',
                     '2024-09-20',
                     '2024-10-09',
                     'Inventory',
                     'Inventory forecast change',
                     'Mary',
                     '2024-06-03 15:20:47');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (37, 10, 
                     'T04', 'RC1',
                     '2024-08-24',
                     '2024-09-25',
                     '2024-11-03',
                     '2024-12-09',
                     NULL,
                     '2024-08-24',
                     NULL,
                     '2024-11-03',
                     '2024-12-09',
                     '2024-12-25',
                     'Cost',
                     'Expense optimization',
                     'Bob',
                     '2024-08-14 13:28:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (38, 10, 
                     'T10', 'RC1',
                     '2024-03-01',
                     NULL,
                     '2024-05-07',
                     '2024-06-06',
                     '2024-07-05',
                     '2024-03-01',
                     NULL,
                     '2024-05-07',
                     '2024-06-06',
                     '2024-07-05',
                     'Other',
                     'Minor plan update',
                     'Sarah',
                     '2024-02-17 13:05:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (39, 10, 
                     'T02', 'RC2',
                     '2024-04-03',
                     '2024-05-22',
                     '2024-05-31',
                     '2024-07-20',
                     '2024-08-05',
                     '2024-04-03',
                     NULL,
                     '2024-05-31',
                     '2024-07-20',
                     '2024-08-05',
                     'Resource',
                     'Equipment resource optimization',
                     'Alice',
                     '2024-03-24 12:41:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (40, 10, 
                     'T06', 'RC1',
                     NULL,
                     '2024-05-16',
                     '2024-06-18',
                     '2024-08-02',
                     '2024-08-13',
                     NULL,
                     '2024-05-16',
                     '2024-06-18',
                     NULL,
                     '2024-08-13',
                     'Resource',
                     'Capacity adjustment',
                     'Mike',
                     '2024-04-12 11:17:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (41, 11, 
                     'T07', 'RC3',
                     '2024-05-04',
                     '2024-06-07',
                     '2024-06-24',
                     '2024-08-21',
                     '2024-09-12',
                     '2024-05-04',
                     NULL,
                     '2024-06-24',
                     '2024-08-23',
                     '2024-09-12',
                     'Schedule',
                     'Timeline adjustment',
                     'Emma',
                     '2024-04-23 17:57:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (42, 11, 
                     'T02', 'RC3',
                     '2024-06-01',
                     NULL,
                     '2024-07-16',
                     '2024-08-16',
                     '2024-09-29',
                     '2024-06-05',
                     NULL,
                     '2024-07-18',
                     '2024-08-16',
                     '2024-09-29',
                     'Schedule',
                     'Maintenance time change',
                     'Emma',
                     '2024-05-08 12:38:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (43, 11, 
                     'T08', 'RC3',
                     NULL,
                     '2024-03-19',
                     NULL,
                     '2024-05-28',
                     '2024-06-21',
                     '2024-02-23',
                     '2024-03-19',
                     '2024-04-06',
                     '2024-05-28',
                     '2024-06-21',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'John',
                     '2024-02-02 14:34:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (44, 12, 
                     'T03', 'RC2',
                     '2024-07-19',
                     '2024-09-13',
                     '2024-09-16',
                     '2024-10-30',
                     NULL,
                     '2024-07-19',
                     '2024-09-13',
                     '2024-09-16',
                     '2024-10-30',
                     '2024-11-20',
                     'Cost',
                     'Expense optimization',
                     'Alice',
                     '2024-07-17 15:52:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (45, 12, 
                     'T04', 'RC2',
                     '2024-05-06',
                     '2024-05-28',
                     '2024-06-09',
                     '2024-07-24',
                     '2024-08-28',
                     '2024-05-06',
                     NULL,
                     '2024-06-09',
                     '2024-07-24',
                     '2024-08-28',
                     'Cost',
                     'Budget adjustment',
                     'Alice',
                     '2024-04-08 10:10:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (46, 12, 
                     'T08', 'RC3',
                     NULL,
                     '2024-12-17',
                     '2025-01-25',
                     NULL,
                     '2025-02-26',
                     '2024-10-31',
                     '2024-12-17',
                     '2025-01-25',
                     '2025-01-28',
                     '2025-02-26',
                     'Resource',
                     'Equipment resource optimization',
                     'John',
                     '2024-10-28 14:53:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (47, 13, 
                     'T10', 'RC3',
                     NULL,
                     '2024-03-18',
                     '2024-03-27',
                     NULL,
                     '2024-06-03',
                     '2024-02-02',
                     '2024-03-18',
                     '2024-03-30',
                     NULL,
                     '2024-06-03',
                     'Lead time',
                     'Lead time update',
                     'Sarah',
                     '2024-01-22 17:33:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (48, 13, 
                     'T03', 'RC3',
                     '2024-02-10',
                     '2024-03-11',
                     '2024-04-17',
                     '2024-05-21',
                     '2024-06-27',
                     '2024-02-10',
                     '2024-03-11',
                     '2024-04-17',
                     NULL,
                     '2024-06-27',
                     'Resource',
                     'Capacity adjustment',
                     'John',
                     '2024-02-04 13:03:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (49, 13, 
                     'T09', 'RC1',
                     '2024-06-16',
                     '2024-07-18',
                     NULL,
                     '2024-08-24',
                     '2024-10-13',
                     '2024-06-16',
                     '2024-07-18',
                     '2024-07-24',
                     '2024-08-24',
                     '2024-10-13',
                     'Resource',
                     'Capacity adjustment',
                     'Bob',
                     '2024-05-19 14:33:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (50, 13, 
                     'T10', 'RC2',
                     NULL,
                     '2024-06-28',
                     NULL,
                     '2024-08-16',
                     '2024-09-27',
                     '2024-05-19',
                     '2024-06-28',
                     '2024-07-05',
                     '2024-08-16',
                     '2024-09-27',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Kate',
                     '2024-05-04 10:53:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (51, 14, 
                     'T01', 'RC1',
                     '2024-03-28',
                     '2024-04-15',
                     NULL,
                     '2024-06-21',
                     '2024-07-23',
                     NULL,
                     '2024-04-15',
                     NULL,
                     '2024-06-21',
                     '2024-07-23',
                     'Cost',
                     'Cost structure change',
                     'Kate',
                     '2024-03-10 11:46:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (52, 14, 
                     'T05', 'RC3',
                     '2024-07-07',
                     '2024-08-16',
                     '2024-09-13',
                     '2024-09-27',
                     '2024-11-16',
                     '2024-07-07',
                     NULL,
                     '2024-09-13',
                     '2024-09-27',
                     '2024-11-16',
                     'Inventory',
                     'Safety stock update',
                     'Tom',
                     '2024-06-24 16:42:23');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (53, 14, 
                     'T07', 'RC3',
                     '2024-05-28',
                     '2024-06-03',
                     NULL,
                     '2024-08-11',
                     '2024-09-16',
                     '2024-05-28',
                     '2024-06-03',
                     NULL,
                     '2024-08-11',
                     '2024-09-16',
                     'Other',
                     'Temporary adjustment',
                     'Kate',
                     '2024-04-28 09:35:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (54, 14, 
                     'T06', 'RC2',
                     '2024-05-29',
                     '2024-06-12',
                     NULL,
                     '2024-08-10',
                     '2024-09-15',
                     '2024-05-30',
                     NULL,
                     '2024-07-10',
                     '2024-08-10',
                     '2024-09-17',
                     'Lead time',
                     'Delivery time adjustment',
                     'Mike',
                     '2024-05-10 17:04:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (55, 15, 
                     'T05', 'RC1',
                     NULL,
                     '2024-12-21',
                     '2025-01-17',
                     '2025-02-13',
                     '2025-03-17',
                     '2024-11-19',
                     '2024-12-21',
                     '2025-01-17',
                     '2025-02-13',
                     '2025-03-17',
                     'Resource',
                     'Human resource reallocation',
                     'John',
                     '2024-11-14 14:47:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (56, 15, 
                     'T07', 'RC2',
                     '2024-03-15',
                     NULL,
                     '2024-06-01',
                     '2024-06-10',
                     '2024-07-26',
                     '2024-03-15',
                     '2024-04-21',
                     '2024-06-01',
                     '2024-06-10',
                     '2024-07-26',
                     'Other',
                     'Special requirement change',
                     'John',
                     '2024-03-06 12:31:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (57, 16, 
                     'T06', 'RC3',
                     NULL,
                     '2024-10-10',
                     '2024-11-05',
                     '2024-12-16',
                     '2025-01-16',
                     '2024-09-12',
                     '2024-10-10',
                     '2024-11-05',
                     '2024-12-16',
                     '2025-01-20',
                     'Schedule',
                     'Timeline adjustment',
                     'Alice',
                     '2024-08-23 10:24:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (58, 16, 
                     'T06', 'RC1',
                     NULL,
                     '2024-12-11',
                     '2025-01-11',
                     '2025-02-02',
                     '2025-03-12',
                     NULL,
                     '2024-12-11',
                     '2025-01-11',
                     '2025-02-02',
                     '2025-03-12',
                     'Resource',
                     'Equipment resource optimization',
                     'Emma',
                     '2024-10-14 13:30:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (59, 17, 
                     'T04', 'RC3',
                     NULL,
                     '2024-07-05',
                     '2024-08-02',
                     '2024-09-03',
                     NULL,
                     '2024-06-10',
                     '2024-07-06',
                     '2024-08-02',
                     '2024-09-03',
                     '2024-09-09',
                     'Lead time',
                     'Production cycle optimization',
                     'Mike',
                     '2024-05-11 17:10:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (60, 17, 
                     'T06', 'RC1',
                     '2024-03-22',
                     NULL,
                     '2024-06-08',
                     '2024-06-27',
                     NULL,
                     '2024-03-24',
                     '2024-04-24',
                     '2024-06-08',
                     '2024-06-29',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'David',
                     '2024-03-15 15:21:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (61, 18, 
                     'T02', 'RC1',
                     '2024-11-22',
                     '2024-12-23',
                     '2025-02-12',
                     '2025-03-07',
                     '2025-03-25',
                     '2024-11-22',
                     NULL,
                     '2025-02-12',
                     '2025-03-07',
                     NULL,
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Tom',
                     '2024-11-15 11:31:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (62, 18, 
                     'T08', 'RC3',
                     '2024-10-27',
                     '2024-11-25',
                     '2025-01-19',
                     NULL,
                     '2025-03-23',
                     NULL,
                     '2024-11-25',
                     '2025-01-19',
                     '2025-02-20',
                     '2025-03-23',
                     'Inventory',
                     'Stock strategy optimization',
                     'Mike',
                     '2024-10-24 10:57:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (63, 18, 
                     'T09', 'RC1',
                     '2024-03-12',
                     NULL,
                     NULL,
                     '2024-06-12',
                     '2024-07-14',
                     '2024-03-12',
                     '2024-04-07',
                     '2024-04-29',
                     '2024-06-12',
                     '2024-07-14',
                     'Inventory',
                     'Stock strategy optimization',
                     'David',
                     '2024-02-18 13:33:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (64, 18, 
                     'T09', 'RC3',
                     '2024-07-23',
                     NULL,
                     '2024-09-07',
                     '2024-10-10',
                     NULL,
                     '2024-07-23',
                     NULL,
                     '2024-09-07',
                     '2024-10-10',
                     '2024-11-18',
                     'Cost',
                     'Cost control optimization',
                     'Alice',
                     '2024-06-26 12:27:37');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (65, 18, 
                     'T02', 'RC2',
                     NULL,
                     '2024-03-13',
                     '2024-04-11',
                     '2024-05-25',
                     '2024-06-20',
                     '2024-03-07',
                     '2024-03-13',
                     '2024-04-11',
                     NULL,
                     '2024-06-20',
                     'Other',
                     'Other optimization',
                     'John',
                     '2024-02-06 16:22:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (66, 19, 
                     'T09', 'RC1',
                     '2024-01-04',
                     NULL,
                     '2024-03-20',
                     '2024-04-12',
                     '2024-05-15',
                     NULL,
                     '2024-02-03',
                     '2024-03-20',
                     '2024-04-12',
                     '2024-05-15',
                     'Resource',
                     'Resource allocation adjustment',
                     'Mike',
                     '2024-01-01 16:07:28');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (67, 19, 
                     'T09', 'RC3',
                     '2024-02-02',
                     '2024-02-15',
                     '2024-04-02',
                     NULL,
                     '2024-05-21',
                     '2024-02-02',
                     '2024-02-15',
                     '2024-04-02',
                     '2024-04-16',
                     '2024-05-21',
                     'Other',
                     'Minor plan update',
                     'Alice',
                     '2024-01-05 09:57:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (68, 20, 
                     'T02', 'RC3',
                     '2024-04-13',
                     '2024-05-23',
                     '2024-06-23',
                     '2024-07-21',
                     '2024-08-28',
                     '2024-04-13',
                     NULL,
                     '2024-06-23',
                     '2024-07-21',
                     '2024-08-28',
                     'Other',
                     'Special requirement change',
                     'John',
                     '2024-04-06 15:50:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (69, 20, 
                     'T07', 'RC3',
                     '2024-05-15',
                     NULL,
                     '2024-07-23',
                     '2024-09-01',
                     '2024-09-26',
                     '2024-05-15',
                     '2024-06-11',
                     '2024-07-23',
                     '2024-09-01',
                     '2024-09-26',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'David',
                     '2024-05-05 12:45:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (70, 20, 
                     'T10', 'RC2',
                     '2024-04-17',
                     '2024-04-30',
                     '2024-05-23',
                     '2024-07-12',
                     NULL,
                     '2024-04-17',
                     NULL,
                     '2024-05-23',
                     '2024-07-12',
                     '2024-07-24',
                     'Cost',
                     'Cost control optimization',
                     'Mike',
                     '2024-03-18 12:27:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (71, 20, 
                     'T02', 'RC3',
                     '2024-12-05',
                     '2024-12-18',
                     '2025-02-01',
                     '2025-02-20',
                     '2025-04-04',
                     '2024-12-07',
                     '2024-12-18',
                     '2025-02-04',
                     '2025-02-20',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'John',
                     '2024-11-12 16:45:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (72, 20, 
                     'T05', 'RC3',
                     '2024-11-22',
                     '2024-12-24',
                     '2025-02-03',
                     NULL,
                     '2025-03-25',
                     '2024-11-22',
                     NULL,
                     '2025-02-03',
                     NULL,
                     '2025-03-25',
                     'Inventory',
                     'Stock strategy optimization',
                     'Tom',
                     '2024-11-12 15:05:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (73, 21, 
                     'T03', 'RC1',
                     '2024-05-02',
                     '2024-06-07',
                     NULL,
                     NULL,
                     '2024-08-28',
                     '2024-05-02',
                     '2024-06-07',
                     NULL,
                     '2024-08-24',
                     '2024-08-28',
                     'Inventory',
                     'Inventory forecast change',
                     'Alice',
                     '2024-04-26 09:39:23');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (74, 21, 
                     'T01', 'RC1',
                     '2024-11-02',
                     '2024-11-15',
                     NULL,
                     '2025-01-12',
                     '2025-02-25',
                     '2024-11-02',
                     '2024-11-15',
                     NULL,
                     '2025-01-12',
                     '2025-02-25',
                     'Resource',
                     'Human resource reallocation',
                     'Tom',
                     '2024-10-05 11:36:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (75, 21, 
                     'T03', 'RC1',
                     NULL,
                     '2024-09-28',
                     '2024-11-01',
                     '2024-11-27',
                     '2025-01-03',
                     NULL,
                     '2024-09-28',
                     '2024-11-01',
                     '2024-11-27',
                     '2025-01-03',
                     'Resource',
                     'Capacity adjustment',
                     'Bob',
                     '2024-08-20 09:12:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (76, 21, 
                     'T04', 'RC2',
                     '2024-05-27',
                     '2024-07-05',
                     '2024-07-11',
                     '2024-08-05',
                     '2024-09-09',
                     '2024-05-27',
                     '2024-07-05',
                     '2024-07-11',
                     '2024-08-05',
                     NULL,
                     'Resource',
                     'Equipment resource optimization',
                     'Mike',
                     '2024-05-06 12:41:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (77, 21, 
                     'T08', 'RC3',
                     '2024-07-15',
                     '2024-09-01',
                     '2024-09-27',
                     NULL,
                     '2024-11-16',
                     '2024-07-15',
                     '2024-09-03',
                     '2024-09-29',
                     NULL,
                     '2024-11-16',
                     'Lead time',
                     'Process time change',
                     'Alice',
                     '2024-07-04 12:48:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (78, 22, 
                     'T09', 'RC1',
                     '2024-06-22',
                     '2024-08-11',
                     '2024-09-10',
                     '2024-10-05',
                     '2024-11-04',
                     NULL,
                     '2024-08-11',
                     '2024-09-10',
                     '2024-10-05',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'John',
                     '2024-06-17 09:33:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (79, 22, 
                     'T01', 'RC1',
                     NULL,
                     NULL,
                     '2024-03-27',
                     '2024-05-18',
                     '2024-06-16',
                     NULL,
                     NULL,
                     '2024-03-27',
                     '2024-05-18',
                     '2024-06-16',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Bob',
                     '2024-01-25 17:15:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (80, 23, 
                     'T01', 'RC2',
                     '2024-08-11',
                     NULL,
                     NULL,
                     '2024-11-07',
                     '2024-12-20',
                     '2024-08-11',
                     '2024-09-25',
                     '2024-11-05',
                     '2024-11-07',
                     '2024-12-20',
                     'Cost',
                     'Budget adjustment',
                     'John',
                     '2024-08-08 10:15:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (81, 23, 
                     'T02', 'RC2',
                     '2024-03-18',
                     '2024-04-01',
                     NULL,
                     '2024-06-08',
                     '2024-07-19',
                     '2024-03-20',
                     '2024-04-01',
                     NULL,
                     '2024-06-08',
                     NULL,
                     'Lead time',
                     'Process time change',
                     'Tom',
                     '2024-02-23 10:46:43');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (82, 23, 
                     'T05', 'RC3',
                     '2024-02-29',
                     '2024-03-19',
                     NULL,
                     '2024-05-15',
                     '2024-06-21',
                     '2024-02-29',
                     '2024-03-19',
                     NULL,
                     '2024-05-15',
                     NULL,
                     'Cost',
                     'Expense optimization',
                     'Mary',
                     '2024-02-02 13:15:47');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (83, 23, 
                     'T03', 'RC2',
                     '2024-07-17',
                     '2024-08-22',
                     '2024-09-09',
                     '2024-10-20',
                     '2024-11-12',
                     '2024-07-19',
                     '2024-08-24',
                     '2024-09-09',
                     NULL,
                     '2024-11-12',
                     'Lead time',
                     'Production cycle optimization',
                     'David',
                     '2024-06-23 14:06:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (84, 23, 
                     'T04', 'RC2',
                     '2024-11-30',
                     '2024-12-20',
                     '2025-02-03',
                     '2025-02-18',
                     '2025-03-25',
                     NULL,
                     '2024-12-20',
                     '2025-02-03',
                     '2025-02-18',
                     '2025-03-25',
                     'Inventory',
                     'Safety stock update',
                     'Kate',
                     '2024-11-08 14:57:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (85, 24, 
                     'T03', 'RC3',
                     '2024-04-16',
                     '2024-04-22',
                     '2024-05-25',
                     NULL,
                     '2024-07-18',
                     '2024-04-16',
                     '2024-04-22',
                     NULL,
                     NULL,
                     '2024-07-18',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'John',
                     '2024-03-17 17:53:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (86, 24, 
                     'T01', 'RC2',
                     NULL,
                     '2024-03-07',
                     '2024-04-11',
                     '2024-05-09',
                     '2024-05-31',
                     '2024-02-14',
                     '2024-03-09',
                     '2024-04-11',
                     '2024-05-09',
                     '2024-05-31',
                     'Lead time',
                     'Lead time update',
                     'John',
                     '2024-01-20 12:23:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (87, 24, 
                     'T09', 'RC3',
                     '2024-01-29',
                     '2024-03-07',
                     '2024-03-21',
                     NULL,
                     '2024-05-25',
                     '2024-01-29',
                     '2024-03-07',
                     '2024-03-21',
                     NULL,
                     '2024-05-25',
                     'Other',
                     'Temporary adjustment',
                     'David',
                     '2024-01-13 13:13:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (88, 24, 
                     'T04', 'RC1',
                     '2024-08-11',
                     '2024-08-25',
                     '2024-10-05',
                     '2024-10-31',
                     '2024-11-26',
                     '2024-08-11',
                     NULL,
                     '2024-10-05',
                     '2024-10-31',
                     NULL,
                     'Other',
                     'Temporary adjustment',
                     'Alice',
                     '2024-07-22 13:37:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (89, 25, 
                     'T08', 'RC2',
                     '2024-08-16',
                     '2024-09-18',
                     '2024-10-13',
                     '2024-11-21',
                     '2024-12-28',
                     NULL,
                     '2024-09-18',
                     '2024-10-13',
                     '2024-11-21',
                     '2024-12-28',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mike',
                     '2024-08-09 16:48:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (90, 25, 
                     'T05', 'RC3',
                     NULL,
                     '2024-07-29',
                     '2024-09-02',
                     '2024-10-04',
                     '2024-10-23',
                     '2024-06-20',
                     '2024-07-29',
                     '2024-09-04',
                     NULL,
                     '2024-10-24',
                     'Lead time',
                     'Lead time update',
                     'Mike',
                     '2024-06-06 12:22:01');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (91, 25, 
                     'T07', 'RC2',
                     '2024-11-21',
                     '2024-12-18',
                     '2024-12-26',
                     '2025-01-27',
                     '2025-02-22',
                     '2024-11-21',
                     '2024-12-18',
                     '2024-12-26',
                     NULL,
                     '2025-02-22',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Sarah',
                     '2024-10-24 15:29:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (92, 25, 
                     'T02', 'RC3',
                     '2024-10-09',
                     '2024-11-25',
                     '2024-12-30',
                     NULL,
                     '2025-02-01',
                     '2024-10-09',
                     '2024-11-25',
                     '2025-01-02',
                     '2025-01-06',
                     '2025-02-03',
                     'Schedule',
                     'Production schedule adjustment',
                     'Sarah',
                     '2024-10-02 15:47:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (93, 25, 
                     'T09', 'RC2',
                     '2024-10-11',
                     '2024-12-03',
                     '2025-01-02',
                     '2025-01-06',
                     NULL,
                     '2024-10-11',
                     NULL,
                     '2025-01-02',
                     '2025-01-06',
                     '2025-02-17',
                     'Resource',
                     'Human resource reallocation',
                     'Emma',
                     '2024-10-07 11:00:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (94, 26, 
                     'T07', 'RC2',
                     '2024-02-26',
                     '2024-03-24',
                     NULL,
                     '2024-05-14',
                     '2024-07-04',
                     '2024-02-26',
                     '2024-03-24',
                     '2024-05-08',
                     '2024-05-14',
                     '2024-07-06',
                     'Schedule',
                     'Maintenance time change',
                     'Mary',
                     '2024-02-08 14:28:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (95, 26, 
                     'T10', 'RC1',
                     '2024-12-06',
                     '2024-12-27',
                     NULL,
                     '2025-02-23',
                     '2025-03-28',
                     '2024-12-06',
                     '2024-12-27',
                     '2025-02-01',
                     '2025-02-23',
                     '2025-03-28',
                     'Inventory',
                     'Inventory forecast change',
                     'Alice',
                     '2024-11-13 17:20:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (96, 26, 
                     'T05', 'RC3',
                     '2024-08-01',
                     '2024-09-02',
                     '2024-09-30',
                     '2024-11-19',
                     '2024-11-29',
                     '2024-08-01',
                     '2024-09-02',
                     NULL,
                     '2024-11-19',
                     '2024-11-29',
                     'Resource',
                     'Human resource reallocation',
                     'David',
                     '2024-07-25 15:46:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (97, 27, 
                     'T08', 'RC3',
                     '2024-10-29',
                     '2024-11-30',
                     '2024-12-17',
                     NULL,
                     NULL,
                     '2024-10-29',
                     '2024-11-30',
                     '2024-12-17',
                     '2025-02-04',
                     NULL,
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'John',
                     '2024-10-10 17:17:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (98, 27, 
                     'T03', 'RC2',
                     '2024-06-17',
                     '2024-07-11',
                     '2024-08-13',
                     NULL,
                     NULL,
                     '2024-06-17',
                     '2024-07-11',
                     '2024-08-15',
                     '2024-10-05',
                     NULL,
                     'Lead time',
                     'Production cycle optimization',
                     'Mike',
                     '2024-06-07 13:52:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (99, 27, 
                     'T10', 'RC3',
                     '2024-07-22',
                     '2024-08-30',
                     NULL,
                     '2024-11-04',
                     '2024-12-06',
                     '2024-07-22',
                     '2024-08-30',
                     '2024-10-04',
                     '2024-11-04',
                     '2024-12-06',
                     'Cost',
                     'Expense optimization',
                     'Emma',
                     '2024-07-17 11:02:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (100, 28, 
                     'T05', 'RC2',
                     '2024-08-08',
                     NULL,
                     '2024-10-04',
                     '2024-11-12',
                     '2024-12-10',
                     '2024-08-08',
                     '2024-09-02',
                     '2024-10-04',
                     '2024-11-12',
                     '2024-12-10',
                     'Other',
                     'Minor plan update',
                     'David',
                     '2024-07-15 15:15:35');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (101, 28, 
                     'T04', 'RC1',
                     '2024-01-17',
                     '2024-02-25',
                     '2024-04-03',
                     NULL,
                     '2024-06-09',
                     '2024-01-17',
                     '2024-02-25',
                     '2024-04-03',
                     '2024-05-11',
                     '2024-06-09',
                     'Resource',
                     'Resource allocation adjustment',
                     'Sarah',
                     '2024-01-15 13:04:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (102, 28, 
                     'T08', 'RC2',
                     '2024-10-02',
                     NULL,
                     '2024-11-25',
                     '2025-01-01',
                     NULL,
                     '2024-10-02',
                     '2024-10-30',
                     '2024-11-25',
                     '2025-01-01',
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'John',
                     '2024-09-12 10:42:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (103, 28, 
                     'T01', 'RC2',
                     '2024-10-15',
                     '2024-11-10',
                     '2024-12-26',
                     '2025-01-24',
                     NULL,
                     '2024-10-15',
                     '2024-11-10',
                     '2024-12-26',
                     '2025-01-24',
                     NULL,
                     'Inventory',
                     'Safety stock update',
                     'Alice',
                     '2024-10-03 16:12:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (104, 29, 
                     'T07', 'RC1',
                     '2024-09-20',
                     '2024-10-11',
                     '2024-11-11',
                     '2024-12-06',
                     NULL,
                     NULL,
                     '2024-10-11',
                     '2024-11-15',
                     '2024-12-09',
                     '2024-12-26',
                     'Schedule',
                     'Production schedule adjustment',
                     'John',
                     '2024-08-25 12:51:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (105, 29, 
                     'T01', 'RC2',
                     '2024-12-11',
                     '2025-01-08',
                     '2025-01-31',
                     '2025-03-20',
                     NULL,
                     '2024-12-11',
                     '2025-01-08',
                     '2025-01-31',
                     '2025-03-20',
                     '2025-04-01',
                     'Cost',
                     'Expense optimization',
                     'Kate',
                     '2024-11-27 17:00:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (106, 29, 
                     'T08', 'RC3',
                     '2024-09-03',
                     '2024-10-15',
                     '2024-11-18',
                     '2024-12-04',
                     '2025-01-04',
                     '2024-09-03',
                     '2024-10-15',
                     '2024-11-21',
                     NULL,
                     '2025-01-04',
                     'Schedule',
                     'Schedule optimization',
                     'Alice',
                     '2024-08-26 12:00:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (107, 29, 
                     'T06', 'RC1',
                     '2024-06-13',
                     '2024-07-04',
                     NULL,
                     '2024-08-25',
                     '2024-10-23',
                     '2024-06-13',
                     '2024-07-04',
                     '2024-08-11',
                     '2024-08-25',
                     '2024-10-23',
                     'Inventory',
                     'Safety stock update',
                     'David',
                     '2024-05-26 15:40:26');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (108, 29, 
                     'T10', 'RC3',
                     '2024-07-17',
                     NULL,
                     '2024-09-12',
                     NULL,
                     '2024-10-29',
                     '2024-07-17',
                     '2024-07-26',
                     '2024-09-12',
                     '2024-10-08',
                     '2024-10-29',
                     'Tanks issue',
                     'Performance issue fix',
                     'Mike',
                     '2024-06-23 15:11:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (109, 30, 
                     'T07', 'RC2',
                     NULL,
                     '2024-07-04',
                     '2024-08-02',
                     NULL,
                     '2024-09-11',
                     '2024-06-12',
                     '2024-07-04',
                     '2024-08-04',
                     NULL,
                     '2024-09-11',
                     'Lead time',
                     'Production cycle optimization',
                     'David',
                     '2024-05-13 11:40:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (110, 30, 
                     'T06', 'RC1',
                     NULL,
                     '2024-12-18',
                     '2025-01-01',
                     '2025-02-07',
                     NULL,
                     NULL,
                     '2024-12-18',
                     '2025-01-01',
                     '2025-02-07',
                     '2025-02-25',
                     'Resource',
                     'Capacity adjustment',
                     'John',
                     '2024-10-23 10:12:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (111, 30, 
                     'T03', 'RC3',
                     '2024-02-06',
                     '2024-03-03',
                     '2024-03-19',
                     '2024-04-27',
                     '2024-06-15',
                     '2024-02-06',
                     '2024-03-03',
                     '2024-03-19',
                     NULL,
                     '2024-06-15',
                     'Other',
                     'Minor plan update',
                     'Kate',
                     '2024-01-17 14:18:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (112, 31, 
                     'T09', 'RC2',
                     '2024-03-12',
                     '2024-04-23',
                     NULL,
                     '2024-06-13',
                     '2024-08-02',
                     NULL,
                     '2024-04-23',
                     NULL,
                     '2024-06-13',
                     '2024-08-02',
                     'Tanks issue',
                     'Performance issue fix',
                     'Kate',
                     '2024-03-07 12:27:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (113, 31, 
                     'T05', 'RC2',
                     '2024-09-25',
                     '2024-10-21',
                     NULL,
                     '2025-01-14',
                     '2025-01-29',
                     '2024-09-25',
                     '2024-10-21',
                     NULL,
                     NULL,
                     '2025-01-29',
                     'Cost',
                     'Budget adjustment',
                     'Kate',
                     '2024-09-19 15:18:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (114, 31, 
                     'T03', 'RC3',
                     NULL,
                     '2024-05-18',
                     '2024-05-23',
                     '2024-06-20',
                     '2024-07-25',
                     NULL,
                     '2024-05-18',
                     '2024-05-23',
                     '2024-06-20',
                     NULL,
                     'Cost',
                     'Budget adjustment',
                     'David',
                     '2024-03-20 16:08:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (115, 31, 
                     'T05', 'RC1',
                     '2024-11-09',
                     NULL,
                     '2025-01-19',
                     NULL,
                     '2025-03-28',
                     '2024-11-09',
                     NULL,
                     '2025-01-19',
                     NULL,
                     '2025-03-28',
                     'Cost',
                     'Expense optimization',
                     'Alice',
                     '2024-11-07 12:23:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (116, 31, 
                     'T04', 'RC3',
                     NULL,
                     '2024-11-21',
                     '2024-12-05',
                     '2025-01-21',
                     NULL,
                     NULL,
                     '2024-11-21',
                     '2024-12-05',
                     '2025-01-21',
                     '2025-02-02',
                     'Tanks issue',
                     'Performance issue fix',
                     'Sarah',
                     '2024-09-26 11:16:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (117, 32, 
                     'T02', 'RC1',
                     '2024-05-24',
                     '2024-05-25',
                     '2024-07-23',
                     '2024-08-20',
                     '2024-09-15',
                     '2024-05-24',
                     '2024-05-30',
                     NULL,
                     '2024-08-20',
                     '2024-09-20',
                     'Schedule',
                     'Schedule optimization',
                     'Alice',
                     '2024-04-24 17:03:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (118, 32, 
                     'T05', 'RC2',
                     '2024-03-27',
                     '2024-04-30',
                     '2024-05-26',
                     '2024-06-11',
                     '2024-07-12',
                     '2024-03-27',
                     '2024-04-30',
                     '2024-05-26',
                     NULL,
                     '2024-07-12',
                     'Cost',
                     'Cost structure change',
                     'Kate',
                     '2024-03-03 14:33:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (119, 32, 
                     'T06', 'RC3',
                     '2024-08-04',
                     '2024-09-01',
                     '2024-10-13',
                     '2024-11-09',
                     '2024-12-19',
                     '2024-08-04',
                     '2024-09-01',
                     '2024-10-13',
                     '2024-11-09',
                     NULL,
                     'Cost',
                     'Expense optimization',
                     'Alice',
                     '2024-07-22 12:31:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (120, 32, 
                     'T01', 'RC3',
                     '2024-04-02',
                     NULL,
                     '2024-05-25',
                     '2024-07-14',
                     '2024-08-07',
                     '2024-04-04',
                     '2024-05-01',
                     '2024-05-25',
                     '2024-07-16',
                     '2024-08-07',
                     'Schedule',
                     'Maintenance time change',
                     'Bob',
                     '2024-03-18 17:55:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (121, 32, 
                     'T06', 'RC2',
                     NULL,
                     '2024-03-21',
                     '2024-04-28',
                     '2024-05-15',
                     '2024-06-17',
                     NULL,
                     '2024-03-21',
                     '2024-04-28',
                     '2024-05-15',
                     '2024-06-17',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'David',
                     '2024-02-01 10:26:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (122, 33, 
                     'T01', 'RC2',
                     NULL,
                     '2024-03-14',
                     '2024-04-22',
                     '2024-05-22',
                     '2024-06-22',
                     '2024-02-21',
                     '2024-03-14',
                     '2024-04-22',
                     '2024-05-25',
                     '2024-06-22',
                     'Lead time',
                     'Lead time update',
                     'Bob',
                     '2024-02-05 11:31:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (123, 33, 
                     'T03', 'RC3',
                     '2024-01-20',
                     '2024-03-04',
                     NULL,
                     NULL,
                     '2024-06-07',
                     '2024-01-20',
                     '2024-03-04',
                     '2024-03-21',
                     NULL,
                     '2024-06-07',
                     'Inventory',
                     'Stock strategy optimization',
                     'Mary',
                     '2024-01-20 17:12:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (124, 34, 
                     'T04', 'RC1',
                     '2024-08-03',
                     NULL,
                     '2024-10-10',
                     '2024-10-21',
                     '2024-11-14',
                     '2024-08-03',
                     NULL,
                     NULL,
                     '2024-10-21',
                     '2024-11-14',
                     'Other',
                     'Temporary adjustment',
                     'Alice',
                     '2024-07-12 17:51:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (125, 34, 
                     'T08', 'RC2',
                     NULL,
                     '2024-09-25',
                     '2024-10-26',
                     '2024-11-22',
                     NULL,
                     NULL,
                     '2024-09-25',
                     '2024-10-28',
                     '2024-11-22',
                     NULL,
                     'Schedule',
                     'Timeline adjustment',
                     'Mary',
                     '2024-08-01 15:37:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (126, 34, 
                     'T07', 'RC1',
                     NULL,
                     '2024-02-13',
                     '2024-03-06',
                     NULL,
                     '2024-05-13',
                     '2024-01-06',
                     '2024-02-13',
                     '2024-03-06',
                     '2024-04-26',
                     '2024-05-16',
                     'Lead time',
                     'Lead time update',
                     'Bob',
                     '2024-01-04 11:08:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (127, 35, 
                     'T08', 'RC2',
                     '2024-02-07',
                     '2024-03-15',
                     '2024-05-02',
                     '2024-05-14',
                     '2024-06-24',
                     '2024-02-07',
                     '2024-03-15',
                     '2024-05-02',
                     '2024-05-16',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'Bob',
                     '2024-02-06 09:04:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (128, 35, 
                     'T03', 'RC3',
                     NULL,
                     '2024-09-09',
                     '2024-10-13',
                     '2024-10-19',
                     '2024-12-07',
                     '2024-07-21',
                     NULL,
                     '2024-10-15',
                     '2024-10-19',
                     '2024-12-09',
                     'Lead time',
                     'Production cycle optimization',
                     'Kate',
                     '2024-07-17 09:22:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (129, 36, 
                     'T10', 'RC1',
                     '2024-03-14',
                     '2024-03-24',
                     '2024-05-01',
                     '2024-05-31',
                     '2024-06-19',
                     NULL,
                     '2024-03-24',
                     '2024-05-01',
                     '2024-05-31',
                     '2024-06-19',
                     'Tanks issue',
                     'Performance issue fix',
                     'Emma',
                     '2024-02-18 13:25:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (130, 36, 
                     'T10', 'RC3',
                     '2024-02-16',
                     '2024-03-26',
                     NULL,
                     '2024-05-10',
                     '2024-07-05',
                     NULL,
                     '2024-03-26',
                     NULL,
                     '2024-05-10',
                     '2024-07-05',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mary',
                     '2024-02-07 12:09:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (131, 36, 
                     'T05', 'RC1',
                     '2024-03-10',
                     '2024-04-14',
                     '2024-06-03',
                     NULL,
                     NULL,
                     '2024-03-10',
                     '2024-04-14',
                     '2024-06-03',
                     NULL,
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'Sarah',
                     '2024-03-05 16:24:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (132, 36, 
                     'T07', 'RC2',
                     '2024-11-18',
                     '2025-01-08',
                     NULL,
                     '2025-02-11',
                     '2025-03-24',
                     '2024-11-18',
                     NULL,
                     '2025-01-25',
                     '2025-02-11',
                     '2025-03-24',
                     'Tanks issue',
                     'Performance issue fix',
                     'Bob',
                     '2024-11-12 15:09:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (133, 37, 
                     'T05', 'RC3',
                     '2024-11-07',
                     '2024-12-13',
                     NULL,
                     NULL,
                     '2025-03-08',
                     '2024-11-07',
                     '2024-12-13',
                     NULL,
                     NULL,
                     '2025-03-08',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Emma',
                     '2024-11-07 13:10:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (134, 37, 
                     'T06', 'RC1',
                     NULL,
                     '2024-04-05',
                     '2024-05-04',
                     '2024-06-02',
                     NULL,
                     NULL,
                     '2024-04-05',
                     '2024-05-04',
                     '2024-06-02',
                     '2024-06-18',
                     'Cost',
                     'Expense optimization',
                     'Mike',
                     '2024-02-08 15:30:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (135, 37, 
                     'T09', 'RC2',
                     '2024-11-19',
                     '2024-11-26',
                     '2025-01-19',
                     NULL,
                     '2025-03-22',
                     '2024-11-19',
                     '2024-11-26',
                     '2025-01-24',
                     '2025-02-19',
                     '2025-03-22',
                     'Schedule',
                     'Maintenance time change',
                     'Mary',
                     '2024-10-23 15:35:23');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (136, 38, 
                     'T05', 'RC3',
                     '2024-11-10',
                     '2024-12-18',
                     '2025-01-21',
                     NULL,
                     '2025-03-04',
                     '2024-11-10',
                     '2024-12-18',
                     '2025-01-21',
                     '2025-01-26',
                     NULL,
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Tom',
                     '2024-10-27 14:45:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (137, 38, 
                     'T07', 'RC2',
                     '2024-11-03',
                     '2024-12-09',
                     '2025-01-14',
                     '2025-02-14',
                     '2025-02-24',
                     '2024-11-03',
                     '2024-12-11',
                     '2025-01-14',
                     '2025-02-14',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'Mary',
                     '2024-10-23 13:58:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (138, 38, 
                     'T04', 'RC2',
                     '2024-07-22',
                     '2024-08-15',
                     '2024-09-30',
                     '2024-10-31',
                     NULL,
                     '2024-07-22',
                     NULL,
                     '2024-09-30',
                     '2024-10-31',
                     NULL,
                     'Other',
                     'Minor plan update',
                     'Sarah',
                     '2024-07-12 14:39:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (139, 38, 
                     'T02', 'RC3',
                     '2024-04-28',
                     '2024-06-06',
                     '2024-06-19',
                     '2024-07-22',
                     '2024-09-05',
                     '2024-04-28',
                     '2024-06-06',
                     NULL,
                     '2024-07-22',
                     '2024-09-05',
                     'Inventory',
                     'Inventory level adjustment',
                     'Tom',
                     '2024-04-08 11:55:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (140, 39, 
                     'T02', 'RC2',
                     '2024-09-28',
                     '2024-10-30',
                     '2024-11-14',
                     NULL,
                     '2025-01-24',
                     '2024-09-28',
                     '2024-10-30',
                     '2024-11-14',
                     '2024-12-18',
                     '2025-01-24',
                     'Resource',
                     'Capacity adjustment',
                     'Alice',
                     '2024-09-13 15:37:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (141, 39, 
                     'T01', 'RC3',
                     '2024-12-03',
                     '2024-12-26',
                     '2025-02-18',
                     '2025-02-24',
                     '2025-04-18',
                     NULL,
                     '2024-12-26',
                     '2025-02-18',
                     '2025-02-24',
                     '2025-04-18',
                     'Cost',
                     'Cost structure change',
                     'David',
                     '2024-11-25 14:12:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (142, 39, 
                     'T01', 'RC3',
                     '2024-08-15',
                     '2024-09-28',
                     '2024-10-12',
                     NULL,
                     '2024-12-17',
                     NULL,
                     '2024-10-03',
                     '2024-10-12',
                     NULL,
                     '2024-12-21',
                     'Schedule',
                     'Schedule optimization',
                     'Alice',
                     '2024-08-06 09:35:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (143, 40, 
                     'T10', 'RC1',
                     '2024-06-14',
                     '2024-08-08',
                     '2024-08-29',
                     '2024-09-29',
                     '2024-10-19',
                     NULL,
                     '2024-08-08',
                     '2024-09-03',
                     '2024-10-02',
                     '2024-10-19',
                     'Schedule',
                     'Schedule optimization',
                     'Tom',
                     '2024-06-11 14:12:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (144, 40, 
                     'T05', 'RC2',
                     '2024-02-11',
                     NULL,
                     '2024-05-06',
                     '2024-05-14',
                     '2024-06-06',
                     NULL,
                     NULL,
                     '2024-05-07',
                     '2024-05-14',
                     '2024-06-06',
                     'Lead time',
                     'Delivery time adjustment',
                     'Emma',
                     '2024-02-06 12:35:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (145, 40, 
                     'T05', 'RC2',
                     '2024-01-10',
                     NULL,
                     '2024-03-17',
                     '2024-05-01',
                     '2024-05-19',
                     '2024-01-10',
                     '2024-02-22',
                     '2024-03-17',
                     '2024-05-01',
                     '2024-05-19',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Bob',
                     '2024-01-04 14:01:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (146, 41, 
                     'T03', 'RC2',
                     '2024-04-05',
                     '2024-04-11',
                     '2024-05-15',
                     '2024-06-16',
                     NULL,
                     '2024-04-05',
                     NULL,
                     '2024-05-15',
                     '2024-06-16',
                     NULL,
                     'Tanks issue',
                     'Performance issue fix',
                     'Kate',
                     '2024-03-09 14:21:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (147, 41, 
                     'T05', 'RC3',
                     '2024-10-24',
                     '2024-11-04',
                     '2024-12-13',
                     '2025-01-04',
                     NULL,
                     '2024-10-26',
                     '2024-11-05',
                     '2024-12-13',
                     '2025-01-04',
                     NULL,
                     'Lead time',
                     'Delivery time adjustment',
                     'Tom',
                     '2024-10-04 17:39:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (148, 41, 
                     'T09', 'RC2',
                     '2024-02-22',
                     '2024-03-17',
                     '2024-04-20',
                     '2024-05-24',
                     '2024-06-07',
                     '2024-02-22',
                     NULL,
                     '2024-04-20',
                     '2024-05-24',
                     '2024-06-07',
                     'Cost',
                     'Cost control optimization',
                     'Mary',
                     '2024-02-01 17:25:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (149, 41, 
                     'T01', 'RC2',
                     '2024-09-18',
                     '2024-11-14',
                     '2024-11-21',
                     '2025-01-04',
                     '2025-01-21',
                     '2024-09-18',
                     '2024-11-14',
                     '2024-11-21',
                     '2025-01-04',
                     NULL,
                     'Other',
                     'Special requirement change',
                     'Alice',
                     '2024-09-17 16:16:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (150, 41, 
                     'T01', 'RC2',
                     NULL,
                     '2024-06-14',
                     '2024-07-12',
                     '2024-09-03',
                     '2024-09-09',
                     '2024-05-12',
                     '2024-06-16',
                     '2024-07-12',
                     '2024-09-03',
                     '2024-09-09',
                     'Lead time',
                     'Process time change',
                     'Mary',
                     '2024-05-06 14:00:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (151, 42, 
                     'T05', 'RC3',
                     NULL,
                     '2024-07-04',
                     '2024-07-14',
                     '2024-09-01',
                     '2024-09-22',
                     '2024-05-18',
                     '2024-07-04',
                     '2024-07-14',
                     '2024-09-01',
                     '2024-09-22',
                     'Other',
                     'Temporary adjustment',
                     'Bob',
                     '2024-05-11 13:31:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (152, 42, 
                     'T01', 'RC1',
                     '2024-05-15',
                     NULL,
                     '2024-07-03',
                     '2024-08-04',
                     '2024-09-09',
                     '2024-05-15',
                     '2024-06-02',
                     '2024-07-08',
                     '2024-08-08',
                     '2024-09-09',
                     'Schedule',
                     'Schedule optimization',
                     'John',
                     '2024-04-20 09:17:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (153, 42, 
                     'T03', 'RC3',
                     '2024-02-21',
                     '2024-03-22',
                     NULL,
                     '2024-06-05',
                     '2024-06-26',
                     '2024-02-21',
                     '2024-03-22',
                     NULL,
                     '2024-06-05',
                     '2024-06-26',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Bob',
                     '2024-02-12 17:43:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (154, 42, 
                     'T01', 'RC1',
                     '2024-11-27',
                     '2025-01-01',
                     '2025-02-05',
                     '2025-02-28',
                     '2025-03-15',
                     NULL,
                     '2025-01-01',
                     '2025-02-05',
                     '2025-03-03',
                     '2025-03-20',
                     'Schedule',
                     'Maintenance time change',
                     'Sarah',
                     '2024-11-12 09:40:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (155, 43, 
                     'T05', 'RC3',
                     '2024-03-12',
                     NULL,
                     '2024-05-15',
                     NULL,
                     '2024-07-09',
                     '2024-03-12',
                     '2024-04-28',
                     '2024-05-15',
                     '2024-06-07',
                     '2024-07-09',
                     'Resource',
                     'Human resource reallocation',
                     'Kate',
                     '2024-03-07 13:43:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (156, 43, 
                     'T06', 'RC3',
                     '2024-09-18',
                     '2024-11-01',
                     '2024-11-16',
                     '2024-12-31',
                     '2025-01-18',
                     NULL,
                     NULL,
                     '2024-11-16',
                     '2025-01-04',
                     '2025-01-18',
                     'Schedule',
                     'Maintenance time change',
                     'Tom',
                     '2024-09-15 11:00:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (157, 43, 
                     'T01', 'RC3',
                     '2024-05-25',
                     NULL,
                     '2024-07-01',
                     '2024-08-01',
                     '2024-08-26',
                     '2024-05-25',
                     NULL,
                     '2024-07-01',
                     '2024-08-01',
                     '2024-08-26',
                     'Inventory',
                     'Inventory forecast change',
                     'Mary',
                     '2024-04-27 10:02:23');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (158, 44, 
                     'T01', 'RC1',
                     '2024-04-17',
                     '2024-05-14',
                     '2024-05-20',
                     '2024-06-26',
                     NULL,
                     '2024-04-17',
                     '2024-05-14',
                     '2024-05-20',
                     NULL,
                     '2024-08-07',
                     'Cost',
                     'Budget adjustment',
                     'Tom',
                     '2024-03-19 13:44:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (159, 44, 
                     'T07', 'RC3',
                     NULL,
                     '2024-09-12',
                     '2024-10-12',
                     '2024-10-18',
                     '2024-12-11',
                     '2024-07-19',
                     '2024-09-12',
                     NULL,
                     '2024-10-18',
                     '2024-12-11',
                     'Inventory',
                     'Stock strategy optimization',
                     'David',
                     '2024-07-19 15:18:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (160, 44, 
                     'T09', 'RC2',
                     '2024-05-01',
                     '2024-06-12',
                     '2024-07-09',
                     '2024-07-20',
                     NULL,
                     '2024-05-01',
                     '2024-06-12',
                     '2024-07-09',
                     '2024-07-20',
                     NULL,
                     'Other',
                     'Special requirement change',
                     'Kate',
                     '2024-04-20 12:53:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (161, 45, 
                     'T09', 'RC1',
                     '2024-02-14',
                     NULL,
                     '2024-04-08',
                     '2024-04-20',
                     '2024-05-21',
                     '2024-02-14',
                     NULL,
                     '2024-04-10',
                     '2024-04-21',
                     '2024-05-21',
                     'Lead time',
                     'Lead time update',
                     'Kate',
                     '2024-01-19 15:59:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (162, 45, 
                     'T10', 'RC2',
                     '2024-05-19',
                     '2024-06-16',
                     '2024-07-12',
                     NULL,
                     '2024-09-03',
                     '2024-05-19',
                     '2024-06-16',
                     '2024-07-12',
                     '2024-08-06',
                     '2024-09-03',
                     'Cost',
                     'Expense optimization',
                     'Mary',
                     '2024-04-21 13:28:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (163, 45, 
                     'T03', 'RC2',
                     '2024-06-18',
                     '2024-07-12',
                     '2024-08-15',
                     '2024-09-04',
                     '2024-10-12',
                     '2024-06-22',
                     '2024-07-15',
                     NULL,
                     '2024-09-04',
                     '2024-10-12',
                     'Schedule',
                     'Timeline adjustment',
                     'Kate',
                     '2024-05-23 11:20:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (164, 45, 
                     'T10', 'RC2',
                     '2024-09-25',
                     NULL,
                     '2024-12-01',
                     '2024-12-08',
                     '2025-01-10',
                     '2024-09-25',
                     '2024-10-09',
                     NULL,
                     '2024-12-12',
                     '2025-01-15',
                     'Schedule',
                     'Timeline adjustment',
                     'Emma',
                     '2024-09-08 10:00:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (165, 46, 
                     'T08', 'RC2',
                     '2024-10-14',
                     NULL,
                     '2024-11-29',
                     NULL,
                     '2025-02-08',
                     '2024-10-14',
                     '2024-10-19',
                     '2024-11-29',
                     '2024-12-30',
                     '2025-02-08',
                     'Resource',
                     'Equipment resource optimization',
                     'Bob',
                     '2024-09-16 14:50:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (166, 46, 
                     'T07', 'RC1',
                     '2024-04-09',
                     '2024-04-24',
                     '2024-05-18',
                     '2024-06-30',
                     NULL,
                     '2024-04-09',
                     '2024-04-24',
                     '2024-05-18',
                     '2024-06-30',
                     NULL,
                     'Other',
                     'Temporary adjustment',
                     'Sarah',
                     '2024-03-14 15:23:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (167, 46, 
                     'T06', 'RC3',
                     '2024-01-11',
                     '2024-02-14',
                     '2024-03-12',
                     '2024-04-15',
                     '2024-05-07',
                     '2024-01-11',
                     '2024-02-14',
                     '2024-03-12',
                     '2024-04-18',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'Mary',
                     '2024-01-01 12:57:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (168, 46, 
                     'T05', 'RC1',
                     '2024-02-13',
                     NULL,
                     '2024-03-30',
                     '2024-04-25',
                     '2024-06-04',
                     '2024-02-13',
                     NULL,
                     '2024-03-30',
                     '2024-04-25',
                     '2024-06-04',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Bob',
                     '2024-01-23 12:46:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (169, 46, 
                     'T09', 'RC2',
                     '2024-08-26',
                     '2024-09-24',
                     NULL,
                     '2024-11-25',
                     '2024-12-27',
                     '2024-08-26',
                     NULL,
                     '2024-10-07',
                     '2024-11-25',
                     '2024-12-31',
                     'Schedule',
                     'Timeline adjustment',
                     'Bob',
                     '2024-08-04 14:08:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (170, 47, 
                     'T07', 'RC3',
                     '2024-10-06',
                     '2024-11-08',
                     '2025-01-02',
                     '2025-02-02',
                     '2025-02-11',
                     '2024-10-06',
                     NULL,
                     NULL,
                     '2025-02-02',
                     '2025-02-11',
                     'Cost',
                     'Cost structure change',
                     'Alice',
                     '2024-10-06 15:16:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (171, 47, 
                     'T04', 'RC3',
                     '2024-05-30',
                     '2024-06-16',
                     '2024-07-15',
                     '2024-09-02',
                     '2024-09-28',
                     NULL,
                     NULL,
                     '2024-07-15',
                     '2024-09-02',
                     '2024-09-28',
                     'Cost',
                     'Expense optimization',
                     'David',
                     '2024-05-09 16:15:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (172, 47, 
                     'T08', 'RC1',
                     NULL,
                     '2024-08-24',
                     '2024-10-04',
                     '2024-11-02',
                     '2024-11-21',
                     '2024-07-08',
                     '2024-08-24',
                     '2024-10-04',
                     '2024-11-02',
                     '2024-11-21',
                     'Inventory',
                     'Stock strategy optimization',
                     'Sarah',
                     '2024-07-07 14:43:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (173, 47, 
                     'T03', 'RC2',
                     '2024-10-25',
                     NULL,
                     NULL,
                     '2025-02-06',
                     '2025-03-05',
                     '2024-10-25',
                     '2024-12-12',
                     NULL,
                     '2025-02-06',
                     '2025-03-05',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'John',
                     '2024-10-19 11:04:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (174, 48, 
                     'T01', 'RC2',
                     '2024-02-17',
                     '2024-03-24',
                     NULL,
                     '2024-06-08',
                     '2024-07-08',
                     '2024-02-17',
                     '2024-03-24',
                     '2024-04-22',
                     NULL,
                     '2024-07-08',
                     'Cost',
                     'Budget adjustment',
                     'Sarah',
                     '2024-02-10 17:19:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (175, 48, 
                     'T03', 'RC2',
                     '2024-11-26',
                     '2024-12-25',
                     NULL,
                     '2025-02-24',
                     NULL,
                     '2024-11-26',
                     '2024-12-25',
                     '2025-01-25',
                     '2025-02-24',
                     '2025-04-17',
                     'Inventory',
                     'Inventory forecast change',
                     'Bob',
                     '2024-11-23 15:57:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (176, 48, 
                     'T01', 'RC3',
                     '2024-11-14',
                     '2024-12-12',
                     NULL,
                     '2025-01-20',
                     '2025-03-07',
                     '2024-11-14',
                     '2024-12-12',
                     '2025-01-16',
                     '2025-01-20',
                     '2025-03-07',
                     'Resource',
                     'Human resource reallocation',
                     'Bob',
                     '2024-10-18 17:58:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (177, 48, 
                     'T03', 'RC2',
                     '2024-01-18',
                     '2024-02-25',
                     '2024-04-01',
                     NULL,
                     '2024-06-07',
                     '2024-01-18',
                     '2024-02-25',
                     '2024-04-01',
                     NULL,
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'Mike',
                     '2024-01-18 12:21:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (178, 48, 
                     'T10', 'RC3',
                     '2024-07-05',
                     NULL,
                     '2024-09-27',
                     '2024-10-08',
                     '2024-11-20',
                     '2024-07-05',
                     '2024-08-06',
                     '2024-09-27',
                     '2024-10-08',
                     NULL,
                     'Inventory',
                     'Safety stock update',
                     'Alice',
                     '2024-07-04 17:42:06');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (179, 49, 
                     'T06', 'RC2',
                     '2024-05-26',
                     '2024-06-15',
                     '2024-08-03',
                     '2024-08-11',
                     '2024-09-08',
                     NULL,
                     '2024-06-15',
                     '2024-08-06',
                     '2024-08-11',
                     '2024-09-08',
                     'Schedule',
                     'Production schedule adjustment',
                     'David',
                     '2024-05-07 15:07:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (180, 49, 
                     'T08', 'RC3',
                     '2024-08-21',
                     '2024-10-02',
                     NULL,
                     '2024-11-30',
                     '2024-12-14',
                     '2024-08-21',
                     '2024-10-02',
                     NULL,
                     '2024-11-30',
                     '2024-12-14',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'David',
                     '2024-08-04 11:28:26');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (181, 49, 
                     'T07', 'RC1',
                     '2024-07-31',
                     '2024-09-08',
                     '2024-10-11',
                     '2024-11-12',
                     '2024-12-01',
                     NULL,
                     '2024-09-08',
                     '2024-10-11',
                     '2024-11-12',
                     '2024-12-01',
                     'Cost',
                     'Cost structure change',
                     'David',
                     '2024-07-18 17:30:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (182, 50, 
                     'T04', 'RC2',
                     '2024-08-03',
                     NULL,
                     '2024-09-28',
                     '2024-10-17',
                     '2024-11-10',
                     '2024-08-03',
                     NULL,
                     '2024-09-28',
                     '2024-10-21',
                     '2024-11-10',
                     'Schedule',
                     'Timeline adjustment',
                     'Mike',
                     '2024-07-10 13:35:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (183, 50, 
                     'T05', 'RC1',
                     '2024-10-09',
                     '2024-10-31',
                     NULL,
                     '2024-12-31',
                     '2025-01-27',
                     '2024-10-09',
                     NULL,
                     '2024-11-21',
                     '2024-12-31',
                     '2025-01-27',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Emma',
                     '2024-09-19 16:39:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (184, 50, 
                     'T07', 'RC2',
                     '2024-04-08',
                     NULL,
                     '2024-07-05',
                     '2024-08-01',
                     '2024-08-19',
                     '2024-04-08',
                     '2024-06-01',
                     '2024-07-05',
                     '2024-08-01',
                     '2024-08-19',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Alice',
                     '2024-04-07 10:30:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (185, 50, 
                     'T04', 'RC1',
                     '2024-06-07',
                     '2024-07-02',
                     '2024-08-17',
                     '2024-09-20',
                     '2024-10-01',
                     '2024-06-07',
                     NULL,
                     '2024-08-17',
                     '2024-09-20',
                     NULL,
                     'Other',
                     'Temporary adjustment',
                     'Mike',
                     '2024-05-23 17:40:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (186, 51, 
                     'T01', 'RC1',
                     '2024-05-04',
                     '2024-05-25',
                     '2024-06-18',
                     '2024-08-02',
                     '2024-08-20',
                     '2024-05-04',
                     '2024-05-25',
                     NULL,
                     '2024-08-05',
                     '2024-08-20',
                     'Lead time',
                     'Process time change',
                     'Tom',
                     '2024-04-15 09:46:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (187, 51, 
                     'T10', 'RC2',
                     '2024-02-11',
                     '2024-03-04',
                     '2024-04-01',
                     '2024-05-16',
                     '2024-05-21',
                     NULL,
                     '2024-03-04',
                     '2024-04-01',
                     '2024-05-16',
                     '2024-05-21',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Alice',
                     '2024-01-17 17:34:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (188, 51, 
                     'T09', 'RC2',
                     '2024-03-08',
                     '2024-05-02',
                     NULL,
                     '2024-06-02',
                     '2024-07-30',
                     '2024-03-08',
                     '2024-05-02',
                     '2024-05-03',
                     '2024-06-02',
                     '2024-07-30',
                     'Other',
                     'Temporary adjustment',
                     'Mike',
                     '2024-03-03 13:10:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (189, 52, 
                     'T02', 'RC1',
                     '2024-04-04',
                     '2024-04-30',
                     '2024-06-14',
                     '2024-07-15',
                     '2024-08-12',
                     '2024-04-07',
                     '2024-04-30',
                     '2024-06-17',
                     '2024-07-15',
                     NULL,
                     'Lead time',
                     'Delivery time adjustment',
                     'Tom',
                     '2024-03-17 14:28:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (190, 52, 
                     'T06', 'RC1',
                     '2024-02-03',
                     '2024-02-11',
                     '2024-03-31',
                     '2024-04-10',
                     NULL,
                     '2024-02-07',
                     '2024-02-11',
                     '2024-03-31',
                     '2024-04-10',
                     '2024-05-29',
                     'Schedule',
                     'Maintenance time change',
                     'Tom',
                     '2024-01-06 11:50:23');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (191, 53, 
                     'T01', 'RC1',
                     '2024-10-15',
                     '2024-11-28',
                     '2024-12-18',
                     '2025-01-28',
                     '2025-02-22',
                     NULL,
                     '2024-11-28',
                     '2024-12-23',
                     '2025-01-28',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'David',
                     '2024-10-09 13:33:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (192, 53, 
                     'T02', 'RC2',
                     '2024-08-20',
                     '2024-09-04',
                     '2024-10-13',
                     NULL,
                     NULL,
                     '2024-08-21',
                     '2024-09-04',
                     '2024-10-13',
                     '2024-11-12',
                     '2024-12-16',
                     'Lead time',
                     'Delivery time adjustment',
                     'Sarah',
                     '2024-08-01 12:06:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (193, 53, 
                     'T03', 'RC3',
                     '2024-01-31',
                     '2024-03-15',
                     '2024-03-27',
                     '2024-04-26',
                     '2024-06-03',
                     '2024-01-31',
                     '2024-03-15',
                     NULL,
                     NULL,
                     '2024-06-03',
                     'Inventory',
                     'Safety stock update',
                     'Mary',
                     '2024-01-24 11:02:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (194, 53, 
                     'T09', 'RC3',
                     NULL,
                     '2024-12-02',
                     '2024-12-23',
                     '2025-02-10',
                     '2025-02-27',
                     '2024-11-02',
                     '2024-12-04',
                     '2024-12-23',
                     '2025-02-10',
                     '2025-02-27',
                     'Schedule',
                     'Schedule optimization',
                     'Mike',
                     '2024-10-13 13:07:17');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (195, 54, 
                     'T01', 'RC3',
                     NULL,
                     '2024-06-27',
                     '2024-07-27',
                     '2024-09-22',
                     '2024-10-15',
                     NULL,
                     '2024-06-27',
                     '2024-07-27',
                     '2024-09-22',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'Tom',
                     '2024-05-25 15:27:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (196, 54, 
                     'T09', 'RC1',
                     '2024-12-14',
                     '2025-01-21',
                     '2025-01-31',
                     NULL,
                     '2025-04-08',
                     NULL,
                     '2025-01-22',
                     '2025-02-03',
                     '2025-02-24',
                     '2025-04-08',
                     'Lead time',
                     'Production cycle optimization',
                     'Emma',
                     '2024-11-24 11:24:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (197, 54, 
                     'T05', 'RC3',
                     '2024-02-08',
                     '2024-03-22',
                     '2024-04-12',
                     '2024-04-28',
                     '2024-05-25',
                     '2024-02-08',
                     NULL,
                     '2024-04-12',
                     '2024-04-29',
                     '2024-05-27',
                     'Lead time',
                     'Delivery time adjustment',
                     'Bob',
                     '2024-01-22 16:03:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (198, 54, 
                     'T07', 'RC2',
                     NULL,
                     '2024-03-02',
                     '2024-03-28',
                     NULL,
                     '2024-05-11',
                     NULL,
                     '2024-03-02',
                     '2024-03-28',
                     '2024-04-08',
                     '2024-05-11',
                     'Inventory',
                     'Inventory forecast change',
                     'Mike',
                     '2024-01-02 16:17:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (199, 55, 
                     'T06', 'RC2',
                     '2024-02-06',
                     '2024-03-01',
                     NULL,
                     '2024-05-05',
                     '2024-05-17',
                     '2024-02-06',
                     '2024-03-01',
                     '2024-03-13',
                     '2024-05-05',
                     '2024-05-17',
                     'Resource',
                     'Human resource reallocation',
                     'Sarah',
                     '2024-01-10 10:43:35');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (200, 55, 
                     'T06', 'RC2',
                     '2024-02-07',
                     '2024-02-23',
                     '2024-03-29',
                     '2024-05-09',
                     '2024-06-11',
                     NULL,
                     NULL,
                     '2024-03-29',
                     '2024-05-09',
                     '2024-06-11',
                     'Tanks issue',
                     'Performance issue fix',
                     'Emma',
                     '2024-01-18 13:27:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (201, 55, 
                     'T09', 'RC1',
                     NULL,
                     '2024-06-25',
                     '2024-08-12',
                     NULL,
                     '2024-10-11',
                     NULL,
                     '2024-06-25',
                     '2024-08-12',
                     '2024-09-03',
                     '2024-10-11',
                     'Inventory',
                     'Inventory forecast change',
                     'Mary',
                     '2024-05-20 11:40:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (202, 56, 
                     'T04', 'RC3',
                     '2024-09-06',
                     '2024-09-11',
                     '2024-10-10',
                     NULL,
                     '2024-12-16',
                     '2024-09-11',
                     '2024-09-11',
                     '2024-10-10',
                     '2024-11-17',
                     '2024-12-16',
                     'Schedule',
                     'Production schedule adjustment',
                     'Tom',
                     '2024-08-07 15:47:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (203, 56, 
                     'T10', 'RC1',
                     '2024-09-01',
                     '2024-10-15',
                     '2024-11-24',
                     NULL,
                     '2025-01-02',
                     '2024-09-01',
                     '2024-10-15',
                     NULL,
                     '2024-12-16',
                     '2025-01-02',
                     'Other',
                     'Other optimization',
                     'Mary',
                     '2024-09-01 11:34:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (204, 57, 
                     'T03', 'RC3',
                     '2024-03-19',
                     '2024-04-13',
                     '2024-04-25',
                     '2024-06-09',
                     '2024-06-30',
                     '2024-03-19',
                     '2024-04-13',
                     '2024-04-28',
                     NULL,
                     '2024-06-30',
                     'Schedule',
                     'Production schedule adjustment',
                     'Sarah',
                     '2024-02-18 09:39:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (205, 57, 
                     'T02', 'RC1',
                     '2024-07-11',
                     NULL,
                     '2024-09-03',
                     '2024-09-28',
                     '2024-11-01',
                     '2024-07-11',
                     NULL,
                     '2024-09-03',
                     '2024-09-28',
                     '2024-11-01',
                     'Resource',
                     'Human resource reallocation',
                     'Mike',
                     '2024-06-25 11:11:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (206, 57, 
                     'T04', 'RC2',
                     '2024-06-30',
                     '2024-08-23',
                     NULL,
                     '2024-10-02',
                     '2024-11-18',
                     '2024-06-30',
                     '2024-08-23',
                     NULL,
                     '2024-10-02',
                     '2024-11-18',
                     'Inventory',
                     'Safety stock update',
                     'Bob',
                     '2024-06-26 15:20:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (207, 57, 
                     'T02', 'RC2',
                     '2024-07-22',
                     '2024-08-23',
                     '2024-09-04',
                     '2024-10-16',
                     NULL,
                     '2024-07-27',
                     '2024-08-25',
                     '2024-09-04',
                     '2024-10-16',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'Sarah',
                     '2024-07-02 11:52:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (208, 57, 
                     'T09', 'RC2',
                     '2024-05-12',
                     '2024-06-19',
                     '2024-07-10',
                     '2024-07-29',
                     '2024-09-10',
                     NULL,
                     NULL,
                     '2024-07-10',
                     '2024-08-01',
                     '2024-09-12',
                     'Lead time',
                     'Production cycle optimization',
                     'Tom',
                     '2024-04-24 09:45:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (209, 58, 
                     'T09', 'RC1',
                     '2024-07-07',
                     NULL,
                     '2024-09-10',
                     '2024-10-12',
                     '2024-11-10',
                     '2024-07-07',
                     '2024-08-08',
                     '2024-09-10',
                     '2024-10-12',
                     '2024-11-10',
                     'Inventory',
                     'Safety stock update',
                     'Mary',
                     '2024-06-21 15:39:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (210, 58, 
                     'T04', 'RC2',
                     '2024-08-20',
                     '2024-09-11',
                     '2024-10-08',
                     NULL,
                     '2024-11-23',
                     '2024-08-20',
                     NULL,
                     '2024-10-08',
                     NULL,
                     '2024-11-23',
                     'Other',
                     'Special requirement change',
                     'Tom',
                     '2024-07-22 13:06:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (211, 58, 
                     'T04', 'RC2',
                     '2024-02-14',
                     '2024-03-07',
                     '2024-04-03',
                     '2024-05-19',
                     '2024-05-29',
                     NULL,
                     '2024-03-07',
                     '2024-04-03',
                     NULL,
                     '2024-05-29',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'John',
                     '2024-01-22 16:07:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (212, 58, 
                     'T09', 'RC2',
                     '2024-04-29',
                     NULL,
                     '2024-07-18',
                     '2024-08-12',
                     '2024-09-03',
                     '2024-04-29',
                     '2024-06-11',
                     '2024-07-18',
                     NULL,
                     '2024-09-03',
                     'Resource',
                     'Human resource reallocation',
                     'Emma',
                     '2024-04-24 13:10:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (213, 59, 
                     'T08', 'RC2',
                     '2024-06-08',
                     '2024-07-29',
                     '2024-08-30',
                     NULL,
                     '2024-10-27',
                     '2024-06-08',
                     NULL,
                     '2024-08-30',
                     '2024-09-23',
                     '2024-10-27',
                     'Resource',
                     'Resource allocation adjustment',
                     'Mike',
                     '2024-06-06 13:08:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (214, 59, 
                     'T02', 'RC1',
                     '2024-09-06',
                     '2024-10-09',
                     '2024-11-13',
                     '2024-12-05',
                     '2024-12-24',
                     NULL,
                     '2024-10-09',
                     '2024-11-13',
                     '2024-12-05',
                     '2024-12-24',
                     'Cost',
                     'Expense optimization',
                     'Sarah',
                     '2024-08-19 12:41:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (215, 59, 
                     'T02', 'RC2',
                     '2024-03-12',
                     '2024-04-16',
                     '2024-05-29',
                     NULL,
                     '2024-07-10',
                     '2024-03-12',
                     '2024-04-16',
                     '2024-05-29',
                     NULL,
                     '2024-07-10',
                     'Resource',
                     'Capacity adjustment',
                     'Kate',
                     '2024-03-01 12:04:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (216, 59, 
                     'T07', 'RC3',
                     '2024-12-03',
                     '2025-01-03',
                     '2025-01-27',
                     '2025-02-25',
                     '2025-03-17',
                     '2024-12-03',
                     '2025-01-03',
                     '2025-01-27',
                     NULL,
                     NULL,
                     'Resource',
                     'Human resource reallocation',
                     'Kate',
                     '2024-11-06 17:02:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (217, 59, 
                     'T07', 'RC2',
                     '2024-04-24',
                     '2024-05-05',
                     '2024-05-25',
                     '2024-06-25',
                     NULL,
                     '2024-04-24',
                     '2024-05-05',
                     '2024-05-25',
                     NULL,
                     NULL,
                     'Tanks issue',
                     'Equipment maintenance required',
                     'John',
                     '2024-03-25 17:06:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (218, 60, 
                     'T01', 'RC1',
                     '2024-03-24',
                     '2024-04-23',
                     '2024-06-03',
                     '2024-06-11',
                     '2024-07-31',
                     '2024-03-24',
                     '2024-04-23',
                     '2024-06-03',
                     NULL,
                     '2024-07-31',
                     'Resource',
                     'Capacity adjustment',
                     'Sarah',
                     '2024-03-08 16:00:06');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (219, 60, 
                     'T04', 'RC3',
                     '2024-11-09',
                     NULL,
                     '2025-01-06',
                     '2025-01-19',
                     '2025-03-12',
                     '2024-11-09',
                     NULL,
                     NULL,
                     '2025-01-19',
                     '2025-03-12',
                     'Inventory',
                     'Safety stock update',
                     'Bob',
                     '2024-10-16 14:53:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (220, 60, 
                     'T10', 'RC1',
                     '2024-08-02',
                     '2024-09-13',
                     '2024-10-26',
                     '2024-11-05',
                     '2024-12-06',
                     NULL,
                     '2024-09-13',
                     '2024-10-29',
                     '2024-11-06',
                     '2024-12-06',
                     'Lead time',
                     'Lead time update',
                     'Tom',
                     '2024-07-28 14:18:12');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (221, 60, 
                     'T01', 'RC2',
                     '2024-08-10',
                     '2024-08-30',
                     NULL,
                     '2024-10-15',
                     NULL,
                     '2024-08-10',
                     '2024-08-30',
                     '2024-10-01',
                     '2024-10-15',
                     '2024-11-30',
                     'Resource',
                     'Equipment resource optimization',
                     'Bob',
                     '2024-07-13 11:16:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (222, 61, 
                     'T08', 'RC3',
                     '2024-08-07',
                     '2024-08-29',
                     NULL,
                     '2024-11-22',
                     '2024-12-21',
                     '2024-08-07',
                     '2024-08-29',
                     '2024-10-02',
                     '2024-11-22',
                     '2024-12-21',
                     'Cost',
                     'Budget adjustment',
                     'Sarah',
                     '2024-07-27 09:10:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (223, 61, 
                     'T06', 'RC1',
                     '2024-09-21',
                     NULL,
                     '2024-11-26',
                     '2025-01-05',
                     '2025-01-09',
                     '2024-09-21',
                     NULL,
                     '2024-11-26',
                     '2025-01-05',
                     '2025-01-09',
                     'Inventory',
                     'Stock strategy optimization',
                     'Kate',
                     '2024-09-10 12:01:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (224, 61, 
                     'T08', 'RC3',
                     NULL,
                     '2024-04-28',
                     '2024-06-07',
                     '2024-06-28',
                     '2024-07-28',
                     '2024-04-15',
                     '2024-04-30',
                     NULL,
                     '2024-06-28',
                     '2024-07-28',
                     'Schedule',
                     'Maintenance time change',
                     'Alice',
                     '2024-03-27 17:27:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (225, 61, 
                     'T09', 'RC3',
                     '2024-08-16',
                     '2024-08-28',
                     '2024-10-08',
                     '2024-11-08',
                     '2024-12-17',
                     '2024-08-16',
                     '2024-08-28',
                     '2024-10-08',
                     '2024-11-08',
                     NULL,
                     'Cost',
                     'Budget adjustment',
                     'Emma',
                     '2024-07-20 17:09:59');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (226, 62, 
                     'T09', 'RC2',
                     '2024-06-14',
                     NULL,
                     NULL,
                     '2024-09-17',
                     '2024-10-24',
                     '2024-06-14',
                     NULL,
                     NULL,
                     '2024-09-17',
                     '2024-10-24',
                     'Other',
                     'Special requirement change',
                     'Kate',
                     '2024-06-12 13:50:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (227, 62, 
                     'T10', 'RC1',
                     '2024-11-06',
                     '2024-12-05',
                     NULL,
                     NULL,
                     '2025-02-28',
                     '2024-11-06',
                     '2024-12-05',
                     NULL,
                     NULL,
                     '2025-02-28',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mike',
                     '2024-10-22 09:26:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (228, 62, 
                     'T05', 'RC3',
                     '2024-01-25',
                     '2024-02-28',
                     NULL,
                     NULL,
                     '2024-05-10',
                     '2024-01-25',
                     '2024-02-28',
                     NULL,
                     '2024-04-08',
                     '2024-05-10',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mike',
                     '2024-01-08 12:18:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (229, 62, 
                     'T03', 'RC2',
                     '2024-03-25',
                     '2024-04-17',
                     '2024-05-08',
                     '2024-06-01',
                     '2024-07-14',
                     NULL,
                     '2024-04-17',
                     '2024-05-08',
                     '2024-06-05',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'David',
                     '2024-02-27 16:21:38');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (230, 63, 
                     'T05', 'RC3',
                     '2024-03-28',
                     NULL,
                     '2024-06-15',
                     '2024-07-04',
                     NULL,
                     '2024-03-28',
                     '2024-05-05',
                     '2024-06-15',
                     '2024-07-04',
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'Kate',
                     '2024-03-22 14:31:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (231, 63, 
                     'T01', 'RC2',
                     '2024-07-31',
                     '2024-08-09',
                     '2024-09-07',
                     '2024-10-29',
                     '2024-11-24',
                     '2024-07-31',
                     '2024-08-09',
                     NULL,
                     NULL,
                     '2024-11-24',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Mike',
                     '2024-07-05 15:43:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (232, 63, 
                     'T06', 'RC2',
                     '2024-11-30',
                     NULL,
                     '2025-01-12',
                     '2025-02-15',
                     NULL,
                     '2024-11-30',
                     NULL,
                     '2025-01-12',
                     '2025-02-20',
                     '2025-03-31',
                     'Schedule',
                     'Schedule optimization',
                     'Tom',
                     '2024-11-07 09:45:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (233, 64, 
                     'T09', 'RC2',
                     NULL,
                     '2024-05-03',
                     '2024-05-28',
                     '2024-06-25',
                     '2024-08-01',
                     '2024-04-21',
                     '2024-05-03',
                     '2024-05-31',
                     '2024-06-25',
                     '2024-08-01',
                     'Schedule',
                     'Schedule optimization',
                     'Mike',
                     '2024-03-22 17:07:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (234, 64, 
                     'T08', 'RC3',
                     NULL,
                     '2024-03-06',
                     '2024-04-10',
                     '2024-05-24',
                     '2024-06-20',
                     '2024-02-14',
                     '2024-03-06',
                     '2024-04-14',
                     '2024-05-26',
                     '2024-06-20',
                     'Schedule',
                     'Schedule optimization',
                     'David',
                     '2024-01-27 14:35:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (235, 64, 
                     'T03', 'RC3',
                     NULL,
                     '2024-11-03',
                     '2024-11-16',
                     '2024-12-21',
                     '2025-01-11',
                     NULL,
                     '2024-11-03',
                     '2024-11-16',
                     '2024-12-21',
                     '2025-01-11',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'David',
                     '2024-09-05 10:18:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (236, 64, 
                     'T07', 'RC2',
                     NULL,
                     '2024-11-01',
                     '2024-12-03',
                     '2025-01-14',
                     '2025-02-13',
                     '2024-10-22',
                     '2024-11-01',
                     '2024-12-03',
                     '2025-01-14',
                     NULL,
                     'Cost',
                     'Budget adjustment',
                     'Bob',
                     '2024-09-22 13:54:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (237, 65, 
                     'T04', 'RC3',
                     '2024-09-19',
                     NULL,
                     '2024-11-10',
                     '2024-12-18',
                     '2025-01-07',
                     '2024-09-19',
                     NULL,
                     '2024-11-10',
                     '2024-12-18',
                     '2025-01-07',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Tom',
                     '2024-08-25 13:52:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (238, 65, 
                     'T03', 'RC3',
                     '2024-01-30',
                     '2024-02-14',
                     '2024-03-28',
                     '2024-04-19',
                     '2024-05-30',
                     NULL,
                     '2024-02-14',
                     NULL,
                     '2024-04-19',
                     '2024-05-30',
                     'Resource',
                     'Equipment resource optimization',
                     'John',
                     '2024-01-08 14:53:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (239, 65, 
                     'T06', 'RC3',
                     NULL,
                     '2024-10-13',
                     '2024-11-08',
                     '2024-12-26',
                     '2025-01-26',
                     '2024-09-15',
                     '2024-10-13',
                     '2024-11-08',
                     '2024-12-26',
                     '2025-01-26',
                     'Inventory',
                     'Inventory forecast change',
                     'Sarah',
                     '2024-09-02 12:58:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (240, 65, 
                     'T02', 'RC3',
                     '2024-08-06',
                     '2024-09-30',
                     '2024-10-29',
                     NULL,
                     '2024-12-02',
                     '2024-08-06',
                     '2024-09-30',
                     '2024-10-29',
                     '2024-11-21',
                     '2024-12-02',
                     'Inventory',
                     'Inventory level adjustment',
                     'Mike',
                     '2024-08-02 13:17:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (241, 66, 
                     'T06', 'RC3',
                     NULL,
                     '2024-07-10',
                     '2024-08-01',
                     '2024-09-08',
                     '2024-10-03',
                     NULL,
                     '2024-07-10',
                     NULL,
                     '2024-09-12',
                     '2024-10-08',
                     'Schedule',
                     'Maintenance time change',
                     'David',
                     '2024-05-13 09:29:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (242, 66, 
                     'T04', 'RC3',
                     '2024-08-19',
                     '2024-10-08',
                     '2024-11-10',
                     '2024-12-12',
                     '2024-12-22',
                     '2024-08-19',
                     '2024-10-08',
                     '2024-11-14',
                     NULL,
                     NULL,
                     'Schedule',
                     'Timeline adjustment',
                     'Mike',
                     '2024-08-16 13:14:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (243, 66, 
                     'T04', 'RC2',
                     '2024-03-14',
                     '2024-04-19',
                     '2024-05-14',
                     '2024-06-18',
                     '2024-07-17',
                     '2024-03-14',
                     '2024-04-19',
                     NULL,
                     '2024-06-18',
                     '2024-07-17',
                     'Other',
                     'Other optimization',
                     'Alice',
                     '2024-02-23 14:10:35');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (244, 66, 
                     'T07', 'RC2',
                     NULL,
                     '2024-05-29',
                     '2024-06-30',
                     NULL,
                     '2024-08-24',
                     '2024-04-03',
                     '2024-05-29',
                     '2024-06-30',
                     '2024-07-29',
                     '2024-08-24',
                     'Resource',
                     'Human resource reallocation',
                     'Sarah',
                     '2024-04-01 14:58:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (245, 66, 
                     'T08', 'RC3',
                     '2024-03-11',
                     '2024-04-28',
                     '2024-05-10',
                     '2024-06-29',
                     '2024-07-15',
                     '2024-03-11',
                     NULL,
                     '2024-05-10',
                     '2024-06-29',
                     '2024-07-15',
                     'Other',
                     'Temporary adjustment',
                     'Emma',
                     '2024-03-07 11:45:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (246, 67, 
                     'T08', 'RC2',
                     '2024-11-02',
                     NULL,
                     '2024-12-13',
                     '2025-01-17',
                     '2025-02-17',
                     '2024-11-02',
                     '2024-11-20',
                     '2024-12-13',
                     '2025-01-17',
                     '2025-02-17',
                     'Other',
                     'Minor plan update',
                     'John',
                     '2024-10-05 11:13:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (247, 67, 
                     'T05', 'RC3',
                     '2024-05-31',
                     '2024-07-06',
                     '2024-07-28',
                     '2024-08-22',
                     '2024-10-10',
                     '2024-05-31',
                     '2024-07-06',
                     '2024-07-28',
                     NULL,
                     '2024-10-10',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Kate',
                     '2024-05-19 12:04:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (248, 67, 
                     'T06', 'RC3',
                     '2024-03-09',
                     '2024-04-09',
                     '2024-05-04',
                     '2024-05-25',
                     NULL,
                     '2024-03-09',
                     '2024-04-09',
                     NULL,
                     '2024-05-25',
                     '2024-07-08',
                     'Resource',
                     'Equipment resource optimization',
                     'Kate',
                     '2024-02-22 12:26:37');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (249, 67, 
                     'T10', 'RC1',
                     '2024-09-01',
                     '2024-10-19',
                     NULL,
                     NULL,
                     '2025-01-02',
                     '2024-09-01',
                     '2024-10-20',
                     '2024-11-18',
                     '2024-11-30',
                     '2025-01-02',
                     'Lead time',
                     'Production cycle optimization',
                     'Bob',
                     '2024-08-22 17:38:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (250, 68, 
                     'T01', 'RC3',
                     '2024-07-01',
                     '2024-07-28',
                     '2024-09-16',
                     NULL,
                     '2024-10-30',
                     '2024-07-01',
                     '2024-07-28',
                     '2024-09-16',
                     '2024-09-23',
                     '2024-10-30',
                     'Other',
                     'Temporary adjustment',
                     'David',
                     '2024-06-19 12:29:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (251, 68, 
                     'T02', 'RC1',
                     '2024-10-14',
                     NULL,
                     '2024-12-29',
                     '2025-01-19',
                     NULL,
                     '2024-10-14',
                     NULL,
                     '2024-12-29',
                     '2025-01-19',
                     NULL,
                     'Resource',
                     'Capacity adjustment',
                     'Mary',
                     '2024-10-06 10:43:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (252, 68, 
                     'T03', 'RC2',
                     '2024-03-25',
                     NULL,
                     '2024-05-10',
                     '2024-06-30',
                     '2024-07-21',
                     '2024-03-25',
                     '2024-04-20',
                     NULL,
                     '2024-06-30',
                     '2024-07-21',
                     'Tanks issue',
                     'Performance issue fix',
                     'Kate',
                     '2024-03-06 14:34:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (253, 68, 
                     'T08', 'RC3',
                     '2024-08-19',
                     '2024-09-22',
                     NULL,
                     '2024-12-06',
                     '2025-01-12',
                     '2024-08-20',
                     '2024-09-22',
                     '2024-10-24',
                     '2024-12-06',
                     '2025-01-14',
                     'Lead time',
                     'Production cycle optimization',
                     'Tom',
                     '2024-08-15 14:44:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (254, 68, 
                     'T05', 'RC1',
                     '2024-08-28',
                     '2024-10-08',
                     '2024-11-16',
                     '2024-12-04',
                     NULL,
                     NULL,
                     '2024-10-11',
                     '2024-11-17',
                     '2024-12-04',
                     NULL,
                     'Lead time',
                     'Process time change',
                     'Alice',
                     '2024-08-27 16:24:38');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (255, 69, 
                     'T02', 'RC2',
                     '2024-08-17',
                     '2024-09-14',
                     '2024-10-06',
                     '2024-11-19',
                     NULL,
                     '2024-08-18',
                     NULL,
                     '2024-10-06',
                     '2024-11-20',
                     NULL,
                     'Lead time',
                     'Lead time update',
                     'Bob',
                     '2024-07-28 10:01:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (256, 69, 
                     'T07', 'RC1',
                     '2024-10-02',
                     '2024-10-28',
                     '2024-12-23',
                     NULL,
                     '2025-02-10',
                     '2024-10-02',
                     NULL,
                     '2024-12-23',
                     NULL,
                     '2025-02-10',
                     'Cost',
                     'Cost control optimization',
                     'Mary',
                     '2024-09-25 15:02:17');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (257, 69, 
                     'T02', 'RC2',
                     NULL,
                     '2024-05-01',
                     '2024-06-10',
                     '2024-07-09',
                     '2024-07-15',
                     '2024-03-24',
                     '2024-05-01',
                     '2024-06-10',
                     '2024-07-09',
                     '2024-07-15',
                     'Lead time',
                     'Production cycle optimization',
                     'Mary',
                     '2024-03-16 12:13:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (258, 69, 
                     'T03', 'RC3',
                     '2024-03-25',
                     '2024-04-23',
                     '2024-06-02',
                     '2024-07-04',
                     '2024-07-14',
                     NULL,
                     '2024-04-25',
                     NULL,
                     '2024-07-06',
                     '2024-07-14',
                     'Lead time',
                     'Production cycle optimization',
                     'David',
                     '2024-03-15 10:43:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (259, 70, 
                     'T03', 'RC1',
                     NULL,
                     '2024-06-16',
                     '2024-07-14',
                     '2024-09-01',
                     '2024-09-22',
                     NULL,
                     '2024-06-16',
                     '2024-07-14',
                     '2024-09-01',
                     '2024-09-22',
                     'Inventory',
                     'Stock strategy optimization',
                     'David',
                     '2024-05-07 17:03:01');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (260, 70, 
                     'T10', 'RC2',
                     '2024-06-25',
                     '2024-06-27',
                     NULL,
                     '2024-09-18',
                     '2024-10-12',
                     '2024-06-25',
                     '2024-06-27',
                     '2024-07-27',
                     '2024-09-18',
                     '2024-10-12',
                     'Inventory',
                     'Inventory forecast change',
                     'Mike',
                     '2024-05-26 14:28:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (261, 70, 
                     'T02', 'RC2',
                     '2024-06-30',
                     NULL,
                     NULL,
                     '2024-10-08',
                     '2024-10-24',
                     '2024-06-30',
                     '2024-07-21',
                     '2024-09-05',
                     '2024-10-08',
                     '2024-10-24',
                     'Inventory',
                     'Safety stock update',
                     'Sarah',
                     '2024-06-20 15:13:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (262, 70, 
                     'T10', 'RC3',
                     '2024-08-22',
                     NULL,
                     '2024-10-18',
                     NULL,
                     '2024-12-13',
                     '2024-08-22',
                     NULL,
                     '2024-10-18',
                     NULL,
                     '2024-12-18',
                     'Schedule',
                     'Production schedule adjustment',
                     'Sarah',
                     '2024-08-10 12:10:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (263, 70, 
                     'T05', 'RC3',
                     '2024-11-28',
                     '2025-01-22',
                     '2025-01-30',
                     NULL,
                     '2025-03-31',
                     '2024-11-28',
                     '2025-01-22',
                     '2025-01-30',
                     NULL,
                     '2025-03-31',
                     'Inventory',
                     'Inventory level adjustment',
                     'Emma',
                     '2024-11-27 13:47:06');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (264, 71, 
                     'T06', 'RC3',
                     '2024-05-04',
                     '2024-06-03',
                     '2024-07-14',
                     NULL,
                     '2024-08-24',
                     NULL,
                     '2024-06-03',
                     '2024-07-14',
                     NULL,
                     '2024-08-24',
                     'Inventory',
                     'Safety stock update',
                     'Mike',
                     '2024-04-23 13:46:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (265, 71, 
                     'T01', 'RC1',
                     '2024-01-11',
                     '2024-03-03',
                     '2024-03-25',
                     '2024-04-12',
                     '2024-05-20',
                     '2024-01-11',
                     '2024-03-03',
                     NULL,
                     NULL,
                     '2024-05-20',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Bob',
                     '2024-01-03 15:39:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (266, 71, 
                     'T08', 'RC1',
                     '2024-05-16',
                     '2024-05-27',
                     '2024-07-07',
                     NULL,
                     '2024-08-23',
                     '2024-05-16',
                     '2024-05-27',
                     '2024-07-07',
                     '2024-07-20',
                     '2024-08-23',
                     'Cost',
                     'Expense optimization',
                     'John',
                     '2024-04-17 13:23:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (267, 71, 
                     'T01', 'RC3',
                     '2024-06-01',
                     NULL,
                     '2024-08-09',
                     '2024-09-04',
                     '2024-10-16',
                     '2024-06-01',
                     '2024-07-06',
                     '2024-08-11',
                     '2024-09-04',
                     '2024-10-17',
                     'Lead time',
                     'Delivery time adjustment',
                     'Bob',
                     '2024-05-24 11:03:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (268, 71, 
                     'T07', 'RC3',
                     '2024-04-19',
                     '2024-06-03',
                     '2024-06-12',
                     NULL,
                     '2024-08-13',
                     '2024-04-19',
                     '2024-06-03',
                     '2024-06-12',
                     '2024-07-27',
                     '2024-08-18',
                     'Schedule',
                     'Schedule optimization',
                     'David',
                     '2024-04-04 14:20:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (269, 72, 
                     'T05', 'RC1',
                     '2024-03-25',
                     '2024-05-11',
                     '2024-05-20',
                     NULL,
                     '2024-07-19',
                     '2024-03-26',
                     '2024-05-14',
                     '2024-05-20',
                     '2024-06-20',
                     '2024-07-19',
                     'Lead time',
                     'Production cycle optimization',
                     'Bob',
                     '2024-03-13 16:45:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (270, 72, 
                     'T09', 'RC3',
                     '2024-09-13',
                     '2024-10-21',
                     NULL,
                     '2024-12-29',
                     '2025-01-26',
                     '2024-09-13',
                     '2024-10-21',
                     '2024-11-21',
                     '2024-12-29',
                     NULL,
                     'Other',
                     'Minor plan update',
                     'Kate',
                     '2024-09-08 15:15:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (271, 73, 
                     'T09', 'RC1',
                     '2024-01-09',
                     '2024-03-02',
                     NULL,
                     '2024-04-12',
                     NULL,
                     '2024-01-09',
                     '2024-03-02',
                     '2024-03-22',
                     '2024-04-12',
                     '2024-05-27',
                     'Lead time',
                     'Production cycle optimization',
                     'David',
                     '2024-01-04 14:34:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (272, 73, 
                     'T03', 'RC1',
                     '2024-02-17',
                     '2024-03-18',
                     NULL,
                     '2024-06-08',
                     '2024-06-16',
                     '2024-02-17',
                     '2024-03-18',
                     '2024-04-26',
                     '2024-06-08',
                     '2024-06-16',
                     'Cost',
                     'Cost control optimization',
                     'Tom',
                     '2024-02-10 10:41:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (273, 73, 
                     'T04', 'RC3',
                     '2024-06-09',
                     NULL,
                     '2024-07-28',
                     '2024-08-23',
                     '2024-10-10',
                     '2024-06-09',
                     NULL,
                     '2024-07-28',
                     '2024-08-23',
                     '2024-10-10',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Mary',
                     '2024-05-19 13:35:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (274, 73, 
                     'T03', 'RC2',
                     '2024-07-31',
                     '2024-08-15',
                     '2024-09-12',
                     '2024-11-02',
                     '2024-11-22',
                     '2024-07-31',
                     '2024-08-15',
                     '2024-09-12',
                     '2024-11-02',
                     NULL,
                     'Other',
                     'Other optimization',
                     'Sarah',
                     '2024-07-08 13:10:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (275, 74, 
                     'T05', 'RC2',
                     '2024-06-19',
                     NULL,
                     '2024-08-11',
                     '2024-09-22',
                     '2024-10-20',
                     '2024-06-19',
                     '2024-07-09',
                     '2024-08-11',
                     '2024-09-22',
                     '2024-10-20',
                     'Resource',
                     'Capacity adjustment',
                     'Tom',
                     '2024-06-04 11:22:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (276, 74, 
                     'T04', 'RC2',
                     '2024-11-19',
                     '2024-12-14',
                     NULL,
                     '2025-02-17',
                     NULL,
                     '2024-11-19',
                     '2024-12-14',
                     '2025-01-27',
                     '2025-02-17',
                     '2025-03-25',
                     'Other',
                     'Temporary adjustment',
                     'Kate',
                     '2024-11-04 09:49:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (277, 75, 
                     'T06', 'RC1',
                     '2024-09-14',
                     NULL,
                     '2024-11-16',
                     '2024-12-21',
                     '2025-01-12',
                     '2024-09-14',
                     '2024-09-27',
                     NULL,
                     '2024-12-21',
                     '2025-01-12',
                     'Cost',
                     'Expense optimization',
                     'Mary',
                     '2024-08-24 13:05:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (278, 75, 
                     'T04', 'RC2',
                     '2024-11-29',
                     '2025-01-13',
                     '2025-01-29',
                     '2025-03-16',
                     '2025-03-30',
                     '2024-12-01',
                     '2025-01-13',
                     '2025-01-29',
                     NULL,
                     '2025-03-30',
                     'Lead time',
                     'Production cycle optimization',
                     'Kate',
                     '2024-11-27 13:31:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (279, 76, 
                     'T01', 'RC3',
                     '2024-10-09',
                     '2024-11-08',
                     NULL,
                     NULL,
                     '2025-01-31',
                     '2024-10-09',
                     '2024-11-08',
                     NULL,
                     NULL,
                     '2025-02-04',
                     'Schedule',
                     'Timeline adjustment',
                     'Kate',
                     '2024-09-16 11:22:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (280, 76, 
                     'T04', 'RC1',
                     '2024-03-19',
                     '2024-04-10',
                     '2024-05-12',
                     NULL,
                     '2024-08-01',
                     '2024-03-19',
                     '2024-04-10',
                     '2024-05-12',
                     '2024-06-30',
                     '2024-08-01',
                     'Other',
                     'Other optimization',
                     'Alice',
                     '2024-03-10 17:18:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (281, 76, 
                     'T07', 'RC3',
                     NULL,
                     '2024-11-01',
                     '2024-11-27',
                     '2024-12-11',
                     '2025-01-13',
                     NULL,
                     '2024-11-01',
                     '2024-11-27',
                     '2024-12-11',
                     '2025-01-13',
                     'Cost',
                     'Budget adjustment',
                     'Alice',
                     '2024-09-02 16:59:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (282, 77, 
                     'T05', 'RC2',
                     '2024-05-30',
                     '2024-07-08',
                     '2024-07-28',
                     '2024-09-17',
                     '2024-10-10',
                     '2024-05-30',
                     '2024-07-08',
                     NULL,
                     NULL,
                     '2024-10-10',
                     'Tanks issue',
                     'Performance issue fix',
                     'Kate',
                     '2024-05-21 15:56:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (283, 77, 
                     'T05', 'RC1',
                     '2024-11-20',
                     '2024-12-18',
                     '2025-01-30',
                     '2025-02-23',
                     NULL,
                     '2024-11-20',
                     '2024-12-18',
                     NULL,
                     '2025-02-23',
                     '2025-03-18',
                     'Inventory',
                     'Inventory forecast change',
                     'Emma',
                     '2024-11-15 14:25:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (284, 77, 
                     'T04', 'RC1',
                     '2024-03-21',
                     '2024-04-25',
                     NULL,
                     '2024-07-12',
                     '2024-08-09',
                     '2024-03-21',
                     '2024-04-25',
                     NULL,
                     '2024-07-12',
                     '2024-08-09',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Sarah',
                     '2024-03-20 12:33:28');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (285, 77, 
                     'T01', 'RC2',
                     '2024-01-28',
                     '2024-02-23',
                     '2024-03-13',
                     '2024-04-21',
                     '2024-05-15',
                     '2024-01-28',
                     '2024-02-23',
                     NULL,
                     NULL,
                     '2024-05-15',
                     'Cost',
                     'Cost control optimization',
                     'Mary',
                     '2024-01-09 09:28:55');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (286, 78, 
                     'T07', 'RC1',
                     NULL,
                     NULL,
                     '2024-06-18',
                     '2024-07-29',
                     '2024-08-10',
                     '2024-05-08',
                     NULL,
                     '2024-06-18',
                     '2024-07-29',
                     '2024-08-10',
                     'Schedule',
                     'Timeline adjustment',
                     'David',
                     '2024-04-10 17:35:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (287, 78, 
                     'T04', 'RC3',
                     NULL,
                     '2024-10-27',
                     '2024-11-30',
                     '2024-12-06',
                     '2025-01-08',
                     '2024-09-22',
                     '2024-10-27',
                     '2024-11-30',
                     NULL,
                     '2025-01-08',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Tom',
                     '2024-09-02 11:41:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (288, 78, 
                     'T01', 'RC1',
                     '2024-08-12',
                     NULL,
                     '2024-10-04',
                     '2024-11-21',
                     NULL,
                     '2024-08-12',
                     '2024-09-24',
                     '2024-10-04',
                     '2024-11-21',
                     NULL,
                     'Inventory',
                     'Safety stock update',
                     'Mike',
                     '2024-08-01 17:45:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (289, 78, 
                     'T04', 'RC2',
                     '2024-07-20',
                     NULL,
                     '2024-09-30',
                     '2024-10-31',
                     '2024-12-14',
                     '2024-07-20',
                     NULL,
                     '2024-09-30',
                     NULL,
                     '2024-12-14',
                     'Resource',
                     'Equipment resource optimization',
                     'John',
                     '2024-07-20 12:44:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (290, 79, 
                     'T08', 'RC2',
                     '2024-05-18',
                     NULL,
                     '2024-07-19',
                     '2024-08-06',
                     NULL,
                     '2024-05-18',
                     '2024-06-20',
                     '2024-07-22',
                     '2024-08-06',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'Alice',
                     '2024-05-06 10:57:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (291, 79, 
                     'T03', 'RC3',
                     '2024-08-22',
                     NULL,
                     '2024-10-08',
                     '2024-11-05',
                     '2024-12-16',
                     '2024-08-24',
                     NULL,
                     '2024-10-11',
                     '2024-11-05',
                     '2024-12-16',
                     'Lead time',
                     'Production cycle optimization',
                     'Mary',
                     '2024-07-26 13:05:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (292, 79, 
                     'T04', 'RC3',
                     '2024-05-06',
                     '2024-05-18',
                     '2024-06-25',
                     NULL,
                     '2024-08-16',
                     '2024-05-06',
                     '2024-05-18',
                     '2024-06-25',
                     NULL,
                     '2024-08-16',
                     'Inventory',
                     'Inventory forecast change',
                     'David',
                     '2024-04-11 14:11:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (293, 79, 
                     'T09', 'RC1',
                     '2024-02-10',
                     NULL,
                     '2024-03-23',
                     '2024-05-05',
                     NULL,
                     '2024-02-10',
                     NULL,
                     '2024-03-23',
                     '2024-05-05',
                     NULL,
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mary',
                     '2024-01-15 10:16:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (294, 79, 
                     'T10', 'RC3',
                     NULL,
                     '2024-03-16',
                     '2024-04-19',
                     '2024-05-20',
                     '2024-06-12',
                     NULL,
                     '2024-03-16',
                     '2024-04-19',
                     '2024-05-20',
                     NULL,
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Mike',
                     '2024-02-09 15:24:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (295, 80, 
                     'T07', 'RC2',
                     '2024-04-26',
                     NULL,
                     '2024-07-05',
                     '2024-07-19',
                     '2024-08-18',
                     '2024-04-26',
                     NULL,
                     '2024-07-05',
                     '2024-07-19',
                     '2024-08-18',
                     'Cost',
                     'Cost control optimization',
                     'Sarah',
                     '2024-04-17 17:12:43');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (296, 80, 
                     'T05', 'RC3',
                     '2024-04-23',
                     '2024-05-21',
                     '2024-06-11',
                     NULL,
                     '2024-08-02',
                     '2024-04-23',
                     '2024-05-21',
                     '2024-06-14',
                     '2024-07-16',
                     '2024-08-02',
                     'Schedule',
                     'Schedule optimization',
                     'Kate',
                     '2024-03-25 15:45:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (297, 81, 
                     'T07', 'RC3',
                     '2024-07-12',
                     '2024-07-28',
                     '2024-09-15',
                     '2024-10-06',
                     '2024-11-17',
                     NULL,
                     '2024-07-28',
                     '2024-09-15',
                     '2024-10-06',
                     '2024-11-17',
                     'Other',
                     'Special requirement change',
                     'David',
                     '2024-06-27 17:42:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (298, 81, 
                     'T09', 'RC2',
                     NULL,
                     NULL,
                     '2024-03-29',
                     '2024-04-14',
                     '2024-05-13',
                     '2024-01-28',
                     '2024-02-15',
                     '2024-03-29',
                     '2024-04-14',
                     '2024-05-13',
                     'Cost',
                     'Cost structure change',
                     'Emma',
                     '2024-01-04 14:09:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (299, 81, 
                     'T03', 'RC1',
                     '2024-11-19',
                     '2024-12-24',
                     '2025-01-12',
                     '2025-02-27',
                     NULL,
                     '2024-11-21',
                     '2024-12-24',
                     '2025-01-12',
                     '2025-03-01',
                     '2025-03-31',
                     'Lead time',
                     'Delivery time adjustment',
                     'Tom',
                     '2024-11-11 14:13:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (300, 81, 
                     'T08', 'RC3',
                     '2024-10-30',
                     '2024-11-28',
                     '2024-12-16',
                     '2025-01-18',
                     '2025-02-28',
                     NULL,
                     '2024-11-28',
                     '2024-12-16',
                     '2025-01-18',
                     '2025-02-28',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Sarah',
                     '2024-10-01 12:59:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (301, 81, 
                     'T04', 'RC3',
                     '2024-04-22',
                     '2024-05-03',
                     '2024-06-20',
                     '2024-07-12',
                     '2024-08-14',
                     '2024-04-22',
                     '2024-05-03',
                     '2024-06-20',
                     NULL,
                     '2024-08-14',
                     'Inventory',
                     'Inventory level adjustment',
                     'Emma',
                     '2024-03-26 10:58:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (302, 82, 
                     'T06', 'RC3',
                     NULL,
                     '2024-05-22',
                     '2024-06-17',
                     '2024-07-04',
                     '2024-08-09',
                     NULL,
                     '2024-05-25',
                     '2024-06-18',
                     '2024-07-04',
                     '2024-08-09',
                     'Lead time',
                     'Process time change',
                     'Tom',
                     '2024-03-28 17:30:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (303, 82, 
                     'T05', 'RC1',
                     '2024-07-17',
                     NULL,
                     '2024-09-29',
                     '2024-10-17',
                     '2024-11-19',
                     '2024-07-17',
                     '2024-08-12',
                     '2024-09-29',
                     '2024-10-17',
                     '2024-11-19',
                     'Cost',
                     'Expense optimization',
                     'Mary',
                     '2024-07-04 17:51:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (304, 82, 
                     'T10', 'RC2',
                     '2024-04-19',
                     '2024-05-31',
                     '2024-06-24',
                     '2024-07-29',
                     '2024-09-02',
                     NULL,
                     '2024-05-31',
                     '2024-06-24',
                     '2024-07-29',
                     '2024-09-02',
                     'Resource',
                     'Equipment resource optimization',
                     'David',
                     '2024-04-19 09:54:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (305, 82, 
                     'T06', 'RC3',
                     '2024-08-01',
                     NULL,
                     '2024-10-13',
                     '2024-10-24',
                     '2024-12-08',
                     NULL,
                     '2024-08-20',
                     '2024-10-13',
                     '2024-10-24',
                     '2024-12-08',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'David',
                     '2024-07-15 13:43:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (306, 83, 
                     'T02', 'RC2',
                     '2024-11-17',
                     NULL,
                     '2025-01-21',
                     '2025-02-28',
                     NULL,
                     '2024-11-17',
                     NULL,
                     '2025-01-21',
                     '2025-02-28',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'Emma',
                     '2024-11-12 14:17:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (307, 83, 
                     'T08', 'RC3',
                     '2024-06-25',
                     NULL,
                     '2024-08-17',
                     '2024-09-22',
                     '2024-10-15',
                     '2024-06-25',
                     '2024-08-10',
                     '2024-08-17',
                     NULL,
                     '2024-10-15',
                     'Inventory',
                     'Safety stock update',
                     'Tom',
                     '2024-06-11 11:05:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (308, 84, 
                     'T08', 'RC1',
                     '2024-05-24',
                     '2024-06-27',
                     NULL,
                     '2024-08-26',
                     NULL,
                     '2024-05-24',
                     '2024-06-27',
                     NULL,
                     '2024-08-28',
                     '2024-09-27',
                     'Lead time',
                     'Production cycle optimization',
                     'Emma',
                     '2024-05-13 16:01:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (309, 84, 
                     'T08', 'RC1',
                     NULL,
                     '2024-11-07',
                     NULL,
                     '2025-01-17',
                     '2025-02-09',
                     NULL,
                     '2024-11-07',
                     NULL,
                     '2025-01-17',
                     '2025-02-09',
                     'Resource',
                     'Capacity adjustment',
                     'Emma',
                     '2024-10-04 12:49:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (310, 84, 
                     'T04', 'RC1',
                     '2024-06-05',
                     NULL,
                     '2024-08-02',
                     '2024-08-31',
                     '2024-10-04',
                     '2024-06-05',
                     NULL,
                     NULL,
                     '2024-08-31',
                     '2024-10-04',
                     'Inventory',
                     'Inventory level adjustment',
                     'Sarah',
                     '2024-05-19 13:54:06');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (311, 84, 
                     'T07', 'RC1',
                     '2024-10-27',
                     NULL,
                     '2024-12-05',
                     '2025-01-03',
                     '2025-02-12',
                     '2024-10-27',
                     '2024-11-08',
                     '2024-12-05',
                     '2025-01-03',
                     '2025-02-12',
                     'Tanks issue',
                     'Performance issue fix',
                     'Emma',
                     '2024-10-03 13:36:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (312, 85, 
                     'T10', 'RC2',
                     '2024-11-12',
                     NULL,
                     '2025-01-12',
                     '2025-01-31',
                     '2025-03-19',
                     '2024-11-12',
                     '2024-12-15',
                     NULL,
                     '2025-01-31',
                     '2025-03-19',
                     'Other',
                     'Minor plan update',
                     'John',
                     '2024-10-25 10:12:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (313, 85, 
                     'T02', 'RC1',
                     '2024-03-25',
                     NULL,
                     '2024-05-24',
                     '2024-06-11',
                     '2024-07-28',
                     NULL,
                     NULL,
                     '2024-05-24',
                     '2024-06-11',
                     '2024-07-28',
                     'Inventory',
                     'Inventory forecast change',
                     'Bob',
                     '2024-03-04 10:34:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (314, 85, 
                     'T09', 'RC2',
                     '2024-03-04',
                     '2024-04-05',
                     '2024-05-24',
                     NULL,
                     '2024-07-22',
                     '2024-03-04',
                     NULL,
                     '2024-05-24',
                     '2024-06-07',
                     '2024-07-22',
                     'Inventory',
                     'Inventory forecast change',
                     'Mike',
                     '2024-03-02 14:46:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (315, 86, 
                     'T05', 'RC1',
                     '2024-09-08',
                     '2024-10-16',
                     NULL,
                     '2024-12-09',
                     '2024-12-29',
                     '2024-09-08',
                     '2024-10-16',
                     NULL,
                     '2024-12-09',
                     '2025-01-01',
                     'Schedule',
                     'Production schedule adjustment',
                     'Mary',
                     '2024-08-27 17:26:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (316, 86, 
                     'T10', 'RC3',
                     '2024-10-31',
                     '2024-11-29',
                     '2024-12-12',
                     '2025-01-23',
                     '2025-02-09',
                     '2024-10-31',
                     '2024-11-29',
                     '2024-12-12',
                     '2025-01-23',
                     NULL,
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Bob',
                     '2024-10-04 14:25:47');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (317, 86, 
                     'T01', 'RC3',
                     '2024-06-09',
                     NULL,
                     '2024-08-06',
                     '2024-08-16',
                     '2024-09-23',
                     '2024-06-09',
                     '2024-07-06',
                     '2024-08-06',
                     '2024-08-16',
                     '2024-09-23',
                     'Other',
                     'Other optimization',
                     'Mary',
                     '2024-05-10 13:51:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (318, 86, 
                     'T08', 'RC2',
                     '2024-05-21',
                     '2024-07-01',
                     '2024-07-23',
                     '2024-08-23',
                     NULL,
                     '2024-05-21',
                     NULL,
                     '2024-07-23',
                     '2024-08-23',
                     '2024-10-05',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Tom',
                     '2024-05-17 17:35:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (319, 86, 
                     'T07', 'RC3',
                     '2024-02-24',
                     '2024-03-15',
                     '2024-04-27',
                     '2024-06-09',
                     '2024-06-20',
                     '2024-02-24',
                     '2024-03-15',
                     NULL,
                     '2024-06-09',
                     '2024-06-20',
                     'Resource',
                     'Human resource reallocation',
                     'Bob',
                     '2024-02-12 10:12:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (320, 87, 
                     'T07', 'RC2',
                     '2024-06-14',
                     '2024-07-30',
                     '2024-08-08',
                     '2024-09-03',
                     '2024-10-02',
                     NULL,
                     '2024-07-30',
                     '2024-08-08',
                     '2024-09-03',
                     '2024-10-02',
                     'Resource',
                     'Human resource reallocation',
                     'Kate',
                     '2024-06-01 10:40:21');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (321, 87, 
                     'T05', 'RC2',
                     '2024-03-07',
                     '2024-03-15',
                     '2024-04-15',
                     NULL,
                     '2024-06-28',
                     '2024-03-07',
                     '2024-03-15',
                     '2024-04-15',
                     NULL,
                     NULL,
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Sarah',
                     '2024-02-07 09:22:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (322, 87, 
                     'T01', 'RC1',
                     NULL,
                     '2024-05-21',
                     '2024-06-18',
                     '2024-07-27',
                     '2024-08-25',
                     NULL,
                     '2024-05-21',
                     '2024-06-18',
                     '2024-07-27',
                     '2024-08-25',
                     'Resource',
                     'Resource allocation adjustment',
                     'Bob',
                     '2024-04-07 12:11:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (323, 87, 
                     'T01', 'RC3',
                     '2024-06-02',
                     '2024-07-28',
                     '2024-08-14',
                     '2024-09-16',
                     NULL,
                     '2024-06-02',
                     '2024-07-28',
                     '2024-08-14',
                     '2024-09-16',
                     '2024-10-20',
                     'Other',
                     'Minor plan update',
                     'Mary',
                     '2024-06-01 15:23:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (324, 88, 
                     'T07', 'RC3',
                     NULL,
                     NULL,
                     '2024-09-08',
                     '2024-09-13',
                     '2024-10-30',
                     NULL,
                     NULL,
                     '2024-09-08',
                     '2024-09-13',
                     '2024-10-30',
                     'Resource',
                     'Capacity adjustment',
                     'Alice',
                     '2024-06-10 16:14:56');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (325, 88, 
                     'T05', 'RC3',
                     '2024-10-18',
                     '2024-12-10',
                     '2025-01-08',
                     NULL,
                     '2025-02-17',
                     NULL,
                     '2024-12-12',
                     '2025-01-08',
                     NULL,
                     '2025-02-17',
                     'Schedule',
                     'Production schedule adjustment',
                     'Tom',
                     '2024-10-14 14:45:59');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (326, 88, 
                     'T10', 'RC1',
                     '2024-08-13',
                     '2024-09-21',
                     '2024-10-10',
                     '2024-11-08',
                     '2024-12-27',
                     '2024-08-13',
                     '2024-09-21',
                     '2024-10-10',
                     NULL,
                     NULL,
                     'Other',
                     'Minor plan update',
                     'Sarah',
                     '2024-08-04 15:46:28');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (327, 88, 
                     'T06', 'RC1',
                     '2024-04-24',
                     '2024-05-22',
                     '2024-06-17',
                     NULL,
                     NULL,
                     '2024-04-24',
                     '2024-05-22',
                     '2024-06-17',
                     '2024-07-31',
                     '2024-08-24',
                     'Other',
                     'Temporary adjustment',
                     'Tom',
                     '2024-04-08 10:49:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (328, 89, 
                     'T05', 'RC1',
                     '2024-06-08',
                     '2024-07-09',
                     '2024-07-29',
                     NULL,
                     '2024-10-02',
                     '2024-06-08',
                     '2024-07-09',
                     '2024-07-29',
                     '2024-09-02',
                     '2024-10-02',
                     'Other',
                     'Special requirement change',
                     'Tom',
                     '2024-05-26 17:24:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (329, 89, 
                     'T10', 'RC2',
                     '2024-07-11',
                     '2024-08-04',
                     '2024-08-26',
                     '2024-09-24',
                     '2024-11-07',
                     '2024-07-11',
                     NULL,
                     '2024-08-26',
                     NULL,
                     '2024-11-07',
                     'Resource',
                     'Equipment resource optimization',
                     'Sarah',
                     '2024-06-13 14:43:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (330, 89, 
                     'T06', 'RC1',
                     '2024-08-18',
                     '2024-09-16',
                     '2024-10-20',
                     '2024-12-06',
                     '2024-12-16',
                     '2024-08-18',
                     '2024-09-16',
                     NULL,
                     NULL,
                     '2024-12-16',
                     'Resource',
                     'Capacity adjustment',
                     'David',
                     '2024-08-14 16:07:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (331, 89, 
                     'T10', 'RC1',
                     NULL,
                     '2024-04-15',
                     '2024-04-23',
                     '2024-06-18',
                     '2024-06-24',
                     '2024-02-27',
                     '2024-04-15',
                     '2024-04-23',
                     '2024-06-18',
                     '2024-06-24',
                     'Other',
                     'Special requirement change',
                     'Kate',
                     '2024-02-21 10:10:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (332, 89, 
                     'T03', 'RC2',
                     NULL,
                     NULL,
                     '2024-11-05',
                     '2024-12-18',
                     '2025-01-06',
                     NULL,
                     NULL,
                     '2024-11-05',
                     '2024-12-21',
                     '2025-01-06',
                     'Schedule',
                     'Production schedule adjustment',
                     'Sarah',
                     '2024-08-28 13:28:14');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (333, 90, 
                     'T09', 'RC2',
                     '2024-08-15',
                     '2024-09-24',
                     '2024-10-17',
                     '2024-11-24',
                     '2025-01-05',
                     '2024-08-15',
                     '2024-09-24',
                     '2024-10-17',
                     '2024-11-24',
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'Mary',
                     '2024-08-15 14:32:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (334, 90, 
                     'T09', 'RC1',
                     NULL,
                     '2024-11-25',
                     '2024-12-27',
                     NULL,
                     '2025-02-26',
                     '2024-11-13',
                     '2024-11-25',
                     '2024-12-27',
                     '2025-02-16',
                     '2025-02-26',
                     'Cost',
                     'Budget adjustment',
                     'Mary',
                     '2024-10-20 17:43:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (335, 90, 
                     'T01', 'RC1',
                     '2024-10-21',
                     NULL,
                     '2024-12-17',
                     '2025-01-15',
                     '2025-02-24',
                     '2024-10-21',
                     NULL,
                     '2024-12-17',
                     '2025-01-15',
                     '2025-02-24',
                     'Resource',
                     'Resource allocation adjustment',
                     'Mary',
                     '2024-10-06 11:13:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (336, 90, 
                     'T05', 'RC2',
                     '2024-09-11',
                     '2024-09-15',
                     '2024-11-12',
                     '2024-11-18',
                     '2024-12-21',
                     NULL,
                     '2024-09-15',
                     '2024-11-12',
                     '2024-11-18',
                     NULL,
                     'Tanks issue',
                     'Performance issue fix',
                     'Sarah',
                     '2024-08-15 16:07:26');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (337, 91, 
                     'T02', 'RC1',
                     '2024-04-03',
                     '2024-05-22',
                     '2024-06-06',
                     '2024-07-21',
                     '2024-08-06',
                     '2024-04-03',
                     '2024-05-22',
                     '2024-06-06',
                     '2024-07-21',
                     NULL,
                     'Other',
                     'Other optimization',
                     'Mary',
                     '2024-03-25 17:42:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (338, 91, 
                     'T09', 'RC1',
                     '2024-12-07',
                     '2024-12-30',
                     '2025-01-26',
                     '2025-03-22',
                     NULL,
                     '2024-12-07',
                     '2024-12-30',
                     '2025-01-26',
                     '2025-03-22',
                     NULL,
                     'Tanks issue',
                     'Performance issue fix',
                     'John',
                     '2024-11-23 17:01:28');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (339, 92, 
                     'T10', 'RC3',
                     '2024-01-23',
                     '2024-02-07',
                     '2024-03-10',
                     '2024-04-23',
                     '2024-06-01',
                     '2024-01-23',
                     '2024-02-07',
                     '2024-03-11',
                     '2024-04-25',
                     NULL,
                     'Lead time',
                     'Lead time update',
                     'Alice',
                     '2024-01-07 13:05:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (340, 92, 
                     'T02', 'RC2',
                     '2024-07-10',
                     '2024-07-24',
                     NULL,
                     '2024-10-07',
                     NULL,
                     '2024-07-10',
                     '2024-07-28',
                     NULL,
                     '2024-10-12',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'John',
                     '2024-06-11 09:23:47');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (341, 93, 
                     'T05', 'RC2',
                     '2024-02-02',
                     '2024-03-25',
                     '2024-04-19',
                     '2024-05-15',
                     '2024-06-09',
                     '2024-02-02',
                     '2024-03-25',
                     NULL,
                     '2024-05-15',
                     '2024-06-09',
                     'Cost',
                     'Expense optimization',
                     'Tom',
                     '2024-02-01 14:15:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (342, 93, 
                     'T03', 'RC3',
                     '2024-07-30',
                     '2024-09-09',
                     '2024-09-30',
                     '2024-11-11',
                     '2024-11-29',
                     '2024-07-30',
                     '2024-09-09',
                     '2024-09-30',
                     NULL,
                     '2024-11-29',
                     'Resource',
                     'Equipment resource optimization',
                     'Alice',
                     '2024-07-25 15:53:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (343, 93, 
                     'T07', 'RC2',
                     '2024-03-19',
                     '2024-04-14',
                     '2024-05-27',
                     '2024-06-07',
                     '2024-06-27',
                     '2024-03-21',
                     NULL,
                     NULL,
                     '2024-06-07',
                     '2024-06-30',
                     'Lead time',
                     'Production cycle optimization',
                     'Kate',
                     '2024-02-27 09:07:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (344, 93, 
                     'T10', 'RC2',
                     '2024-03-03',
                     '2024-04-25',
                     NULL,
                     '2024-06-05',
                     '2024-07-01',
                     '2024-03-03',
                     '2024-04-25',
                     NULL,
                     '2024-06-05',
                     '2024-07-01',
                     'Resource',
                     'Human resource reallocation',
                     'Sarah',
                     '2024-03-01 11:13:26');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (345, 94, 
                     'T04', 'RC1',
                     '2024-08-13',
                     '2024-09-10',
                     '2024-10-16',
                     '2024-11-28',
                     NULL,
                     '2024-08-13',
                     '2024-09-10',
                     '2024-10-16',
                     '2024-11-28',
                     NULL,
                     'Other',
                     'Special requirement change',
                     'Kate',
                     '2024-08-08 12:53:37');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (346, 94, 
                     'T07', 'RC1',
                     '2024-06-21',
                     '2024-07-11',
                     '2024-08-12',
                     '2024-09-23',
                     '2024-10-22',
                     '2024-06-22',
                     '2024-07-12',
                     '2024-08-12',
                     NULL,
                     '2024-10-22',
                     'Lead time',
                     'Production cycle optimization',
                     'Kate',
                     '2024-06-04 09:37:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (347, 95, 
                     'T10', 'RC2',
                     '2024-07-04',
                     '2024-07-22',
                     '2024-09-03',
                     NULL,
                     '2024-10-26',
                     '2024-07-04',
                     '2024-07-22',
                     '2024-09-06',
                     '2024-10-08',
                     '2024-10-29',
                     'Lead time',
                     'Delivery time adjustment',
                     'Alice',
                     '2024-06-16 17:26:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (348, 95, 
                     'T09', 'RC3',
                     '2024-09-28',
                     '2024-11-02',
                     '2024-12-06',
                     '2024-12-28',
                     '2025-02-18',
                     NULL,
                     '2024-11-02',
                     '2024-12-06',
                     '2024-12-28',
                     '2025-02-18',
                     'Tanks issue',
                     'Performance issue fix',
                     'Alice',
                     '2024-09-25 16:04:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (349, 96, 
                     'T03', 'RC2',
                     '2024-03-17',
                     '2024-04-27',
                     '2024-05-20',
                     NULL,
                     '2024-07-19',
                     '2024-03-17',
                     '2024-04-27',
                     NULL,
                     '2024-06-22',
                     '2024-07-19',
                     'Inventory',
                     'Inventory level adjustment',
                     'Mary',
                     '2024-03-02 17:41:28');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (350, 96, 
                     'T10', 'RC1',
                     '2024-05-20',
                     NULL,
                     '2024-08-13',
                     '2024-08-29',
                     NULL,
                     '2024-05-20',
                     '2024-07-16',
                     '2024-08-13',
                     '2024-08-29',
                     '2024-10-04',
                     'Cost',
                     'Budget adjustment',
                     'David',
                     '2024-05-18 17:30:51');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (351, 96, 
                     'T02', 'RC3',
                     '2024-12-06',
                     '2024-12-23',
                     '2025-01-08',
                     NULL,
                     '2025-03-30',
                     '2024-12-06',
                     '2024-12-23',
                     '2025-01-08',
                     NULL,
                     '2025-03-30',
                     'Other',
                     'Special requirement change',
                     'Tom',
                     '2024-11-08 09:44:38');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (352, 96, 
                     'T06', 'RC3',
                     '2024-04-08',
                     '2024-04-12',
                     '2024-06-06',
                     '2024-06-23',
                     '2024-08-05',
                     '2024-04-08',
                     '2024-04-12',
                     NULL,
                     '2024-06-23',
                     NULL,
                     'Inventory',
                     'Inventory level adjustment',
                     'Bob',
                     '2024-03-10 15:45:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (353, 96, 
                     'T01', 'RC3',
                     '2024-05-31',
                     '2024-07-02',
                     '2024-07-23',
                     '2024-09-01',
                     '2024-09-30',
                     '2024-05-31',
                     '2024-07-02',
                     '2024-07-23',
                     NULL,
                     '2024-09-30',
                     'Resource',
                     'Resource allocation adjustment',
                     'John',
                     '2024-05-09 09:50:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (354, 97, 
                     'T04', 'RC2',
                     NULL,
                     '2024-06-07',
                     '2024-06-24',
                     '2024-07-23',
                     '2024-08-17',
                     '2024-04-20',
                     '2024-06-07',
                     '2024-06-24',
                     '2024-07-23',
                     '2024-08-17',
                     'Cost',
                     'Cost control optimization',
                     'Alice',
                     '2024-04-09 09:36:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (355, 97, 
                     'T08', 'RC3',
                     NULL,
                     '2024-06-02',
                     NULL,
                     '2024-07-13',
                     '2024-08-23',
                     NULL,
                     '2024-06-02',
                     NULL,
                     '2024-07-13',
                     '2024-08-23',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'John',
                     '2024-04-10 15:41:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (356, 97, 
                     'T01', 'RC3',
                     NULL,
                     '2024-10-11',
                     '2024-11-12',
                     '2024-12-19',
                     '2025-01-23',
                     NULL,
                     '2024-10-11',
                     '2024-11-12',
                     '2024-12-19',
                     '2025-01-23',
                     'Inventory',
                     'Inventory forecast change',
                     'John',
                     '2024-09-03 16:51:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (357, 97, 
                     'T10', 'RC1',
                     '2024-10-19',
                     NULL,
                     NULL,
                     '2025-01-17',
                     '2025-02-15',
                     '2024-10-19',
                     '2024-11-19',
                     '2024-12-13',
                     '2025-01-17',
                     '2025-02-15',
                     'Resource',
                     'Resource allocation adjustment',
                     'Tom',
                     '2024-10-01 15:50:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (358, 97, 
                     'T09', 'RC2',
                     '2024-11-22',
                     '2024-12-25',
                     NULL,
                     '2025-02-08',
                     '2025-03-21',
                     '2024-11-22',
                     '2024-12-25',
                     NULL,
                     '2025-02-08',
                     '2025-03-21',
                     'Cost',
                     'Cost structure change',
                     'John',
                     '2024-11-07 09:40:25');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (359, 98, 
                     'T08', 'RC2',
                     '2024-08-22',
                     '2024-08-29',
                     '2024-10-17',
                     '2024-11-20',
                     NULL,
                     '2024-08-22',
                     NULL,
                     '2024-10-17',
                     '2024-11-20',
                     '2024-12-18',
                     'Resource',
                     'Resource allocation adjustment',
                     'Alice',
                     '2024-07-27 12:42:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (360, 98, 
                     'T03', 'RC2',
                     '2024-05-02',
                     '2024-06-19',
                     NULL,
                     '2024-08-11',
                     '2024-09-17',
                     '2024-05-04',
                     '2024-06-19',
                     NULL,
                     '2024-08-11',
                     NULL,
                     'Schedule',
                     'Timeline adjustment',
                     'Tom',
                     '2024-04-24 16:30:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (361, 98, 
                     'T06', 'RC2',
                     '2024-01-27',
                     '2024-02-17',
                     '2024-03-22',
                     NULL,
                     '2024-05-25',
                     '2024-01-27',
                     '2024-02-17',
                     NULL,
                     '2024-04-19',
                     '2024-05-25',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Mike',
                     '2024-01-08 14:39:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (362, 98, 
                     'T02', 'RC3',
                     '2024-12-02',
                     '2024-12-23',
                     '2025-01-09',
                     '2025-03-07',
                     '2025-04-06',
                     '2024-12-02',
                     '2024-12-23',
                     NULL,
                     '2025-03-07',
                     NULL,
                     'Inventory',
                     'Safety stock update',
                     'Alice',
                     '2024-11-09 11:05:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (363, 98, 
                     'T07', 'RC2',
                     '2024-02-16',
                     '2024-03-02',
                     '2024-04-21',
                     '2024-05-11',
                     '2024-06-02',
                     NULL,
                     '2024-03-02',
                     '2024-04-24',
                     '2024-05-12',
                     '2024-06-02',
                     'Lead time',
                     'Lead time update',
                     'David',
                     '2024-01-26 10:26:01');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (364, 99, 
                     'T06', 'RC3',
                     '2024-06-17',
                     '2024-08-05',
                     '2024-08-23',
                     NULL,
                     '2024-10-23',
                     '2024-06-17',
                     '2024-08-05',
                     NULL,
                     NULL,
                     '2024-10-23',
                     'Inventory',
                     'Stock strategy optimization',
                     'Alice',
                     '2024-06-07 13:48:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (365, 99, 
                     'T04', 'RC2',
                     '2024-10-06',
                     '2024-11-17',
                     '2024-12-30',
                     '2025-01-17',
                     '2025-02-27',
                     '2024-10-09',
                     '2024-11-17',
                     '2024-12-30',
                     '2025-01-17',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'Mary',
                     '2024-10-02 10:01:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (366, 100, 
                     'T03', 'RC1',
                     NULL,
                     NULL,
                     '2024-05-19',
                     '2024-05-26',
                     '2024-06-28',
                     '2024-03-20',
                     NULL,
                     '2024-05-19',
                     '2024-05-26',
                     '2024-06-28',
                     'Other',
                     'Temporary adjustment',
                     'Tom',
                     '2024-02-22 17:46:41');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (367, 100, 
                     'T01', 'RC2',
                     '2024-08-04',
                     NULL,
                     '2024-09-13',
                     '2024-10-31',
                     '2024-11-18',
                     '2024-08-04',
                     NULL,
                     '2024-09-13',
                     '2024-10-31',
                     NULL,
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'John',
                     '2024-07-14 12:22:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (368, 101, 
                     'T06', 'RC3',
                     '2024-07-27',
                     '2024-08-24',
                     '2024-10-02',
                     '2024-11-15',
                     '2024-12-03',
                     '2024-07-27',
                     NULL,
                     '2024-10-05',
                     '2024-11-15',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'John',
                     '2024-07-22 13:46:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (369, 101, 
                     'T09', 'RC1',
                     '2024-03-29',
                     NULL,
                     '2024-06-14',
                     '2024-07-20',
                     '2024-08-11',
                     '2024-04-02',
                     '2024-04-29',
                     '2024-06-16',
                     '2024-07-20',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'Alice',
                     '2024-03-28 15:16:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (370, 101, 
                     'T01', 'RC2',
                     NULL,
                     '2024-10-11',
                     '2024-10-27',
                     '2024-12-12',
                     '2025-01-15',
                     '2024-09-05',
                     '2024-10-11',
                     '2024-10-27',
                     '2024-12-12',
                     NULL,
                     'Inventory',
                     'Stock strategy optimization',
                     'Mike',
                     '2024-08-18 11:39:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (371, 101, 
                     'T05', 'RC2',
                     '2024-05-30',
                     '2024-07-14',
                     NULL,
                     '2024-09-10',
                     '2024-10-23',
                     '2024-05-30',
                     '2024-07-14',
                     '2024-08-12',
                     NULL,
                     '2024-10-23',
                     'Resource',
                     'Capacity adjustment',
                     'Kate',
                     '2024-05-26 11:05:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (372, 101, 
                     'T01', 'RC2',
                     '2024-10-19',
                     '2024-12-06',
                     '2025-01-11',
                     '2025-02-02',
                     '2025-02-26',
                     NULL,
                     '2024-12-06',
                     NULL,
                     '2025-02-02',
                     '2025-02-26',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Emma',
                     '2024-10-18 15:48:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (373, 102, 
                     'T01', 'RC3',
                     '2024-05-28',
                     '2024-07-26',
                     '2024-08-08',
                     '2024-09-12',
                     '2024-10-01',
                     '2024-05-28',
                     '2024-07-28',
                     '2024-08-08',
                     '2024-09-13',
                     NULL,
                     'Lead time',
                     'Process time change',
                     'Alice',
                     '2024-05-28 14:39:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (374, 102, 
                     'T04', 'RC1',
                     '2024-03-18',
                     '2024-04-25',
                     NULL,
                     '2024-06-17',
                     '2024-07-25',
                     '2024-03-18',
                     '2024-04-25',
                     '2024-05-31',
                     '2024-06-17',
                     '2024-07-25',
                     'Inventory',
                     'Inventory forecast change',
                     'Mary',
                     '2024-03-12 13:21:35');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (375, 102, 
                     'T05', 'RC2',
                     '2024-03-21',
                     '2024-04-21',
                     NULL,
                     '2024-06-16',
                     NULL,
                     '2024-03-21',
                     '2024-04-21',
                     '2024-05-09',
                     '2024-06-21',
                     NULL,
                     'Schedule',
                     'Maintenance time change',
                     'David',
                     '2024-03-04 11:20:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (376, 103, 
                     'T09', 'RC2',
                     '2024-08-24',
                     '2024-09-28',
                     '2024-11-12',
                     '2024-11-26',
                     NULL,
                     '2024-08-24',
                     '2024-10-01',
                     '2024-11-12',
                     '2024-11-26',
                     NULL,
                     'Schedule',
                     'Schedule optimization',
                     'Alice',
                     '2024-08-18 12:58:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (377, 103, 
                     'T05', 'RC1',
                     '2024-05-10',
                     NULL,
                     '2024-06-10',
                     '2024-07-21',
                     '2024-09-01',
                     '2024-05-10',
                     '2024-06-01',
                     '2024-06-10',
                     '2024-07-21',
                     '2024-09-01',
                     'Schedule',
                     'Production schedule adjustment',
                     'John',
                     '2024-04-10 14:21:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (378, 103, 
                     'T09', 'RC3',
                     '2024-06-15',
                     '2024-08-02',
                     NULL,
                     '2024-09-20',
                     '2024-10-24',
                     '2024-06-15',
                     '2024-08-02',
                     '2024-08-20',
                     '2024-09-20',
                     NULL,
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Alice',
                     '2024-06-10 13:26:57');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (379, 103, 
                     'T02', 'RC2',
                     NULL,
                     '2024-07-03',
                     NULL,
                     '2024-08-04',
                     '2024-09-15',
                     '2024-05-23',
                     '2024-07-03',
                     NULL,
                     '2024-08-04',
                     '2024-09-15',
                     'Other',
                     'Other optimization',
                     'Emma',
                     '2024-05-04 14:18:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (380, 103, 
                     'T10', 'RC3',
                     '2024-09-24',
                     '2024-10-30',
                     '2024-12-15',
                     NULL,
                     '2025-02-08',
                     '2024-09-24',
                     '2024-10-30',
                     '2024-12-15',
                     '2024-12-26',
                     '2025-02-13',
                     'Schedule',
                     'Schedule optimization',
                     'Kate',
                     '2024-09-16 17:26:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (381, 104, 
                     'T05', 'RC2',
                     '2024-02-12',
                     '2024-03-17',
                     '2024-04-09',
                     NULL,
                     '2024-06-11',
                     '2024-02-12',
                     '2024-03-17',
                     '2024-04-09',
                     NULL,
                     NULL,
                     'Other',
                     'Temporary adjustment',
                     'Mike',
                     '2024-01-25 15:40:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (382, 104, 
                     'T06', 'RC1',
                     '2024-04-11',
                     '2024-05-14',
                     '2024-06-25',
                     '2024-07-08',
                     NULL,
                     NULL,
                     '2024-05-14',
                     '2024-06-25',
                     '2024-07-08',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'Tom',
                     '2024-04-01 09:58:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (383, 104, 
                     'T08', 'RC2',
                     '2024-11-21',
                     '2024-11-24',
                     '2025-01-04',
                     NULL,
                     '2025-03-14',
                     '2024-11-21',
                     '2024-11-24',
                     '2025-01-04',
                     '2025-02-05',
                     '2025-03-14',
                     'Cost',
                     'Cost structure change',
                     'Sarah',
                     '2024-10-22 16:33:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (384, 104, 
                     'T08', 'RC3',
                     '2024-11-24',
                     '2024-12-23',
                     '2025-01-27',
                     NULL,
                     '2025-04-05',
                     '2024-11-24',
                     '2024-12-23',
                     '2025-01-27',
                     '2025-02-28',
                     '2025-04-05',
                     'Cost',
                     'Cost control optimization',
                     'Mike',
                     '2024-11-09 11:26:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (385, 105, 
                     'T07', 'RC1',
                     NULL,
                     '2024-12-31',
                     '2025-01-06',
                     '2025-02-18',
                     '2025-03-20',
                     '2024-11-16',
                     '2024-12-31',
                     '2025-01-06',
                     '2025-02-18',
                     '2025-03-20',
                     'Lead time',
                     'Production cycle optimization',
                     'Mike',
                     '2024-11-05 17:43:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (386, 105, 
                     'T09', 'RC1',
                     '2024-01-22',
                     NULL,
                     '2024-03-17',
                     '2024-04-18',
                     '2024-06-01',
                     NULL,
                     '2024-03-15',
                     '2024-03-17',
                     '2024-04-18',
                     '2024-06-01',
                     'Cost',
                     'Cost structure change',
                     'Bob',
                     '2024-01-15 09:19:16');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (387, 105, 
                     'T01', 'RC1',
                     '2024-08-24',
                     '2024-09-21',
                     '2024-10-27',
                     '2024-12-08',
                     NULL,
                     '2024-08-24',
                     '2024-09-21',
                     '2024-10-27',
                     '2024-12-08',
                     NULL,
                     'Inventory',
                     'Stock strategy optimization',
                     'John',
                     '2024-08-12 17:54:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (388, 106, 
                     'T02', 'RC1',
                     NULL,
                     '2024-03-20',
                     '2024-04-02',
                     '2024-05-20',
                     '2024-06-22',
                     '2024-02-19',
                     NULL,
                     '2024-04-02',
                     '2024-05-22',
                     '2024-06-22',
                     'Schedule',
                     'Timeline adjustment',
                     'Mary',
                     '2024-01-25 11:13:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (389, 106, 
                     'T07', 'RC1',
                     '2024-11-16',
                     '2024-12-08',
                     NULL,
                     '2025-02-07',
                     NULL,
                     '2024-11-16',
                     '2024-12-08',
                     '2025-01-07',
                     '2025-02-07',
                     NULL,
                     'Inventory',
                     'Inventory forecast change',
                     'Alice',
                     '2024-10-18 13:07:08');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (390, 106, 
                     'T04', 'RC1',
                     '2024-09-29',
                     '2024-11-14',
                     '2024-11-27',
                     '2025-01-09',
                     '2025-01-28',
                     '2024-09-29',
                     '2024-11-14',
                     '2024-11-27',
                     NULL,
                     '2025-01-28',
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'Kate',
                     '2024-09-18 15:59:41');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (391, 106, 
                     'T09', 'RC2',
                     NULL,
                     '2024-12-23',
                     '2025-01-07',
                     '2025-02-12',
                     NULL,
                     NULL,
                     '2024-12-23',
                     '2025-01-07',
                     '2025-02-12',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'David',
                     '2024-10-25 15:27:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (392, 106, 
                     'T07', 'RC1',
                     '2024-01-10',
                     NULL,
                     '2024-04-07',
                     '2024-04-28',
                     '2024-05-13',
                     '2024-01-10',
                     NULL,
                     '2024-04-07',
                     '2024-04-28',
                     '2024-05-13',
                     'Cost',
                     'Cost control optimization',
                     'David',
                     '2024-01-10 14:49:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (393, 107, 
                     'T01', 'RC2',
                     '2024-08-08',
                     '2024-08-17',
                     '2024-09-20',
                     '2024-10-22',
                     NULL,
                     '2024-08-13',
                     NULL,
                     '2024-09-20',
                     '2024-10-22',
                     '2024-11-18',
                     'Schedule',
                     'Maintenance time change',
                     'Emma',
                     '2024-07-12 17:30:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (394, 107, 
                     'T01', 'RC3',
                     '2024-08-17',
                     '2024-10-01',
                     '2024-10-10',
                     '2024-11-22',
                     '2024-12-29',
                     '2024-08-17',
                     NULL,
                     '2024-10-10',
                     '2024-11-22',
                     '2024-12-29',
                     'Other',
                     'Special requirement change',
                     'Sarah',
                     '2024-08-03 11:32:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (395, 107, 
                     'T08', 'RC2',
                     NULL,
                     '2024-04-27',
                     '2024-05-10',
                     '2024-06-09',
                     '2024-07-30',
                     '2024-04-06',
                     '2024-04-27',
                     '2024-05-10',
                     '2024-06-09',
                     '2024-07-30',
                     'Inventory',
                     'Safety stock update',
                     'David',
                     '2024-03-10 13:22:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (396, 107, 
                     'T05', 'RC1',
                     '2024-10-16',
                     '2024-11-17',
                     '2025-01-08',
                     NULL,
                     '2025-03-08',
                     NULL,
                     '2024-11-17',
                     '2025-01-08',
                     NULL,
                     '2025-03-08',
                     'Inventory',
                     'Stock strategy optimization',
                     'Mary',
                     '2024-10-14 10:38:01');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (397, 108, 
                     'T05', 'RC1',
                     '2024-05-07',
                     '2024-06-17',
                     '2024-07-07',
                     '2024-08-24',
                     NULL,
                     '2024-05-07',
                     '2024-06-17',
                     '2024-07-07',
                     '2024-08-24',
                     '2024-09-01',
                     'Resource',
                     'Equipment resource optimization',
                     'Bob',
                     '2024-04-28 11:11:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (398, 108, 
                     'T07', 'RC2',
                     '2024-12-01',
                     '2024-12-25',
                     '2025-01-09',
                     '2025-02-21',
                     NULL,
                     '2024-12-01',
                     '2024-12-25',
                     NULL,
                     '2025-02-21',
                     '2025-03-15',
                     'Schedule',
                     'Schedule optimization',
                     'Mike',
                     '2024-11-02 12:07:44');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (399, 108, 
                     'T07', 'RC1',
                     '2024-07-31',
                     '2024-09-10',
                     NULL,
                     '2024-11-02',
                     '2024-12-20',
                     NULL,
                     '2024-09-10',
                     NULL,
                     '2024-11-02',
                     '2024-12-20',
                     'Resource',
                     'Equipment resource optimization',
                     'Bob',
                     '2024-07-24 12:15:49');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (400, 109, 
                     'T09', 'RC2',
                     '2024-09-13',
                     '2024-10-07',
                     '2024-11-20',
                     '2024-12-09',
                     '2025-01-18',
                     '2024-09-13',
                     '2024-10-07',
                     '2024-11-20',
                     '2024-12-09',
                     NULL,
                     'Cost',
                     'Cost control optimization',
                     'Emma',
                     '2024-09-02 09:27:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (401, 109, 
                     'T03', 'RC3',
                     NULL,
                     '2024-07-09',
                     '2024-08-27',
                     '2024-09-01',
                     '2024-10-29',
                     '2024-06-06',
                     '2024-07-09',
                     '2024-08-27',
                     '2024-09-01',
                     '2024-10-29',
                     'Resource',
                     'Human resource reallocation',
                     'Mike',
                     '2024-06-02 10:18:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (402, 109, 
                     'T08', 'RC2',
                     '2024-08-02',
                     '2024-09-05',
                     '2024-09-18',
                     '2024-10-13',
                     NULL,
                     '2024-08-02',
                     '2024-09-05',
                     '2024-09-18',
                     '2024-10-13',
                     '2024-12-03',
                     'Cost',
                     'Budget adjustment',
                     'John',
                     '2024-07-11 13:53:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (403, 110, 
                     'T01', 'RC2',
                     '2024-06-09',
                     '2024-07-06',
                     '2024-08-24',
                     '2024-09-24',
                     '2024-10-27',
                     '2024-06-09',
                     '2024-07-06',
                     '2024-08-24',
                     '2024-09-24',
                     NULL,
                     'Resource',
                     'Resource allocation adjustment',
                     'Mary',
                     '2024-06-02 12:02:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (404, 110, 
                     'T07', 'RC3',
                     '2024-02-21',
                     '2024-03-19',
                     '2024-04-21',
                     '2024-06-12',
                     '2024-07-09',
                     '2024-02-21',
                     NULL,
                     '2024-04-21',
                     NULL,
                     '2024-07-09',
                     'Cost',
                     'Expense optimization',
                     'Sarah',
                     '2024-02-16 12:51:45');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (405, 110, 
                     'T10', 'RC1',
                     '2024-03-31',
                     '2024-05-12',
                     '2024-05-23',
                     '2024-07-09',
                     '2024-07-21',
                     NULL,
                     '2024-05-12',
                     '2024-05-23',
                     '2024-07-09',
                     NULL,
                     'Cost',
                     'Cost structure change',
                     'Emma',
                     '2024-03-20 10:05:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (406, 110, 
                     'T02', 'RC1',
                     '2024-10-15',
                     '2024-11-17',
                     '2024-12-13',
                     '2025-01-13',
                     NULL,
                     '2024-10-15',
                     '2024-11-17',
                     '2024-12-16',
                     '2025-01-14',
                     '2025-02-13',
                     'Lead time',
                     'Delivery time adjustment',
                     'Mary',
                     '2024-09-19 09:24:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (407, 111, 
                     'T10', 'RC1',
                     '2024-10-06',
                     '2024-10-25',
                     NULL,
                     '2024-12-22',
                     '2025-01-31',
                     '2024-10-09',
                     '2024-10-25',
                     '2024-11-30',
                     '2024-12-24',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'Emma',
                     '2024-09-14 11:38:03');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (408, 111, 
                     'T01', 'RC1',
                     '2024-12-07',
                     '2025-01-06',
                     '2025-01-21',
                     '2025-02-12',
                     '2025-04-08',
                     '2024-12-07',
                     NULL,
                     '2025-01-24',
                     '2025-02-12',
                     '2025-04-08',
                     'Lead time',
                     'Lead time update',
                     'Mary',
                     '2024-11-09 17:53:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (409, 111, 
                     'T10', 'RC1',
                     NULL,
                     NULL,
                     '2024-12-05',
                     '2024-12-11',
                     '2025-01-26',
                     '2024-09-15',
                     NULL,
                     '2024-12-07',
                     '2024-12-11',
                     '2025-01-26',
                     'Schedule',
                     'Maintenance time change',
                     'Mike',
                     '2024-09-09 09:50:40');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (410, 112, 
                     'T08', 'RC2',
                     '2024-02-17',
                     NULL,
                     '2024-04-20',
                     '2024-05-21',
                     NULL,
                     '2024-02-17',
                     '2024-03-23',
                     '2024-04-20',
                     '2024-05-21',
                     NULL,
                     'Inventory',
                     'Safety stock update',
                     'Tom',
                     '2024-02-16 13:21:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (411, 112, 
                     'T10', 'RC3',
                     '2024-02-29',
                     '2024-03-19',
                     NULL,
                     '2024-06-09',
                     '2024-07-10',
                     NULL,
                     '2024-03-19',
                     '2024-05-11',
                     '2024-06-09',
                     '2024-07-10',
                     'Other',
                     'Other optimization',
                     'Alice',
                     '2024-02-11 13:56:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (412, 112, 
                     'T06', 'RC3',
                     '2024-03-20',
                     '2024-04-10',
                     '2024-05-21',
                     '2024-06-06',
                     '2024-07-28',
                     '2024-03-20',
                     '2024-04-10',
                     '2024-05-21',
                     NULL,
                     '2024-07-28',
                     'Resource',
                     'Equipment resource optimization',
                     'David',
                     '2024-03-03 10:59:22');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (413, 113, 
                     'T06', 'RC3',
                     NULL,
                     '2024-03-15',
                     '2024-04-08',
                     '2024-04-27',
                     '2024-06-18',
                     NULL,
                     '2024-03-15',
                     '2024-04-08',
                     '2024-04-27',
                     '2024-06-18',
                     'Inventory',
                     'Safety stock update',
                     'Emma',
                     '2024-01-22 11:30:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (414, 113, 
                     'T07', 'RC2',
                     '2024-08-12',
                     '2024-09-15',
                     '2024-09-30',
                     '2024-10-29',
                     '2024-11-24',
                     '2024-08-12',
                     '2024-09-15',
                     '2024-09-30',
                     NULL,
                     '2024-11-24',
                     'Other',
                     'Temporary adjustment',
                     'John',
                     '2024-07-18 13:16:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (415, 113, 
                     'T09', 'RC3',
                     '2024-08-22',
                     '2024-09-28',
                     '2024-11-01',
                     '2024-12-02',
                     NULL,
                     '2024-08-22',
                     '2024-09-28',
                     '2024-11-01',
                     '2024-12-02',
                     NULL,
                     'Inventory',
                     'Inventory level adjustment',
                     'Emma',
                     '2024-08-14 12:47:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (416, 113, 
                     'T02', 'RC1',
                     '2024-10-19',
                     '2024-10-23',
                     '2024-12-17',
                     NULL,
                     '2025-02-13',
                     '2024-10-19',
                     '2024-10-24',
                     '2024-12-17',
                     '2025-01-02',
                     '2025-02-15',
                     'Lead time',
                     'Production cycle optimization',
                     'Tom',
                     '2024-09-21 17:53:52');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (417, 114, 
                     'T07', 'RC1',
                     '2024-09-22',
                     NULL,
                     '2024-12-09',
                     '2024-12-26',
                     '2025-01-23',
                     '2024-09-22',
                     '2024-10-20',
                     '2024-12-09',
                     '2024-12-26',
                     '2025-01-23',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Alice',
                     '2024-09-17 09:35:33');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (418, 114, 
                     'T02', 'RC1',
                     '2024-04-23',
                     '2024-05-11',
                     '2024-06-10',
                     '2024-07-23',
                     '2024-08-15',
                     '2024-04-23',
                     '2024-05-14',
                     '2024-06-10',
                     '2024-07-27',
                     NULL,
                     'Schedule',
                     'Production schedule adjustment',
                     'Bob',
                     '2024-04-06 14:09:05');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (419, 114, 
                     'T07', 'RC1',
                     '2024-03-02',
                     '2024-03-26',
                     NULL,
                     NULL,
                     '2024-06-21',
                     '2024-03-02',
                     '2024-03-26',
                     NULL,
                     '2024-05-30',
                     '2024-06-21',
                     'Other',
                     'Minor plan update',
                     'John',
                     '2024-02-08 17:01:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (420, 115, 
                     'T08', 'RC3',
                     '2024-09-11',
                     '2024-10-03',
                     '2024-11-17',
                     '2024-11-22',
                     NULL,
                     '2024-09-11',
                     '2024-10-03',
                     '2024-11-17',
                     '2024-11-22',
                     '2024-12-22',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Bob',
                     '2024-08-21 12:13:24');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (421, 115, 
                     'T09', 'RC1',
                     '2024-01-14',
                     '2024-02-11',
                     NULL,
                     '2024-04-20',
                     '2024-05-11',
                     NULL,
                     '2024-02-11',
                     '2024-03-20',
                     '2024-04-20',
                     '2024-05-11',
                     'Other',
                     'Special requirement change',
                     'Bob',
                     '2024-01-09 12:00:20');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (422, 116, 
                     'T01', 'RC3',
                     '2024-05-14',
                     NULL,
                     '2024-07-03',
                     '2024-08-04',
                     '2024-09-29',
                     '2024-05-14',
                     '2024-06-25',
                     '2024-07-03',
                     '2024-08-04',
                     '2024-09-29',
                     'Inventory',
                     'Inventory level adjustment',
                     'David',
                     '2024-05-02 16:00:42');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (423, 116, 
                     'T04', 'RC2',
                     NULL,
                     '2024-12-06',
                     '2024-12-29',
                     '2025-01-23',
                     '2025-03-12',
                     '2024-11-02',
                     '2024-12-06',
                     '2024-12-29',
                     '2025-01-23',
                     '2025-03-12',
                     'Other',
                     'Temporary adjustment',
                     'Sarah',
                     '2024-10-19 13:19:43');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (424, 116, 
                     'T10', 'RC1',
                     '2024-05-07',
                     '2024-06-18',
                     '2024-07-06',
                     '2024-08-17',
                     NULL,
                     '2024-05-07',
                     '2024-06-18',
                     '2024-07-06',
                     '2024-08-17',
                     '2024-09-17',
                     'Resource',
                     'Resource allocation adjustment',
                     'David',
                     '2024-04-26 12:38:29');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (425, 117, 
                     'T10', 'RC2',
                     '2024-02-29',
                     '2024-04-19',
                     '2024-05-27',
                     '2024-05-31',
                     NULL,
                     '2024-03-01',
                     NULL,
                     '2024-05-27',
                     '2024-05-31',
                     NULL,
                     'Lead time',
                     'Delivery time adjustment',
                     'Mike',
                     '2024-02-28 17:35:10');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (426, 117, 
                     'T10', 'RC3',
                     '2024-04-03',
                     '2024-04-17',
                     '2024-05-28',
                     '2024-06-15',
                     '2024-07-15',
                     '2024-04-05',
                     '2024-04-17',
                     '2024-05-31',
                     '2024-06-15',
                     NULL,
                     'Schedule',
                     'Schedule optimization',
                     'Tom',
                     '2024-03-09 13:48:32');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (427, 117, 
                     'T08', 'RC3',
                     NULL,
                     '2024-08-31',
                     NULL,
                     '2024-11-09',
                     '2024-12-13',
                     NULL,
                     '2024-09-02',
                     '2024-10-10',
                     '2024-11-09',
                     '2024-12-13',
                     'Lead time',
                     'Production cycle optimization',
                     'Emma',
                     '2024-07-24 12:45:27');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (428, 118, 
                     'T10', 'RC2',
                     '2024-02-09',
                     '2024-03-25',
                     '2024-04-30',
                     '2024-05-08',
                     NULL,
                     '2024-02-09',
                     NULL,
                     '2024-04-30',
                     '2024-05-08',
                     NULL,
                     'Cost',
                     'Expense optimization',
                     'Mike',
                     '2024-02-05 12:51:07');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (429, 118, 
                     'T02', 'RC3',
                     '2024-12-03',
                     '2025-01-27',
                     '2025-02-19',
                     '2025-03-27',
                     '2025-04-01',
                     '2024-12-03',
                     '2025-01-27',
                     '2025-02-19',
                     NULL,
                     '2025-04-01',
                     'Cost',
                     'Budget adjustment',
                     'Kate',
                     '2024-11-28 11:00:35');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (430, 118, 
                     'T06', 'RC1',
                     '2024-10-31',
                     NULL,
                     NULL,
                     '2025-01-13',
                     '2025-02-12',
                     '2024-10-31',
                     '2024-11-26',
                     '2024-12-21',
                     '2025-01-13',
                     '2025-02-12',
                     'Other',
                     'Other optimization',
                     'Sarah',
                     '2024-10-11 16:00:02');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (431, 119, 
                     'T10', 'RC2',
                     '2024-01-24',
                     '2024-03-02',
                     '2024-04-18',
                     NULL,
                     '2024-06-06',
                     NULL,
                     '2024-03-02',
                     '2024-04-18',
                     NULL,
                     '2024-06-06',
                     'Inventory',
                     'Inventory forecast change',
                     'Bob',
                     '2024-01-20 09:42:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (432, 119, 
                     'T06', 'RC3',
                     '2024-02-08',
                     NULL,
                     '2024-04-16',
                     '2024-05-24',
                     '2024-06-27',
                     '2024-02-08',
                     '2024-03-28',
                     '2024-04-16',
                     '2024-05-24',
                     '2024-06-29',
                     'Schedule',
                     'Timeline adjustment',
                     'Mary',
                     '2024-02-03 11:32:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (433, 120, 
                     'T10', 'RC2',
                     '2024-12-08',
                     '2025-01-09',
                     '2025-02-13',
                     NULL,
                     '2025-04-16',
                     '2024-12-08',
                     NULL,
                     '2025-02-13',
                     NULL,
                     '2025-04-16',
                     'Other',
                     'Temporary adjustment',
                     'Sarah',
                     '2024-11-26 15:28:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (434, 120, 
                     'T07', 'RC2',
                     '2024-09-11',
                     '2024-10-09',
                     '2024-10-14',
                     '2024-11-29',
                     '2025-01-08',
                     '2024-09-11',
                     '2024-10-09',
                     NULL,
                     '2024-11-29',
                     NULL,
                     'Resource',
                     'Equipment resource optimization',
                     'Mike',
                     '2024-08-14 15:04:13');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (435, 121, 
                     'T06', 'RC1',
                     '2024-08-02',
                     '2024-08-19',
                     '2024-10-03',
                     NULL,
                     '2024-11-21',
                     '2024-08-02',
                     '2024-08-19',
                     '2024-10-03',
                     '2024-10-19',
                     '2024-11-21',
                     'Cost',
                     'Cost structure change',
                     'John',
                     '2024-07-05 17:14:11');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (436, 121, 
                     'T03', 'RC1',
                     '2024-09-26',
                     '2024-10-31',
                     '2024-11-16',
                     '2024-12-26',
                     '2025-02-01',
                     '2024-09-26',
                     NULL,
                     NULL,
                     '2024-12-26',
                     '2025-02-01',
                     'Cost',
                     'Cost structure change',
                     'Bob',
                     '2024-09-16 14:27:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (437, 122, 
                     'T01', 'RC1',
                     '2024-04-26',
                     '2024-05-29',
                     '2024-07-03',
                     NULL,
                     '2024-08-23',
                     '2024-04-26',
                     '2024-05-29',
                     '2024-07-03',
                     '2024-07-29',
                     '2024-08-23',
                     'Tanks issue',
                     'Equipment maintenance required',
                     'Mary',
                     '2024-04-21 13:14:09');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (438, 122, 
                     'T06', 'RC3',
                     NULL,
                     '2024-06-04',
                     '2024-07-11',
                     '2024-08-07',
                     '2024-09-07',
                     NULL,
                     '2024-06-04',
                     '2024-07-11',
                     '2024-08-07',
                     '2024-09-07',
                     'Inventory',
                     'Inventory level adjustment',
                     'Mike',
                     '2024-04-18 14:12:01');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (439, 122, 
                     'T03', 'RC1',
                     NULL,
                     '2024-11-29',
                     '2025-01-03',
                     '2025-02-08',
                     '2025-03-13',
                     NULL,
                     '2024-11-29',
                     '2025-01-03',
                     '2025-02-08',
                     '2025-03-13',
                     'Resource',
                     'Equipment resource optimization',
                     'Mike',
                     '2024-10-24 09:52:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (440, 123, 
                     'T07', 'RC2',
                     '2024-08-01',
                     '2024-09-21',
                     '2024-10-18',
                     '2024-11-04',
                     '2024-12-04',
                     '2024-08-01',
                     '2024-09-21',
                     '2024-10-18',
                     NULL,
                     '2024-12-04',
                     'Cost',
                     'Cost structure change',
                     'Kate',
                     '2024-07-26 14:52:39');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (441, 123, 
                     'T06', 'RC2',
                     '2024-02-13',
                     '2024-03-20',
                     '2024-04-13',
                     '2024-05-16',
                     NULL,
                     '2024-02-13',
                     '2024-03-20',
                     '2024-04-13',
                     '2024-05-16',
                     '2024-06-22',
                     'Inventory',
                     'Stock strategy optimization',
                     'Mike',
                     '2024-02-12 12:41:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (442, 124, 
                     'T06', 'RC2',
                     '2024-12-06',
                     '2024-12-22',
                     '2025-02-02',
                     '2025-03-05',
                     '2025-03-31',
                     NULL,
                     '2024-12-22',
                     NULL,
                     '2025-03-05',
                     '2025-03-31',
                     'Cost',
                     'Budget adjustment',
                     'David',
                     '2024-11-21 16:34:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (443, 124, 
                     'T10', 'RC1',
                     '2024-09-28',
                     NULL,
                     '2024-11-26',
                     '2024-12-24',
                     '2025-01-26',
                     '2024-09-28',
                     NULL,
                     '2024-11-28',
                     '2024-12-27',
                     '2025-01-26',
                     'Lead time',
                     'Lead time update',
                     'David',
                     '2024-09-23 09:12:58');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (444, 125, 
                     'T06', 'RC3',
                     NULL,
                     '2025-01-07',
                     '2025-02-15',
                     '2025-03-17',
                     '2025-04-08',
                     NULL,
                     '2025-01-07',
                     '2025-02-15',
                     NULL,
                     '2025-04-08',
                     'Tanks issue',
                     'Performance issue fix',
                     'Kate',
                     '2024-11-24 11:28:34');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (445, 125, 
                     'T06', 'RC1',
                     '2024-03-03',
                     NULL,
                     '2024-05-11',
                     '2024-06-18',
                     '2024-07-12',
                     '2024-03-03',
                     '2024-04-01',
                     '2024-05-11',
                     '2024-06-18',
                     '2024-07-12',
                     'Resource',
                     'Human resource reallocation',
                     'Sarah',
                     '2024-03-01 13:37:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (446, 125, 
                     'T08', 'RC2',
                     NULL,
                     '2024-08-03',
                     '2024-08-22',
                     NULL,
                     '2024-10-28',
                     '2024-07-17',
                     '2024-08-03',
                     '2024-08-22',
                     '2024-09-30',
                     '2024-10-28',
                     'Cost',
                     'Expense optimization',
                     'Tom',
                     '2024-06-18 12:22:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (447, 125, 
                     'T08', 'RC3',
                     '2024-06-09',
                     '2024-07-24',
                     '2024-08-24',
                     NULL,
                     '2024-10-03',
                     NULL,
                     '2024-07-24',
                     '2024-08-24',
                     '2024-09-29',
                     '2024-10-03',
                     'Resource',
                     'Human resource reallocation',
                     'Alice',
                     '2024-06-04 12:14:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (448, 126, 
                     'T09', 'RC1',
                     NULL,
                     '2025-01-08',
                     '2025-02-11',
                     '2025-02-28',
                     '2025-04-07',
                     NULL,
                     '2025-01-08',
                     NULL,
                     '2025-02-28',
                     '2025-04-07',
                     'Other',
                     'Other optimization',
                     'Sarah',
                     '2024-11-25 15:15:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (449, 126, 
                     'T03', 'RC2',
                     '2024-02-13',
                     NULL,
                     '2024-05-02',
                     '2024-05-24',
                     '2024-07-04',
                     '2024-02-13',
                     '2024-03-12',
                     '2024-05-02',
                     '2024-05-24',
                     NULL,
                     'Cost',
                     'Expense optimization',
                     'Mary',
                     '2024-02-09 09:43:04');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (450, 126, 
                     'T08', 'RC1',
                     '2024-06-12',
                     '2024-06-17',
                     '2024-08-01',
                     NULL,
                     '2024-10-05',
                     '2024-06-12',
                     '2024-06-17',
                     NULL,
                     '2024-08-22',
                     '2024-10-05',
                     'Inventory',
                     'Stock strategy optimization',
                     'David',
                     '2024-05-17 10:53:47');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (451, 127, 
                     'T05', 'RC3',
                     '2024-01-27',
                     '2024-02-28',
                     NULL,
                     '2024-04-26',
                     '2024-06-04',
                     '2024-01-27',
                     '2024-02-28',
                     NULL,
                     '2024-04-26',
                     '2024-06-04',
                     'Cost',
                     'Budget adjustment',
                     'Kate',
                     '2024-01-11 16:30:18');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (452, 127, 
                     'T06', 'RC3',
                     '2024-10-13',
                     NULL,
                     '2024-12-14',
                     '2025-01-15',
                     '2025-02-08',
                     '2024-10-13',
                     NULL,
                     '2024-12-14',
                     '2025-01-15',
                     '2025-02-08',
                     'Inventory',
                     'Stock strategy optimization',
                     'Kate',
                     '2024-10-02 16:11:54');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (453, 127, 
                     'T08', 'RC2',
                     '2024-03-16',
                     '2024-04-10',
                     NULL,
                     '2024-06-23',
                     NULL,
                     '2024-03-16',
                     '2024-04-10',
                     '2024-06-01',
                     '2024-06-23',
                     NULL,
                     'Other',
                     'Minor plan update',
                     'Mike',
                     '2024-03-03 16:09:50');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (454, 127, 
                     'T03', 'RC2',
                     '2024-02-18',
                     '2024-03-25',
                     '2024-05-03',
                     '2024-05-27',
                     '2024-06-04',
                     '2024-02-18',
                     NULL,
                     '2024-05-03',
                     '2024-05-27',
                     '2024-06-05',
                     'Lead time',
                     'Process time change',
                     'Mike',
                     '2024-02-03 12:42:36');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (455, 127, 
                     'T07', 'RC2',
                     '2024-02-05',
                     '2024-02-18',
                     '2024-03-31',
                     '2024-04-17',
                     '2024-06-06',
                     '2024-02-05',
                     NULL,
                     '2024-03-31',
                     '2024-04-17',
                     NULL,
                     'Cost',
                     'Expense optimization',
                     'Emma',
                     '2024-01-13 10:16:38');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (456, 128, 
                     'T08', 'RC2',
                     NULL,
                     '2024-10-14',
                     '2024-11-06',
                     '2024-12-15',
                     '2024-12-25',
                     '2024-09-12',
                     '2024-10-14',
                     '2024-11-06',
                     '2024-12-15',
                     '2024-12-30',
                     'Schedule',
                     'Timeline adjustment',
                     'John',
                     '2024-08-23 12:06:46');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (457, 128, 
                     'T07', 'RC1',
                     '2024-04-10',
                     '2024-04-25',
                     '2024-06-03',
                     '2024-06-21',
                     '2024-08-10',
                     '2024-04-10',
                     '2024-04-25',
                     '2024-06-03',
                     '2024-06-21',
                     NULL,
                     'Other',
                     'Special requirement change',
                     'John',
                     '2024-03-15 14:57:19');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (458, 129, 
                     'T08', 'RC3',
                     NULL,
                     '2024-12-23',
                     '2025-01-25',
                     '2025-03-05',
                     '2025-04-05',
                     '2024-12-08',
                     NULL,
                     '2025-01-26',
                     '2025-03-05',
                     '2025-04-05',
                     'Lead time',
                     'Process time change',
                     'Bob',
                     '2024-11-08 13:43:00');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (459, 129, 
                     'T10', 'RC2',
                     NULL,
                     '2024-10-09',
                     '2024-11-04',
                     '2024-12-14',
                     NULL,
                     '2024-09-04',
                     '2024-10-09',
                     '2024-11-04',
                     '2024-12-14',
                     '2025-01-22',
                     'Lead time',
                     'Lead time update',
                     'Mike',
                     '2024-08-26 15:47:48');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (460, 129, 
                     'T01', 'RC1',
                     '2024-09-19',
                     '2024-10-17',
                     '2024-11-10',
                     '2024-12-22',
                     NULL,
                     '2024-09-19',
                     NULL,
                     '2024-11-10',
                     '2024-12-22',
                     NULL,
                     'Tanks issue',
                     'Equipment upgrade needed',
                     'John',
                     '2024-08-28 10:44:53');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (461, 129, 
                     'T06', 'RC3',
                     NULL,
                     NULL,
                     '2024-05-10',
                     '2024-06-12',
                     '2024-07-22',
                     NULL,
                     NULL,
                     '2024-05-10',
                     '2024-06-12',
                     '2024-07-22',
                     'Cost',
                     'Cost control optimization',
                     'Sarah',
                     '2024-03-07 10:44:30');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (462, 130, 
                     'T06', 'RC1',
                     NULL,
                     '2024-10-06',
                     '2024-12-01',
                     '2024-12-13',
                     '2025-01-11',
                     '2024-09-15',
                     '2024-10-06',
                     '2024-12-01',
                     '2024-12-14',
                     '2025-01-11',
                     'Lead time',
                     'Production cycle optimization',
                     'Sarah',
                     '2024-09-02 11:35:15');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (463, 130, 
                     'T01', 'RC2',
                     '2024-07-26',
                     '2024-08-25',
                     '2024-10-03',
                     '2024-11-08',
                     '2024-12-15',
                     '2024-07-26',
                     '2024-08-25',
                     NULL,
                     '2024-11-08',
                     '2024-12-15',
                     'Inventory',
                     'Inventory level adjustment',
                     'David',
                     '2024-07-18 17:47:31');
            

                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    (464, 130, 
                     'T09', 'RC3',
                     '2024-06-21',
                     '2024-08-03',
                     '2024-09-03',
                     '2024-09-14',
                     NULL,
                     '2024-06-21',
                     '2024-08-03',
                     '2024-09-03',
                     '2024-09-14',
                     '2024-10-25',
                     'Tanks issue',
                     'Technical parameter adjustment',
                     'Sarah',
                     '2024-06-05 10:05:12');
            