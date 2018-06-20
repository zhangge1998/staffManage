/**
 * Created by ubuntu on 18/12/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import StaffHeader from './staffHeader'
import StaffItemPanel from './staffItemPanel'
import StaffFooter from './staffFooter'
import StaffDetail from './staffDetail'
import STAFF from './staff'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            staff : new STAFF,
            staffDetail:null
        };
    }


    //增
    addStaffItem(item){
        this.setState({
            staff:this.state.staff.addStaffItem(item)
            }
        );
    }
    //搜
    searchStaff(word){
        this.setState({
            staff:this.state.staff.searchStaff(word)
        });
    }
    //filter
    filterStaff(filtType){
        this.setState({
            staff:this.state.staff.filterStaff(filtType)
        });
    }
    //sort
    sortStaff(sortType){
        this.setState({
            staff:this.state.staff.sortStaff(sortType)
        });
    }

    removeStaffItem(key){
        this.setState({
                staff:this.state.staff.removeStaffItem(key)
            }
        );
    }

    detailStaffItem(key){
        this.setState({
            staffDetail: this.state.staff.staff.filter(item => {
                return item.key==key;
            })[0]
        });
    }
    //关闭
    closeDetail(){
        this.setState({
            staffDetail:null
        });
    }
    render(){
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)} filterStaff={this.filterStaff.bind(this)} sortStaff={this.sortStaff.bind(this)}/>
                <StaffItemPanel items={this.state.staff.staff} detailStaffItem={this.detailStaffItem.bind(this)} removeStaffItem={this.removeStaffItem.bind(this)}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);