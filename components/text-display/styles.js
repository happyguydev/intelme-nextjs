import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  textContainer: {
    position: 'relative',
    display: 'flex',
    textAlign: 'left',
  },
  longString: {
    position: 'absolute',
    zIndex: '129312',
    background: '#404040',
    boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    display: (props) => props.display,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: '4px 8px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    top: '100%',

    '&::after': {
      width: 0,
      position: 'absolute',
      height: 0,
      content: '""',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '5px solid red',
      bottom: '100%',
    },
  },
});
