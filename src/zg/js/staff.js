/**
 * Created by ubuntu on 18/12/17.
 */
import React from 'react'

class staffItem{
    constructor(item){
        this.info={};
        this.info.name=item.name;
        this.info.age=item.age||0;
        this.info.sex=item.sex;
        this.info.id=item.id;
        this.info.descrip=item.descrip||"";
        this.key=++staffItem.key;
    }
}
staffItem.key = 0;

class STAFF extends React.Component{
    constructor(){
        super();
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10])
        ];
        this.staff=this.allStaff;
        this.word='';
        this.filtType=0;
        this.sortType=0;
    }
    //增
    addStaffItem(item){
        let newItem=new staffItem(item);
        this.allStaff.push(newItem);
        this.staff=this.allStaff;
        return this;
    }
    //改
    removeStaffItem(key){
        let newStaff=this.allStaff.filter(item=>{
            return item.key!=key;
        });
        this.allStaff=newStaff;
        this.staff=this.allStaff;
        return this;
    }

    searchStaff(word){
        this.word=word;
        this.staff=this.allStaff;
        this.staff=this.staff.filter(item =>{
            return item.info.name.indexOf(word)!=-1||(item.info.age+'').indexOf(word)!=-1||item.info.sex.indexOf(word)!=-1||item.info.id.indexOf(word)!=-1
        });
        return this;
    }
    //filter
    filterStaff(filtType){
        this.filtType = filtType;
        switch(parseInt(filtType)){
            case 0:
                this.staff = this.allStaff;
                break;
            case 1:
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '主任';
                });
                break;
            case 2:
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '老师';
                });
                break;
            case 3:
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '学生';
                });
                break;
            case 4:
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '实习';
                });
                break;
            default: break;
        }
        return this;
    }

    //sort
    sortStaff(sortType){
        this.sortType = sortType;
        switch(parseInt(sortType)){
            case 0: //身份
                this.allStaff.forEach(item => {
                    switch(item.info.id) {
                        case '主任':
                            item.info.id = 1; break;
                        case '老师':
                            item.info.id = 2; break;
                        case '学生':
                            item.info.id = 3; break;
                        case '实习':
                            item.info.id = 4; break;
                        default: break;
                    }
                });
                this.allStaff.sort(function(item1, item2){
                    return item1.info.id-item2.info.id
                });
                this.allStaff.forEach(item => {
                    switch(item.info.id) {
                        case 1:
                            item.info.id = '主任'; break;
                        case 2:
                            item.info.id = '老师'; break;
                        case 3:
                            item.info.id = '学生'; break;
                        case 4:
                            item.info.id = '实习'; break;
                        default: break;
                    }
                });
                break;
            case 1: //年龄升
                this.allStaff.sort(function(item1,item2){
                    return item1.info.age-item2.info.age
                });
                break;
            case 2: //年龄降
                this.allStaff.sort(function(item1, item2){
                    return item2.info.age-item1.info.age
                });
                break;
            default: break;
        }
        return this;
    }
}
export default STAFF
//模拟数据库
STAFF.rawData = [{ descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'},
    { descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'},
    { descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'},
    { descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'},
    { descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'},
    { descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'},
    { descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'},
    { descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'},
    { descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'},
    { descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'},
    { descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}];