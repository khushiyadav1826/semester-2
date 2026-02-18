// import React from 'react'

// function Counter(props){
//     //logic in plain js
//     return <h1>{props.initialValue}</h1>
// }
// // for biolerplate code
// //in jsx ---> rafce
// function MultiCounter(){
//     return(
//         <div>
//             <Counter initialValue={10} />
//             <Counter initialValue={100} />
//             <Counter initialValue={20} ></Counter>/
//             <Counter initialValue={-100} />

//         </div>
//     );
// }
// const Home = () => {
//     <div><MultiCounter/></div>;
  
// };

// export default Home

import React from 'react'

function Counter(props){
    return <h1>{props.initialValue}</h1>
}

function MultiCounter(){
    return(
        <div>
            <Counter initialValue={10} />
            <Counter initialValue={100} />
            <Counter initialValue={20} />
            <Counter initialValue={-100} />
        </div>
    );
}

const Home = () => {
    return (
        <div>
            <MultiCounter/>
        </div>
    );
};

export default Home;
