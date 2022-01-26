// import React, { Component } from "react";

// import  Uppy from "@uppy/core";
// import GoogleDrive from '@uppy/google-drive';
// import  { Dashboard } from "@uppy/react";
// class UppyComp extends Component {
//   componentWillMount() {
//     this.host = "localhost:5000"; //or yoursite.com(where your node code lives and acts as uppy server)

//     this.uppy = new Uppy({
//       autoProceed: false,
//       restrictions: {
//         maxFileSize: 10000000, //uppy options
//         maxNumberOfFiles: 30,
//         minNumberOfFiles: 1,
//         allowedFileTypes: false
//       },
//       onBeforeFileAdded: (currentFile, files) => {
//         console.log("i am going to add file to dashboard", currentFile);
//       },
//       onBeforeUpload: files => {
//         console.log("i am going to upload files", files);
//       }
//     })

    

//       .use(GoogleDrive, {
//         host: this.host
//       })
//       .on("upload", data => {
//         console.log("uploading", data);
//       })
//       .on("file-removed", file => {
//         console.log("removing", file);
//       })
//       .on("complete", result => {
//         console.log("failed ", result.failed);
//         console.log("failed ", result.successful);
//       })
//       .on("upload-success", (file, resp, uploadURL) => {
//         console.log("upload successful, uploadUrl is", uploadURL);
//       })
//       .run(); //run uppy
//   }
//   render() {
//     return (
//       <div>
//         <Dashboard //uppy dashboard component
//           uppy={this.uppy}
//           plugins={[
//             "GoogleDrive",
         
//           ]}
//         />
//       </div>
//     );
//   }
// }


// export default  UppyComp;


import React from 'react';

const Preview = () => {
  return <div></div>;
};

export default Preview;
