const books = [
    { name: "Author A", title: "History", publish: "2021", edition: "1st" },
    { name: "Author B", title: "History", publish: "2020", edition: "2nd" },
    { name: "Author C", title: "History", publish: "2019", edition: "3rd" },
    { name: "Author D", title: "History", publish: "2022", edition: "4th" },
    { name: "Author E", title: "Science", publish: "2021", edition: "1st" },
    { name: "Author F", title: "Science", publish: "2020", edition: "2nd" },
    { name: "Author G", title: "Science", publish: "2019", edition: "3rd" },
    { name: "Author H", title: "CS", publish: "2022", edition: "1st" },
    { name: "Author I", title: "CS", publish: "2021", edition: "2nd" },
    { name: "Author J", title: "Philosophy", publish: "2020", edition: "1st" }
];

const userBooks = books.filter( (bk) => bk.title === "CS" )
console.log(userBooks)

// we can also do this using forEach function
const newArr = []
books.forEach( (val) => {
    if(val.title === "CS"){
        newArr.push(val)
    }
} )
console.log(newArr)

// using two conditions (&&)
const cond = books.filter( (val) => {
    return val.title === "CS" && val.publish === "2022"
})
console.log(cond)