"use strict";

let studentArray = [{},{}];
let studentUlElement = document.querySelector('#studenList');

function createStudent() {

    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let className = document.querySelector("#className").value;
    let classRoom = document.querySelector("#classRoom").value;
    let classMentor = document.querySelector("#classMentor").value;
    let classTeacher = document.querySelector("#classTeacher").value;


    let newRoom = new Room(classRoom, 18);
    let newClassInfo = new StudentClass(className, newRoom, classMentor, classTeacher);
    let newStudentData = new Student(name, surname, newClassInfo);

    studentArray.push(newStudentData);

    let liItems = "";
    for (let i = 0; i < studentArray.length; i++) {
        liItems += "<li>" + studentArray[i].name +
            " " + studentArray[i].surname +
            " - " + studentArray[i].classInfo.className +
            " " + studentArray[i].classInfo.classRoom.name +
            " " + studentArray[i].classInfo.classRoom.computerCount +
            " " + studentArray[i].classInfo.classMentor +
            " " + studentArray[i].classInfo.classTeacher +
            "</li>";
    }

    // console.log(liItems);
    console.log(newStudentData);
    studentUlElement.innerHTML = liItems;
    // console.log(newStudentData);

    console.log(newStudentData.name + " " + newStudentData.surname + " - " + newStudentData.classInfo.className + " " + newStudentData.classInfo.classRoom + " " + newStudentData.classInfo.classMentor + " " + newStudentData.classInfo.classTeacher);
}


function Student(newName, newSurname, newClass) {
    this.name = newName;
    this.surname = newSurname;
    this.classInfo = newClass;
}

function StudentClass(cName, cRoom, cMentor, cTeacher) {
    this.className = cName;
    this.classRoom = cRoom;
    this.classMentor = cMentor;
    this.classTeacher = cTeacher;
}

function Room(roomName, compCount) {
    this.name = roomName;
    this.computerCount = compCount;
}