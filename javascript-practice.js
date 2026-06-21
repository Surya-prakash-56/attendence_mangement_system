    // // // // console.log("welcome students")
// // // // var a=10
// // // // var b="10"
// // // // console.log(a===b)
// // // // var name = "Arun"
// // // // var name =" Phani"
// // // // name = "Vamshi"
// // // // console.log(name)
// // // // var name = "kumar"
// // // // console.log(name)
// // // // name= "arun"
// // // // console.log(name)

// // // // function greet () {
// // // //     var a = "Welcome"
// // // //     console.log(a)
// // // // }
// // // // console.log(a)

// // // // if(true){
// // // //     let c = 100
// // // //     console.log(c)
// // // // }
// // // // console.log(c)
// // // // let a = 200
// // // // a =500

// // // // console.log(typeof null)

// // // // let a=10
// // // // a +=10 
// // // // console.log(a)
// // // // console.log(++a)
// // // // console.log(a)


// // // // const a = 10 
// // // // console.log(typeof a) 
// // // // const b = "10"
// // // // console.log(typeof b) 
// // // // console.log(a===b)

// // // // const c =30 
// // // // const checking = c > 50 ? "yes" : "no" 
// // // // console.log(checking)


// // // // const age = 12
// // // // if (age >=18) {
// // // //     console.log("elgible to vote")
// // // // }
// // // // else {
// // // //     console.log("")
// // // //}
// // // // take three numbers and print which number is greater amoung three

// // // // const arr = [1,2,3,4,5]
// // // // console.log(arr.push(6)) // output: 6 add 6 to the end of the array and return the new length of the array
// // // // console.log(arr) // output: [1,2,3,4,5,6] 

// // // // console.log(arr.pop()) // output: 6 removes the last element from the array and returns it
// // // // console.log(arr) // output: [1,2,3,4,5]

// // // // console.log(arr.shift()) // output: 1 removes the first element from the array and returns it
// // // // console.log(arr) // output: [2,3,4,5]

// // // // console.log(arr.unshift(5)) // output: 5 adds 5 to the beginning of the array and returns the new length of the array
// // // // console.log(arr)    // output: [5,2,3,4,5]  

// // // // console.log(arr.splice(1,3)) // output: [2,3,4] removes 3 elements starting from index 1 and returns them
// // // // console.log(arr) // output: [5]

// // // // console.log(arr.slice(1,3)) // output: [] creates a new array with elements from index 1 to 3 (not inclusive)
// // // // console.log(arr) // output: [5]

// // // // console.log


// // // const arr=[
// // //     {name:"arun",
// // //         age:20,
// // //      department:"cse"
// // //     },
// // //     {name:"phani",
// // //         age:21,
// // //      department:"ece"
// // //     },
// // //     {name:"vamshi",
// // //         age:22,

// // //      department:"mech"
// // //     }   
// // // ]   
// // // // using find method to get the student report of arun 
// // // const studentreport = arr.find(
// // //     s =>s.name === "arun"  
// // // )
// // // console.log(studentreport)  // output: {name:"arun", age:20, department:"cse"}   
// // // arr.forEach( student => console.log(student.name))
// // // // output: arun, phani, vamshi

// // // // using map method to get the names of all students in an array
// // // const modarr = arr.map(student => student.name)
// // // console.log(modarr) // output: ["arun", "phani", "vamshi"]
// // // const arrx = [1,2,3,4,5]
// // // const modarrx = arrx.map(elements => elements * 2)
// // // console.log(modarrx) // output: [2,4,6,8,10]


// // // const filter_arr = arr.filter(student => student.age > 20 || student.department === "21")
// // // console.log(filter_arr) // output: [{name:"phani", age:21, department:"ece"}, {name:"vamshi", age:22, department:"mech"}]
// // // console.log(filter_arr)


// // // //reduce
// // // {
// // // const marks = [10,20,30,40,50]
// // // const total = marks.reduce((sum, sub) => sum + sub, 0)
// // // console.log(total) // output: 150
// // // }
// // // //sort
// // // {
// // // const arr = [10, 5, 20, 15, 30]
// // // arr.sort()
// // // console.log(arr)
// // // arr.sort
// // //   ((a, b) => a - b)

// // //   console.log(arr) // output: [5, 10, 15, 20, 30]
// // //   arr.sort((a, b) => b - a)
// // //   console.log(arr) // output: [30, 20, 15, 10, 5]
// // // }
// // const students = [
// //   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
// //   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
// //   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
// //   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
// //   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

// //   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
// //   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
// //   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
// //   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
// //   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

// //   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
// //   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
// //   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
// //   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
// //   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

// //   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
// //   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
// //   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
// //   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
// //   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

// //   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
// //   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
// //   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
// //   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
// //   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

// //   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
// //   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
// //   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
// //   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
// //   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// // ];

// // const passedstudents = students.filter(student => student.marks <= 35)
// // console.log(passedstudents) // output: array of students who failed (marks <= 35)

// // const passedstudentsfromcse = students.filter(student => student.marks >= 35 && student.department === "CSE")
// // console.log(passedstudentsfromcse) // output: array of students from CSE who passed (marks >= 35)   

// // const passedstudentsfromcseandcsd = students.filter(student => student.marks >= 35 && (student.department === "CSE" || student.department === "CSD"))
// // console.log(passedstudentsfromcseandcsd) // output: array of students from CSE and CSD who passed (marks >= 35)

// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "surya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];

// const placedstudents = students.filter(student => student.placed)
// console.log(placedstudents)

// const placedstudentswithpackageandname = students.filter(student => student.placed).map(student => ({ name: student.name, package: student.package }))
// console.log(placedstudentswithpackageandname)

// const placedstudentswithpackegeandaveragepackage = students.filter(students => students.placed).map(students => ({ names: students.name, averagepackage: students.marks }))     
// console.log(placedstudentswithpackegeandaveragepackage)

// const highestpackage = students.reduce((max, student) => (student.package > max ? student.package : max), 0)
// console.log(highestpackage)

// const placedstudentswithmorethan10package = students.filter(students => students.placed && students.package > 10).map(students => ({ name: students.name, package: students.package }))
// console.log(placedstudentswithmorethan10package)

let iscolor = "false"
let p = document.getElementBy("p")
function heartColorchange() {
    
    const heart = document.getElementById("heart")
    if (iscolor === "ture") {
        heart.src ="https://2.bp.blogspot.com/-9D1C0Cn1KIs/V1ACnXo7djI/AAAAAAAAA1M/y6_8g5hiBN82ATNbAP9Mnc4Wvz1lflW8gCKgB/s1600/banner01.jpg"
        iscolor = "false"
    }
    else {
        heart.src = "https://2.bp.blogspot.com/-9D1C0Cn1KIs/V1ACnXo7djI/AAAAAAAAA1M/y6_8g5hiBN82ATNbAP9Mnc4Wvz1lflW8gCKgB/s1600/banner01.jpg"
        
        iscolor = "ture"
    




















        