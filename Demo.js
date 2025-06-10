// let greetings = "hello, node.js";
// console.log(greetings)
            // to get the methods from fs module we use require function
// var fs = require('fs');
            // Reading data asynchronously using utf8 
// fs.readFile('example.txt','utf8', (err, data) =>{
// if(err){
//     console.log(err);
// }
// console.log(data);
// })
// using toString()
// fs.readFile('./example.txt' , (err, data) => {
//     console.log(data.toString())
// })
            // Reading data synchronously using toString
// var data = fs.readFileSync('example.txt');
// console.log(data.toString());
// using utf8
// var print = fs.readFileSync('example.txt', 'utf8');
// console.log(print);


            //Writing the data in existing file --in synchronously
// fs.writeFileSync('example.txt', 'Second NodeJS application');
// console.log('file wrote successfully');

            // Writing a data in file when the file is not created --in asynchronously
// fs.writeFile('test.txt','JS to NodeJS', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file written sucessfully');
// })

            //Updating the file by creating a new file 
// fs.appendFile('test1.txt','first application in NodeJS by creating a new file',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file appended successfully')
// });
            //Updating the file in existing file 
// fs.appendFile('example.txt','If we use NodeJS we can get the output within in the terminal it self no need of getting a separate browser', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file appended successfully')
// })

            //Deleting a file
// fs.unlink('test1.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file deleted successfully')
// })

        //Creating a folder 
// fs.mkdir('test',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created successfully')
// })
            //creating a folder and a subfolder
// fs.mkdir('test/test1', (err)=>{       
//     if(err){
//         console.log(err);
//     }
//     console.log('folder and subfolder created successfull')
// })

            //Deleting a folder
// fs.rmdir('test',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder deleted successfully')
// })

//             // Path module in node js
// var path = require('path');
// var filename = '/Projects/Sample/webapp/view.xml';
//         // dirname() --Returns the directories of a path 
// var dirname = path.dirname(filename);
// console.log('Directory:', dirname)
//         // basename() --Returns the last part of a path
// var basename = path.basename(filename);
// console.log('FileName:', basename)
//         //extname() --Returns the file extension of a path
// var extname = path.extname(filename);
// console.log('Extension:',extname);


//         //Date functions using dats-fns Module
// // Importing the necessary functions like format, parseISO, addDays, subMonths
// var { format, parseISO, addDays, subMonths, compareAsc, subDays } = require('date-fns');
// // Parsing a date string
// var parsedDate = parseISO('2023-11-11T12:30:00');
// // Formatting the parsed date
// var formattedDate = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
// console.log(formattedDate);
// var currentDate = new Date();
// // Adding 5 days to the current date using addDays method
// var futureDate = addDays(currentDate, 5);
// // Subtracting 2 months from the current date using subMonths method
// var pastDate = subMonths(currentDate, 2);
// console.log('Future Date:', futureDate);
// console.log('Past Date:', pastDate);
// // Comparing dates using compareASC
// var dates = [new Date(2025, 0, 1), new Date(2024, 0, 1)];
// dates.sort(compareAsc); // Sorts dates in ascending order
// console.log(dates);
// // Subtracting days from a date using subDays
// var pastDate = subDays(new Date(), 10); // Returns a date 10 days ago form the current date 
// console.log(pastDate)


        // Import and Export 
// function test(){
//         console.log('Hello');
// }
// function sum(a,b){
//         console.log(a+b);
// }
// function sample(){
//         console.log('Here the basic examples of importing and exporting the file modules using functions in NodeJS')
// }
// module.exports={
// test, sum, sample
// }
// test();
// sample();
// sum(123,456);


var fs = require('fs');
fs.readFile('Data1.json', 'utf8', (err, data)=>{
  if(err){
    console.error('Error Fetching Files: ', err);
    return;
  }
  var jsonData = JSON.parse(data);
  jsonData.productVariant.forEach((variant)=>{
    console.log(`processing product variant: ${variant.productVarientName}`)
    variant.productFeatureString.forEach((feature)=>{
      var featureString = feature.setProductFeature;
      if(featureString && featureString.includes("=") && !featureString.includes("!") && !featureString.includes("''")){
        var [characteristic, characteristicValue] = featureString.split("=");
        console.log(`Characteristic = ${characteristic}`);
        console.log(`Characteristic Value = ${characteristicValue}`)   
      }     
    });
  })
})
