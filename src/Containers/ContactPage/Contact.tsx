import React from 'react';
import styled from "styled-components";
import MainLayout from "../../Components/MainLayout/MainLayout";
import emailjs from 'emailjs-com';
import {P1, P2} from "../../Styles/Common/CommonStyles";

emailjs.init("user_khXIp5LUO08FOIW82bBWi");

const CustomInput = styled.input`
    outline: none;
    background-color: #28283A;
    color: #fff;
    border-radius: 20px;
    padding: 14px 12px 14px 12px;
    width: 295px;
    border: none; 
    
    
`
const CustomTextArea = styled.textarea`
    outline: none;
    background-color: #28283A;
    color: #fff;
    border-radius: 20px;
    padding: 14px 12px 14px 12px;
    width: 295px;
    border: none; 
    resize: none;
    
    
`


function Contact() {
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [hasSended, setHasSended] = React.useState(false);

    function checkIfValidEmail(value: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }

    function sendFeedback (templateId: string, variables: any) {
        emailjs.send(
            'service_qh1y9hn', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    return(
          <MainLayout>
              <P1 style={{marginTop: "32px"}}>Contact</P1>
              <P2>Feel free to contact us if you have any questions</P2>
              <P2 style={{color: "#FF9092"}}>support@talmoe.com </P2>
              {/*<CustomInput type={"email"} placeholder={"E-mail"}  value={email} style={{marginBottom: "16px", marginTop: "16px"}}  onChange={(value)=> setEmail(value.target.value)}/>*/}
              {/*<CustomInput type={"text"} placeholder={"Subject"}  value={subject} style={{marginBottom: "16px"}}  onChange={(value)=> setSubject(value.target.value)}/>*/}
              {/*<CustomTextArea style={{height: "140px"}} placeholder={"Message"} value={message} onChange={(value)=> setMessage(value.target.value)}/>*/}
            {/*<Button*/}
            {/*    disabled={email.length === 0 || message.length === 0}*/}
            {/*    style={{marginTop: "22px", width: "319px"}}*/}
            {/*    onClick={()=> {*/}
            {/*        if(checkIfValidEmail(email)) {*/}
            {/*            sendFeedback("template_9upe2yc", {message: message, from_name: email, reply_to: email})*/}
            {/*        } else {*/}
            {/*            alert("Invalid E-mail")*/}
            {/*        }*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Send*/}
            {/*</Button>*/}
          </MainLayout>
    );
}

export default Contact;