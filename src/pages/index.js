// import { Box } from "@/components/Box"
// import { Round } from "@/components/Round"
// export default function Home() {
//   return(
//     <div style={{

//       display: "flex",
//       flexWrap: "wrap",
//       gap: "10px",
//     }}>
//       <Box />
//       <Round />
//       <Box />
//       <Round />
//       <Box />
//       <Round />
//       <Round />
//       <Round />
//       <Round />
//       <Round />
//       <Box />
//       <Round />
//       <Round />
//       <Round />
//       <Box />
//       <Box />
//       <Box />
//       <Round />
//       <Box />
//       <Box />
//     </div>
//   )
// }






// import { ImgBox } from "@/components/Box"
// import { TextBox } from "@/components/Round"
// export default function Home() {
//   return(
//     <div style={{

//       display: "flex",
//       flexWrap: "wrap",
//       gap: "10px",
//       flexDirection: "column",
//     }}>
//       <ImgBox />
//       <TextBox />

//     </div>
//   )
// }



import {Roboto}from 'next/font/google';
import { Artists } from "@/components/Artists";
import { Round } from "@/components/Round";
import { CityBox } from "@/components/Box";


const roboto = Roboto({subsets:['latin'],weight:["100","300","400","500","700","900"]})

export default function Home() {
  return (
    <div style={{
      // backgroundColor: "#9F2B68",
      backgroundColor: "black",
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "32px",
      }}>
        <h1 className={roboto.className} style={{
        marginTop: "20px",
        color: "#00FF00",
        fontFamily: "",
      }}>Triple X</h1>
        </div>
      <div style={{
        marginBottom: "60px",
      }}>
      <Round
      city=""
      image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/357563340_759004519560121_294027296967771888_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=6iIXAmAoHY4AX8Z0ReG&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDC9z_kZWgpBmvdKirqtRkJu1OW-DdDIGu4qpaMqnMMsA&oe=64DF3DCA"
      />
      </div>
      <h1 style={{
        marginBottom: "60px",
        color: "#00FF00",
      }}>Artists</h1>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
      <CityBox
        city="Pacrap"
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/366662060_785584180235488_3458327717052969624_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=VuBbU7EJ3VkAX-CSKy6&_nc_ht=scontent.fuln1-1.fna&oh=00_AfBYhU3cROzzsqA0PHmX9TgrsngZg1S_MOAi-Z_iCLqYsA&oe=64DFA13A"
      />
      <CityBox
        city="Trishna"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t45.1600-4/367791576_6408571215607_4708600318964175345_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=104&ccb=1-7&_nc_sid=528f85&_nc_ohc=dPjPUACOAsAAX_jCVp_&_nc_ht=scontent.fuln1-2.fna&oh=00_AfBQPozJPuDHepfqkVvpuE96e3Ulhl5l5FD3ovt0M8fS7g&oe=64DFE4A7"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
      <CityBox
        city="Roockie"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t45.1600-4/367304819_6408570798607_5940495363581787260_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=106&ccb=1-7&_nc_sid=528f85&_nc_ohc=ZwhZB_q5HTkAX_O9kYi&_nc_ht=scontent.fuln1-2.fna&oh=00_AfA5VrZCPYl8H2GEaeYGJtEIlTP23qili0cNkAjkZFPSAg&oe=64DF6EB9"
      />
      <CityBox
        city="MVCHI"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/367411513_784319947028578_9117387084510969261_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=FihRbrbGzuoAX84INrt&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCplQnePUc8dfAHuFRF-ym0ugGubkuvlAIRC1TC0O0agQ&oe=64DF3C53"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
      <CityBox
        city="Seryoja"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/367467892_784254567035116_1655725146750974762_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=74ru053ZIikAX_HNlAk&_nc_ht=scontent.fuln1-2.fna&oh=00_AfALKMMshD9c0znJT8VnMJ7gIIgUb1xF4w0-cB4ZkRedRQ&oe=64E0437E"
      />
      <CityBox
        city="113"
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t45.1600-4/367705744_6408570947807_2991017202232507184_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=109&ccb=1-7&_nc_sid=528f85&_nc_ohc=EQoWv9CbTs8AX_BWYMX&_nc_ht=scontent.fuln1-1.fna&oh=00_AfA0BGAiEojJ5K6A5_LC2KKClMtTIhmJBnEEPg9aarT3uw&oe=64DFFC69"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
      <CityBox
        city="Ginjin"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/366593249_782387117221861_3212005707121382690_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=5F56SH2dLgQAX-OP-nX&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCHGjiLt8TZJj0vFE-b0ncaR4OUdqLrcFeyscg-af1dEQ&oe=64E04692"
      />
         <CityBox
        city=" Young MO'G"
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t45.1600-4/363838537_6406964134607_4397390050495284606_n.jpg?stp=cp0_dst-jpg_q75_s1080x2048_spS444&_nc_cat=102&ccb=1-7&_nc_sid=528f85&_nc_ohc=PC7r0Q55wuwAX-yUSdh&_nc_ht=scontent.fuln1-1.fna&oh=00_AfC7sG98bHwBoNQRILSn155ziL9w0yuCQfxWzrx9PLF-XA&oe=64DF0D6F"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
        <CityBox
        city="Youwillc"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/366073560_781248747335698_2656896836111856877_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=5hsWAsuXUycAX_FYa8s&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAYorSS326t3p5d-AlnVQrKWdSHVa16ZOhSvxxiil_Q8Q&oe=64DF0A8B"
      />
        <CityBox
        city="Seto"
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/366621073_786041693523070_4084216221765588783_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2lhMwzze47YAX_oo4YF&_nc_ht=scontent.fuln1-1.fna&oh=00_AfDDRJQDghjmR2jLtBF36zi4jgqQRm1jLEdc_2OLf8yKcw&oe=64E1A714"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    }}>
        <CityBox
        city="Saffron Bane"
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/366618909_785643663562873_7372731679625964354_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4hZQwo8G0L0AX_X1As4&_nc_ht=scontent.fuln1-1.fna&oh=00_AfC2RhTUR5RJid5hIJNMe66P4Pi_nDKbjiymr_6iUnC6-Q&oe=64E17321"
      />
        <CityBox
        city="NouBold"
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/366364729_784412853685954_3410714363149196348_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lDxUx2QpBhYAX88faFF&_nc_ht=scontent.fuln1-2.fna&oh=00_AfB5hDHe1GPV_NB6C_G-8UmfiBzGcmCqMd6JZajGEIHf0g&oe=64E08D1D"
      />
      </div>
      <h1 style={{
        marginTop: "30px",
        marginBottom: "60px",
        color: "#00FF00",
        fontSize: "40px",
      }}>Merch</h1>
      <div style={{
      display:"flex",
      justifyContent: "space-around",
    
    }}>
        <CityBox
        city=""
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/363356883_773229958137577_8371695325371869109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=CbbwNDTX_JsAX_eIDtb&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAZ9-pY5Lyd1YRWqL3iYj_TyM1R1aKNuVR5NySbUyzJPA&oe=64E0004C"
      />
        <CityBox
        city=""
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/363343544_773229998137573_6081801900138135954_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=51ktxCvbvtIAX-k5AyB&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAFW-TRSsN0zUaDsI-7ln2ZbsBhZ-7iQwfPASD27SwWaw&oe=64DF1FB8"
      />
      </div>
      <div style={{
      display:"flex",
      justifyContent: "center",
    }}>
        <CityBox
        city=""
        image="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/363798487_773231944804045_1499690054144731683_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=RKmqMBvlqgQAX8sjN23&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAlQ-PzLMdrJjSXVtLSq-9vWeuzp9hqcUt_CjnQzYj9yA&oe=64DF66E8"
      />
      </div>
      <h1>Artists</h1>
        <Artists
        city=""
        image="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/362613347_769625765164663_1255347918848243482_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=BZjqSGlTcZoAX-mfg3O&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDj5KvMIkuIzX3cVdoZ_hOGihstmXnluworo2nalukRsg&oe=64DF1E1F"
      />
     
    </div>
  );
}