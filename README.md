# Filter-table-js

# What is this?
Js package which allows easy filtering of html tables

# Installation
`npm i filter-table-js --save`

Then

```
import {filter_table} from 'filter-table-js';

var inputField = document.getElementById("myInput");  
inputField.setAttribute("onkeyup","filter_table({input_field:this.id,table_id:'myTable',column:0 })");
```

# Options

Filter table js has 2 options which are both required
* *input_field* - should be id of search input
* *table_id* - should be id of table to filter
* column* - should be the array index of the column you prefer to filter on(for example column 1 would be '0')
