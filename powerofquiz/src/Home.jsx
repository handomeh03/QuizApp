import Container from '@mui/material/Container';
import Cards from './Card';
import { Link } from 'react-router-dom';
import { Info } from './Context/Context';
import { useContext } from 'react';
export default function Home(){
    const {info,logout}=useContext(Info);
    let arrayOfInfo=info.map((e)=>{
        return(
            <Link style={{width:"250px",textDecoration:"none"}} key={e.id} to={`/qustion/${e.id}`}>
            <Cards image={e.iamge} title={e.title} key={e.id}/>
            </Link>   
        );
    })
    return(
        <div>
            <Container maxWidth="sm" style={{background:"#616161",padding:"20px",display:"flex",gap:"10px",justifyContent:"center",alignItems:"center",borderRadius:"10px",boxShadow:"2px 2px 10px black"}}>
       {arrayOfInfo}
       
      </Container>
      <button onClick={logout} className='btn3' style={{marginTop:"40px",border:"none",padding:"5px",borderRadius:"10px",fontWeight:"bold",color:"blue"}}>log out</button>
        </div>
        
    );
}