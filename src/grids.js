module.exports = {
    "dependencies": ['grids'],
    "files": {
    "App.jsx": `import * as React from 'react';
import './App.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

/* Add Syncfusion license key or use environment variable below */
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

let colTemplate = (props) => {
    return (<div className="template-wrap">{props.OrderID * 50}</div>);
}

export default function App() {
    const data = [
        { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 1, ShipCountry: 'France', Freight: 32.38 },
        { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 2, ShipCountry: 'Germany', Freight: 11.61 }
    ], 
    sortSettings = { columns: [{ field: 'EmployeeID', direction: 'Ascending'}]};
    
    return (<React.Fragment>
        <GridComponent dataSource={data} allowSorting={true} allowPaging={true} pageSettings={{ pageSize: 6 }} sortSettings={sortSettings}>
            <ColumnsDirective>
                <ColumnDirective template={colTemplate} field='OrderID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
    </React.Fragment>);
};`, 
"App.css":`@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material.css';`
}};