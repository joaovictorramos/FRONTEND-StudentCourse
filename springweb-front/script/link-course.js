document.getElementById('link-to-course').addEventListener('submit', function(e){
    e.preventDefault()
    const course = document.getElementById('course').value
    const registration = document.getElementById('registration').value

    searchCourseAndRegistration(course, registration)
})

function searchCourseAndRegistration(courseName, registration){
    var idStudent = ''
    var idCourse = ''

    fetch(`http://localhost:8080/find-student/${registration}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(studentData =>{
        idStudent = studentData.id

        fetch(`http://localhost:8080/find-course/${courseName}`,{
        method: 'GET'
        })
        .then(response => response.json())
        .then(courseData =>{
            idCourse = courseData.id

            const bond = {student: idStudent, course: idCourse}
            makeBond(bond)
        })
    })
}

function makeBond(bond){
    fetch('http://localhost:8080/create-bond', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bond)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error("Failed to create bond")

        }else{
            console.log(body)
        }
    })
    .catch(error=>{
        console.log(error)
    })
}
