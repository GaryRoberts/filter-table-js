function filter_table(options)
{
    var input, filter, table, tr, td, i, txtValue;

    if(options.input_field!=null && options.table_id!=null)
    {
      input = document.getElementById(options.input_field);
      table = document.getElementById(options.table_id);

    filter = input.value.toUpperCase();
   
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
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