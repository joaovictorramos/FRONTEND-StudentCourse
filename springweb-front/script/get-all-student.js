document.getElementById('view-students').addEventListener('click', function(e){
    e.preventDefault()
    findAllStudent()
})

function findAllStudent(){
    fetch('http://localhost:8080/find-all-student',{
        method: 'GET'
    })
    .then(response => response.json())
    .then(students => {
        const tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        students.forEach(student=>{
            const row = tbody.insertRow()
            const td1 = row.insertCell(0)
            const td2 = row.insertCell(1)
            const td3 = row.insertCell(2)
            const td4 = row.insertCell(3)
            const td5 = row.insertCell(4)
            const td6 = row.insertCell(5)
            const td7 = row.insertCell(6)

            td1.textContent = student.id
            td2.textContent = student.name
            td3.textContent = student.registration
            td3.setAttribute('id', `${student.registration}`)

            console.log(student)

            if(student.courses.length == 0){
                const a = document.createElement('a')
                a.setAttribute('href', '../templates/course/flux-course.html')

                a.textContent = `Add Course`
                td4.appendChild(a)
            }

            //const put = document.createElement('a')
            //put.textContent = `Put Update`
            //put.setAttribute('href','../templates/update-by-put-student.html')
            //td4.appendChild(put)

            td5.textContent = `Put Update`
            td5.addEventListener('click', function(){
                const urlPut = '../templates/update-by-put-student.html'
                const widthPopup = 1000
                const heightPopup = 600

                const leftPopup = (window.screen.width - widthPopup) / 2
                const topPopup  = (window.screen.height - heightPopup) / 2

                const configuration = `width=${widthPopup},height=${heightPopup},top=${topPopup},left=${leftPopup},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no`
                window.open(urlPut, "_blank", configuration)
            })

            //const patch = document.createElement('a')
            //patch.textContent = `Patch Update`
            //patch.setAttribute('href', '../templates/update-by-patch-student.html')
            //td5.appendChild(patch)

            td6.textContent = 'Patch Update'
            td6.addEventListener('click', function(){
                const urlPatch = "../templates/update-by-patch-student.html"
                const widthPopup = 1000
                const heightPopup = 600

                const leftPopup = (window.screen.width - widthPopup) / 2
                const topPopup  = (window.screen.height - heightPopup) / 2

                const configuration = `width=${widthPopup},height=${heightPopup},top=${topPopup},left=${leftPopup},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no`
                window.open(urlPatch, "_blank", configuration)
            })

            td7.textContent = 'Delete'
            td7.setAttribute('onclick','deleteStudent(this)')
        })
    })
}

function deleteStudent(td){
    const row = td.parentNode
    const reg = row.querySelectorAll('td')[2].innerText
    
    fetch(`http://localhost:8080/delete-student?registration=${reg}`,{
        method: 'DELETE',
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Failed to delete student')

        }else{
            const tbody = document.getElementById('tbody')
            tbody.removeChild(row)
        }
    })
    .catch(error=>{
        console.log(error)
    })
}