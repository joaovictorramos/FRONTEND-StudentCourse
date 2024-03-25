document.getElementById('search-student').addEventListener('click', function(e){
    e.preventDefault()
    const urlGet = '../templates/search-student.html'
    const widthPopup  = 1000
    const heightPopup = 600

    const leftPopup = (window.screen.width - widthPopup) / 2
    const topPopup  = (window.screen.height - heightPopup) / 2

    const configuration = `width=${widthPopup},height=${heightPopup},top=${topPopup},left=${leftPopup},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no`
    window.open(urlGet, "_blank", configuration)
})