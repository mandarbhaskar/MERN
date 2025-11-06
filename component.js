import React from 'react'; 
import { Card, CardContent, CardActions, Button, Typography } from 
'@mui/material'; 
 
function SimpleCard() { 
  return ( 
    <Card> 
      <CardContent> 
        <Typography variant="h5" component="div"> 
          Card Title 
        </Typography> 
        <Typography variant="body2" color="text.secondary"> 
          This is a simple description inside the card. 
        </Typography> 
      </CardContent> 
      <CardActions> 
        <Button size="small" color="primary"> 
          Learn More 
        </Button> 
      </CardActions> 
    </Card> 
  ); 
} 
 
export default SimpleCard; 