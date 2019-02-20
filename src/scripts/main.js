

 const employeeCardFetch = () => {fetch("http://localhost:8088/employees?_expand=computer&&_expand=department")
 .then(employees => employees.json())
 .then(parsedEmployees => {
        parsedEmployees.forEach(employees => {
            document.querySelector("#employeeCards").innerHTML +=`<article class="${employees.id}">
    <header class="employee__name">
        <h1>${employees.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employees.department.name} department
    </section>
    <section class="employee__computer">
        Currently using computer number ${employees.computerId}
    </section>
</article>`
})})};

employeeCardFetch();