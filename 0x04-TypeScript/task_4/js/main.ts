// Define the Subjects and Teacher interfaces
interface Subject {
    getRequirements(): string;
    getAvailableTeacher(): string;
}

interface Teacher {
    experienceTeachingC?: number;
}

// Define the Cpp, Java, and React classes implementing the Subject interface
class Cpp implements Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
        this.teacher = teacher;
    }

    getRequirements(): string {
        return 'Here is the list of requirements for C++';
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC) {
            return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience`;
        } else {
            return 'No available teacher';
        }
    }
}

class Java implements Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
        this.teacher = teacher;
    }

    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC) {
            return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience`;
        } else {
            return 'No available teacher';
        }
    }
}

class React implements Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
        this.teacher = teacher;
    }

    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC) {
            return `Available Teacher: ${this.teacher.experienceTeachingC} years of experience`;
        } else {
            return 'No available teacher';
        }
    }
}

// Export the constants
export const cpp = new Cpp({ experienceTeachingC: 10 });
export const java = new Java({ experienceTeachingC: 10 });
export const react = new React({ experienceTeachingC: 10 });

// Create and export the Teacher object
export const cTeacher: Teacher = { experienceTeachingC: 10 };

// Log and call methods for Cpp subject
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log and call methods for Java subject
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log and call methods for React subject
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());