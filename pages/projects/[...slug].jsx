import { Checkbox } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiChevronDown, FiChevronUp, FiFile } from 'react-icons/fi';

import Breadcumb from '../../components/breadcumb/breadcumb';
import Card from '../../components/card';
import MenuBar from '../../components/menu-bar';
import Table from '../../components/table';
import Wrapper from '../../components/wrapper';

import { getProject } from '../../store/actions/projects';
import { searchFiles } from '../../store/actions/files';
import { CLEAR_PROJECT } from '../../store/types';
import CheckboxDefault from '../../public/icons/Checkbox_default_projects.svg';
import CheckboxChecked from '../../public/icons/Checkbox_checked_projects.svg';
import { projectStyles } from './styles';

import DateStamp from '../../components/projects/tableCols/datestamp';
import Priority from '../../components/priorities';
import FileStatus from '../../components/fileStatus';
import AppBar from '../../components/app-bar';
import UpdatedArrow from '../../public/icons/updatedArrow.svg';
import TextDisplay from '../../components/text-display';

const Project = () => {
  const router = useRouter();

  const [projectParam] = router.query.slug || [];
  const styles = projectStyles();
  const { project } = useSelector((state) => state.projects);
  const { files } = useSelector((state) => state.files);

  const dispatch = useDispatch();

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
            className={styles.checkbox}
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
    dispatch(getProject({ projectId: projectParam }));

    dispatch(
      searchFiles({
        projectId: projectParam,
      })
    );
    return () => {
      dispatch({
        type: CLEAR_PROJECT,
      });
    };
  }, []);

  const columns = useMemo(() => [
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <div>
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        </div>
      ),

      Cell: ({ row }) => (
        <div>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
      minWidth: 16,
      maxWidth: 16,
      width: undefined,
    },
    {
      Header: () => (
        <span className={styles.dateColumn}>
          Updated <UpdatedArrow />
        </span>
      ),
      accessor: 'syncTime',
      Cell: ({ cell: { value } }) => <DateStamp dueDate={value} />,
      maxWidth: 90,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>No</span>,
      accessor: 'DocumentNumber',
      minWidth: 16,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Type</span>,
      accessor: 'DocumentType',
      Cell: ({ cell: { value } }) => <FiFile className={styles.type} />,
      minWidth: 16,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Title</span>,
      accessor: 'title',
      minWidth: 150,
      width: undefined,
      Cell: ({ cell: { value } }) => (
        <TextDisplay charNumber={20} text={value} />
      ),
    },
    {
      Header: () => <span className={styles.headerSpan}>Revisi...</span>,
      accessor: 'revision',
      Cell: ({ cell: { value } }) => (
        <div className={styles.revision}> {value} </div>
      ),
      minWidth: 16,
      maxWidth: 16,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Discipline</span>,
      accessor: 'discipline',
      maxWidth: 75,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Issue Date</span>,
      accessor: 'DateModified',
      Cell: ({ cell: { value } }) => <span>yesterday</span>,
      maxWidth: 90,
      minWidth: 90,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Description</span>,
      accessor: 'description',
      maxWidth: 174,
      minWidth: 174,
      width: undefined,
    },
    {
      Header: () => <span className={styles.prioritySpan}>Priority</span>,
      accessor: 'priority',
      Cell: ({ cell: { value } }) => <Priority priority={value} />,
      maxWidth: 60,
      width: undefined,
    },
    {
      Header: () => <span className={styles.headerSpan}>Status</span>,
      accessor: 'DocumentStatus',
      Cell: ({ cell: { value } }) => <FileStatus value={value} />,
    },
    {
      Header: () => null,
      id: 'expander',
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? (
            <FiChevronUp className={styles.arrow} />
          ) : (
            <FiChevronDown className={styles.arrow} />
          )}
        </span>
      ),
    },
  ]);

  const renderSubRowComponent = useCallback(() => (
    <div>
      <span>
        Lorem ipsum Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. 3 wolf moon officia aute, non
        cupidatat skateboard Lorem ipsum Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
        non cupidatat skateboard Lorem ipsum Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
        officia aute, non cupidatat skateboard Lorem ipsum Anim pariatur cliche
        reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. 3 wolf moon officia aute, non cupidatat skateboard
      </span>
    </div>
  ));

  return (
    <div className="h-auto flex bg-intelme">
      <MenuBar selected="My Projects" />
      <Wrapper>
        <AppBar />
        <Breadcumb currentPage="My Projects" />
        <div className={styles.projectHeader}>
          <h1 className={styles.projectName}>{project.name}</h1>
          <span className={styles.projectNo}>{project.number}</span>
        </div>
        <Card>
          <h1 className={styles.title}>Project Files</h1>
          <Table
            columns={columns}
            data={files}
            renderSubRowComponent={renderSubRowComponent}
          />
        </Card>
      </Wrapper>
    </div>
  );
};

export default Project;
