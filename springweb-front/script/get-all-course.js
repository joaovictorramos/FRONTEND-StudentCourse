document.getElementById('view-courses').addEventListener('click', function(e){
    e.preventDefault()
    findAllCourse()
})

function findAllCourse(){
    fetch('http://localhost:8080/find-all-course',{
        method: 'GET'
    })
    .then(response => response.json())
    .then(courses => {
        const tbody_course = document.getElementById('tbody-course')
        tbody_course.innerHTML = ''

        courses.forEach(course=>{
            const row = tbody_course.insertRow()
            const td1 = row.insertCell(0)
            const td2 = row.insertCell(1)
            const td3 = row.insertCell(2)
            const td4 = row.insertCell(3)
            const td5 = row.insertCell(4)
            const td6 = row.insertCell(5)

            td1.textContent = course.id
            td2.textContent = course.name
            td3.textContent = course.description
            td2.setAttribute('id', `${course.name}`)

            console.log(course)

            td4.textContent = `Put Update`
            td4.addEventListener('click', function(){
                const urlPut = '../templates/course/update-by-put-course.html'
                const widthPopup = 1000
                const heightPopup = 600

                const leftPopup = (window.screen.width - widthPopup) / 2
                const topPopup  = (window.screen.height - heightPopup) / 2

                const configuration = `width=${widthPopup},height=${heightPopup},top=${topPopup},left=${leftPopup},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no`
                window.open(urlPut, "_blank", configuration)
            })

            td5.textContent = 'Patch Update'
            td5.addEventListener('click', function(){
                const urlPatch = "../templates/course/update-by-patch-course.html"
                const widthPopup = 1000
                const heightPopup = 600

                const leftPopup = (window.screen.width - widthPopup) / 2
                const topPopup  = (window.screen.height - heightPopup) / 2

                const configuration = `width=${widthPopup},height=${heightPopup},top=${topPopup},left=${leftPopup},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no`
                window.open(urlPatch, "_blank", configuration)
            })

            td6.textContent = 'Delete'
            td6.setAttribute('onclick','deleteCourse(this)')
        })
    })
}

function deleteCourse(td){
    const row = td.parentNode
    const name = row.querySelectorAll('td')[1].innerText

    console.log("==============")
    console.log(row)
    
    fetch(`http://localhost:8080/delete-course?nameParam=${name}`,{
        method: 'DELETE',
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Failed to delete course')

        }else{
            const tbody_course = document.getElementById('tbody-course')
            tbody_course.removeChild(row)
        }
    })
    .catch(error=>{
        console.log(error)
    })
}