function Student(name, age, district) {
  ((this.name = name), (this.age = age), (this.district = district));

  this.display = () => {
    console.log(this.name);
    console.log(this.age);
    console.log(this.district);
  };
}

const student1 = new Student("Sadik Hasan", 30, "Mymensingh");
const student2 = new Student("Sajjad Hasan", 20, "Feni");
const student3 = new Student("Majjad Hasan", 10, "Newkhali");

student1.display();
student2.display();
student3.display();
