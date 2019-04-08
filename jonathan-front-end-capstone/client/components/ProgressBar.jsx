// import React from 'react';
// import styled from 'styled-components';

// const ProgressBar = styled.div`
//   position: relative;
//   height: 20px;
//   width: 350px;
//   border-radius: 50px;
//   border: 1px solid #333
// `;

// const Filler = styled.div`
//   background: #1DA598;
//   height: 100%;
//   border-radius: inherit;
//   transition: width .2s ease-in;
//   width: ${props => props.percentage || 0};
// `;

// <ProgressBar>
//   <Filler percentage={80} />
// </ProgressBar>;

// const ProgressBar = (props) => {
//   const { percentage } = props;
//   return (
//     <div>
//       <Filler percentage={percentage}> </Filler>
//     </div>
//   );
// };


// class ProgressBarExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       percentage: 60,
//     };
//   }

//   render() {
//     const { percentage } = this.state;
//     return (
//       <div>
//         <ProgressBar percentage={percentage} />
//       </div>
//     );
//   }
// }
