// import React from 'react'
// import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles'

// //Wrapcomponent 掛元件被WithHoc包住的原件
// const WithHoc = (Wrapcomponent) =>{
//     const Spinner = ({isloading, ...otherprops})=>{
//     return isloading ? 
//     (
//     <SpinnerOverlay>
//     <SpinnerContainer></SpinnerContainer>
//     </SpinnerOverlay>):
//     (<Wrapcomponent {...otherprops}/>
//     )
// }
// return Spinner
// }

// export default WithHoc


import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
      
    );
  };
  return Spinner;
};

export default WithSpinner;