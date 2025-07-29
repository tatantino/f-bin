#!/bin/bash

# 设置数据库文件路径
DB_FILE="tank_plan.db"
SQL_FILE="init.sql"
COMPOSITION_GROUP_SQL="insert_composition_group_mapping.sql"
DEMAND_SUMMARY_SQL="insert_vw_demand_summary.sql"
PYTHON_SCRIPT="generate_test_data.py"

# 检查Python3是否安装
if ! command -v python3 &> /dev/null; then
    echo "Error: Python3 is required but not installed."
    exit 1
fi

# 检查数据库文件是否存在，如果存在则删除
if [ -f "$DB_FILE" ]; then
    echo "Removing existing database file..."
    rm "$DB_FILE"
fi

# 生成测试数据
echo "Generating test data..."
python3 "$PYTHON_SCRIPT"

# 创建新的数据库并执行初始化脚本
echo "Creating new database and initializing tables..."
sqlite3 "$DB_FILE" < "$SQL_FILE"

# 执行插入composition_group_mapping表的脚本
echo "Inserting composition_group_mapping data..."
sqlite3 "$DB_FILE" < "$COMPOSITION_GROUP_SQL"

# 执行插入vw_demand_summary表的脚本
echo "Inserting vw_demand_summary data..."
sqlite3 "$DB_FILE" < "$DEMAND_SUMMARY_SQL"

# 检查执行结果
if [ $? -eq 0 ]; then
    echo "Database initialization completed successfully!"
    
    # 显示数据统计
    echo -e "\n=== Data Statistics ==="
    echo "Master records: $(sqlite3 "$DB_FILE" "SELECT COUNT(*), plan_type, plan_official FROM app_tank_plan_master GROUP BY plan_type, plan_official;")"
    echo "Detail records: $(sqlite3 "$DB_FILE" "SELECT COUNT(*) FROM app_tank_plan_detail;")"
    echo "Tank info: $(sqlite3 "$DB_FILE" "SELECT COUNT(*) FROM app_tank;")"
    echo "Composition group mapping: $(sqlite3 "$DB_FILE" "SELECT COUNT(*) FROM composition_group_mapping;")"
    echo "Demand summary: $(sqlite3 "$DB_FILE" "SELECT COUNT(*) FROM vw_demand_summary;")"
    
    # 显示示例数据
    echo -e "\n=== Sample Data ==="
    echo -e "\nLatest Tank Plan Master:"
    sqlite3 "$DB_FILE" ".mode column
                       SELECT plan_master_id, plan_version, plan_type, plan_official, create_timestamp 
                       FROM app_tank_plan_master 
                       ORDER BY create_timestamp DESC LIMIT 3;"
    
    echo -e "\nLatest Tank Plan Detail:"
    sqlite3 "$DB_FILE" ".mode column
                       SELECT plan_detail_id, plan_master_id, tank, iso, glass_type, create_timestamp 
                       FROM app_tank_plan_detail 
                       ORDER BY create_timestamp DESC LIMIT 3;"
    
    echo -e "\nComposition Group Mapping Sample:"
    sqlite3 "$DB_FILE" ".mode column
                       SELECT BU, gen, gen_group, composition, composition_group 
                       FROM composition_group_mapping 
                       LIMIT 3;"
    
    echo -e "\nDemand Summary Sample:"
    sqlite3 "$DB_FILE" ".mode column
                       SELECT sp_gb_version, business_unit, region, customer, gen_group, composition_group, date_YYYYQQ, kpcs, msqft 
                       FROM vw_demand_summary 
                       LIMIT 3;"
    
    # 验证数据完整性
    echo -e "\n=== Data Integrity Check ==="
    echo "Checking foreign key constraints..."
    sqlite3 "$DB_FILE" "PRAGMA foreign_key_check;"
    
    # 检查索引
    echo -e "\n=== Database Indexes ==="
    sqlite3 "$DB_FILE" ".indexes"
else
    echo "Error: Database initialization failed!"
    exit 1
fi 