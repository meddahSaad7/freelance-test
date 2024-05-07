import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Pankaj Taxes 2024.pdf', 'Pankaj M', 'Shared with 5 people', 'Public access', 1),
    createData('2024 Finances Sheet', 'Pankaj M', 'Shared with 2 people', 'Not accessed in last 30d', 2),
    createData('2024 Vegas Trip Plan', 'Pankaj M', 'Not Shared', 'Secure', 3),
  ];
  console.log(rows, 'rows....')
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center bg-gray-300 font-light">
      <div className=' grid grid-rows-10 grid-flow-col phone:py-10 '>
        <div className='bg-[#F5F6F8] hidden tabXl:flex tab:flex phone:flex justify-between items-center px-5 border-b border-[#BDBDBD] row-span-1 col-span-2 tabXl:col-span-3 tabXl:row-span-1 tab:col-span-3 tab:row-span-1 phone:col-span-3 phone:row-span-1'>
          <p className=' text-[26px] phone:text-[20px] leading-4 font-bold'>
            Google Drive
          </p>
          <div className=' w-[50px] h-[50px] bg-black rounded-full'></div>
        </div>
        <div className=' bg-[#F5F6F8] px-6 tabXl:px-0 tab:px-0 phone:px-0 w-full h-full border-r border-[#BDBDBD] flex flex-col justify-start items-center row-span-10 col-span-1 tabXl:col-span-3 tabXl:row-span-1 tab:col-span-3 tab:row-span-1 phone:col-span-3 phone:row-span-1'>
          <div className=' w-full h-[81px] tabXl:h-full tabXl:flex tabXl:justify-start tabXl:items-center tabXl:pl-5 tab:h-full tab:flex tab:justify-start tab:items-center tab:pl-5 phone:h-full phone:flex phone:justify-start phone:items-center phone:pl-5'>
            <p className=' text-[30px] h-full flex justify-start items-center font-bold leading-4 tabXl:hidden tab:hidden phone:hidden'>
              Drive Security
            </p>
            <div className=' flex flex-col mt-7 tabXl:mt-0 tabXl:flex-row tab:mt-0 tab:flex-row phone:mt-0 phone:flex-row'>
              <p className=' text-[26px] phone:text-[20px] mb-5 tabXl:mb-0 tab:mb-0 phone:mb-0 font-bold leading-4'>
                Google Drive
              </p>
              <p className=' text-[20px] phone:text-[14px] mb-5 tabXl:mb-0 tabXl:ml-5 tab:mb-0 tab:ml-5 phone:mb-0 phone:ml-5 '>
                One Drive
              </p>
              <p className=' text-[20px] phone:text-[14px] mb-5 tabXl:mb-0 tabXl:ml-5 tab:mb-0 tab:ml-5 phone:mb-0 phone:ml-5 '>
                Dropbox
              </p>
              <p className=' text-[20px] phone:text-[14px] mb-5 tabXl:mb-0 tabXl:ml-5 tab:mb-0 tab:ml-5 phone:mb-0 phone:ml-5 '>
                Box
              </p>
            </div>
          </div>
        </div>
        <div className='bg-[#F5F6F8] hidden desk:flex deskXl:flex deskXXl:flex justify-between items-center px-5 border-b border-[#BDBDBD] row-span-1 col-span-2 tabXl:col-span-3 tabXl:row-span-1 tab:col-span-3 tab:row-span-1 phone:col-span-3 phone:row-span-1'>
          <p className=' text-[26px] phone:text-[20px] leading-4 font-bold'>
            Google Drive
          </p>
          <div className=' w-[50px] h-[50px] bg-black rounded-full'></div>
        </div>
        <div className=' w-full h-full bg-white row-span-9 col-span-2 tabXl:col-span-3 tabXl:row-span-8 tab:col-span-3 tab:row-span-8 phone:col-span-3 phone:row-span-8'>
          <div className=' w-full h-auto mt-5 px-5 font-normal flex flex-col justify-center items-center'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>File</TableCell>
                    <TableCell align="left">
                      <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                        Owner
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                        Permissions
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                        Risks
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                          {row.name}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                          {row.calories}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4723 12.0759C12.8145 12.5154 12.0411 12.75 11.25 12.75C10.1891 12.75 9.1717 12.3286 8.42156 11.5784C7.67141 10.8283 7.24998 9.81087 7.24998 8.75C7.24998 7.95888 7.48458 7.18552 7.92411 6.52772C8.36363 5.86992 8.98835 5.35723 9.71925 5.05448C10.4502 4.75173 11.2544 4.67252 12.0303 4.82686C12.8063 4.9812 13.519 5.36216 14.0784 5.92157C14.6378 6.48098 15.0188 7.19372 15.1731 7.96964C15.3275 8.74556 15.2483 9.54983 14.9455 10.2807C14.6428 11.0116 14.1301 11.6364 13.4723 12.0759Z" fill="#F5F6F8" stroke="#1C1D1E" stroke-width="2" />
                            <path d="M22.7778 14.7865C22.3256 15.0887 21.7939 15.25 21.25 15.25C20.5207 15.25 19.8212 14.9603 19.3055 14.4445C18.7898 13.9288 18.5 13.2293 18.5 12.5C18.5 11.9561 18.6613 11.4244 18.9635 10.9722C19.2657 10.5199 19.6952 10.1675 20.1977 9.95933C20.7001 9.75119 21.2531 9.69673 21.7865 9.80284C22.32 9.90895 22.81 10.1709 23.1946 10.5555C23.5792 10.9401 23.8411 11.4301 23.9472 11.9635C24.0533 12.497 23.9988 13.0499 23.7907 13.5524C23.5826 14.0549 23.2301 14.4844 22.7778 14.7865Z" fill="#F5F6F8" stroke="#1C1D1E" stroke-width="2" />
                            <mask id="path-3-inside-1_13_52" fill="white">
                              <path d="M26.25 25C26.5815 25 26.8995 24.8683 27.1339 24.6339C27.3683 24.3995 27.5 24.0815 27.5 23.75C27.499 22.5818 27.1706 21.4372 26.552 20.4461C25.9335 19.4551 25.0495 18.6572 24.0005 18.1431C22.9514 17.629 21.7793 17.4192 20.617 17.5375C19.4548 17.6558 18.349 18.0975 17.425 18.8125C16.2007 17.593 14.6426 16.7633 12.9473 16.428C11.252 16.0928 9.49543 16.2671 7.89906 16.9289C6.3027 17.5907 4.93805 18.7104 3.97721 20.1468C3.01637 21.5832 2.50237 23.2719 2.50003 25C2.50003 25.3315 2.63173 25.6495 2.86615 25.8839C3.10057 26.1183 3.41851 26.25 3.75003 26.25H18.75C19.0815 26.25 19.3995 26.1183 19.6339 25.8839C19.8683 25.6495 20 25.3315 20 25" />
                            </mask>
                            <path d="M26.25 25C26.5815 25 26.8995 24.8683 27.1339 24.6339C27.3683 24.3995 27.5 24.0815 27.5 23.75C27.499 22.5818 27.1706 21.4372 26.552 20.4461C25.9335 19.4551 25.0495 18.6572 24.0005 18.1431C22.9514 17.629 21.7793 17.4192 20.617 17.5375C19.4548 17.6558 18.349 18.0975 17.425 18.8125C16.2007 17.593 14.6426 16.7633 12.9473 16.428C11.252 16.0928 9.49543 16.2671 7.89906 16.9289C6.3027 17.5907 4.93805 18.7104 3.97721 20.1468C3.01637 21.5832 2.50237 23.2719 2.50003 25C2.50003 25.3315 2.63173 25.6495 2.86615 25.8839C3.10057 26.1183 3.41851 26.25 3.75003 26.25H18.75C19.0815 26.25 19.3995 26.1183 19.6339 25.8839C19.8683 25.6495 20 25.3315 20 25" fill="#F5F6F8" />
                            <path d="M27.5 23.75H29.5L29.5 23.7483L27.5 23.75ZM17.425 18.8125L16.0136 20.2295L17.2589 21.4699L18.649 20.3942L17.425 18.8125ZM2.50003 25L0.500031 24.9973V25H2.50003ZM26.25 27C27.112 27 27.9386 26.6576 28.5481 26.0481L25.7197 23.2197C25.8604 23.079 26.0511 23 26.25 23V27ZM28.5481 26.0481C29.1576 25.4386 29.5 24.612 29.5 23.75H25.5C25.5 23.5511 25.579 23.3603 25.7197 23.2197L28.5481 26.0481ZM29.5 23.7483C29.4987 22.2062 29.0652 20.6953 28.2487 19.3871L24.8554 21.5051C25.276 22.179 25.4993 22.9573 25.5 23.7517L29.5 23.7483ZM28.2487 19.3871C27.4322 18.079 26.2653 17.0258 24.8806 16.3472L23.1203 19.939C23.8337 20.2886 24.4348 20.8312 24.8554 21.5051L28.2487 19.3871ZM24.8806 16.3472C23.4959 15.6685 21.9486 15.3916 20.4145 15.5478L20.8196 19.5272C21.6099 19.4468 22.407 19.5894 23.1203 19.939L24.8806 16.3472ZM20.4145 15.5478C18.8803 15.704 17.4206 16.287 16.201 17.2308L18.649 20.3942C19.2773 19.908 20.0293 19.6077 20.8196 19.5272L20.4145 15.5478ZM18.8365 17.3955C17.3322 15.8972 15.418 14.8779 13.3353 14.466L12.5594 18.3901C13.8672 18.6486 15.0691 19.2887 16.0136 20.2295L18.8365 17.3955ZM13.3353 14.466C11.2525 14.0542 9.09438 14.2683 7.13313 15.0814L8.665 18.7765C9.89648 18.2659 11.2516 18.1315 12.5594 18.3901L13.3353 14.466ZM7.13313 15.0814C5.17188 15.8945 3.49531 17.2701 2.31485 19.0348L5.63956 21.2588C6.38078 20.1508 7.43351 19.287 8.665 18.7765L7.13313 15.0814ZM2.31485 19.0348C1.13439 20.7995 0.502904 22.8742 0.500032 24.9973L4.50003 25.0027C4.50183 23.6696 4.89835 22.3669 5.63956 21.2588L2.31485 19.0348ZM0.500031 25C0.500031 25.862 0.842439 26.6886 1.45193 27.2981L4.28036 24.4697C4.42101 24.6103 4.50003 24.8011 4.50003 25H0.500031ZM1.45193 27.2981C2.06143 27.9076 2.88808 28.25 3.75003 28.25V24.25C3.94894 24.25 4.13971 24.329 4.28036 24.4697L1.45193 27.2981ZM3.75003 28.25H18.75V24.25H3.75003V28.25ZM18.75 28.25C19.612 28.25 20.4386 27.9076 21.0481 27.2981L18.2197 24.4697C18.3604 24.329 18.5511 24.25 18.75 24.25V28.25ZM21.0481 27.2981C21.6576 26.6886 22 25.862 22 25H18C18 24.8011 18.079 24.6103 18.2197 24.4697L21.0481 27.2981Z" fill="#1C1D1E" mask="url(#path-3-inside-1_13_52)" />
                          </svg>
                          {row.fat}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span className=' text-[16px] phone:text-[10px] w-full h-full flex justify-start items-center'>
                          {
                            row.protein === 1 && <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM15 25C13.0222 25 11.0888 24.4135 9.4443 23.3147C7.79981 22.2159 6.51809 20.6541 5.76121 18.8268C5.00433 16.9996 4.8063 14.9889 5.19215 13.0491C5.57801 11.1093 6.53041 9.32746 7.92894 7.92893C9.32746 6.53041 11.1093 5.578 13.0491 5.19215C14.9889 4.8063 16.9996 5.00433 18.8268 5.7612C20.6541 6.51808 22.2159 7.79981 23.3147 9.4443C24.4135 11.0888 25 13.0222 25 15C25 17.6522 23.9464 20.1957 22.0711 22.0711C20.1957 23.9464 17.6522 25 15 25Z" fill="#FD4341" />
                              <path d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z" fill="#FD4341" />
                              <path d="M15 8.75C14.6685 8.75 14.3505 8.8817 14.1161 9.11612C13.8817 9.35054 13.75 9.66848 13.75 10V16.25C13.75 16.5815 13.8817 16.8995 14.1161 17.1339C14.3505 17.3683 14.6685 17.5 15 17.5C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75Z" fill="#FD4341" />
                            </svg>
                          }
                          {
                            row.protein === 2 && <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 0.5C10.5277 0.5 8.11099 1.23311 6.05538 2.60663C3.99976 3.98015 2.39761 5.93238 1.45151 8.21646C0.505416 10.5005 0.257874 13.0139 0.74019 15.4386C1.2225 17.8634 2.41301 20.0907 4.16117 21.8388C5.90933 23.587 8.13661 24.7775 10.5614 25.2598C12.9861 25.7421 15.4995 25.4946 17.7836 24.5485C20.0676 23.6024 22.0199 22.0002 23.3934 19.9446C24.7669 17.889 25.5 15.4723 25.5 13C25.5 11.3585 25.1767 9.73303 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16117C20.6781 3.00043 19.3001 2.07969 17.7836 1.45151C16.267 0.823322 14.6415 0.5 13 0.5ZM13 23C11.0222 23 9.08879 22.4135 7.4443 21.3147C5.79981 20.2159 4.51809 18.6541 3.76121 16.8268C3.00433 14.9996 2.8063 12.9889 3.19215 11.0491C3.57801 9.10929 4.53041 7.32746 5.92894 5.92893C7.32746 4.53041 9.10929 3.578 11.0491 3.19215C12.9889 2.8063 14.9996 3.00433 16.8268 3.7612C18.6541 4.51808 20.2159 5.79981 21.3147 7.4443C22.4135 9.08879 23 11.0222 23 13C23 15.6522 21.9464 18.1957 20.0711 20.0711C18.1957 21.9464 15.6522 23 13 23Z" fill="#F3983E" />
                              <path d="M13 19.25C13.6904 19.25 14.25 18.6904 14.25 18C14.25 17.3096 13.6904 16.75 13 16.75C12.3096 16.75 11.75 17.3096 11.75 18C11.75 18.6904 12.3096 19.25 13 19.25Z" fill="#F3983E" />
                              <path d="M13 6.75C12.6685 6.75 12.3505 6.8817 12.1161 7.11612C11.8817 7.35054 11.75 7.66848 11.75 8V14.25C11.75 14.5815 11.8817 14.8995 12.1161 15.1339C12.3505 15.3683 12.6685 15.5 13 15.5C13.3315 15.5 13.6495 15.3683 13.8839 15.1339C14.1183 14.8995 14.25 14.5815 14.25 14.25V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75Z" fill="#F3983E" />
                            </svg>
                          }
                          {
                            row.protein === 3 && <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className='mr-1' xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05538 4.60663C5.99976 5.98015 4.39761 7.93238 3.45151 10.2165C2.50542 12.5005 2.25787 15.0139 2.74019 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90933 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7836 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7836 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM15 25C13.0222 25 11.0888 24.4135 9.4443 23.3147C7.79981 22.2159 6.51809 20.6541 5.76121 18.8268C5.00433 16.9996 4.8063 14.9889 5.19215 13.0491C5.57801 11.1093 6.53041 9.32746 7.92894 7.92893C9.32746 6.53041 11.1093 5.578 13.0491 5.19215C14.9889 4.8063 16.9996 5.00433 18.8268 5.7612C20.6541 6.51808 22.2159 7.79981 23.3147 9.4443C24.4135 11.0888 25 13.0222 25 15C25 17.6522 23.9464 20.1957 22.0711 22.0711C20.1957 23.9464 17.6522 25 15 25Z" fill="#27AE60" />
                              <path d="M18.375 10.4875L13.65 16.7375L11.6125 14.1C11.4086 13.8381 11.109 13.6679 10.7797 13.6269C10.4503 13.5858 10.1181 13.6773 9.85624 13.8812C9.59434 14.0851 9.42416 14.3847 9.38314 14.714C9.34211 15.0434 9.43361 15.3756 9.63749 15.6375L12.675 19.525C12.7927 19.674 12.9428 19.7942 13.1139 19.8765C13.285 19.9588 13.4726 20.001 13.6625 20C13.8534 19.9995 14.0416 19.9553 14.2128 19.8708C14.384 19.7863 14.5335 19.6637 14.65 19.5125L20.3625 12.0125C20.5647 11.7473 20.6533 11.4126 20.6088 11.082C20.5642 10.7515 20.3902 10.4522 20.125 10.25C19.8598 10.0477 19.5251 9.95916 19.1946 10.0037C18.864 10.0482 18.5647 10.2223 18.3625 10.4875H18.375Z" fill="#27AE60" />
                            </svg>
                          }
                          {row.carbs}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className=' w-full flex justify-center items-center mt-[270px] phone:mt-[200px] tab:mt-[200px] mb-3'>
            <Stack spacing={2} className=' mt-10'>
              <Pagination count={3} color="primary" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
