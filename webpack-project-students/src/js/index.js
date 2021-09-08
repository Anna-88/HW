import Students from "./classStudents";
import University from "./classсUniversity";
import { students } from "./students";

function main () {
    let university = new University('English school');
    let student1 = new Students(students[0]);
    console.log(Students.id);
    let student2 = new Students(students[1]);
    let student3 = new Students(students[2]);
    let student4 = new Students(students[3]);
    let student5 = new Students(students[4]);
    let student6 = new Students(students[5]);
    let student7 = new Students(students[6]);
    let student8 = new Students(students[7]);
    let student9 = new Students(students[8]);
    let student10 = new Students(students[9]);
  
    university.addStudent(student1);
    university.addStudent(student2);
    university.addStudent(student3);
    university.addStudent(student4);
    university.addStudent(student5);
    university.addStudent(student6);
    university.addStudent(student7);
    university.addStudent(student8);
    university.addStudent(student9);
    university.addStudent(student10);
    
    
    university.getAllStdudents();
    university.getBestStudents();
    console.group(university);
}

main();