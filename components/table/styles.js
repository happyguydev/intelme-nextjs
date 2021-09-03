import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const tableStyles = makeStyles({
  table: {
    transition: '0.3s all',
    width: '100%',
    '& tr:nth-child(odd)': {
      backgroundColor: '#F7F7F7',
    },
  },
  tableHead: {
    color: '#858383',
    fontFamily: 'Poppins',
    background: '#fff',
  },
  topRow: {
    '& th:first-child': {
      paddingLeft: '16px',
    },
    backgroundColor: '#fff!important',
    '& th': {
      paddingLeft: '16px',
    },
  },
  th: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#858383',
    paddingBottom: '10px',
    textAlign: 'left',
  },
  tableBody: {
    transition: '0.3s all',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
    '& tr': {
      transition: '0.3 all',
      cursor: 'pointer',
      ' & td': {
        paddingLeft: '16px',
      },
    },
    '& tr:hover': {
      backgroundColor: '#edf5f6',
      '& td:nth-child(2)': {
        '& svg': {
          transition: '0.3s all',
          '& circle': {
            stroke: '#858383',
          },
          '& path': {
            fill: '#858383',
          },
        },
      },
    },
    fontFamily: 'Poppins',

    lineHeight: '16px',
    color: '#4d4d4d',
    fontSize: '12px',
    fontWeight: ' normal',
  },
  tableData: {
    transition: '0.3S all',
    height: '36px',
  },
  expandedRow: {
    transition: '0.3S all',
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
  },
  accordion: {
    width: 'auto',
    display: 'inline-table',
  },
});

export default tableStyles;
