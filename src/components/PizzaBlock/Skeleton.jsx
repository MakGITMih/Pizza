import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="135" cy="135" r="125" /> 
    <rect x="0" y="295" rx="10" ry="10" width="280" height="30" /> 
    <rect x="0" y="345" rx="10" ry="10" width="280" height="90" /> 
    <rect x="151" y="295" rx="0" ry="0" width="0" height="23" /> 
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="446" rx="10" ry="10" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

