import { SidebarItem } from "./Sidebaritem";

export function Sidebar() {
  return (
    <div className="sidebarBox">
      {/* <div className="sidebarContainer">

 

            <div className="home">

 

 

               <div style={styles.sideItem}>

                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z" fill="white" />

                  </svg>

 

                  <div>Home</div>

               </div>

 

               <div style={styles.sideItem}>

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M7.8 7.8L3.97 16.03L12.2 12.2L16.03 3.97L7.8 7.8ZM11.08 10.77C10.87 11.06 10.57 11.25 10.22 11.31C10.15 11.32 10.07 11.33 10 11.33C9.72 11.33 9.46 11.25 9.23 11.08C8.94 10.87 8.75 10.57 8.69 10.22C8.63 9.87 8.71 9.51 8.92 9.23C9.13 8.94 9.43 8.75 9.78 8.69C10.13 8.63 10.48 8.71 10.77 8.92C11.06 9.13 11.25 9.43 11.31 9.78C11.37 10.13 11.29 10.48 11.08 10.77ZM10 1C14.96 1 19 5.04 19 10C19 14.96 14.96 19 10 19C5.04 19 1 14.96 1 10C1 5.04 5.04 1 10 1ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0Z" fill="white" />

                  </svg>

 

                  <div>Explore</div>

               </div>

 

               <div className="SidebarDivorce">

                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z" fill="white" />

                  </svg>

 

                  <div>Subscriptions</div>

               </div>

            </div>

 

 

 

            <div className="library">

 

 

               <div style={styles.sideItem}>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M8 4L14 7.5L8 11V4ZM15 17H1V3H0V18H15V17ZM18 15H3V0H18V15ZM4 14H17V1H4V14Z" fill="white" />

                  </svg>

 

                  <div>Library</div>

               </div>

 

               <div style={styles.sideItem}>

                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M13.97 14.95L8.99996 11.87V5H11V10.76L15.03 13.25L13.97 14.95ZM21 10C21 15.51 16.51 20 11 20C5.48996 20 0.999961 15.51 0.999961 10H1.99996C1.99996 14.96 6.03996 19 11 19C15.96 19 20 14.96 20 10C20 5.04 15.96 1 11 1C7.80996 1 4.91996 2.64 3.27996 5.38C3.16996 5.56 3.05996 5.75 2.96996 5.94C2.95996 5.96 2.94996 5.98 2.93996 6H6.99996V7H0.959961V1H1.95996V5.74C1.99996 5.65 2.02996 5.57 2.06996 5.49C2.17996 5.27 2.29996 5.07 2.41996 4.86C4.21996 1.86 7.50996 0 11 0C16.51 0 21 4.49 21 10Z" fill="white" />

                  </svg>

 

                  <div>History</div>

               </div>

 

               <div style={styles.sideItem}>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M7 5L13 9L7 13V5ZM18 0V18H0V0H18ZM17 1H1V17H17V1Z" fill="white" />

                  </svg>

 

                  <div>Your Videos</div>

               </div>

 

               <div style={styles.sideItem}>

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M12.97 14.95L8 11.87V5H10V10.76L14.03 13.25L12.97 14.95ZM10 1C5.04 1 1 5.04 1 10C1 14.96 5.04 19 10 19C14.96 19 19 14.96 19 10C19 5.04 14.96 1 10 1ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0Z" fill="white" />

                  </svg>

 

                  <div>Watch Later</div>

               </div>

 

               <div style={styles.sideItem}>

                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z" fill="white" />

                  </svg>

 

                  <div>Liked Videos</div>

               </div>

 

               <div className="SidebarDivorce">

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                     <path d="M12 15.7L5.59998 9.4L6.29998 8.7L11.9 14.3L17.5 8.7L18.2 9.4L12 15.7Z" fill="white" />

                  </svg>

 

                  <div>Show More</div>

               </div>

            </div>

 

 

 

         </div>

*/}

      <SidebarItem />
    </div>
  );
}

// const styles = {

//    sideItem: {

//       // background: 'red',

//       display: 'flex',

//       flexDirection: 'row',

//       gap: '24px',

//       color: '#FFF',

//       fontFamily: 'Roboto',

//       fontSize: '14',

//       padding: "8px 24px",

//       // border: '1px solid black',

//       // borderBottom:  '1px solid black',

// }

// }
