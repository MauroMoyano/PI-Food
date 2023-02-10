import React, {useState} from 'react'
import axios from "axios";
import {useSelector} from "react-redux";

export default function Form() {
    const dietTypes = useSelector(state => state.diet)

    const [form, setForm] = useState({
        title: "",
        summary: "",
        healthScore: "",
        step: "",
        diet: []
    })

    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        step: ""
    })

    const validate = (form) => {
        const regTitle = /^[^0-9]{1,100}$/
        console.log("pasando por validate")
        let errors = {}

        if (regTitle.test(form.title)) {
            console.log("pasando por validate              if")
            errors = {...errors, title: ""}
        } else {
            console.log("pasando por validate              else")
            errors = {...errors, title: "Hay errores en el titulo."}
        }

        if (form.summary.length > 20) {
            errors = {...errors, summary: "Hay errores en el resumen"}
        } else {
            errors = {...errors, summary: ""}
        }

        const floatRegex = /^[0-9]+(\.[0-9]{1,1})?$|^10(\.[0]{1,1})?$/
        if (floatRegex.test(form.healthScore)) {
            errors = {...errors, healthScore: ""}
        } else {
            errors = {...errors, healthScore: "Valor ingresado invalido."}
        }
        if (form.step.length) {
            errors = {...errors, step: ""}
        } else {
            errors = {...errors, step: "Hay errores en los pasos introducidos."}
        }

        return errors


    }

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        setErrors(validate({...form, [property]: value}))
        setForm({...form, [property]: value})
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/api/recipe", form)
            .then(res => console.log(JSON.stringify(res.data)))
            .catch(error => console.log(error.message))

    }

    const handleCheck = (event) => {
        const check = event.target.value
        let arrayDiet = [...form.diet]

        if (arrayDiet.length) {
            const aux = arrayDiet.filter((diet) => diet !== check)
            aux.length === arrayDiet.length //si da verdadera significa que no estaba check dentro de arrayDiet, por lo tanto lo pusheamos
                ? arrayDiet.push(check)
                : arrayDiet = [...aux] // si estaba adentro devolvemos el array filtrado

        } else {
            arrayDiet.push(check)
        }
        setForm({...form, diet: arrayDiet})
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title : </label>
                <input type="text" value={form.title} onChange={changeHandler} name="title"/>
                {errors.title && <span>{errors.title}</span>}
            </div>
            <div>
                <label>Summary : </label>
                <input type="text" value={form.summary.replace(/<[^>]+>/g, '')} onChange={changeHandler}
                       name="summary"/>
                {errors.summary && <span>{errors.summary}</span>}
            </div>
            <div>
                <label>Health Score : </label>
                <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
                {errors.healthScore && <span>{errors.healthScore}</span>}
            </div>
            <div>
                <label>Steps : </label>
                <input type="text" value={form.step} onChange={changeHandler} name="step"/>
                {errors.step && <span>{errors.step}</span>}
            </div>
            <div>
                <label>Diet Types : </label>
                {
                    dietTypes.map(diet => {
                        return (
                            <div key={diet}>
                                <label>{diet}</label>
                                <input type="checkbox" name={diet}
                                       value={diet}
                                       onChange={handleCheck}/>

                            </div>
                        )

                    })
                }
                <input type="checkbox" name="vegan"/>
            </div>
            <button type="submit">Submit</button>
        </form>)
}

/////////////////// Nachito
/*
 aria-selected={form.diet.includes(diet)}
const handleChange = (e) => {
    console.log(inputs.released)
    const updateInputs = { ...inputs };

    if(e.target.checked){
        if (e.target.name==='genres'){

            updateInputs.genres=[...updateInputs.genres,e.target.value];
        }else if(e.target.name==='platforms'){

            updateInputs.platforms=[...updateInputs.platforms,e.target.value];
        }
    }else{
        if(e.target.name==='genres'){
            updateInputs.genres=updateInputs.genres.filter(
                (value)=>value!==e.target.value
            );
        }else if(e.target.name==='platforms'){
            updateInputs.platforms=updateInputs.platforms.filter(
                (value)=>value!==e.target.value
            );
        }else{
            updateInputs[e.target.name]=e.target.value;
        }
    }

    setInputs(updateInputs);
};*/
