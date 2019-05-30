// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }

}

class Instructor extends Person {
    constructor(instrucAttrs) {
        this.specialty = instrucAttrs.specialty;
        this.favLanguage = instrucAttrs.favLanguage;
        this.catchPhrase = instrucAttrs.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    
    listsSubjects() {
        this.favSubjects.foreach((subject) => {console.log(subject)})
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}