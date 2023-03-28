import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DeleteData() {
  const [expanded, setExpanded] = React.useState(false);
  const [singleProduct, setSingleProduct] = useState({})
  const {id} = useParams()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
      setSingleProduct(res.data)
    })
  },[])

  const deleteCard = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then(res => {
      console.log(res);
    })
  }

  return (
    <div className="details">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton onClick={deleteCard}  aria-label="settings">
              <DeleteIcon  />
            </IconButton>
          }
          title="Clothes"
        />
        <CardMedia
          component="img"
          height="194"
          image=
            {singleProduct.image}
          
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {singleProduct.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{singleProduct.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
