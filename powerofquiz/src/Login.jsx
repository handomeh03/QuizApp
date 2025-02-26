import { useContext } from "react";
import { Info } from "./Context/Context";
export default function Login(){
    let {passwords,emails,handlechangeemail,handlechangepassword,log}=useContext(Info);
    function handleGo(event){
        event.preventDefault();
        log();
    }
    return(
        
            <div style={{background:"#424242",padding:"20px",display:"flex",flexDirection:"column",color:"white",width:"20%",borderRadius:"10px",boxShadow:"2px 2px 10px black",justifyContent:"center",alignItems:"center"}}>
             <h1 style={{textAlign:"center",marginBottom:"0px",background:"#212121",padding:"4px",borderRadius:"10px",boxShadow:"2px 2px 10px black",width:"50%"}}>Quiz app</h1>
             <h2 style={{textAlign:"center"}}>Log In</h2>
           <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <input value={emails} onChange={(e)=>{handlechangeemail(e.target.value)}} type="text" placeholder="Email" style={{padding:"10px",width:"100%",borderRadius:"10px",outline:"none",border:"none"}}></input>
            {emails==""||emails.includes("@")||<p style={{margin:"0px"}}>email must have @</p>}
            <input value={passwords} onChange={(e)=>{handlechangepassword(e.target.value)}} type="password" placeholder="password" style={{padding:"10px",width:"100%",borderRadius:"10px",outline:"none",border:"none"}}></input>
            {passwords==""||passwords.length<6&&<p style={{margin:"0px"}}>password must grater than 6 character</p>}
            <button onClick={handleGo} className="btn3" style={{border:"none",borderRadius:"10px",padding:"5px",background:"white",fontWeight:"bold"}}>log in</button>

           </form>
        </div>
        
    );
}