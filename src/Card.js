import React, {useState, useEffect } from "react";
import Styled from "styled-components";
import {collection, getDocs} from 'firebase/firestore'
import {database} from './Base.js'
import './Style.css'



const Card =() => {

  
  const [loading, setLoading] = useState([]);
  const useCollectiveRef = collection(database, 'Beneficiaries')

  const getData = async () => {
    const data = await getDocs(useCollectiveRef)
    setLoading(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }


  useEffect(()=> {
    getData()
  }, [])


    return(
        <Cardcontainer>
          <Maindata>
          
          {loading.map((beneficiary)=>
          <div>
          <img className="image" src={beneficiary.img} alt='not available' style={{height: '120px', width: '120px'}}></img>
          <h3> Name: {beneficiary.name} </h3>
          <br/>
          <h6>Description: {beneficiary.desc} </h6>
          <br/>

            {/* <Icontain> */}
              
          <a className="github_float"
          target='_blank'
          href= {`${beneficiary.github}`}> <i class="fa fa-github"></i></a>
          

          <a className="linkedin_float"
          target='_blank'
          href= {`${beneficiary.linkedin}`}> <i class= 'fa fa-linkedin-square'></i> </a>
         

           <a className="facebook_float" 
           target='_blank'
          href= {`${beneficiary.facebook}`}> <i class='fa fa-facebook-square'></i></a>
          {/* &nbsp; &nbsp; &nbsp; */}

          {/* <a classname="envelope_float"
          target='_blank'
          href={`${beneficiary.email}`}></a> <i class="fa fa-envelope" aria-hidden="true"></i> */}

          <a className="whatsapp_float"
          target='_blank'
         href={`${beneficiary.whatsapp}`}> <i class='fa fa-whatsapp whatsapp-icon'></i></a>
            {/* </Icontain> */}
          </div>
          )}
          
        </Maindata>
        </Cardcontainer> 
    )
}

export default Card;

// const Icontain = Styled.div`
// display: flex;
// align-items: center;
// justify-content: space-around;
// `

const Cardcontainer = Styled.div`
padding: 0;
width: 100%;
display: flex;
justify-content: center;
background: white;

 @media screen and (max-width: 600px){
 width: 90%;
 }
`

const Maindata = Styled.div`
padding: 0;
background: lightgrey;
width: 90%;
display: flex;
justify-content: center;
flex-wrap: wrap;

.image{
 border-radius: 40px;
 margin-left: auto;
 margin-right: auto;
 display: block;
 display: flex;
 text-align: center;
}


@media screen and (max-width: 768px){
  width:90%
}


div{
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px; 
  width: 25%;
  background: #fddf;
  margin: 20px;
  border-radius: 10px;
}
`
