let submit = document.getElementById("submitForm");
// localStorage.clear();
   submit.addEventListener('click', (e) => {
   e.preventDefault();
   let noteTitle = document.getElementById("noteTitle").value;
   let description = document.getElementById("description").value;
   console.log(noteTitle, description);
   blank();
   //Adding to the localhost
   localStorage.setItem(noteTitle, description);
})

// alert("Script is applied");
function blank() 
{
   noteTitle.value = "";
   description.value = "";
   location.reload();
}



//Getting notes from the LocalStorage
getItem();
function getItem()
{
   let tbody=document.getElementById("tbody");
   let l=localStorage.length;
   let sno=1;
   for(let i=0;i<l;i++)
   {
      tbody.innerHTML+=`
         <tr>
            <th scope="row">${sno}</th>
            <td>${localStorage.key(i)}</td>
            <td>${localStorage.getItem(localStorage.key(i))}</td>
            <td><a href="#" class="btn btn-primary mx-2 btnupdate" data-key="${sno-1}" data-bs-toggle="modal" data-bs-target="#updateModal">Update</a><a href="#" data-dkey="${sno-1}" class="btn btn-danger btndelete">Delete</a></td>
         </tr>
      `;
      sno++;
   }
}
// DataTables 
// let table = new DataTable('#myTable');


// *************Triggering Update Modal********************
let btnupdate=document.getElementsByClassName('btnupdate');
let nTitle=document.getElementById("modalnoteTitle");
let nDescription=document.getElementById("modaldescription");
let Snote=document.getElementById("Snote");
let Unote=document.getElementById("Unote");
let NoTitle;

Array.from(btnupdate).forEach((element)=>{
   element.addEventListener('click',()=>{
      console.log("Update modal Attached");
      let k=element.getAttribute("data-key");
      nTitle.value=localStorage.key(k);
      nDescription.value=localStorage.getItem(localStorage.key(k));
      // localStorage.setItem(nTitle.value,nDescription.value);
      NoTitle=nTitle.value;
      // console.log(`new title${NoTitle} Old title${nTitle}`);
   })
})

Snote.addEventListener('click',()=>{
      // console.log("Snote is Executing");
      localStorage.setItem(nTitle.value,nDescription.value);
      if(NoTitle!=nTitle.value)
      {
         localStorage.removeItem(NoTitle);
      }
      location.reload();
})
Unote.addEventListener('click',()=>{
   // console.log("Unote is Executing");
      localStorage.setItem(nTitle.value,nDescription.value);
      if(NoTitle!=nTitle.value)
      {
         localStorage.removeItem(NoTitle);
      }
      location.reload();
})
//******************Ending Update**********************

//*******************Deleting note**********************
let deleteBtn=document.getElementsByClassName("btndelete");
Array.from(deleteBtn).forEach((element)=>{
   element.addEventListener('click',()=>{
      let dkey=element.getAttribute("data-dkey");
      localStorage.removeItem(localStorage.key(dkey));
      location.reload();
   }) 
})

