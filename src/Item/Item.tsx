import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CartItemsType } from "../App"; // Adjust import path if necessary

type Props = {
    item: CartItemsType;
    handleAddCart: (clickedItem: CartItemsType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddCart }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${item.price}
                </Typography>
            </CardContent>
            <Button
                onClick={() => handleAddCart(item)}
                variant="contained"
                color="primary"
                sx={{ margin: 2 }}
            >
                Add to Cart
            </Button>
        </Card>
    );
};

export default Item;
