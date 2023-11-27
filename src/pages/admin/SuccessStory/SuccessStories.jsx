// import React,{ useState, useRef, useEffect } from 'react';
// import './Banner.css';
// import './SuccessStories.css';
// import './IBDPResultsPage'; 
// import './IgcseResults';
// import './MypResults';
// import './CompetitionResult';

// import JoditEditor from 'jodit-react';

// function SuccessStories() {

//   const editor1 = useRef(null);
//   const editor2 = useRef(null);
//   const [content1, setContent1] = useState('');
//   const [content2, setContent2] = useState('');
//   const config = {};

//   const handleEditor1Change = (newContent) => {
//     setContent1(newContent);
//   };

//     const handleEditor2Change = (newContent) => {
//     setContent2(newContent);
//   };

//   useEffect(() => {
//     // Set focus to the textarea element when the editors mount
//     if (editor1.current && editor2.current) {
//       const joditTextArea1 = editor1.current.editor;
//       const joditTextArea2 = editor2.current.editor;
//       if (joditTextArea1 && joditTextArea1.container && joditTextArea2 && joditTextArea2.container) {
//         const textarea1 = joditTextArea1.container.querySelector('textarea');
//         const textarea2 = joditTextArea2.container.querySelector('textarea');

//         textarea1.addEventListener('click', () => {
//           textarea1.focus();
//         });

//         textarea2.addEventListener('click', () => {
//           textarea2.focus();
//         });
//       }
//     }

//   }, []);

//   return (
// <div className='main-container'>

// <div className="button-container">
//         <a href="/Banner" className="bannerBtn">
//           Banner
//         </a>
//         <a href="/IBDPResultsPage" className="ibdpRbtn">
//           IBDP Results
//         </a>
//         <a href="MypResults" className="mypRbtn">
//           MYP Results
//         </a>
//         <a href="IgcseResults" className="igcseRbtn">
//           IGCSE Results
//         </a>
//         <a href="CompetitionResult" className="competitionbtn">
//           Competition Results
//         </a>
//       </div>
      
// <div className='leftContainer'>
      
//       <div className="border">
//         <div className="editor-container1">
//           <span>Heading</span>
//           <div className="jodit-editor">
//             <JoditEditor
//               ref={editor1}
//               value={content1}
//               config={config}
//               tabIndex={1}
//               onBlur={(newContent) => handleEditor1Change}
//               // onChange={handleEditor1Change}
//             />
//           </div>
//           <div className='ButtonText'>
//             <span>Button Text</span>
//             <div className="rectangular-button" contentEditable="true"></div>
//           </div>

//           <div className='imageUploaderMain'>
        
//       </div>

//         </div> 

//         <div className="editor-container2">
//           <span>Banner Text</span>
//           <div className="jodit-editor">
//             <JoditEditor
//               ref={editor2}
//               value={content2}
//               config={config}
//               tabIndex={2}
//               onBlur={(newContent) => handleEditor2Change}
//               // onChange={handleEditor2Change}
//             />
//           </div>
//           <div>
//             <span>Button URL</span>
//             <div className="rectangular-button" contentEditable="true"></div>
//           </div>
//         </div>      
//       </div>    
//       </div>

//       {/* <div className='SideButton'>
//         <a href='SaveTheChangesBtn' className='SaveTheChangesBtn'>Save The Changes</a>
//         <a href="ResetAll" className= "ResetAllBtn"> Reset All</a>
//         <a href='PreviewPage' className='PreviewPageBtn'>Preview Page</a>
//         <a href='Publish&Unpublish' className='PublishUnpublishBtn'>Publish&Unpublish</a>
//       </div> */}
//       <div className='SideButton'>
//         <button className='SaveTheChangesBtn'>Save The Changes</button>
//         <button className='ResetAllBtn'>Reset All</button>
//         <button className='PreviewPageBtn'>Preview Page</button>
        
//        <button className='PublishUnpublishBtn'>
//     <select className="dropbtn" id="publishUnpublishSelect">
//         <option value="Publish">Publish</option>
//         <option value="Unpublish">Unpublish</option>
//     </select> 
//        </button>        
//       </div>     
//     </div>

//   );
// }


// export default SuccessStories;