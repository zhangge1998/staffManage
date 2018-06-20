/**
 * Created by ubuntu on 12/23/17.
 */
import React from 'react'
class StaffDetail extends React.Component {
    handlerClose(){
        this.props.closeDetail();
    }
    render() {
        let staffDetail = this.props.staffDetail;
        if (!staffDetail)
            return null;
        return (
            <div className="overLay">
                <h4 style={{'textAlign': 'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
                <table ref="editTable">
                    <tbody>
                    <tr>
                        <th>姓名</th>
                        <td><input type="text" id="staffEditName" /></td>
                    </tr>
                    <tr>
                        <th>年龄</th>
                        <td><input type="text" id="staffEditAge" /></td>
                    </tr>
                    <tr>
                        <th>性别</th>
                        <td>
                            <select ref="editSex" id="staffEditSex">
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>身份</th>
                        <td>
                            <select ref="editId" id="staffEditId">
                                <option value="主任">主任</option>
                                <option value="老师">老师</option>
                                <option value="学生">学生</option>
                                <option value="实习">实习</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>个人描述</th>
                        <td>
                            <textarea type="text" id="staffEditDescribe"></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p ref='Dtips' className='tips'>修改成功</p>
                <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
                <button className="left">完成</button>
                <button onClick={this.handlerClose.bind(this)}>关闭</button>
            </div>
        )
    }
}
export default StaffDetail