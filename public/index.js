document.querySelector('#submit').onclick = () => {
    const cid = document.querySelector('#contactId').value
    const startTime = document.querySelector('#startDateTime').value
    const endTime = document.querySelector('#endDateTime').value

    // TODO: validate fields

    search(cid)
}

const search = cid => {
    fetch(`/api/v1/${cid}`)
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
