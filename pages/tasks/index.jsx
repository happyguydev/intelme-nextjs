import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Table from '../../components/table/index';
import { FiChevronDown, FiChevronUp, FiFile } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../../components/wrapper/index';
import MenuBar from '../../components/menu-bar';
import AppBar from '../../components/app-bar';
import Card from '../../components/card';

import Breadcrumb from '../../components/breadcumb/breadcumb';
import DateStamp from '../../components/tasks/tableCols/dateStamp/date';
import { getPriorities } from '../../store/actions/priorities';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Label from '../../components/tasks/tableCols/labels';
import Priority from '../../components/priorities';
import checkBoxStyles from './styles';
import { Checkbox } from '@material-ui/core';
import CheckedCheckBox from '../../public/icons/tasksCheckbox.checked.svg';
import EmptyCheckbox from '../../public/icons/tasksCheckbox.unchecked.svg';
import DueArrow from '../../public/icons/dueArrow.svg';
import TextDisplay from '../../components/text-display';

const MyTasks = () => {
  const dispatch = useDispatch();
  const { priorities } = useSelector((state) => state.priorities);
  const styles = checkBoxStyles();

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <Checkbox
            className={styles.checkbox}
            icon={<EmptyCheckbox />}
            checkedIcon={<CheckedCheckBox />}
            ref={resolvedRef}
            {...rest}
          />
        </>
      );
    }
  );

  useEffect(() => {
    dispatch(getPriorities());
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <span className={styles.dateColumn}>
            Due
            <div>
              <DueArrow />
            </div>
          </span>
        ),
        accessor: 'dueDate',
        Cell: ({ cell: { value } }) => <DateStamp dueDate={value} />,
        minWidth: 90,
        width: undefined,
      },
      {
        Header: () => <span className={styles.status}>Status</span>,
        accessor: 'status',
        id: 'selection',
        Cell: ({ cell: { row } }) => (
          <div className={styles.checkboxContainer}>
            <IndeterminateCheckbox {...row.getToggleRowExpandedProps} />
          </div>
        ),
        minWidth: 16,
        width: undefined,
      },
      {
        Header: () => <p className={styles.title}>Title</p>,
        accessor: 'name',
        Cell: ({ value }) => <TextDisplay text={value} charNumber={35} />,
        minWidth: 263,
        width: undefined,
      },
      {
        Header: () => <p className={styles.project}> Project </p>,
        accessor: 'project[0].name',
        maxWidth: 220,
        minWidth: 180,
        width: undefined,
      },
      {
        Header: 'Label',
        accessor: 'label',
        Cell: ({ cell: { value } }) => <Label value="Label" />,
        minWidth: 120,
        width: undefined,
      },
      {
        Header: () => <p className={styles.priority}> Priority </p>,
        accessor: 'priority',
        Cell: ({ cell: { value } }) => <Priority priority={value} />,
        minWidth: 60,
        width: undefined,
      },
      {
        Header: () => <p className={styles.assignee}>Assignee</p>,
        accessor: 'assignedToDetails',
        Cell: ({ cell: { value } }) => (
          <Avatar userDetails={value} width="24" height="24" />
        ),
        minWidth: 60,
        width: undefined,
      },
      {
        accessor: 'Summary',
        Cell: ({ cell: { value } }) => (
          <Button background="#FFF0E8" color="#FF8A47" secondarySmall>
            <FiFile /> Summary
          </Button>
        ),
      },
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID

        Cell: ({ row, rows, toggleRowExpanded }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? (
              <FiChevronUp className={styles.arrow} />
            ) : (
              <FiChevronDown className={styles.arrow} />
            )}
          </span>
        ),
      },
    ],
    []
  );

  const renderRowSubComponent = useCallback(
    ({ row }) => (
      <div>
        <span>
          Lorem ipsum Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. 3 wolf moon officia aute, non
          cupidatat skateboard Lorem ipsum Anim pariatur cliche reprehenderit,
          enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
          moon officia aute, non cupidatat skateboard Lorem ipsum Anim pariatur
          cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard Lorem ipsum Anim pariatur cliche reprehenderit, enim
          eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard
        </span>
      </div>
    ),
    []
  );

  return (
    <div className="h-auto flex bg-intelme">
      <MenuBar selected="My Tasks" />
      <Wrapper>
        <AppBar />
        <Breadcrumb currentPage="My Tasks" />
        <Card>
          <Table
            columns={columns}
            data={priorities}
            renderSubRowComponent={renderRowSubComponent}
          />
        </Card>
      </Wrapper>
    </div>
  );
};

export default MyTasks;
