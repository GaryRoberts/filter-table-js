# Filter-table-js

# What is this?
Js package which allows easy filtering of html tables

# Installation
`npm i filter-table-js --save`

Then

```
import {filter_table} from 'filter-table-js';

filter_table({
   input_field:'search',
   table_id:'table1' 
});
```

# Options

Filter table js has 2 options which are both required
* *input_field* - should be id of search input
* *table_id* - should be id of table to filter
