import React from 'react';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//styles
import stl from './Modal.module.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
	modal_front: {
    display: 'flex',
    flexDirection: 'column',
		width: '70%',
		height: '95%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
		overflowY: 'scroll',
	},
	modal_img: {
		width: '100%',
    maxWidth: '600px',
		height: 'auto',
    maxHeight: '30vw',
    margin: '0 auto',
    objectFit: 'cover',
	},
	modal_open_btn: {
    width: '100%',
		backgroundColor: 'transparent',
		padding: '0',
		margin: '0',
    marginBottom: '4vw',
		border: 'none'
	}
}));

const TransitionsModal = ({children, card}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={stl.modal_wrap}>
      <button className={classes.modal_open_btn + ' ' + stl.modal_btn}
							type="button"
							onClick={handleOpen}>
				{children}
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modal_front + ' ' + stl.modal_front}>
						<img className={classes.modal_img}
								 src={card.image}
								 alt={card.title}/>

						<h3>Character name: {card.name}</h3>
            <p><strong>Status: </strong>{card.status}</p>
            <p><strong>Species: </strong>{card.species}</p>
            <p><strong>Gender: </strong>{card.gender}</p>
            <p><strong>Origin: </strong>{card.origin.name}</p>
            <p><strong>Location: </strong>{card.location.name}</p>
            <hr/> <br/>
            <p><strong>Appeared in {card.episode.length} episodes</strong></p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export { TransitionsModal };