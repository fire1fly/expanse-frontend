import React from 'react'

export default function SvgSelector({id, classes}) {
  switch (id) {
    case 'nav-home': 
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.07129 14.9999L14.9999 1.07129L28.9284 14.9999" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.35742 18.2139V28.9282H24.6431V18.2139" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    
    case 'nav-calendar':
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.21512 5.35742C2.6468 5.35742 2.10176 5.58319 1.69989 5.98505C1.29803 6.38691 1.07227 6.93196 1.07227 7.50028V26.786C1.07227 27.3543 1.29803 27.8994 1.69989 28.3012C2.10176 28.7031 2.6468 28.9288 3.21512 28.9288H26.7866C27.3549 28.9288 27.8999 28.7031 28.3018 28.3012C28.7036 27.8994 28.9294 27.3543 28.9294 26.786V7.50028C28.9294 6.93196 28.7036 6.38691 28.3018 5.98505C27.8999 5.58319 27.3549 5.35742 26.7866 5.35742H22.5008" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 1.07129V9.64272" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.5 1.07129V9.64272" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 5.35742H18.2143" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.50112 17.1429C8.09285 17.1429 8.57254 16.6632 8.57254 16.0714C8.57254 15.4797 8.09285 15 7.50112 15C6.90938 15 6.42969 15.4797 6.42969 16.0714C6.42969 16.6632 6.90938 17.1429 7.50112 17.1429Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.0011 17.1429C15.5928 17.1429 16.0725 16.6632 16.0725 16.0714C16.0725 15.4797 15.5928 15 15.0011 15C14.4094 15 13.9297 15.4797 13.9297 16.0714C13.9297 16.6632 14.4094 17.1429 15.0011 17.1429Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.5011 17.1429C23.0928 17.1429 23.5725 16.6632 23.5725 16.0714C23.5725 15.4797 23.0928 15 22.5011 15C21.9094 15 21.4297 15.4797 21.4297 16.0714C21.4297 16.6632 21.9094 17.1429 22.5011 17.1429Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.50112 23.5716C8.09285 23.5716 8.57254 23.0919 8.57254 22.5001C8.57254 21.9084 8.09285 21.4287 7.50112 21.4287C6.90938 21.4287 6.42969 21.9084 6.42969 22.5001C6.42969 23.0919 6.90938 23.5716 7.50112 23.5716Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'nav-chat':
      return(
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.471 23.5716L17.1425 28.2216C17.4291 28.5153 17.7874 28.7292 18.1821 28.8419C18.5767 28.9547 18.9939 28.9624 19.3925 28.8644C19.7935 28.7712 20.1638 28.5764 20.4678 28.2986C20.7718 28.0209 20.9992 27.6697 21.1282 27.2787L28.7996 4.28584C28.9597 3.85503 28.9927 3.3873 28.8948 2.93825C28.7968 2.48921 28.572 2.07774 28.247 1.75275C27.922 1.42776 27.5105 1.20292 27.0615 1.10496C26.6124 1.00699 26.1447 1.04003 25.7139 1.20013L2.72103 8.87156C2.31657 9.00971 1.95634 9.25337 1.67756 9.57734C1.39879 9.90132 1.21159 10.2939 1.13532 10.7144C1.05659 11.0969 1.07411 11.4929 1.18632 11.867C1.29853 12.241 1.50191 12.5813 1.77818 12.8573L7.6496 18.7287L7.45675 26.1644L12.471 23.5716Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28.1137 1.67188L7.64941 18.729" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'nav-edu':
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.60728 1.07129H2.25014C1.65841 1.07129 1.17871 1.55098 1.17871 2.14272V27.857C1.17871 28.4487 1.65841 28.9284 2.25014 28.9284H7.60728C8.19902 28.9284 8.67871 28.4487 8.67871 27.857V2.14272C8.67871 1.55098 8.19902 1.07129 7.60728 1.07129Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.1073 5.35742H9.75014C9.15841 5.35742 8.67871 5.83712 8.67871 6.42885V27.8574C8.67871 28.4492 9.15841 28.9289 9.75014 28.9289H15.1073C15.699 28.9289 16.1787 28.4492 16.1787 27.8574V6.42885C16.1787 5.83712 15.699 5.35742 15.1073 5.35742Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.2789 4.77074L18.1214 5.81118C17.5474 5.95483 17.1985 6.53663 17.3421 7.11067L22.5443 27.8982C22.688 28.4722 23.2698 28.8211 23.8438 28.6775L28.0013 27.637C28.5753 27.4934 28.9242 26.9116 28.7806 26.3375L23.5784 5.55001C23.4347 4.97598 22.8529 4.62709 22.2789 4.77074Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.17871 21.4287H8.67871" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.67871 19.2852H16.1787" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.5361 23.5712L27.7076 22.0283" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'nav-archive':
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7856 1.07129H3.21415C2.03068 1.07129 1.07129 2.03068 1.07129 3.21415V9.64272C1.07129 10.8262 2.03068 11.7856 3.21415 11.7856H26.7856C27.969 11.7856 28.9284 10.8262 28.9284 9.64272V3.21415C28.9284 2.03068 27.969 1.07129 26.7856 1.07129Z" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.8574 6.42871H17.1431" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.21415 11.7852C2.64583 11.7852 2.10078 12.0109 1.69892 12.4128C1.29705 12.8146 1.07129 13.3597 1.07129 13.928V20.3566C1.07129 20.9249 1.29705 21.4699 1.69892 21.8718C2.10078 22.2737 2.64583 22.4994 3.21415 22.4994H26.7856C27.3539 22.4994 27.8989 22.2737 28.3008 21.8718C28.7027 21.4699 28.9284 20.9249 28.9284 20.3566V13.928C28.9284 13.3597 28.7027 12.8146 28.3008 12.4128C27.8989 12.0109 27.3539 11.7852 26.7856 11.7852" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.96443 6.96401C6.66856 6.96401 6.42871 6.72416 6.42871 6.42829C6.42871 6.13243 6.66856 5.89258 6.96443 5.89258" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.96387 6.46401C6.68772 6.46401 6.46387 6.68786 6.46387 6.96401C6.46387 7.24015 6.68772 7.46401 6.96387 7.46401V6.46401ZM6.96387 5.39258C6.68772 5.39258 6.46387 5.61644 6.46387 5.89258C6.46387 6.16872 6.68772 6.39258 6.96387 6.39258V5.39258ZM6.96387 7.46401C7.53588 7.46401 7.99958 7.0003 7.99958 6.42829H6.99958C6.99958 6.44802 6.98359 6.46401 6.96387 6.46401V7.46401ZM7.99958 6.42829C7.99958 5.85628 7.53588 5.39258 6.96387 5.39258V6.39258C6.98359 6.39258 6.99958 6.40857 6.99958 6.42829H7.99958Z" fill="#F3EEEE" fillOpacity="0.5"/>
          <path d="M6.96443 17.6789C6.66856 17.6789 6.42871 17.439 6.42871 17.1431C6.42871 16.8473 6.66856 16.6074 6.96443 16.6074" stroke="#F3EEEE" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.96387 17.1789C6.68772 17.1789 6.46387 17.4027 6.46387 17.6789C6.46387 17.955 6.68772 18.1789 6.96387 18.1789V17.1789ZM6.96387 16.1074C6.68772 16.1074 6.46387 16.3313 6.46387 16.6074C6.46387 16.8836 6.68772 17.1074 6.96387 17.1074V16.1074ZM6.96387 18.1789C7.53588 18.1789 7.99958 17.7151 7.99958 17.1431H6.99958C6.99958 17.1629 6.98359 17.1789 6.96387 17.1789V18.1789ZM7.99958 17.1431C7.99958 16.5711 7.53588 16.1074 6.96387 16.1074V17.1074C6.98359 17.1074 6.99958 17.1234 6.99958 17.1431H7.99958Z" fill="#F3EEEE" fillOpacity="0.5"/>
          <path d="M12.8574 17.1426H17.1431" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 22.5V28.9286" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.28516 28.9287H25.7137" stroke="#F3EEEE" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'logout':
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.357 21.4284V26.7856C20.357 27.3539 20.1312 27.8989 19.7294 28.3008C19.3275 28.7027 18.7825 28.9284 18.2141 28.9284H3.21415C2.64583 28.9284 2.10078 28.7027 1.69892 28.3008C1.29705 27.8989 1.07129 27.3539 1.07129 26.7856V3.21415C1.07129 2.64583 1.29705 2.10078 1.69892 1.69892C2.10078 1.29705 2.64583 1.07129 3.21415 1.07129H18.2141C18.7825 1.07129 19.3275 1.29705 19.7294 1.69892C20.1312 2.10078 20.357 2.64583 20.357 3.21415V8.57129" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.7854 15H9.64258" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.9283 10.7139L9.64258 14.9996L13.9283 19.2853" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      );

    case 'loader': 
      return (
        <svg className={classes} xmlns="http://www.w3.org/2000/svg"  width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <g transform="translate(50 50)">
            <g>
              <animateTransform attributeName="transform" type="rotate" calcMode="discrete" values="0;90;180;270;360" keyTimes="0;0.25;0.5;0.75;1" dur="2.2222222222222223s" repeatCount="indefinite"></animateTransform>
              <path d="M-50 0A50 50 0 1 0 50 0" fill="#f17f6a">
                <animate attributeName="fill" calcMode="discrete" values="#f17f6a;#749df5;#888fab;#353b55;#f17f6a" keyTimes="0;0.24;0.49;0.74;0.99" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
              </path>
              <path d="M-50 0A50 50 0 0 1 50 0" fill="#749df5">
                <animate attributeName="fill" calcMode="discrete" values="#749df5;#888fab;#353b55;#f17f6a;#749df5" keyTimes="0;0.25;0.5;0.75;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
              </path>
              <path d="M-49 0L49 0" stroke="#de3415" strokeWidth="2">
                <animate attributeName="stroke" values="#f17f6a;#de3415;#1156ec;#749df5;#1156ec;#59607e;#888fab;#59607e;#25293b;#353b55;#25293b;#de3415;#f17f6a" keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
              </path>
              <g>
                <path d="M-50 0A50 50 0 0 1 50 0Z" fill="#de3415">
                  <animate attributeName="fill" values="#f17f6a;#de3415;#1156ec;#749df5;#1156ec;#59607e;#888fab;#59607e;#25293b;#353b55;#25293b;#de3415;#f17f6a" keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
                <animateTransform attributeName="transform" type="scale" values="1 1;1 0;1 -1;1 1" keyTimes="0;0.5;0.999;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
              </path></g>
            </g>
          </g>
        </svg>
      );
    default:
      return '';
  }
}

