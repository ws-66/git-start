import time
import pymysql
#获取数据库链接  获取游标
def get_conn():
    conn = pymysql.connect(host="127.0.0.1", port=3306, user="root", password="guoqi521", database="001", charset="utf8")
    if conn == None:
        print("数据库链接失败")
    else:
        print("数据库链接成功")
    cursor = conn.cursor()
    return conn,cursor


#  释放资源
def close(conn,cursor):
    cursor.close();
    conn.close();


# 查询数据库数据
def query(sql,*args):
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    return res


def get_left1():
    sql = 'SELECT ds,confirm,suspect,heal,dead FROM history'
    res = query(sql)
    print(res)
    return res

def get_left2():
    sql = "SELECT ds,confirm_add,suspect_add FROM history"
    res = query(sql)
    print(res)
    return res

def get_right1():
    sql = 'SELECT ds,confirm,suspect,heal,dead FROM history'
    res = query(sql)
    print(res)
    return res

def get_right2():
    sql = 'SELECT ds,confirm,suspect,heal,dead FROM history'
    res = query(sql)
    print(res)
    return res


def get_right3():
    sql = 'SELECT ds,confirm FROM history'
    res = query(sql)
    print(res)
    return res

