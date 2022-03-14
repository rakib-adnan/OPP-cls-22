// Get Element 

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


//Get staff id
const staff_add_form = document.getElementById('staff_add_form');
const table_data_list = document.getElementById('table_data_list');

//get staff all data-form
staff_add_form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msg = document.querySelector('.msg');

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let {name , cell , location , photo} = data;

    if(name == '' || cell == '' || location == ''){
        
        msg.innerHTML = Alert.danger("All fields are required");
    }else{
       
        Storage.set('staffs', data);
        staff_add_form.reset();
        staffAlldata();
    }
});

staffAlldata();
function staffAlldata(){
    let data = Storage.get('staffs');
  let list = '';

  data.map((data , index) =>{

    let {name , cell , location , photo} = data;
        list += `
                <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${cell}</td>
                <td>${location}</td>
                <td> <img style="width:40px; height:40px; object-fit:cover;" src="${photo ? photo : '/assets/img/av.png'}"> </td>
                <td>
                    <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger  btn-sm"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        `
  });

  table_data_list.innerHTML= list;
  
}