import React, {useState} from 'react'

export default function Form() {

    const [form, setForm] = useState({
        title: "",
        summary: "",
        healthScore: "",
        steps: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value
        setForm({...form, [property]: value})
    }

    return (
        <form>
            <div>
                <label>Title : </label>
                <input type="text" value={form.title} onChange={changeHandler}  name="title" />
            </div>
            <div>
                <label>Summary : </label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary" />
            </div>
            <div>
                <label>Health Score : </label>
                <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore" />
            </div>
            <div>
                <label>Steps : </label>
                <input type="text" value={form.steps} onChange={changeHandler} name="steps" />
            </div>
        </form>)
}