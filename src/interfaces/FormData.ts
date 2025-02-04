interface FormData {
    _id: string,
    title: string,
    description: string,
    completed: "todo" | "active" | "done"
}

export default FormData;