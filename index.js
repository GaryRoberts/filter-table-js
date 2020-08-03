function filter_table(options)
{
<<<<<<< HEAD
  document.getElementById(options.input_field).addEventListener("keyup", myFunction);
  
    var input, filter, table, tr, td, i, txtValue;

    if(options.table_id!=null)
=======
    
    var input, filter, table, tr, td, i, txtValue;

    if(options.input_field!=null && options.table_id!=null && options.column!=null)
>>>>>>> 7db608477b15e52feac74b0ddf493ea8404e527c
    {
      input = document.getElementById(options.input_field);
      table = document.getElementById(options.table_id);

    filter = input.value.toUpperCase();
   
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
<<<<<<< HEAD
      td = tr[i].getElementsByTagName("td")[0];
=======
      td = tr[i].getElementsByTagName("td")[options.column];
>>>>>>> 7db608477b15e52feac74b0ddf493ea8404e527c
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}


module.exports.filter_table=filter_table;
