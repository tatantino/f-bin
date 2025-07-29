import random
from datetime import datetime, timedelta
import calendar

# 随机用户名列表 (移除中文名)
USERS = ['John', 'Mary', 'David', 'Sarah', 'Mike', 'Emma', 'Tom', 'Alice', 'Bob', 'Kate']

# Tank相关数据
TANKS = ['T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09', 'T10']
ISOS = ['ISO1', 'ISO2', 'ISO3', 'ISO4', 'ISO5']
GLASS_TYPES = ['Type A', 'Type B', 'Type C', 'Type D']
GENS = ['G8.5', 'G8.6', 'G10.5', 'G11']
RTS = ['RT1', 'RT2', 'RT3']
RCS = ['RC1', 'RC2', 'RC3']
PLATFORMS = ['Platform A', 'Platform B', 'Platform C']

# 添加新的常量定义
TANK_STATUSES = ['Active', 'Idle', 'Maintenance', 'Retired']
CHANGE_REASONS = [
    'Regular Maintenance', 
    'Performance Optimization', 
    'Equipment Upgrade', 
    'Issue Resolution',
    'Design Change'
]

def generate_timestamp(start_date: str | datetime, end_date: str | datetime) -> str:
    """
    生成指定日期范围内的随机时间戳
    
    Args:
        start_date: 开始日期，可以是 'YYYY-MM-DD' 格式的字符串或 datetime 对象
        end_date: 结束日期，可以是 'YYYY-MM-DD' 格式的字符串或 datetime 对象
    
    Returns:
        str: 格式化的时间戳字符串 'YYYY-MM-DD HH:MM:SS'
    """
    # 转换输入参数为datetime对象
    if isinstance(start_date, str):
        start = datetime.strptime(start_date, '%Y-%m-%d')
    else:
        start = start_date
        
    if isinstance(end_date, str):
        end = datetime.strptime(end_date, '%Y-%m-%d')
    else:
        end = end_date
    
    # 计算日期范围内的随机时间
    time_between_dates = end - start
    days_between = time_between_dates.days
    random_days = random.randrange(days_between)
    random_date = start + timedelta(days=random_days)
    
    # 添加随机时间
    random_date = random_date.replace(
        hour=random.randint(9, 17),  # 工作时间 9:00-17:00
        minute=random.randint(0, 59),
        second=random.randint(0, 59)
    )
    
    return random_date.strftime('%Y-%m-%d %H:%M:%S')

def get_last_weekly_master_id(master_records, current_date):
    """获取上一个周三的最新Weekly记录的plan_master_id"""
    last_wednesday = current_date - timedelta(days=7)
    last_records = [r for r in master_records 
                   if r['plan_type'] == 'Weekly' 
                   and r['plan_version'] == last_wednesday.strftime('%Y-%m-%d')]
    if last_records:
        return max(r['plan_master_id'] for r in last_records)
    return 'NULL'

def generate_master_data():
    # 获取过去一年的日期范围
    end_date = datetime.now()
    start_date = end_date - timedelta(days=365)
    current_date = start_date
    
    master_records = []
    plan_master_id = 1
    
    # 跟踪已使用的 plan_version 和 plan_type 组合
    used_version_types = set()
    
    # 为每个月选择一个周三作为18MP标记日
    monthly_18mp_dates = {}
    current = start_date
    while current <= end_date:
        year_month = current.strftime('%Y-%m')
        if year_month not in monthly_18mp_dates:
            month_wednesdays = []
            month_start = current.replace(day=1)
            month_end = (month_start + timedelta(days=32)).replace(day=1) - timedelta(days=1)
            temp_date = month_start
            while temp_date <= month_end:
                if temp_date.weekday() == 2:  # 周三
                    month_wednesdays.append(temp_date)
                temp_date += timedelta(days=1)
            if month_wednesdays:
                monthly_18mp_dates[year_month] = random.choice(month_wednesdays)
        current += timedelta(days=1)
    
    while current_date <= end_date:
        # 处理每周三的Weekly数据
        if current_date.weekday() == 2:  # 周三
            plan_version = current_date.strftime('%Y-%m-%d')
            version_type = (plan_version, 'Weekly')
            
            # 如果这个组合已经存在，跳过
            if version_type in used_version_types:
                current_date += timedelta(days=1)
                continue
                
            year_month = current_date.strftime('%Y-%m')
            is_18mp = (current_date.date() == monthly_18mp_dates[year_month].date())
            
            plan_official = '18MP' if is_18mp else ''
            version_match = current_date.strftime('%Y%m')
            
            record = {
                'plan_master_id': plan_master_id,
                'plan_version': plan_version,
                'plan_type': 'Weekly',
                'plan_official': plan_official,
                'plan_version_no': 1,
                'plan_version_parent': get_last_weekly_master_id(master_records, current_date),
                'version_match': version_match,
                'create_timestamp': generate_timestamp(start_date, end_date),
                'update_timestamp': generate_timestamp(start_date, end_date),
                'user_name': random.choice(USERS)
            }
            master_records.append(record)
            used_version_types.add(version_type)
            plan_master_id += 1
        
        # 处理月底的Long-term数据
        if current_date.day == calendar.monthrange(current_date.year, current_date.month)[1]:
            plan_version = current_date.strftime('%Y-%m-%d')
            version_type = (plan_version, 'Long-term')
            
            # 如果这个组合已经存在，跳过
            if version_type in used_version_types:
                current_date += timedelta(days=1)
                continue
                
            plan_official = 'GB' if current_date.month == 9 else ''
            version_match = current_date.strftime('%Y%m')
            
            record = {
                'plan_master_id': plan_master_id,
                'plan_version': plan_version,
                'plan_type': 'Long-term',
                'plan_official': plan_official,
                'plan_version_no': 1,
                'plan_version_parent': 'NULL',
                'version_match': version_match,
                'create_timestamp': generate_timestamp(start_date, end_date),
                'update_timestamp': generate_timestamp(start_date, end_date),
                'user_name': random.choice(USERS)
            }
            master_records.append(record)
            used_version_types.add(version_type)
            plan_master_id += 1
        
        current_date += timedelta(days=1)
    
    return master_records

def generate_detail_data(master_records):
    detail_records = []
    detail_id = 1
    
    for master in master_records:
        # 限制每个 master 记录生成的 detail 记录数量不超过可用的 tank 数量
        max_details = len(TANKS)  # 最多10个tanks
        num_details = random.randint(5, max_details)  # 改为5-10之间的随机数
        
        # 随机选择不重复的 tanks
        selected_tanks = random.sample(TANKS, num_details)
        
        for i in range(num_details):
            tank = selected_tanks[i]
            iso = random.choice(ISOS)
            glass_type = random.choice(GLASS_TYPES)
            gen = random.choice(GENS)
            rt = random.choice(RTS)
            rc = random.choice(RCS)
            platform = random.choice(PLATFORMS)
            
            # 生成随机日期
            base_date = datetime.strptime(master['plan_version'], '%Y-%m-%d')
            last_light_date = base_date - timedelta(days=random.randint(30, 180))
            
            # 生成连续的日期，确保日期顺序正确
            drain_date = base_date + timedelta(days=random.randint(30, 60))
            repair_date = drain_date + timedelta(days=random.randint(5, 15))  # 5-15天的Cold Idle
            rtl_date = repair_date + timedelta(days=random.randint(10, 30))   # 10-30天的Repair-LT
            tl_date = rtl_date + timedelta(days=random.randint(5, 15))        # 5-15天的RTL-LT
            gg_date = tl_date + timedelta(days=random.randint(5, 15))         # 5-15天的TL-LT
            
            # 计算实际的日期差值
            cold_idle = (repair_date - drain_date).days
            repair_lt = (rtl_date - repair_date).days
            rtl_lt = (tl_date - rtl_date).days
            tl_lt = (gg_date - tl_date).days
            
            detail_record = {
                'plan_detail_id': detail_id,
                'plan_master_id': master['plan_master_id'],
                'plan_row_id': i + 1,
                'tank': tank,
                'iso': iso,
                'glass_type': glass_type,
                'gen': gen,
                'RT': rt,
                'RC': rc,
                'platform': platform,
                'design_asis': f'Design {random.randint(1, 5)}',
                'tank_life': round(random.uniform(1.5, 5.0), 2),
                'last_tank_light_date': last_light_date.strftime('%Y-%m-%d'),
                'drain_date': drain_date.strftime('%Y-%m-%d'),
                'repair_date': repair_date.strftime('%Y-%m-%d'),
                'RTL_date': rtl_date.strftime('%Y-%m-%d'),
                'TL_date': tl_date.strftime('%Y-%m-%d'),
                'GG_date': gg_date.strftime('%Y-%m-%d'),
                'cold_idle': cold_idle,
                'repair_LT': repair_lt,
                'RTL_LT': rtl_lt,
                'TL_LT': tl_lt,
                'remark_category': random.choice(['Schedule', 'Resource', 'Cost', 'Lead time', 'Tanks issue', 'Inventory', 'Other']),
                'remark': f'Test Note {random.randint(1, 100)}',
                'comment': f'Test Comment {random.randint(1, 100)}',
            }
            
            detail_records.append(detail_record)
            detail_id += 1
    
    return detail_records

    """生成历史记录数据"""
    history_records = []
    history_id = 1
    
    # 为每个master记录生成一些历史记录
    for master in master_records:
        # 获取该master下的所有detail记录
        related_details = [d for d in detail_records if d['plan_master_id'] == master['plan_master_id']]
        
        # 随机选择一些记录生成历史
        num_changes = random.randint(3, 8)
        for _ in range(num_changes):
            detail = random.choice(related_details)
            change_type = random.choice(['INSERT', 'UPDATE', 'DELETE'])
            
            if change_type == 'UPDATE':
                # 随机选择一个字段进行修改
                field_name = random.choice([
                    'tank_life', 'drain_date', 'repair_date', 'RTL_date',
                    'TL_date', 'GG_date', 'cold_idle', 'repair_LT', 'RTL_LT', 'TL_LT'
                ])
                
                if field_name.endswith('date'):
                    old_value = (datetime.now() - timedelta(days=random.randint(30, 365))).strftime('%Y-%m-%d')
                    new_value = (datetime.now() - timedelta(days=random.randint(30, 365))).strftime('%Y-%m-%d')
                else:
                    old_value = str(round(random.uniform(1.0, 5.0), 2))
                    new_value = str(round(random.uniform(1.0, 5.0), 2))
            else:
                field_name = 'ALL'
                old_value = 'NULL'
                new_value = 'NULL'
            
            record = {
                'history_id': history_id,
                'plan_master_id': master['plan_master_id'],
                'plan_row_id': detail['plan_row_id'],
                'tank': detail['tank'],
                'field_name': field_name,
                'old_value': old_value,
                'new_value': new_value,
                'change_type': change_type,
                'user_name': master['user_name']
            }
            history_records.append(record)
            history_id += 1
    
    return history_records

def write_sql_files(master_records, detail_records):
    # 写入master数据
    with open('test_master_data.sql', 'w', encoding='utf-8') as f:
        f.write('-- Tank Plan Master Test Data\n')
        for record in master_records:
            # 从plan_version生成create_timestamp
            plan_date = datetime.strptime(record['plan_version'], '%Y-%m-%d')
            # 添加随机时间
            create_time = plan_date + timedelta(
                hours=random.randint(9, 17),  # 工作时间9点到17点
                minutes=random.randint(0, 59),
                seconds=random.randint(0, 59)
            )
            create_timestamp = create_time.strftime('%Y-%m-%d %H:%M:%S')
            
            sql = f"""INSERT INTO app_tank_plan_master 
                    (plan_master_id, plan_version, plan_type, plan_official, 
                     plan_version_no, plan_version_parent, version_match, user_name,
                     create_timestamp)
                    VALUES
                    ({record['plan_master_id']}, '{record['plan_version']}', 
                     '{record['plan_type']}', '{record['plan_official']}', 
                     {record['plan_version_no']}, {record['plan_version_parent']}, 
                     '{record['version_match']}', '{record['user_name']}',
                     '{create_timestamp}');\n"""
            f.write(sql)
    
    # 写入detail数据
    with open('test_detail_data.sql', 'w', encoding='utf-8') as f:
        f.write('-- Tank Plan Detail Test Data\n')
        for record in detail_records:
            master_record = next(
                m for m in master_records 
                if m['plan_master_id'] == record['plan_master_id']
            )
            master_create_time = datetime.strptime(
                master_record['plan_version'], '%Y-%m-%d'
            )
            detail_create_time = master_create_time + timedelta(
                minutes=random.randint(1, 10),
                seconds=random.randint(0, 59)
            )
            create_timestamp = detail_create_time.strftime('%Y-%m-%d %H:%M:%S')
            
            sql = f"""INSERT INTO app_tank_plan_detail 
                    (plan_detail_id, plan_master_id, plan_row_id, tank, iso, 
                     glass_type, gen, RT, RC, platform, design_asis, tank_life,
                     last_tank_light_date, drain_date, repair_date, RTL_date, 
                     TL_date, GG_date, cold_idle, repair_LT, RTL_LT, TL_LT,
                     remark_category, remark, comment,
                     create_timestamp)
                    VALUES
                    ({record['plan_detail_id']}, {record['plan_master_id']}, 
                     {record['plan_row_id']}, '{record['tank']}', '{record['iso']}',
                     '{record['glass_type']}', '{record['gen']}', '{record['RT']}',
                     '{record['RC']}', '{record['platform']}', '{record['design_asis']}',
                     {record['tank_life']}, '{record['last_tank_light_date']}',
                     '{record['drain_date']}', '{record['repair_date']}',
                     '{record['RTL_date']}', '{record['TL_date']}', '{record['GG_date']}',
                     {record['cold_idle']}, {record['repair_LT']}, {record['RTL_LT']},
                     {record['TL_LT']}, '{record['remark_category']}', '{record['remark']}',
                     '{record['comment']}',
                     '{create_timestamp}');\n"""
            f.write(sql)
    
def generate_app_tank():
    """生成Tank基础信息测试数据"""
    tanks = []
    bus = ['FAB1', 'FAB2', 'FAB3']
    regions = ['A', 'B', 'C', 'D']
    locations = ['North', 'South', 'East', 'West']
    isos = ['ISO1', 'ISO2', 'ISO3', 'ISO4']
    platforms = ['Platform A', 'Platform B', 'Platform C']
    metal_shops = ['Shop 1', 'Shop 2', 'Shop 3']

    # 为每个 tank 生成一条记录
    for tank in TANKS:
        tank_info = {
            'tank': tank,
            'BU': random.choice(bus),
            'region': random.choice(regions),
            'region_seq': random.randint(1, 5),
            'location': random.choice(locations),
            'iso': random.choice(isos),
            'platform': random.choice(platforms),
            'metal_shop': random.choice(metal_shops),
            'create_timestamp': generate_timestamp(
                start_date='2024-01-01',
                end_date='2024-12-31'
            )
        }
        tanks.append(tank_info)

    return tanks

def write_app_tank_sql(tanks, file_path):
    """将Tank信息写入SQL文件"""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('-- Tank Basic Information Test Data\n')
        for tank in tanks:
            sql = f"""INSERT INTO app_tank 
                    (tank, BU, region, region_seq, location, iso, 
                     platform, metal_shop, create_timestamp)
                    VALUES
                    ('{tank['tank']}', 
                     '{tank['BU']}',
                     '{tank['region']}',
                     {tank['region_seq']},
                     '{tank['location']}',
                     '{tank['iso']}',
                     '{tank['platform']}',
                     '{tank['metal_shop']}',
                     '{tank['create_timestamp']}');\n"""
            f.write(sql)

def generate_change_history_data():
    history_data = []
    history_id = 1
    
    # 定义备注类别和对应的可能备注内容
    remark_categories = [
        'Inventory', 'Tanks issue', 'Schedule', 'Cost', 
        'Resource', 'Lead time', 'Other'
    ]
    
    remark_templates = {
        'Inventory': [
            'Inventory level adjustment',
            'Safety stock update',
            'Inventory forecast change',
            'Stock strategy optimization'
        ],
        'Tanks issue': [
            'Equipment maintenance required',
            'Performance issue fix',
            'Equipment upgrade needed',
            'Technical parameter adjustment'
        ],
        'Schedule': [
            'Production schedule adjustment',
            'Maintenance time change',
            'Schedule optimization',
            'Timeline adjustment'
        ],
        'Cost': [
            'Cost control optimization',
            'Budget adjustment',
            'Cost structure change',
            'Expense optimization'
        ],
        'Resource': [
            'Human resource reallocation',
            'Equipment resource optimization',
            'Resource allocation adjustment',
            'Capacity adjustment'
        ],
        'Lead time': [
            'Delivery time adjustment',
            'Production cycle optimization',
            'Process time change',
            'Lead time update'
        ],
        'Other': [
            'Other optimization',
            'Special requirement change',
            'Temporary adjustment',
            'Minor plan update'
        ]
    }
    
    # 确保生成足够的测试数据
    for plan_master_id in range(1, 131):
        num_changes = random.randint(2, 5)
        
        for _ in range(num_changes):
            tank = f'T{random.randint(1, 10):02d}'
            rc = f'RC{random.randint(1, 3)}'
            
            # 随机选择变更类别和对应的备注
            category = random.choice(remark_categories)
            remark = random.choice(remark_templates[category])
            
            # 修改基准日期，添加随机的时间部分
            base_date = datetime(
                2024,
                random.randint(1, 11),
                random.randint(1, 28),
                random.randint(9, 17),  # 工作时间 9:00-17:00
                random.randint(0, 59),  # 随机分钟
                random.randint(0, 59)   # 随机秒
            )
            
            # 生成基本日期序列
            date_fields = ['drain', 'repair', 'RTL', 'TL', 'GG']
            base_dates = {
                'drain': base_date + timedelta(days=random.randint(0, 30)),
                'repair': base_date + timedelta(days=random.randint(31, 60)),
                'RTL': base_date + timedelta(days=random.randint(61, 90)),
                'TL': base_date + timedelta(days=random.randint(91, 120)),
                'GG': base_date + timedelta(days=random.randint(121, 150))
            }
            
            # 初始化日期值
            old_dates = base_dates.copy()
            new_dates = base_dates.copy()
            
            # 随机选择25%的日期字段设置为null
            num_null_fields = random.randint(1, 2)  # 每次选择1-2个字段设为null
            fields_to_null = random.sample(date_fields, num_null_fields)
            
            for field in fields_to_null:
                # 75%的概率只将一个值设为null，25%的概率两个值都设为null
                if random.random() < 0.25:
                    old_dates[field] = None
                    new_dates[field] = None
                else:
                    if random.random() < 0.5:
                        old_dates[field] = None
                    else:
                        new_dates[field] = None
            
            # 只有特定类别且字段不为null时才修改日期
            if category in ['Schedule', 'Lead time']:
                date_shift = {
                    'Schedule': (2, 5),
                    'Lead time': (1, 3)
                }[category]
                
                # 随机选择1-2个非null的日期进行调整
                valid_dates = [k for k in date_fields if new_dates[k] is not None]
                if valid_dates:
                    dates_to_change = random.sample(valid_dates, min(len(valid_dates), random.randint(1, 2)))
                    for date_key in dates_to_change:
                        new_dates[date_key] = base_dates[date_key] + timedelta(
                            days=random.randint(*date_shift)
                        )
            
            # 格式化日期，None值转换为'NULL'
            def format_date(date_val):
                return f"'{date_val.strftime('%Y-%m-%d')}'" if date_val else 'NULL'
            
            # 生成带时间的时间戳
            change_timestamp = base_date.strftime('%Y-%m-%d %H:%M:%S')
            
            history_data.append(f"""
                    INSERT INTO app_tank_plan_change_hist 
                    (plan_change_hist_id, plan_master_id,
                     tank, RC,
                     drain_date_o, repair_date_o, RTL_date_o,
                     TL_date_o, GG_date_o,
                     drain_date_n, repair_date_n, RTL_date_n,
                     TL_date_n, GG_date_n,
                     remark_category, remark, username,
                     plan_change_hist_timestamp)
                    VALUES
                    ({history_id}, {plan_master_id}, 
                     '{tank}', '{rc}',
                     {format_date(old_dates['drain'])},
                     {format_date(old_dates['repair'])},
                     {format_date(old_dates['RTL'])},
                     {format_date(old_dates['TL'])},
                     {format_date(old_dates['GG'])},
                     {format_date(new_dates['drain'])},
                     {format_date(new_dates['repair'])},
                     {format_date(new_dates['RTL'])},
                     {format_date(new_dates['TL'])},
                     {format_date(new_dates['GG'])},
                     '{category}',
                     '{remark}',
                     '{random.choice(USERS)}',
                     '{change_timestamp}');
            """)
            history_id += 1
    
    return '\n'.join(history_data)

def generate_dmd_change_data():
    """生成需求变更主表和明细表的测试数据"""
    master_records = []
    detail_records = []
    
    # 需求变更相关常量
    DMD_SP_GB_NAMES = ['SP24Q1', 'SP24Q2', 'GB24']
    DMD_CHANGE_NAMES = ['Volume Up', 'Volume Down', 'Mix Change', 'Customer Change']
    DMD_CHANGE_UNITS = ['K sheets', 'Percentage', 'Sets']
    
    # 业务相关常量
    BUSINESS_UNITS = ['BU1', 'BU2', 'BU3']
    REGIONS = ['CN', 'JP', 'KR', 'TW']
    GEN_GROUPS = ['G8.5', 'G8.6', 'G10.5', 'G11']
    GEN_SIZES = ['65"', '75"', '85"']
    COMPOSITION_GROUPS = ['Group A', 'Group B', 'Group C']
    COMPOSITIONS = ['Type 1', 'Type 2', 'Type 3']
    CUSTOMERS = ['Customer A', 'Customer B', 'Customer C']
    TFT_CUSTOMERS = ['TFT A', 'TFT B', 'TFT C']
    TFT_REGIONS = ['Asia', 'Europe', 'America']
    AREAS = ['Area 1', 'Area 2', 'Area 3']
    THICKNESSES = ['0.5mm', '0.7mm', '1.1mm']
    GRADES = ['Grade A', 'Grade B', 'Grade C']
    
    # 为每个master记录生成3-5条明细记录
    for i in range(10):  # 生成10条master记录
        master_id = f'DMD_CHG_{i+1:03d}'
        
        # 生成master记录
        master_record = {
            'dmd_change_master_id': master_id,
            'dmd_sp_gb_name': random.choice(DMD_SP_GB_NAMES),
            'tank_plan_master_id': str(random.randint(1, 100)),
            'dmd_remark': f'Change request {i+1}',
            'dmd_change_name': random.choice(DMD_CHANGE_NAMES),
            'dmd_change_unit': random.choice(DMD_CHANGE_UNITS),
            'username': random.choice(USERS),
            'create_timestamp': generate_timestamp('2024-01-01', '2024-12-31')
        }
        master_records.append(master_record)
        
        # 为每个master生成3-5条detail记录
        num_details = random.randint(3, 5)
        for j in range(num_details):
            detail_id = f'{master_id}_D{j+1:02d}'
            
            # 生成detail记录
            detail_record = {
                'dmd_change_detail_id': detail_id,
                'dmd_change_master_id': master_id,
                'business_unit': random.choice(BUSINESS_UNITS),
                'region': random.choice(REGIONS),
                'gen_group': random.choice(GEN_GROUPS),
                'gen_size': random.choice(GEN_SIZES),
                'composition_group': random.choice(COMPOSITION_GROUPS),
                'composition': random.choice(COMPOSITIONS),
                'customer': random.choice(CUSTOMERS),
                'TFT_customer': random.choice(TFT_CUSTOMERS),
                'TFT_region': random.choice(TFT_REGIONS),
                'area': random.choice(AREAS),
                'thickness': random.choice(THICKNESSES),
                'grade': random.choice(GRADES),
                'dmd_year': '2024',
                'dmd_quarter': f'Q{random.randint(1,4)}',
                'dmd_value': round(random.uniform(100, 1000), 2),
                'create_timestamp': generate_timestamp('2024-01-01', '2024-12-31')
            }
            detail_records.append(detail_record)
    
    return master_records, detail_records

def write_dmd_change_sql(master_records, detail_records):
    """将需求变更数据写入SQL文件"""
    with open('test_dmd_change.sql', 'w', encoding='utf-8') as f:
        f.write('-- Demand Change Master Test Data\n')
        for record in master_records:
            sql = f"""INSERT INTO app_dmd_change_master 
                    (dmd_change_master_id, dmd_sp_gb_name, tank_plan_master_id,
                     dmd_remark, dmd_change_name, dmd_change_unit, username,
                     create_timestamp)
                    VALUES
                    ('{record['dmd_change_master_id']}',
                     '{record['dmd_sp_gb_name']}',
                     '{record['tank_plan_master_id']}',
                     '{record['dmd_remark']}',
                     '{record['dmd_change_name']}',
                     '{record['dmd_change_unit']}',
                     '{record['username']}',
                     '{record['create_timestamp']}');\n"""
            f.write(sql)
        
        f.write('\n-- Demand Change Detail Test Data\n')
        for record in detail_records:
            sql = f"""INSERT INTO app_dmd_change_detail 
                    (dmd_change_detail_id, dmd_change_master_id,
                     business_unit, region, gen_group, gen_size,
                     composition_group, composition, customer,
                     TFT_customer, TFT_region, area, thickness,
                     grade, dmd_year, dmd_quarter, dmd_value,
                     create_timestamp)
                    VALUES
                    ('{record['dmd_change_detail_id']}',
                     '{record['dmd_change_master_id']}',
                     '{record['business_unit']}',
                     '{record['region']}',
                     '{record['gen_group']}',
                     '{record['gen_size']}',
                     '{record['composition_group']}',
                     '{record['composition']}',
                     '{record['customer']}',
                     '{record['TFT_customer']}',
                     '{record['TFT_region']}',
                     '{record['area']}',
                     '{record['thickness']}',
                     '{record['grade']}',
                     '{record['dmd_year']}',
                     '{record['dmd_quarter']}',
                     {record['dmd_value']},
                     '{record['create_timestamp']}');\n"""
            f.write(sql)

def main():
    # 生成基础数据
    master_records = generate_master_data()
    detail_records = generate_detail_data(master_records)
    write_sql_files(master_records, detail_records)
    
    # 生成Tank信息测试数据
    tanks = generate_app_tank()
    write_app_tank_sql(tanks, 'test_app_tank.sql')
    
    # 生成变更历史数据
    with open('test_change_history.sql', 'w', encoding='utf-8') as f:
        f.write('-- Tank Plan Change History Test Data\n')
        f.write(generate_change_history_data())
    
    # 统计生成的记录数
    change_history_count = len([line for line in open('test_change_history.sql') if line.strip().startswith('INSERT')])
    
    # 输出统计信息
    print(f"生成了 {len(master_records)} 条master记录")
    print(f"生成了 {len(detail_records)} 条detail记录")
    print(f"生成了 {change_history_count} 条change history记录")
    print(f"生成了 {len(tanks)} 条tank基本信息记录")
    
    # 输出月度统计
    monthly_counts = {}
    for record in master_records:
        month = record['plan_version'][:7]  # YYYY-MM
        monthly_counts[month] = monthly_counts.get(month, 0) + 1
    
    print("\n每月记录数统计:")
    for month, count in sorted(monthly_counts.items()):
        print(f"{month}: {count}条记录")
    
    # 生成需求变更测试数据
    dmd_master_records, dmd_detail_records = generate_dmd_change_data()
    write_dmd_change_sql(dmd_master_records, dmd_detail_records)
    
    # 更新统计信息输出
    print(f"生成了 {len(dmd_master_records)} 条需求变更master记录")
    print(f"生成了 {len(dmd_detail_records)} 条需求变更detail记录")
    
if __name__ == '__main__':
    main() 