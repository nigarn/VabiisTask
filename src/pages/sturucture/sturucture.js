
import React from 'react'
import {
  TreeList,
  Column,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Paging,Scrolling
} from "devextreme-react/tree-list";
import { employees } from './data';

const sturucture = () => {
  return (
    <TreeList
    showBorders={true}
    dataSource={employees}
  >
    <HeaderFilter visible={true} />
    <HeaderFilter visible={true} />
    <FilterPanel visible={true} />
    <FilterRow visible={true} />
    <Scrolling mode="standard" />
    <Column dataField="Test1"  caption="Tes1"/>
    <Column dataField="Test2"  caption="Test2"/>
    <Column dataField="" />
    
    <Paging enabled={true} defaultPageSize={10} />
   
  </TreeList>
  )
}

export default sturucture
