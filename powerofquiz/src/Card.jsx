import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Cards({image,title}){
    return(
        <Card className='card' style={{boxShadow:"2px 2px 10px white"}} >
        <CardMedia
          sx={{ height: 130 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography  style={{textAlign:"center",fontWeight:"bold"}} gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          
        </CardContent>
        
      </Card>
    );
}