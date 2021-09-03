import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Divider from '@material-ui/core/Divider';

import useStyles, {
  BottomOptions,
  Item,
  MenuContainer,
  MenuHeader,
  SelectedItem,
} from './styles';
import { MenuBarBottomOptions, MenuBarOptions } from './constants';

const MenuBar = ({ selected }) => {
  const styles = useStyles();

  return (
    <MenuContainer className={styles.body}>
      <MenuHeader className="px-8 py-6 flex items-center ">
        <Image
          width="104px"
          height="32px"
          src="/frontend-dev/menu-bar-logo.svg"
        />
      </MenuHeader>

      {MenuBarOptions.map((option) => {
        const isSelected = selected === option.label;
        return (
          <Fragment key={option.label}>
            {isSelected ? (
              <Link href={option.link}>
                <SelectedItem>
                  {option.selectedIcon}
                  <div> {option.label} </div>
                </SelectedItem>
              </Link>
            ) : (
              <Link href={option.link}>
                <Item>
                  {option.neutralIcon}
                  <div> {option.label} </div>
                </Item>
              </Link>
            )}
          </Fragment>
        );
      })}

      <BottomOptions>
        <div>
          <Divider
            classes={{
              root: styles.divider,
            }}
            variant="middle"
          />
        </div>
        {MenuBarBottomOptions.map((option) => {
          const isSelected = selected === option.label;
          return (
            <Fragment key={option.label}>
              {isSelected ? (
                <Link href={option.link}>
                  <SelectedItem>
                    {option.selectedIcon}
                    <div> {option.label} </div>
                  </SelectedItem>
                </Link>
              ) : (
                <Link href={option.link}>
                  <Item>
                    {option.neutralIcon}
                    <div> {option.label} </div>
                  </Item>
                </Link>
              )}
            </Fragment>
          );
        })}
      </BottomOptions>
    </MenuContainer>
  );
};

export default MenuBar;
