export const userService =
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
