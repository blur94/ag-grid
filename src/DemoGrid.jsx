import React, { useCallback, useMemo, useRef, useState } from 'react';
// import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './demo_grid.module.scss';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(
  '[TRIAL]_this_AG_Grid_Enterprise_key_( AG-040680 )_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_purchasing_a_production_key_please_contact_( info@ag-grid.com )___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_( 30 June 2023 )____[v2]_MTY4ODA3OTYwMDAwMA==5266e2b19455d0b5c7c8c52bf6367755'
);

export default function DemoGrid() {
  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: 'calc(100vh - 140px)',
      // position: "relative",
      // overflow: "hidden"
    }),
    []
  );

  const gridContainerStyle = useMemo(
    () => ({
      width: '100%',
      height: 'calc(100vh - 140px)',
      display: 'flex',
    }),
    []
  );

  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState(() => {
    const fields = [
      'athlete',
      'age',
      'country',
      'year',
      'date',
      'sport',
      'gold',
      'silver',
      'bronze',
      'total',
    ];
    const minWidth = 170;

    const columns = fields.map((field) => ({
      field,
      minWidth,
      filter: 'agTextColumnFilter', // Add the filter property
    }));

    return columns;
  });
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
      // minWidth: 170,
      enableValue: true,
      // allow every column to be grouped
      enableRowGroup: true,
      // allow every column to be pivoted
      enablePivot: true,
      // flex: 1,
      // suppressSizeToFit: true,
      floatingFilter: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridContainerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            sideBar={true}
            onGridReady={onGridReady}
            enableRangeSelection={true}
            allowContextMenuWithControlKey={true}
            suppressMultiRangeSelection={true}
            enableCharts={true}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}
