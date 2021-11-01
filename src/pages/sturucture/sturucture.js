import React from "react";
import {
  TreeList,
  Column,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Paging,
  Scrolling,
  Editing,
} from "devextreme-react/tree-list";
import { employees } from "./data";


const sturucture = () => {
  return (
    <TreeList
      keyExpr="ID"
      parentIdExpr="Parent_ID"
      showBorders={true}
      dataSource={employees}
    >
      <Editing
        selectTextOnEditStart={true}
        useIcons={true}
        allowAdding={true}
      />
      <HeaderFilter visible={true} />
      <HeaderFilter visible={true} />
      <FilterPanel visible={true} />
      <FilterRow visible={true} />
      <Scrolling mode="standard" />
      <Column dataField="Name" />
      <Column dataField="Status"></Column>
      <Paging enabled={true} defaultPageSize={10} />
    </TreeList>
  );
};

export default sturucture;
