// L0 - Filter and Sort Data with Higher-Order Functions

let students = [
  { name: "Alice", marks: 58 },

  { name: "Bob", marks: 85 },

  { name: "Charlie", marks: 92 },

  { name: "David", marks: 45 },
];

function processStudents(students) {
  // Filter the students to create a new array of students who scored above 60 marks.
  let filterstudent = students.filter((student) => student.marks > 60);

  filterstudent.forEach((student) => {
    console.log(student);
  });
  filterstudent.sort((a, b) => b.marks - a.marks);

  let filterstudentName = filterstudent.map((student) => student.name);
  console.log(filterstudentName);
}
processStudents(students);