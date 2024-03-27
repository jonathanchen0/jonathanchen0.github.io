"use strict";
let R = null;// global variable
let t1 = document.querySelector("#t1");// local global, connects to t1 div in
let b1 = document.querySelector("#b1");// connects to b1 button
let g1 = null;// table

async function loads()
{
    let url = `https://juxinglong.github.io/static/data/states.json`;
    let r = await fetch(url);//kind of like downloading data, await is waiting for data to be downloaded, r is result or response
    let rj = await r.json();// convert to json format, rj is local var

    if (g1 != null)
    {
        g1.destroy();// 1. destroy table
    }
    t1.innerHTML = ``;// 2. clean div

    let opts = {// 3. specify which data to show
        data: rj,
        width: 500,
        pagination: { limit: 5, },
        sort: true,
        search: true,
        columns: [{ id: "st", name: "State" }, {id:"p", name:"Population"}],
    };

    g1 = new gridjs.Grid(opts);// 4. creates a table based on rj data
    g1.render(t1);// 4. show table in t1 div

    R = rj;// allows rj to be used in browser
    console.log(rj);
    //fetch();// async
    //Swal.fire("Data Loaded");//Swal = Sweet alert
};
b1.addEventListener("click", loads );// when something happens to button, it calls something 


