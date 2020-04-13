# Goal of the exercise

Create a parser script that reads a csv/tsv file and turns it into a json file.

## CSV/TSV input data example

```csv
id	username	email	name	lastname	address	friends_list
1	Desiree.H	Desiree  .Hosea  @gmail.com	Desiree  	Hosea  	777 Brockton Avenue, Abington MA 2351	25,13,7
2	Tamatha .Y	Tamatha  .Yanira  @gmail.com	Tamatha  	Yanira  	30 Memorial Drive, Avon MA 2322	-1
```

## Expected JSON output

```json
[
  {
    id: 1,
    username: "Desiree.H",
    email: "desiree.hosea@gmail.com",
    name: "Desiree",
    lastname: "Hosea", 
    Address: "777 Brockton Avenue, Abington MA",
    friends_list: [25,13,7]
  },
  ...
]
```
