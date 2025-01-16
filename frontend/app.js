// Event listener for the registration form submission
const form = document.getElementById('registrationForm');
const employeeUL = document.getElementById('employeeUL');

// Register employee on the registration page
if (form) {
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
                alert(result.message);
            } else if (result.error) {
                alert(result.error);
            }
        } catch (error) {
            alert('Error registering employee!');
        }
    });
}

// Fetch and display employee list on the employee list page
if (employeeUL) {
    window.addEventListener('load', async () => {
        try {
            const response = await fetch('http://localhost:3000/api/employees');
            const result = await response.json();

            if (result.data && result.data.length > 0) {
                result.data.forEach(employee => {
                    const li = document.createElement('li');
                    li.textContent = `${employee.name} - ${employee.department}`;
                    employeeUL.appendChild(li);
                });
            } else {
                employeeUL.innerHTML = '<li>No employees found!</li>';
            }
        } catch (error) {
            alert('Error loading employees!');
        }
    });
}
