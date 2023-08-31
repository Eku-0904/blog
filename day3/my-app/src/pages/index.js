


import {Roboto}from 'next/font/google';
import { CityBox } from "@/components/Box";


const roboto = Roboto({subsets:['latin'],weight:["100","300","400","500","700","900"]})

export default function Home() {
  let array = [
    {
      title:"The Emotional Toll of Being in UX",
      img:"/img_1.png",
      des:"There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
      avatar:"Avatar_1.png",
      name:"Wade Warren",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"10 secret tips for managing a team remotely",
      img:"/img_2.png",
      des:"Our latest updates and blogs about managing your team \n Our latest updates and blogs about managing your team",
      avatar:"Avatar_2.png",
      name:"Bessie Cooper",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"What Ever Happened to Steampunk?",
      img:"/img_3.png",
      des:"How the iPhone popularized steampunk… and how the iPhone killed it off",
      avatar:"Avatar_3.png",
      name:"Courtney Henry",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"The 2020 Guide for White Men in Tech",
      img:"/img_4.png",
      des:"How to use centuries of unfair advantage to make the world a more equal place",
      avatar:"Avatar_4.png",
      name:"Darlene Robert",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"Why Are Women Still Behind in the Design World?",
      img:"/img_5.png",
      des:"It’s 2020, but women designers still face lower pay and less opportunity. What gives?",
      avatar:"Avatar_5.png",
      name:"Leslie Alexander",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"The Ultimate Guide to Becoming a Great Designer",
      img:"/img_6.png",
      des:"Our latest updates and blogs about managing your team \n Our latest updates and blogs about managing your team",
      avatar:"Avatar_6.png",
      name:"Eleanor Pena",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"Data-Driven Design is Killing Our Instincts",
      img:"/img7.png",
      des:"Our latest updates and blogs about managing your team \n Our latest updates and blogs about managing your team",
      avatar:"Avatar_7.png",
      name:"Jane Cooper",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"Finding the Blank Spots in Big Data",
      img:"/img_8.png",
      des:"Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…",
      avatar:"Avatar_8.png",
      name:"Jenny Wilson",
      text:"I",
      date:"2nd January,2022"
    },
    {
      title:"3 Lessons We Learned From Rebranding Gusto",
      img:"/img_9.png",
      des:"You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s",
      avatar:"Avatar_9.png",
      name:"Jacob Jones",
      text:"I",
      date:"2nd January,2022"
    },
  ];

  return (
<div style={{
  backgroundColor: "#F5F7FA",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}}>
  <div style={{
  display:"flex",
}}>
  <img style={{
    marginRight:"790px"
  }} src="team.png" />
  <p>hi</p>
  </div>
    <div style={{
      backgroundColor: "#315399",
      display:"flex",
      gap:"20px",
      width:"870px",
      justifyContent:"center"
    }}>

      <div style={{
        display:"flex",
        height:"1100px",
        flexWrap:"wrap",
        gap:"30px",
      }}>
              {array.map((element) => {
                return <CityBox title={element.title} img={element.img} des={element.des} avatar={element.avatar} name={element.name} text={element.text} date={element.date}/>;
              })}
    </div>
    </div>
    </div>
  );
}