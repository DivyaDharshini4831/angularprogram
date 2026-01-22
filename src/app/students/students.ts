import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html'
})
export class StudentsComponent implements OnInit {

  students: any[] = [];

  student = {
    id: null,
    name: '',
    age: null,
    course: ''
  };

  isEdit = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  saveStudent() {
    if (this.isEdit) {
      this.studentService.updateStudent(this.student.id!, this.student)
        .subscribe(() => {
          this.loadStudents();
          this.resetForm();
        });
    } else {
      this.studentService.addStudent(this.student)
        .subscribe(() => {
          this.loadStudents();
          this.resetForm();
        });
    }
  }

  editStudent(stu: any) {
    this.student = { ...stu };
    this.isEdit = true;
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(() => {
        this.loadStudents();
      });
  }

  resetForm() {
    this.student = { id: null, name: '', age: null, course: '' };
    this.isEdit = false;
  }
}
