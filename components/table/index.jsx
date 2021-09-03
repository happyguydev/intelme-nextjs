import React, { Fragment, useState } from 'react';
import {
  useTable,
  useExpanded,
  useFilters,
  useSortBy,
  usePagination,
  useRowSelect,
} from 'react-table';
import tableStyles from './styles';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

export default function Table({ columns, data, renderSubRowComponent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    selectedFlatRows,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    // hooks => {
    //   hooks.visibleColumns.push({

    //   })
    // }
    useExpanded,
    usePagination,
    useRowSelect
  );

  const styles = tableStyles();

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.tableHead}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={styles.topRow}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    width: column.width,
                    maxWidth: column.maxWidth,
                    minWidth: column.minWidth,
                  },
                })}
                className={styles.th}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.tableBody}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // Use a React.Fragment here so the table markup is still valid
            <Fragment {...row.getRowProps()}>
              <tr
                onClick={() => {
                  setIsExpanded(true);
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className={styles.tableData}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
              {/*
                If the row is in an expanded state, render a row with a
                column that fills the entire length of the table.
              */}
              {row.isExpanded ? (
                <tr className={styles.expandedRow}>
                  <td colSpan={visibleColumns.length}>
                    <SlideDown className="my-dropdown-slidedown">
                      {/*
                      Inside it, call our renderRowSubComponent function. In reality,
                      you could pass whatever you want as props to
                      a component like this, including the entire
                      table instance. But for this example, we'll just
                      pass the row
                    */}
                      {renderSubRowComponent({ row })}
                    </SlideDown>
                  </td>
                </tr>
              ) : null}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
