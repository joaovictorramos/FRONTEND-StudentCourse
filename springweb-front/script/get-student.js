document.getElementById('search-student-form').addEventListener('submit', function(e){
    e.preventDefault()

    var regBySearch = document.getElementById('registration-by-search').value
    findStudent(regBySearch)
})

function findStudent(regBySearch){ 
    fetch(`http://localhost:8080/find-student/${regBySearch}`,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(student => {        
        const tbodyBySearch = document.getElementById('tbody-search-student')
        tbodyBySearch.innerHTML = ''

        if(student.courses.length != 0){
            for(var i = 0; i < student.courses.length; i++){
                var row = tbodyBySearch.insertRow()
                var td1 = row.insertCell(0)
                var td2 = row.insertCell(1)
                var td3 = row.insertCell(2)
                var td4 = row.insertCell(3)
                var td5 = row.insertCell(4)
    
                td1.textContent = student.id
                td2.textContent = student.name
                td3.textContent = student.registration
                td4.textContent = student.courses[i].name
                td5.textContent = student.courses[i].description
            }
        }else{
            var row = tbodyBySearch.insertRow()
            var td1 = row.insertCell(0)
            var td2 = row.insertCell(1)
            var td3 = row.insertCell(2)

            td1.textContent = student.id
            td2.textContent = student.name
            td3.textContent = student.registration
        }
    })
}