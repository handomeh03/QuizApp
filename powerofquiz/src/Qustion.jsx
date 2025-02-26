import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import {  useContext, useState } from 'react';
import { Info } from './Context/Context';
export default function Qustion(){
  //for go to another page using functio
  let nav=useNavigate();
 //to take the params of page
  const {id}=useParams();
  //to get data from context
  let {info}=useContext(Info);
  let quiz=info.find((e)=>{
    return e.id==id;
  });
  
  let [cuurentvalue,setcuurentvale]=useState(0);
  let [score,setscore]=useState(0);
  let[isfinsh,setIsfinsh]=useState(false);
//got to another qustion
  function handleChangeToAnotherQuestion(option){
    if(option==quiz.qustion[cuurentvalue].answer){
      setscore(score+1);
    }
    if(cuurentvalue<quiz.qustion.length-1){
      setcuurentvale(cuurentvalue+1);
    }
    else{
      setIsfinsh(true);
    }
  }
  function GoHome(){
    setIsfinsh(false);
    setcuurentvale(0);
    setscore(0);
    nav("/home");
  }
  function back(){
    if(cuurentvalue==0){
      setcuurentvale(0);
      nav("/home");
    }
    else{
      setcuurentvale(cuurentvalue-1);
    }
    if(score>1){
      setscore(score-1);
    }
    else{
      setscore(0);
    }
    
  }

    if(isfinsh){
   
  return(  <div style={{padding:"10px",background:"#424242",borderRadius:"10px",boxShadow:"2px 2px 10px black"}}>
      <Card style={{width:"350px",color:"#212121",background:"white",padding:"20px"}}>
<CardContent >
  <Typography style={{textAlign:"center",background:"#424242",borderRadius:"10px",padding:"10px",color:"white"}} gutterBottom variant="h4" component="div">
   Yor score is {score}/{quiz.qustion.length}
  </Typography>
  
</CardContent>
<CardActions style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"5px"}}>
      <Button onClick={()=>{setIsfinsh(false);setcuurentvale(0),setscore(0)}}  className='btn' style={{color:"white",width:"100%",fontSize:"20px",background:"#424242",marginLeft:"8px"}} size="small">Restart</Button>
      <Button onClick={GoHome} className='btn' style={{color:"white",width:"100%",fontSize:"20px",background:"#424242",marginLeft:"8px"}} size="small">Home</Button>
</CardActions>
</Card>
  </div>
    );
    }
    else{ 
      return (
        <div style={{padding:"10px",background:"#424242",borderRadius:"10px",boxShadow:"2px 2px 10px black"}}>
            <Card style={{width:"350px",color:"#212121",background:"white",padding:"20px"}}>
      <CardContent >

        <Typography style={{textAlign:"center",background:"#424242",borderRadius:"10px",padding:"10px",color:"white"}} gutterBottom variant="h4" component="div">
         {quiz.title}
        </Typography>

        <Typography style={{textAlign:"left",marginBottom:"2px"}} gutterBottom variant="h5" component="div">
       {`Q${cuurentvalue+1}: ${quiz.qustion[cuurentvalue].title}`}
        </Typography>

      </CardContent>

      <CardActions style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"5px"}}>
        {quiz.qustion[cuurentvalue].option.map((option,index)=>{
          return (
            <Button key={index} onClick={()=>{handleChangeToAnotherQuestion(option)}}  className='btn' style={{color:"white",width:"100%",fontSize:"20px",background:"#424242",marginLeft:"8px"}} size="small">{option}</Button>
          );
        })}  
        `` 
      </CardActions>
      <button className='btn2' onClick={back} style={{background:"#424242",color:"white", padding:"5px",fontWeight:"bold",borderRadius:"5px",outline:"none"}}> back</button>
    </Card>
        </div>
     );
    }
}