
import React from 'react'
import {
  TreeList,
  Editing,
  Column,
  Button,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Paging,Scrolling
} from "devextreme-react/tree-list";

const sturucture = () => {
  return (
    <TreeList
    showBorders={true}
  >
    <HeaderFilter visible={true} />
    <HeaderFilter visible={true} />
    <FilterPanel visible={true} />
    <FilterRow visible={true} />
    <Scrolling mode="standard" />
    <Column dataField="Test1"  caption="Tes1"/>
    <Column dataField="Test2"  caption="Position"/>
    <Column dataField="" />
    
    <Paging enabled={true} defaultPageSize={10} />
   
  </TreeList>
  )
}

export default sturucture
