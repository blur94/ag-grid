import React, { useState, useEffect, useRef } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io';

import DemoGrid from './CompGrid';
import styles from './demo_grid.module.scss';

export default function GridDemo() {
  // const { id, selectedTab } = props.location.state.data;
  const [budget, setBudget] = useState(
    new Array(50).fill('').map((_) => new Array(26).fill(''))
  );
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const hotRef = useRef(null);
  const [changes, setChanges] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [budgetTitle, setBudgetTitle] = useState('');
  const [colHeader, setColHeader] = useState([]);
  const [unSaved, setUnSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);

  return (
    <div className="page-container p-l-0">
      <div className="page-content-wrapper">
        <div className={`${styles.container} content sm-gutter`}>
          <div className={`container-lg p-r-50 p-l-50 p-t-10`}>
            <div className={styles.form}>
              <div className={styles.bg_gray}>
                <div className={styles.demo_budget_container}>
                  {/* <DemoTemplate
                    rowData={rowData}
                    setRowData={setRowData}
                    // id={id}
                    
                  /> */}
                  <h2>Hello World!</h2>
                  <DemoGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
