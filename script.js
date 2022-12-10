
// ----------------------- Select Element---------------------------//

let name1 = document.getElementById("name1");
let age = document.getElementById("age");
let qualifaction = document.getElementById("qulifaction");
let pan = document.getElementById("pan");

let add = document.getElementById("add");
let msg = document.getElementById("msg");
let msg1 = document.getElementById("msg1");
let msg3 = document.getElementById("msg3");
let msg2 = document.getElementById("msg2");
let td=document.getElementsByTagName('td');
let tr=document.getElementsByTagName('tr')
let count = 0;
// -----------------Reset Form-----------------------------------//
function resetForm() {
  name1.value = "";
  age.value = "";
  qualifaction.value = "";
  pan.value = "";
}
// -------------------------- Raw Create----------------------//

function displayItem() {
  table.innerHTML += `
                 <tr>
                 <td>${name1.value}</td>
                 <td>${age.value}</td>
                 <td>${qualifaction.value}</td>
                 <td>${pan.value}</td>
                 <td>
                 <button class="remove btn">Delete</button>
                 </td>
                 </tr>
`;

}
// --------------------------Display Element ----------------------//

add.addEventListener("click", () => {

  if(name1.value!="")
  {name1.style.border = "1px solid black";
    msg3.innerText=""
  }
  else{
    name1.style.border = "1px solid red";
    msg3.innerText="Enetr you Name"
  }
  if (pan.value.length == 10) {
    msg.innerText = "";
    pan.style.border = "1px solid black";
  } else {
    pan.style.border = "1px solid red";
    msg.innerText = "Pls Enter 10 Digit Pan Number";
  }
  if (age.value % 1 == 0 && age.value < 110 && age.value!="") {
    msg1.innerText = "";
    age.style.border = "1px solid black";
  } else {
    msg1.innerText = "Pls Enter Valid Age ";
    age.style.border = "1px solid red";
  }
  if (pan.value.length == 10 && age.value % 1 == 0 && age.value < 110 && age.value!="" && name1.value!="") {
    displayItem();
    let a;
    a = setInterval(() => {
      msg2.innerText = "Stored Data sucessfully";
      count++;
      if (count == 20) {
        clearInterval(a);
        msg2.innerText = "";
      }
    }, 40);
    count=0;

    resetForm();
  }
  // -------------------------- Delete Element----------------------//
  const deleted = document.querySelectorAll(".remove");
  for (let i = 0; i < deleted.length; i++) {
    deleted[i].addEventListener("click", () => {
      
      deleted[i].parentNode.parentNode.remove();
    });
  }

  
});
  


// -------------------------- Serach By Name----------------------//
const searchfun = () =>{
    // let search = document.getElementById("search").value.toUpperCase();
    let search = document.getElementById("search").value;
    
    let tr=document.getElementsByTagName('tr');
    for(let i=0;i<tr.length;i++)
    {
        let td=tr[i].getElementsByTagName('td')[3];
        if(td)
        {
            let textvalue=td.textContent || td.innerHTML;
        
        
            if(textvalue.indexOf(search) >-1){
                tr[i].style.display="";
            }
        
            else{
                tr[i].style.display="none";
            }
        }

    }
}

const searchNameFun= () =>{
   let search = document.getElementById("NameSearch").value.toUpperCase();
  // let search = document.getElementById("search").value;
  
  let tr=document.getElementsByTagName('tr');
  for(let i=0;i<tr.length;i++)
  {
      let td=tr[i].getElementsByTagName('td')[0];
      if(td)
      {
          let textvalue=td.textContent || td.innerHTML;
      
      
          if(textvalue.toUpperCase().indexOf(search) >-1){
              tr[i].style.display="";
          }
      
          else{
              tr[i].style.display="none";
          }
      }

  }
}

// -------------------------- filter  By A To Z----------------------//
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// -------------------------- filter By Z to A----------------------//
function sortTable1() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



           
