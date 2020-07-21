export default {
  name: {
    type: "text",
    label: "Name",
    required: true,
  },
  surname: {
    type: "text",
    label: "Surname",
    required: false
  },
  email: {
    type: "email",
    label: "Email",
    required: true,
  },
  role: {
    type: "select",
    label: "Role",
    required: true,
    options: [
      {
        label: "Admin",
        value: "admin"
      },
      {
        label: "Damian",
        value: "damian"
      },
      {
        label: "User",
        value: "user"
      },
      {
        label: "Customer",
        value: "customer"
      }
    ]
  },
  check1: {
    type: "checkbox",
    label: "TEST",
    required: true,
    condition: "role.admin"
  },
  check2: {
    type: "checkbox",
    label: "test2",
    condition: "check1.true"
  }
}