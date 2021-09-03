import { Checkbox } from '@material-ui/core';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Link from 'next/link';

import AppBar from '../../components/app-bar';
import Avatar from '../../components/avatar';
import Breadcumb from '../../components/breadcumb/breadcumb';
import Card from '../../components/card';
import MenuBar from '../../components/menu-bar';
import Status from '../../components/projectStatus';
import Table from '../../components/table/index';
import DateStamp from '../../components/projects/tableCols/datestamp';
import Wrapper from '../../components/wrapper';
import useStyles from './styles';
import CheckboxDefault from '../../public/icons/Checkbox_default_projects.svg';
import CheckboxChecked from '../../public/icons/Checkbox_checked_projects.svg';

import UpdatedArrow from '../../public/icons/updatedArrow.svg';

import { getProjects } from '../../store/actions/projects';

const Projects = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { projects } = useSelector((state) => state.projects);

  const projectStyles = useStyles();

  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <Checkbox
            className={projectStyles.checkbox}
            icon={<CheckboxDefault />}
            checkedIcon={<CheckboxChecked />}
            ref={resolvedRef}
            {...rest}
          />
        </>
      );
    }
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const columns = useMemo(() => [
    {
      id: 'selection',
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }) => (
        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
      ),
      minWidth: 16,
      maxWidth: 16,
      width: undefined,
    },
    {
      Header: () => (
        <span className={projectStyles.updatedSpan}>
          Updated <UpdatedArrow />
        </span>
      ),
      accessor: 'updatedAt',
      Cell: ({ cell: { value } }) => (
        <>
          <DateStamp dueDate={value} />
        </>
      ),
      minWidth: 120,
      width: undefined,
    },
    {
      Header: () => <span className={projectStyles.headerSpan}>No</span>,

      accessor: 'number',
      Cell: ({ cell: { value } }) => <span> {value} </span>,
      minWidth: 37.4,
      width: undefined,
    },
    {
      Header: () => <span className={projectStyles.headerSpan}>Project</span>,
      id: 'name',
      accessor: (row) => row,
      Cell: ({ cell: { value } }) => (
        <span className={projectStyles.link}>
          <Link href={`/projects/${encodeURIComponent(value.id)}`}>
            {value.name}
          </Link>
        </span>
      ),
    },
    {
      Header: () => <span className={projectStyles.headerSpan}>Sender</span>,

      accessor: 'sender',
      minWidth: 82,
      width: undefined,
    },
    {
      Header: () => (
        <span className={projectStyles.headerSpan}>Description</span>
      ),

      accessor: 'description',
      minWidth: 296,
      width: undefined,
    },
    {
      Header: () => (
        <div className={projectStyles.inChargeContainer}>
          <span className={projectStyles.headerSpan}>In Charge</span>
        </div>
      ),
      accessor: 'inChargeDetails',
      Cell: ({ cell: { value } }) => (
        <Avatar userDetails={value} width="24" height="24" />
      ),
      minWidth: 160,
      width: undefined,
    },
    {
      Header: () => <span className={projectStyles.headerSpan}>Status</span>,
      accessor: 'status',
      Cell: ({ cell: { value } }) => <Status status={value} />,
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
            <FiChevronUp className={projectStyles.arrow} />
          ) : (
            <FiChevronDown className={projectStyles.arrow} />
          )}
        </span>
      ),
    },
  ]);

  const renderSubRowComponent = useCallback(({ row }) => (
    <div>
      <span>
        Lorem ipsum Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard Lorem ipsum Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
        officia aute, non cupidatat skateboard Lorem ipsum Anim pariatur cliche
        reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. 3 wolf moon officia aute, non cupidatat skateboard Lorem ipsum
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard
      </span>
    </div>
  ));

  return (
    <div className="h-auto flex bg-intelme">
      <MenuBar selected="My Projects" />
      <Wrapper>
        <AppBar />
        <Breadcumb currentPage="My Projects" />
        <Card>
          <h1 className={projectStyles.title}>My Projects</h1>
          <Table
            columns={columns}
            data={projects}
            renderSubRowComponent={renderSubRowComponent}
          />
        </Card>
      </Wrapper>
    </div>
  );
};

export default Projects;
