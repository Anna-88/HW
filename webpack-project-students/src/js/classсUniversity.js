export default class  University{
    students = [];
    bestStudents = [];
    constructor(name){
        this.name = name;
    }
    

addStudents (arrStudents){
  arrStudents.forEach(student => {
      if(student.ratingPoint >= 800){
          let sum = student.ratingPoint + student.schoolPoint;
          if(sum > 2000){
              student.isisSelfPayment = false;
              this.bestStudents.push(student);
          }else{
            this.students.push(student);
          }
      }else{
          this.students.push(student);
      }
  });
  
};

addStudent(student){
    if(student.ratingPoint >= 800){
        let sum = student.ratingPoint + student.schoolPoint;
        if(sum > 2000  ){
            student.isisSelfPayment = false;
            this.bestStudents.push(student);
        }else{
            this.students.push(student); 
        }
    }else{
        this.students.push(student);
    }
};

getAllStdudents(){
    return this.students;
};
getBestStudents(){
    return this.bestStudents;
}
}
