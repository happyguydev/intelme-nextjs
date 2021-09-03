import { makeStyles } from '@material-ui/core/styles';

const userStyles = makeStyles({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: (props) => (props.width ? `${props.width}px` : '24px'),
    height: (props) => (props.height ? `${props.height}px` : '24px'),
    border: (props) => (props.border ? `${props.border}px` : '12px'),
    // borderRadius: (props) =>
    //   props.teams && props.teams.length ? '5px' : '50%',
    borderRadius: '50%',
    fontFamily: 'Poppins',
    fontWeight: (props) => (props.fontSize > 40 ? `600` : '400'),
    fontSize: (props) => (props.fontSize ? `${props.fontSize}px` : '12px'),
    letterSpacing: '-0.2px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: (props) => props.background,
    margin: (props) => (props.showName ? '0px' : '0px auto'),
  },
  avatarImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#4d4d4d',
  },
  avatarName: {
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '20px',
    marginLeft: '8px',
  },
});

export default userStyles;
