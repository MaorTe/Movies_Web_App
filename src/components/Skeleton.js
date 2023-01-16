import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
   <div className="flex-center movie-card-container">
      <ContentLoader
         speed={2}
         width={window.innerWidth < 520 ? 150 : 340}
         height={window.innerWidth < 520 ? 150 : 295}
         viewBox={`-80 0 340 295`}
         backgroundColor="#e9ecef"
         foregroundColor="#adb5bd"
         {...props}>
         <rect x="16" y="0" rx="13" ry="13" width="171" height="267" />
         <rect x="19" y="280" rx="0" ry="0" width="163" height="12" />
      </ContentLoader>
   </div>
);

export default Skeleton;
