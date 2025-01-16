const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact_number: document.getElementById('contact_number').value,
        department: document.getElementById('department').value,
    };

    try {
        const response = await fetch('http://localhost:3000/api/employees/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.message) {
            alert(result.message);  // Success message
        } else if (result.error) {
            alert(result.error);  // Error message
        } else {
            alert('Unexpected response');
        }
    } catch (error) {
        alert('Error registering employee!');
    }
});
