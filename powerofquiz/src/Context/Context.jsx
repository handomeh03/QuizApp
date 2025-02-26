import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Info=createContext();
export default function Provider({children}){
    let [info,setinfo]=useState([
        {
            id:1,
            iamge:"https://img.favpng.com/10/7/8/logo-html5-markup-language-image-png-favpng-meT6VqdWFbXZ1ev2BFJpq6yys.jpg",
            title:"Html Quiz",
            qustion:[
                {
                   title:"What does HTML stand for?",
                   option:["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Managing Links","Hyperlink and Text Management Language"],
                   answer:"Hyper Text Markup Language"
                },
                {
                    title:"Which HTML tag is used to create a hyperlink?",
                   option:["<link>","<a>","<href>","<hlink>"],
                   answer:"<a>"

                }
            ]

        },
        {
            id:2,
            iamge:"https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png",
            title:"CSS Quiz",
            qustion:[
                {
                   title:"What does CSS stand for?",
                   option:["Computer Style Sheets"," Cascading Style Sheets","Creative Style System","Colorful Style Sheets"],
                   answer:"Cascading Style Sheets"
                },
                {
                    title:"Which CSS property controls the text size?",
                   option:["font-size","text-style","font-style","text-size"],
                   answer:"font-size"

                }
            ]
            
        },
        {
            id:3,
            iamge:"https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
            title:"JS Quiz",
            qustion:[
                {
                   title:"What is JavaScript primarily used for?",
                   option:["Styling web pages","  Structuring web content","Adding interactivity to web pages","Managing databases"],
                   answer:"Adding interactivity to web pages"
                },
                {
                    title:`What will console.log(3 + "3") output?`,
                   option:["6","33","Error","NaN"],
                   answer:"33"

                }
            ]

        },

    ]);

    let [emails,setemail]=useState("");
    let [passwords,setpassword]=useState("");

    let[tokens,setToken]=useState("");

    let navagate=useNavigate();

    const log=async ()=>{
        try{
         const respone=await axios.post("https://reqres.in/api/login",{
             email:emails,
             password:passwords
         });
         setToken(respone.data.token);
         navagate("/home",{replace:true});
         
        }catch(e){
         alert("error in input please try again");
        
        }
         
     }
    function handlechangeemail(emailss){
        setemail(emailss);
    }
    function handlechangepassword(pass){
        setpassword(pass);
    }
    function logout(){
        setemail("");
        setpassword("");
        setToken("");
        navagate("/");
    }
    return(
        <Info.Provider value={{logout,info,setinfo,log,handlechangeemail,handlechangepassword,passwords,emails}}>
            {children}
        </Info.Provider>
    );
}