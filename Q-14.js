let employeeData = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ];
  
  let employeeMorethan5Task = employeeData.filter((el)=>{
   return el.tasksCompleted >= 5;
  });
  console.log(employeeMorethan5Task);
  
  let employeePerformance = employeeMorethan5Task.map((el) => {
    if (el.rating > 4.5) {
        return { name: `${el.name}`, performance: "Excellent" };
    } else if (el.rating > 3 && el.rating <= 4.5) {
        return { name: `${el.name}`, performance: "Good" };
    } else {
        return { name: `${el.name}`, performance: "Needs Improvement" };
    }
});
console.log(employeePerformance);

let sortedemployeePerformance1 = employeePerformance.filter((el)=>{
 
 return el.performance == "Excellent"
 
});

let sortedemployeePerformance2 = employeePerformance.filter((el)=>{
 
 return el.performance == "Good"
 
});

let sortedemployeePerformance3 = employeePerformance.filter((el)=>{
 
 return el.performance == "Needs Improvement"
 
});
sortedemployeePerformance = [...sortedemployeePerformance1,...sortedemployeePerformance2,...sortedemployeePerformance3]
console.log(sortedemployeePerformance);
