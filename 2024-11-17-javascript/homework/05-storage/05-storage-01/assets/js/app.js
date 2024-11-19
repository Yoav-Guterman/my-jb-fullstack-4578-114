function saveAddress() {
    const address = {
        city: document.getElementById('city').value,
        street: document.getElementById('street').value,
        houseNumber: document.getElementById('houseNumber').value,
        zipCode: document.getElementById('zipCode').value
    };
    localStorage.setItem('address', JSON.stringify(address))
    alert('saved successfully!')
}

function loadAddress() {
    const savedAddress = localStorage.getItem('address')
    if (savedAddress) {
        const address = JSON.parse(savedAddress);

        // Fill the form fields
        document.getElementById('city').value = address.city || '';
        document.getElementById('street').value = address.street || '';
        document.getElementById('houseNumber').value = address.houseNumber || '';
        document.getElementById('zipCode').value = address.zipCode || '';
        console.log('got info from localstorage:', address);
    } else {
        console.log('no address was found');
    }
}

function clean() {
    document.getElementById('city').value = '';
    document.getElementById('street').value = '';
    document.getElementById('houseNumber').value = '';
    document.getElementById('zipCode').value = '';
}