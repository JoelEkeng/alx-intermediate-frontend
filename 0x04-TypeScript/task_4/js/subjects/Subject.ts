namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class SchoolSubject {
        private teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}