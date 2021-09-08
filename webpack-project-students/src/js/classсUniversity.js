import { students } from "./students";

export default class  University{
    students = [];
    bestStudents = [];
    constructor(name){
        this.name = name;
    }    

addStudent(student){
    if(student.ratingPoint >= 800){
        this.students.unshift(student);   
   }else{
       student.isSelfPayment = true;
       this.students.push(student);
  }
  this.students.sort(function(x,y){
    return y.ratingPoint - x.schoolPoint;
   });
   this.bestStudents = this.students.slice(0, 5);
   this.bestStudents.forEach(student => student.isSelfPayment = false);
};



getAllStdudents(){
    return this.students;
};
getBestStudents(){
    return this.bestStudents;
}
}
