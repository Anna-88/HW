import { students } from "./students";

export default class  University{
    students = [];
    bestStudents = [];
    constructor(name){
        this.name = name;
    }
    

addStudents (arrStudents){
 arrStudents.forEach(student => {
     student.isSelfPayment = true;
     this.students.push(student);
 });
   this.students.sort(function(x,y){
    return y.ratingPoint - x.schoolPoint;
   });
   this.bestStudents = this.students.slice(0, 5);
   this.bestStudents.forEach(student => student.isSelfPayment = false);
};

addStudent(student){
  this.students.push(student);
  this.bestStudents = this.students.slice(0, 5);
};

getAllStdudents(){
    return this.students;
};
getBestStudents(){
    return this.bestStudents;
}
}
