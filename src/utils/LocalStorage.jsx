

const employees = [
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix UI Bugs",
                "description": "Resolve layout issues on the dashboard.",
                "date": "2025-03-11",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Write API Documentation",
                "description": "Create documentation for user authentication API.",
                "date": "2025-03-12",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Database Optimization",
                "description": "Optimize SQL queries for faster performance.",
                "date": "2025-03-15",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 2,
        "firstname": "Rahul",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Develop Login System",
                "description": "Implement JWT authentication.",
                "date": "2025-03-11",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Discuss new project requirements with the client.",
                "date": "2025-03-13",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review code for the new payment module.",
                "date": "2025-03-14",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 }
    },
    {
        "id": 3,
        "firstname": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Setup CI/CD Pipeline",
                "description": "Configure GitHub Actions for automated testing.",
                "date": "2025-03-10",
                "category": "DevOps",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize Web Performance",
                "description": "Improve page load speed by optimizing assets.",
                "date": "2025-03-12",
                "category": "Performance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Refactor Backend Code",
                "description": "Improve maintainability of backend services.",
                "date": "2025-03-15",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 4,
        "firstname": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Landing Page",
                "description": "Create a new landing page design.",
                "date": "2025-03-11",
                "category": "UI/UX",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Implement Dark Mode",
                "description": "Add dark mode toggle to the website.",
                "date": "2025-03-14",
                "category": "Frontend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "SEO Optimization",
                "description": "Improve website SEO ranking.",
                "date": "2025-03-16",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 }
    },
    {
        "id": 5,
        "firstname": "Priya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Security Audit",
                "description": "Perform security assessment of the application.",
                "date": "2025-03-12",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Server Maintenance",
                "description": "Upgrade server software and dependencies.",
                "date": "2025-03-13",
                "category": "DevOps",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Bug Fixes",
                "description": "Fix reported bugs in the mobile app.",
                "date": "2025-03-14",
                "category": "Mobile Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    }
];

const admin = [
    {
        "id": 1,
        "firstname": "Admin",
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage=()=>{
const employees = JSON.parse(localStorage.getItem('employees'));
const admin=JSON.parse(localStorage.getItem('admin'));

return {employees,admin};
}
