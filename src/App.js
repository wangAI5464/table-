import React from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: '操作',
  },
];

const column = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    操作: <button style={{ width: '40px', height: '20px', fontSize:'12px', padding: '0'}}>添加</button>
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    number: [],
    maxNum: [],
    data: [],
  };


  onSelectChange = (selectedRowKeys, data) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,data);
    this.setState({ selectedRowKeys});
  };
  addContent = (event) => {
    if (this.state.number.length === this.state.maxNum.length) {
        return;
    }
    console.log("this.state.number:" + this.state.number);
    this.state.number.push(this.state.selectedRowKeys);
    let temp = this.state.selectedRowKeys;
    console.log(temp,1)
    this.setState({
        number: temp
    })
  };

  removeContent = (index) => {
    if (this.state.number.length <= 0) {
        return;
    }
    this.state.number.splice(index, this.state.selectedRowKeys.length);
    this.setState({
        number: this.state.number
    })
  };
  render() {
    const { selectedRowKeys, number  } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    let items = [];
　　     //从添加的组件数量中遍历，
    for(let i = 0; i < selectedRowKeys.length; i++){     
        items.push({
          key: i,
          });
        }
    return (
      <div>
        <div style={{ width: '75%', display: 'inline-block', float: 'left'}}>
          <Button type="primary" onClick = {this.addContent}>
            批量添加
          </Button>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
        <div style={{ width: '20%',display: 'inline-block', marginLeft: '30px'}}>
        <Button type="primary" onClick={this.removeContent}>
            批量移除
          </Button>
        <Table rowSelection={rowSelection} columns={column}  dataSource={items} />
        </div>
      </div>
    );
  }
}
export default App;