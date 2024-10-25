// localStorage.clear();
const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2024-10-01",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Follow-up",
                "taskDescription": "Follow up with the client regarding their feedback.",
                "taskDate": "2024-09-25",
                "category": "Client Relations"
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Vivaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Presentation",
                "taskDescription": "Create a design presentation for the upcoming meeting.",
                "taskDate": "2024-10-05",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Update Website",
                "taskDescription": "Update the company website with the latest news.",
                "taskDate": "2024-10-02",
                "category": "Web Development"
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Reyansh",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2024-10-03",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Conduct market research for new product ideas.",
                "taskDate": "2024-09-28",
                "category": "Research"
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Krishna",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Budget",
                "taskDescription": "Prepare the budget proposal for next quarter.",
                "taskDate": "2024-10-10",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Audit Review",
                "taskDescription": "Review the last audit findings.",
                "taskDate": "2024-10-07",
                "category": "Finance"
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Aanya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Launch the new social media campaign.",
                "taskDate": "2024-10-12",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Content Creation",
                "taskDescription": "Create content for the blog.",
                "taskDate": "2024-09-30",
                "category": "Marketing"
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
}