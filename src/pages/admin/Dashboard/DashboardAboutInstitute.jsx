import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import Dashboardcommondiv from './Dashboardcommondiv';
import 'bootstrap/dist/css/bootstrap.min.css';


function DashboardAboutInstitute() {
  const [images, setDashboardImages] = useState([]);
  const [isDragging, setDashboardIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const heading_editor = useRef(null);
  const text_editor = useRef(null);
  const [banner_heading, setDashboardBannerHeading] = useState('');
  const [banner_text, setDashboardBannerText] = useState('');
  const [button_text, setDashboardButtonText] = useState('');
  const [button_url, setDashboardButtonUrl] = useState('');
  const [banner_status, setDashboardBannerStatus] = useState('');
  const config = {};

// Function to reset all data
const resetAllData = () => {
  setDashboardImages(null); // Reset the images state to null
  setDashboardBannerHeading(null); // Reset banner_heading to null
  setDashboardBannerText(null); // Reset banner_text to null
  setDashboardButtonText(null); // Reset button_text to null
  setDashboardButtonUrl(null); // Reset button_url to null
  setDashboardBannerStatus(null); // Reset banner_status to null
}


  function onDrop(event) {
    event.preventDefault();
    setDashboardIsDragging(false);
    const files = event.dataTransfer.files;

    // Handle dropped files (images)
    const newImages = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setDashboardImages((prevImages) => [...prevImages, ...newImages]);
  }

  function deleteImage(index) {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setDashboardImages(updatedImages);
  }

  function onDragLeave(event) {
    event.preventDefault();
    setDashboardIsDragging(false);
  }

  function onDragOver(event) {
    event.preventDefault();
    setDashboardIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    const newImages = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setDashboardImages((prevImages) => [...prevImages, ...newImages]);
  }

  const handleHeadingEditorChange = (headingData) => {
    setDashboardBannerHeading(headingData);
  };

  const handleTextEditorChange = (bannerTextData) => {
    setDashboardBannerText(bannerTextData);
  };

  const handleButtonUrlChange = (buttonURLData) => {
    setDashboardButtonUrl(buttonURLData);
  }

  const handleButtonTextChange = (buttonTextData) => {
    setDashboardButtonText(buttonTextData);
  }

  const handleStatusChange = (event) => {
    setDashboardBannerStatus(event.target.value === 'Publish');
  };

  const formData = new FormData();
  // const selectedImage = null;
  const uploadImage = () => {
    try {
      if (images.length === 0) {
        console.error('No image selected');
        return;
      }
      formData.append('file', images[0])      
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  const saveChanges = async  () => {
    // Create a JavaScript object with the data to send to the backend
    const requestBody = {
    banner_heading: banner_heading,
    banner_text: banner_text,
    button_text: button_text,
    button_url: button_url,
    status: banner_status,
    };

    formData.append('model', JSON.stringify(requestBody))

    const imageConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    try {
    const response = await axios.post('http://localhost:8080/api/banners', formData, imageConfig);
      console.log('Image Upload Response:', response.data);
    } catch (error) {
      console.log(formData);
      console.error('Error uploading images:', error);
    }

    console.log(formData);
  };

  useEffect(() => {
    // Set focus to the textarea element when the editors mount
    if (heading_editor.current && text_editor.current) {
      const joditTextArea1 = heading_editor.current.editor;
      const joditTextArea2 = text_editor.current.editor;
      if (
        joditTextArea1 &&
        joditTextArea1.container &&
        joditTextArea2 &&
        joditTextArea2.container
      ) {
        const textarea1 = joditTextArea1.container.querySelector('textarea');
        const textarea2 = joditTextArea2.container.querySelector('textarea');

        textarea1.addEventListener('click', () => {
          textarea1.focus();
        });

        textarea2.addEventListener('click', () => {
          textarea2.focus();
        });
      }
    }
  }, []);

  return (
    
    <div className='main-container'>
      <div className='button-container'>
      <Dashboardcommondiv/>
      </div>

      <div className='leftContainer'>
        <div className='border'>
          <div className='editor-container1'>
            <span>Heading</span>
            <div className='jodit-editor'>
              <JoditEditor
                ref={heading_editor}
                value={banner_heading}
                config={config}
                tabIndex={1}
                onBlur={(headingData) => handleHeadingEditorChange(headingData)}
              />
            </div>







            <div style={{background:"white", border:"2px solid", padding:"10px"}}>
            <div className='ButtonText'>
  <span>Number</span>
  <div
    className='rectangular-button'
    contentEditable='true'
    onInput={(e) => handleButtonTextChange(e.target.textContent)}
  ></div>
</div>
<div className='ButtonUrl'>
              <span>Extra Info</span>
              <div className='rectangular-button'
              contentEditable='true'
              onInput={(e) => handleButtonUrlChange(e.target.textContent)}>

              </div>
            </div>


            </div>








            <div className='ButtonText'>
  <span>Number</span>
  <div
    className='rectangular-button'
    contentEditable='true'
    onInput={(e) => handleButtonTextChange(e.target.textContent)}
  ></div>
</div>
<div className='ButtonUrl'>
              <span>Extra Info</span>
              <div className='rectangular-button'
              contentEditable='true'
              onInput={(e) => handleButtonUrlChange(e.target.textContent)}>

              </div>
            </div>    
        </div>

          <div className='editor-container2 '>
            <span>Number</span>
            <div className='jodit-editor'>
              <JoditEditor
                ref={text_editor}
                value={banner_text}
                config={config}
                tabIndex={2}
                onBlur={(bannerTextData) => handleTextEditorChange(bannerTextData)}
              />
            </div>
            <div className='ButtonUrl'>
              <span>Number</span>
              <div className='rectangular-button'
              contentEditable='true'
              onInput={(e) => handleButtonUrlChange(e.target.textContent)}>

              </div>
            </div>
            <div className='ButtonUrl'>
              <span>Extra Info</span>
              <div className='rectangular-button'
              contentEditable='true'
              onInput={(e) => handleButtonUrlChange(e.target.textContent)}>

              </div>
            </div>


            <div className='ButtonText'>
  <span>Number</span>
  <div
    className='rectangular-button'
    contentEditable='true'
    onInput={(e) => handleButtonTextChange(e.target.textContent)}
  ></div>
</div>
<div className='ButtonUrl'>
              <span>Extra Info</span>
              <div className='rectangular-button'
              contentEditable='true'
              onInput={(e) => handleButtonUrlChange(e.target.textContent)}>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='SideButton'>
        <button className='SaveTheChangesBtn' onClick={saveChanges}>Save The Changes</button>
        <button className='ResetAllBtn' onClick={resetAllData}>Reset All</button>
        <button className='PreviewPageBtn'>Preview Page</button>

        <button className='PublishUnpublishBtn'>
          <select className='dropbtn' id='publishUnpublishSelect' onChange={handleStatusChange}>
            <option value='Publish'>Publish</option>
            <option value='Unpublish'>Unpublish</option>
          </select>
          {/* <p>Status: {banner_status ? 'Published' : 'Unpublished'}</p> */}
        </button>
      </div>
    </div>
  );
}

export default DashboardAboutInstitute;
