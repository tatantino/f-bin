-- 删除已存在的表
DROP TABLE IF EXISTS app_tank_plan_detail;
DROP TABLE IF EXISTS app_tank_plan_master;
DROP TABLE IF EXISTS app_tank;
DROP TABLE IF EXISTS app_tank_changes;
DROP TABLE IF EXISTS app_tank_plan_change_hist;
DROP TABLE IF EXISTS app_dmd_change_master;
DROP TABLE IF EXISTS app_dmd_change_detail;
DROP TABLE IF EXISTS vw_demand_summary;
DROP TABLE IF EXISTS composition_group_mapping;
DROP TABLE IF EXISTS app_tankplan_override;
-- 创建主表
CREATE TABLE app_tank_plan_master (
    plan_master_id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_version VARCHAR(50) NOT NULL,
    plan_type VARCHAR(20) NOT NULL,
    plan_official VARCHAR(20),
    plan_version_no INTEGER NOT NULL,
    plan_version_parent INTEGER,
    version_match VARCHAR(50),
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (plan_version_parent) REFERENCES app_tank_plan_master(plan_master_id)
);
-- 创建触发器自动更新 update_timestamp
CREATE TRIGGER IF NOT EXISTS trig_app_tank_plan_master_update
AFTER
UPDATE ON app_tank_plan_master BEGIN
UPDATE app_tank_plan_master
SET update_timestamp = CURRENT_TIMESTAMP
WHERE plan_master_id = NEW.plan_master_id;
END;
-- 创建明细表
CREATE TABLE app_tank_plan_detail (
    plan_detail_id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_master_id INTEGER NOT NULL,
    plan_row_id INTEGER NOT NULL,
    tank VARCHAR(20) NOT NULL,
    iso VARCHAR(50),
    glass_type VARCHAR(50),
    gen VARCHAR(20),
    RT VARCHAR(20),
    RC VARCHAR(20),
    platform VARCHAR(50),
    design_asis VARCHAR(100),
    tank_life FLOAT,
    last_tank_light_date DATE,
    drain_date DATE,
    repair_date DATE,
    RTL_date DATE,
    TL_date DATE,
    GG_date DATE,
    cold_idle FLOAT,
    repair_LT FLOAT,
    RTL_LT FLOAT,
    TL_LT FLOAT,
    remark_category VARCHAR(50),
    remark TEXT,
    comment TEXT,
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (plan_master_id, plan_row_id),
    FOREIGN KEY (plan_master_id) REFERENCES app_tank_plan_master(plan_master_id)
);
-- 创建变更历史表
CREATE TABLE app_tank_plan_change_hist (
    plan_change_hist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_master_id INTEGER NOT NULL,
    tank VARCHAR(20) NOT NULL,
    RC VARCHAR(20) NOT NULL,
    drain_date_o DATE,
    repair_date_o DATE,
    RTL_date_o DATE,
    TL_date_o DATE,
    GG_date_o DATE,
    drain_date_n DATE,
    repair_date_n DATE,
    RTL_date_n DATE,
    TL_date_n DATE,
    GG_date_n DATE,
    remark_category VARCHAR(50) NOT NULL,
    remark VARCHAR(200) NOT NULL,
    username VARCHAR(50) NOT NULL,
    plan_change_hist_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plan_master_id) REFERENCES app_tank_plan_master(plan_master_id)
);
-- 创建索引
CREATE INDEX idx_plan_version ON app_tank_plan_master(plan_version);
CREATE INDEX idx_plan_type ON app_tank_plan_master(plan_type);
CREATE INDEX idx_plan_master_id ON app_tank_plan_detail(plan_master_id);
CREATE INDEX idx_tank ON app_tank_plan_detail(tank);
CREATE INDEX IF NOT EXISTS idx_change_history_plan_master_id ON app_tank_plan_change_hist(plan_master_id);
CREATE INDEX IF NOT EXISTS idx_tank ON app_tank_plan_change_hist(tank);
CREATE INDEX IF NOT EXISTS idx_plan_change_hist_timestamp ON app_tank_plan_change_hist(plan_change_hist_timestamp);
-- 修改或添加索引以支持排序
CREATE INDEX idx_plan_master_version ON app_tank_plan_master(plan_version DESC, create_timestamp DESC);
CREATE INDEX idx_plan_detail_row ON app_tank_plan_detail(plan_row_id ASC, create_timestamp DESC);
CREATE INDEX idx_history_timestamp ON app_tank_plan_change_hist(plan_change_hist_timestamp DESC);
-- Tank基础信息表
CREATE TABLE app_tank (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tank VARCHAR(20) NOT NULL,
    BU VARCHAR(50),
    region VARCHAR(50),
    region_seq INTEGER,
    location VARCHAR(100),
    iso VARCHAR(50),
    platform VARCHAR(50),
    metal_shop VARCHAR(50),
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 创建索引
CREATE INDEX IF NOT EXISTS idx_app_tank_tank ON app_tank(tank);
CREATE INDEX IF NOT EXISTS idx_app_tank_bu ON app_tank(BU);
CREATE INDEX IF NOT EXISTS idx_app_tank_region ON app_tank(region);
-- Create app_dmd_change_master table
CREATE TABLE IF NOT EXISTS app_dmd_change_master (
    dmd_change_master_id TEXT PRIMARY KEY,
    dmd_sp_gb_name TEXT,
    tank_plan_master_id TEXT,
    dmd_remark TEXT,
    dmd_change_name TEXT,
    dmd_change_unit TEXT,
    username TEXT,
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tank_plan_master_id) REFERENCES app_tank_plan_master(plan_master_id) ON DELETE CASCADE
);
-- Create trigger for app_dmd_change_master update_timestamp
CREATE TRIGGER IF NOT EXISTS update_app_dmd_change_master_timestamp
AFTER
UPDATE ON app_dmd_change_master BEGIN
UPDATE app_dmd_change_master
SET update_timestamp = CURRENT_TIMESTAMP
WHERE dmd_change_master_id = NEW.dmd_change_master_id;
END;
-- Create app_dmd_change_detail table
CREATE TABLE IF NOT EXISTS app_dmd_change_detail (
    dmd_change_detail_id TEXT PRIMARY KEY,
    dmd_change_master_id TEXT NOT NULL,
    business_unit TEXT,
    region TEXT,
    gen_group TEXT,
    gen_size TEXT,
    composition_group TEXT,
    composition TEXT,
    customer TEXT,
    TFT_customer TEXT,
    TFT_region TEXT,
    area TEXT,
    thickness TEXT,
    grade TEXT,
    dmd_year TEXT,
    dmd_quarter TEXT,
    dmd_value REAL,
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dmd_change_master_id) REFERENCES app_dmd_change_master(dmd_change_master_id) ON DELETE CASCADE
);
-- Create trigger for app_dmd_change_detail update_timestamp
CREATE TRIGGER IF NOT EXISTS update_app_dmd_change_detail_timestamp
AFTER
UPDATE ON app_dmd_change_detail BEGIN
UPDATE app_dmd_change_detail
SET update_timestamp = CURRENT_TIMESTAMP
WHERE dmd_change_detail_id = NEW.dmd_change_detail_id;
END;
-- Create vw_demand_summary table
DROP TABLE IF EXISTS vw_demand_summary;
CREATE TABLE IF NOT EXISTS vw_demand_summary (
    sp_gb_version VARCHAR(50),
    sp_version VARCHAR(50),
    gb_version VARCHAR(50),
    business_unit VARCHAR(50),
    region VARCHAR(50),
    customer VARCHAR(50),
    TFT_customer VARCHAR(50),
    gen_group VARCHAR(50),
    composition_group VARCHAR(50),
    date_YYYYQQ VARCHAR(10),
    kpcs REAL,
    msqft REAL,
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create trigger for vw_demand_summary update_timestamp
CREATE TRIGGER IF NOT EXISTS update_vw_demand_summary_timestamp
AFTER
UPDATE ON vw_demand_summary BEGIN
UPDATE vw_demand_summary
SET update_timestamp = CURRENT_TIMESTAMP
WHERE rowid = NEW.rowid;
END;
-- Create composition_group_mapping table
CREATE TABLE IF NOT EXISTS composition_group_mapping (
    BU VARCHAR(10),
    gen VARCHAR(10),
    gen_group VARCHAR(20),
    composition VARCHAR(20),
    composition_group VARCHAR(20),
    isopipe_mapping_1st VARCHAR(20),
    allocation_1st REAL,
    isopipe_mapping_2nd VARCHAR(20),
    allocation_2nd REAL,
    isopipe_mapping_3rd VARCHAR(20),
    allocation_3rd REAL,
    isopipe_mapping_4th VARCHAR(20),
    allocation_4th REAL,
    create_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create trigger for composition_group_mapping update_timestamp
CREATE TRIGGER IF NOT EXISTS update_composition_group_mapping_timestamp
AFTER
UPDATE ON composition_group_mapping BEGIN
UPDATE composition_group_mapping
SET update_timestamp = CURRENT_TIMESTAMP
WHERE rowid = NEW.rowid;
END;
-- 导入测试数据（如果存在）
--
.print 'Checking for test data files...'
--
.print 'Attempting to import master test data...'
--
.read test_master_data.sql
--
.print 'Attempting to import detail test data...'
--
.read test_detail_data.sql
--
.print 'Attempting to import history test data...'
--
.read test_change_history.sql
--
.print 'Attempting to import tank info test data...'
--
.read test_app_tank.sql
--
.print 'Attempting to import demand change test data...'
--
.read test_dmd_change.sql
--
.print 'Attempting to import demand summary test data...'
--
.read test_demand_summary.sql
--
.print 'Database initialization completed.'
-- Create app_tankplan_override table
DROP TABLE IF EXISTS app_tankplan_override;
CREATE TABLE IF NOT EXISTS app_tankplan_override (
    override_id TEXT PRIMARY KEY,
    override_type_no INTEGER,
    override_type TEXT,
    tank TEXT,
    override_variable TEXT,
    override_value TEXT,
    period_from DATE,
    period_to DATE,
    effective_from DATE,
    effective_to DATE,
    comment TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by TEXT,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by TEXT,
    affect_module TEXT,
    change_type TEXT
);
-- Create trigger for app_tankplan_override update_date
CREATE TRIGGER IF NOT EXISTS update_app_tankplan_override_timestamp
AFTER
UPDATE ON app_tankplan_override BEGIN
UPDATE app_tankplan_override
SET updated_date = CURRENT_TIMESTAMP
WHERE override_id = NEW.override_id;
END;
-- Create indexes for app_tankplan_override
CREATE INDEX IF NOT EXISTS idx_override_tank ON app_tankplan_override(tank);
CREATE INDEX IF NOT EXISTS idx_override_type ON app_tankplan_override(override_type);
CREATE INDEX IF NOT EXISTS idx_override_effect_date ON app_tankplan_override(effective_from, effective_to);