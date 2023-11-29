import React, { useState, useRef, useEffect } from 'react';
import './Banner.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import CommonDiv from './CommonPersonalizedDiv';

function Banner() {
  const [images, setPersonalisedImages] = useState([]);
  const [isDragging, setPersonalisedIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const heading_editor = useRef(null);
  const text_editor = useRef(null);
  const [banner_heading, setPersonalisedBannerHeading] = useState('');
  const [banner_text, setPersonalisedBannerText] = useState('');
  const [button_text, setPersonalisedButtonText] = useState('');
  const [button_url, setPersonalisedButtonUrl] = useState('');
  const [banner_status, setPersonalisedBannerStatus] = useState('');
  const config = {};

// Function to reset all data
const resetAllData = () => {
  setPersonalisedImages(null); // Reset the images state to null
  setPersonalisedBannerHeading(null); // Reset banner_heading to null
  setPersonalisedBannerText(null); // Reset banner_text to null
  setPersonalisedButtonText(null); // Reset button_text to null
  setPersonalisedButtonUrl(null); // Reset button_url to null
  setPersonalisedBannerStatus(null); // Reset banner_status to null
}


  function onDrop(event) {
    event.preventDefault();
    setPersonalisedIsDragging(false);
    const files = event.dataTransfer.files;

    // Handle dropped files (images)
    const newImages = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setPersonalisedImages((prevImages) => [...prevImages, ...newImages]);
  }

  function deleteImage(index) {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setPersonalisedImages(updatedImages);
  }

  function onDragLeave(event) {
    event.preventDefault();
    setPersonalisedIsDragging(false);
  }

  function onDragOver(event) {
    event.preventDefault();
    setPersonalisedIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    const newImages = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setPersonalisedImages((prevImages) => [...prevImages, ...newImages]);
  }

  const handleHeadingEditorChange = (headingData) => {
    setPersonalisedBannerHeading(headingData);
  };

  const handleTextEditorChange = (bannerTextData) => {
    setPersonalisedBannerText(bannerTextData);
  };

  const handleButtonUrlChange = (buttonURLData) => {
    setPersonalisedButtonUrl(buttonURLData);
  }

  const handleButtonTextChange = (buttonTextData) => {
    setPersonalisedButtonText(buttonTextData);
  }

  const handleStatusChange = (event) => {
    setPersonalisedBannerStatus(event.target.value === 'Publish');
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
      <CommonDiv />
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
            <div className='ButtonText'>
  <span>Button Text</span>
  <div
    className='rectangular-button'
    contentEditable='true'
    onInput={(e) => handleButtonTextChange(e.target.textContent)}
  ></div>
</div>

            <div>
            <p>Background Image</p>
            <div className='card'>
              <div className='top'>
                <p>Drag & Drop image uploading</p>
              </div>
              <div
                className='drag-area'
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrag={onFileSelect}
                onDrop={onDrop}
              >
                {isDragging ? (
                  <span className='select'>Drop image here</span>
                ) : (
                  <>
                    Drag & Drop image here or{" "}
                    <span className='select' role='button' onClick={selectFiles}>
                      Browse
                    </span>
                  </>
                )}

                <input
                  name='file'
                  className='file'
                  type='file'
                  multiple
                  ref={fileInputRef}
                  onChange={onFileSelect}
                ></input>
              </div>
              <div className='container'>
                {images.map((image, index) => (
                  <div className='image' key={index}>
                    <span className='delete' onClick={() => deleteImage(index)}>
                      &times;
                    </span>
                    <img src={URL.createObjectURL(image)} alt={`${index}`} />
                  </div>
                ))}
              </div> 
              <button type='button' onClick={uploadImage}>Upload</button>
              </div>
          </div>      
        </div>

          <div className='editor-container2'>
            <span>Banner Text</span>
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
              <span>Button URL</span>
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

export default Banner;
