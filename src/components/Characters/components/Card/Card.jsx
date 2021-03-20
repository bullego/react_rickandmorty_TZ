import React from 'react';
//material-ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//styles
import stl from './Card.module.css';


const MediaCard = ({title, image, status, species, gender}) => {
  return (
		<Card className={stl.card}>
			<CardActionArea>
				<CardMedia className={stl.card_img}
									 image={image}/>
				<CardContent className={stl.card_content}>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="span">
						<b>status</b>: {status} <br/>
						<b>species</b>: {species} <br/>
						<b>gender</b>: {gender}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
  )
}

export { MediaCard }