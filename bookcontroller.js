const bookmodel=require("../models/bookmodel")
exports.showbooks=()=>
{
    return bookmodel.books
}
exports.addbook=(book)=>
{
    bookmodel.books.push(book)
    return{"msg":"success","data":bookmodel.books}
}