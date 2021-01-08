// use json API for practice 
// const api=fetch('https://jsonplaceholder.typicode.com/todos/1')
// // console.log(api)

// // ye ek promise returen kare ga haesha lekin abhi wo pending state main hoaga for this we have to use 
// // .then and catch
// .then((data)=>{
//     console.log("response ==> ",data)
// })


// NOW USE anys

// GET API

// async function getapi(){

//     const api=await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     console.log(api);

//    const apijson = await api.json() ; // q ke ye anysc hai tu await use kar lo when neede warana pending aakakta hia
//    console.log(apijson);


// }
// getapi();



//POST a METHOD

// set a data

async function postapi(){

    const api=await fetch('https://jsonplaceholder.typicode.com/posts',{ // ye post ka url hai  

    method: 'POST', // ye ase he leikhte hain
    body: JSON.stringify({ // json data in string
        tittle: 'Name',
        body : 'bar',
        userId : 1 
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      // head contaion kia hai and token or secrescts to strore the data
    });

    console.log(api);

   const apijson = await api.json() ; // q ke ye anysc hai tu await use kar lo when neede warana pending aakakta hia
   console.log(apijson);
    //  id: 101 you can see thi jo is ke response back main mele hai

}
postapi();

