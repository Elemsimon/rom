import React, { useState, useEffect, useRef } from 'react';
import videoIcon from '/assets/21.svg';

const CallToAction = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoWrapperRef = useRef(null);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const handleClickOutside = (event) => {
    if (videoWrapperRef.current && !videoWrapperRef.current.contains(event.target)) {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    if (showVideo) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showVideo]);

  return (
    <>
      <div className='bgimg CallToAction' data-aos="fade" data-aos-delay="700">
        {!showVideo ? (
          <img src={videoIcon} className='vidIcon' alt="Video Icon" onClick={toggleVideo} />
        ) : (
          <div className="video-wrapper" ref={videoWrapperRef}>
            <iframe
              className='video'
              src="https://www.youtube.com/embed/SJcj6nFIObA?autoplay=1&si=ErwZc9J78If4FG-c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
          </div>
        )}
      </div>
    </>
  );
};

export default CallToAction;