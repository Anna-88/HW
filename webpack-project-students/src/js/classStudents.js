
function addId(){
    let counter = 1;
    return function(){return counter++};
}
let studentId = addId();

export default class Sudents {
    constructor(enrollee, isSelfPayment=true){
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.isSelfPayment = isSelfPayment;
        this.id = studentId();
        
    }
    static id = 1;
}
