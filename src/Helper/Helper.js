export const handleChangeMethod = (e, objParam) => {
    debugger
    var obj = {}
    switch (e.target.type) {
        case "text":
            obj[e.target.name] = e.target.value
            break;

        case "textarea":
            obj[e.target.name] = e.target.value
            break;
        case "number":
            obj[e.target.name] = parseInt(e.target.value)

            break;
        case "checkbox":
            obj[e.target.name] = e.target.checked
            break;

        default:
            break;
    }
    return obj
}