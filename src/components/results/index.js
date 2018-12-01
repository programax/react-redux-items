import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.css';

function Page(props) {
    const {
        items,
        onSetCurrentPage,
    } = props;

    return (
        <div className="results-page">
            {items.map(item =>
            <div className="card-container">
                <Card
                    className="card"
                    onClick={() => onSetCurrentPage('details', item.id)}
                >
                    <CardActionArea>
                        <CardMedia
                            className="card-media"
                            image={item.image}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography component="p">
                                {item.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>)}
        </div>
    );
}

export default Page;
