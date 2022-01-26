import React, { Component } from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DashboardModal } from '@uppy/react';
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy({
	meta: { type: 'avatar' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: true
});

// uppy.use(XHRUpload, { endpoint: '/api/songs/upload' })
// uppy.use(Webcam, { modes: ['audio-only'] })

uppy.on('complete', (result) => {
	console.log(result);
});

const AvatarPicker = () => {

  const [openModel,setOpenModel] = React.useState(false);
  const openDashboardModel=()=>{
    setOpenModel(true)
  }
  const closeDashboardModel=()=>{
    setOpenModel(false)
  }

	return (
		<div>
		 <button type="button" onClick={openDashboardModel}>Upload some music</button>
        <DashboardModal
          uppy={uppy}
          closeModalOnClickOutside
          open={openModel}
          onRequestClose={closeDashboardModel}
          plugins={['Webcam']}
        />
		</div>
	);
};

export default AvatarPicker;