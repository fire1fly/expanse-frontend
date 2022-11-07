import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={210}
    viewBox="0 0 532 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="3" rx="10" ry="10" width="377" height="25" /> 
    <rect x="178" y="293" rx="0" ry="0" width="3" height="0" /> 
    <rect x="0" y="313" rx="5" ry="5" width="280" height="76" /> 
    <rect x="0" y="403" rx="5" ry="5" width="280" height="36" /> 
    <rect x="0" y="35" rx="0" ry="0" width="532" height="3" /> 
    <rect x="0" y="67" rx="10" ry="10" width="377" height="25" /> 
    <rect x="0" y="99" rx="0" ry="0" width="532" height="3" /> 
    <rect x="1" y="131" rx="10" ry="10" width="377" height="25" /> 
    <rect x="0" y="166" rx="0" ry="0" width="532" height="3" />
  </ContentLoader>
)

export default Skeleton