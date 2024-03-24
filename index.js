// Write your solution in this file!
let employee = {
    name: "John",
    streetAddress: "123 Home",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key, value) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    if (employee && employee.hasOwnProperty(key)) {
      delete employee[key];
    }
    return employee;
  }