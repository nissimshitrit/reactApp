class student
{
    constructor(name,age,arrayOfGrades)
    {
        this.name= name;
        this.age= age;
        this.arrayOfGradesNum = arrayOfGrades;
        this.arrayOfGrades = [];
    }
    getPersonData(){
        console.log(this.name);
        console.log(this.age);
    }

    addGrade(grade){
        if(this.arrayOfGrades.length < this.arrayOfGradesNum){
            this.arrayOfGrades.push(grade);
        }else{
            console.log('too much grades');
        }
    }
    getAvg(){
        if(this.arrayOfGrades.length > 0) {
            let sumGrades = 0;
            for (let grade in this.arrayOfGrades){
                sumGrades += this.arrayOfGrades[grade];
            }
            let avarage = sumGrades / this.arrayOfGrades.length;
            console.log('Average:' + avarage);
        }
    }
}

let std = new student('avi',36,5);
std.getPersonData();
std.addGrade(90);
std.addGrade(85);
std.addGrade(80);
std.addGrade(75);
std.addGrade(70);
std.addGrade(65);
std.getAvg();