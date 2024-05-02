const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return result.json();
}
export default getData;