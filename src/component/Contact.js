import React from 'react'
import {useState, useEffect} from 'react'
import '../App.css'



function Contact(props) {

    const style1 = {
        marginLeft: "-550px",
       
    }

    const style2 = {
          marginLeft: "500px", 
        top:"44px",
        position:"absolute"
    }

    const style3 = {
        marginLeft: "1366px",
        transition: 'margin-left 1s'
    }

    const style5 = {
        marginLeft: "-550px",
        position:'absolute',
        top:'44px'
    }


    const style4 = {
        marginLeft: "500px", 
        transition: 'margin-left 1s',
        position:'absolute',
        top:'44px'
        
      
    }

    const [homestate, sethomestate] = useState(style2)
    const [aboutstate, setaboutstate] = useState(style5)
    const [dsh, sdsh] = useState("hidden")
    const [dsa, sdsa] = useState("hidden")
    const [dss, sdss] = useState("hidden")
    const [dsc, sdsc] = useState("hidden")


    useEffect(()=>{

        if(props.state !== false){
 
 
 
         if (props.state===1&& window.location.pathname!=="/"){
 
             sethomestate(style3)
             
             setaboutstate(style4)
 
             sdsh("visible")
         }
 
         if (props.state===2&& window.location.pathname!=="/about"){
 
             sethomestate(style3)
             
             setaboutstate(style4)
 
             sdsa("visible")
         }
 
 
         if (props.state===3 && window.location.pathname!=="/services"){
 
             sethomestate(style3)
             
             setaboutstate(style4)
 
             sdss("visible")
         }
 
 
         if (props.state===4&& window.location.pathname!=="/contact"){
 
             sethomestate(style3)
             
             setaboutstate(style4)
 
             sdsc("visible")
         }
 }
 
 
 
 
     }, [props.state])


    return ( 

        <div>
            
<div id="sticky-container"  style={homestate}>
<h1>Contact us</h1>
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.
<br></br>
Contact us @ contact@musk-technology.com

</p>

</div>


<div style={{visibility: dsh}}>
<div style={aboutstate}>

<h1>Home</h1>
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.
<br></br>
Contact us @ contact@musk-technology.com

</p>
</div>
</div>

<div style={{visibility: dsa}}>
<div style={aboutstate}>

<h1>About</h1>
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.
<br></br>
Contact us @ contact@musk-technology.com

</p>
</div>
</div>

<div style={{visibility: dss}}>
<div  style={aboutstate}>

<h1>Services</h1>
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.
<br></br>
Contact us @ contact@musk-technology.com

</p>
</div>
</div>


<div style={{visibility: dsc}}>
<div style={aboutstate}>

<h1>Contact us</h1>
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.
<br></br>
Contact us @ contact@musk-technology.com

</p>
</div>
</div>
</div>
     );
}

export default Contact;