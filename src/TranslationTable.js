import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
/*This website is really useful: https://github.com/gregnb/mui-datatables*/


// import "./App.scss";

import jsonData from './response.json';
 
//console.log(document.getElementsByTagName("input"))

const columns = ["zh_cn","English", "it_italiano", "arabic","serbian","croatian","russian","de_german","hebrew","fr_french","hu_hungarian","slovak","es_spanish","portugues","turkce","gr_greek","romanian"];

var data = [];
//data.push(["yyy"]);
var nameArray=[];
jsonData.map((x) =>{
    return(
            nameArray.push(x.name)
            //console.log(x.name)
        )
    })
    for(var i=0;i<nameArray.length;i+=0){
                    var output=[];
                    var j=0;
                    while(j<18){
                        output.push(nameArray[i]);
                        i++
                        j++;
                    }
                    data.push([output[0] + " " + output[1],output[2], output[3],output[4],output[5],output[6],output[7],output[8],output[9],output[10],output[11],output[12],output[13],output[14],output[15],output[16],output[17]]);

                }


// const myRequest = new Request('https://cors-anywhere.herokuapp.com/https://cmlgbackend.wdcc.co.nz/translations', {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json'
//     }
// });

// fetch(myRequest)
//     .then(response => response.json())
//     .then(x => {
//         console.log(x);
//         for(var i=0;i<x.length;i+=0){
//             var output=[];
//             var j=0;
//             while(j<18){
//                 //console.log(x[i].name);
//                 output.push(x[i].name);
//                 // console.log(output);
//                 // console.log(output[0]);
//                 i++
//                 j++;
//             }
//             data.push([output[0] + " " + output[1],output[2], output[3],output[4],output[5],output[6],output[7],output[8],output[9],output[10],output[11],output[12],output[13],output[14],output[15],output[16],output[17]]);

//             //data.push([output[0]]);
//             // console.log(data.length);
//             // console.log(data);
//         }
//     });




// async function getData(url = '') {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'GET', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             Accept: 'application/json',
//         },
//         //body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  

// getData('https://cors-anywhere.herokuapp.com/https://cmlgbackend.wdcc.co.nz/translations')
//     .then(x=>{
//         console.log(x);
//         data.push(["xxx"]);
//         console.log(data.length);
//     });


// async function API(){
//     const response = await fetch('https://cors-anywhere.herokuapp.com/https://cmlgbackend.wdcc.co.nz/translations');
//     const result = await response.json();
//     return result;
// }

// API().then(x => {
//     console.log(x);
//         for(var i=0;i<x.length;i+=0){
//             var output=[];
//             var j=0;
//             while(j<18){
//                 //console.log(x[i].name);
//                 output.push(x[i].name);
//                 // console.log(output);
//                 // console.log(output[0]);
//                 i++
//                 j++;
//             }
//             data.push([output[0] + " " + output[1],output[2], output[3],output[4],output[5],output[6],output[7],output[8],output[9],output[10],output[11],output[12],output[13],output[14],output[15],output[16],output[17]]);
//             //data.push([output[0]]);
//             console.log(data.length);
//         }
// });

const options = {
    filterType: "dropdown",
    responsive: "scrollFullHeight",
    print: false,
    searchOpen: true,
    disableToolbarSelect: false,
    selectableRowsHeader: false,
    pagination: false,
    filter:false,
    selectableRows: 'none',
    fixedHeaderOptions: {
        xAxis: true,
        yAxis: true
    },
};


export default () => (

    <MUIDataTable
        title={"Translation list"}
        data={data}
        columns={columns}
        options={options}
    />
)

// export default () => (

//     <MUIDataTable
//         title={"Translation list"}
//         data={data}
//         columns={columns}
//         options={options}
//     >
//         <TableFixedColumns
//             leftColumns={["Chinese", "English"]}
//         />
//     </MUIDataTable>
// )
