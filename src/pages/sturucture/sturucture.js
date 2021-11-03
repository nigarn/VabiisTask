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
  Lookup,
  ValidationRule,
  Button
} from "devextreme-react/tree-list";

import { employees } from "./data";
import './sturucture.scss'


const expandedRowKeys = [1, 2, 3, 5];
const sturucture = () => {
  return (
    <TreeList
    className='treelist-text'
      keyExpr="ID"
      parentIdExpr="Parent_ID"
      showBorders={true}
      dataSource={employees}
      defaultExpandedRowKeys={expandedRowKeys}
    >
      <Editing
        allowUpdating={true}
        allowDeleting={true}
        allowAdding={true}
      
        selectTextOnEditStart={true}
    
      />
      <HeaderFilter visible={true} />
      <HeaderFilter visible={true} />
      <FilterPanel visible={true} />
      <FilterRow visible={true} />
      <Scrolling mode="standard" />
      <Column dataField="ID" visible={false} />

      <Column dataField="Name" dataType="string">
        <ValidationRule type="required" />
      </Column>
      <Column dataField="Parent_ID">
        <Lookup dataSource={employees} valueExpr="Parent_ID" displayExpr="ID" />
      </Column>
      <Column dataField="Status"></Column>
      <Column type="buttons">
            <Button name="edit"  className={"edit-button"} />
            <Button name="delete" className={"delete-button"}  />
            <Button name="add" className={"add-button"} />
          </Column>
      <Paging enabled={true} defaultPageSize={5} />
      
    </TreeList>
  );
};

export default sturucture;
