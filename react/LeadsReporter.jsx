//Finally where I can throw vtex io away and use react!

import React from "react"
import { useState } from "react"

// interface LeadsReporterProps {}

// interface HandleNameChangeInterface {
//   target: HTMLInputElement;
// }

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }
    )
}

const LeadsReporter = ({}) => {
    //By choice i'm not going to save the state on the browse, so it aways is open when the url is loaded
    const [isOpen, setIsOpen] = useState(true)
    const [subscribed, setSubscribed] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [fone, setFone] = useState("")

    const handleClose = async () => setIsOpen(false)
    const handleFormSubscribe = async () => {
        const isFormValid = validateForm()
        if (!isFormValid) {
            return
        }

        const serverResponse = await putFormToServer()

        if (!serverResponse) {
            alert("Erro ao se conectar ao servidor")
            return
        }

        setSubscribed(true)
        setTimeout(() => {
            setIsOpen(false)
        }, 5000)
    }
    const validateForm = () => {
        if (!name.trim() || !email.trim() || !fone.trim()) {
            alert("Por favor, preencha todos os campos")
            return false
        }
        return true
    }

    const putFormToServer = async () => {
        const data = JSON.stringify({
            id: uuidv4(),
            name,
            email,
            fone,
        })

        console.log(data)
        const res = await fetch(
            "https://g0deojz10k.execute-api.us-east-2.amazonaws.com/items",
            {
                method: "put",
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,PUT,GET",
                },
                mode: "cors",
                body: data,
            }
        )

        if (res.status === 200) {
            return true
        }
        return false
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleFoneChange = (event) => {
        setFone(event.target.value)
    }

    // I do not want to use a separated file for css, so style it is!
    const renderForm = () => {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div>
                    {/* Close button */}
                    <div
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                        onClick={handleClose}
                    >
                        <h3 style={{ margin: "0", padding: "0" }}>x</h3>
                    </div>
                </div>
                <h3 style={{ color: "white", textAlign: "justify" }}>
                    {" "}
                    Inscreva-se agora para receber as melhores promoções em seu
                    email!
                </h3>
                {/* Form */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <label>Nome</label>
                    <input
                        style={{
                            border: "1px solid #59ff00",
                            borderRadius: "4px",
                        }}
                        placeholder="Nome"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label>Email</label>
                    <input
                        style={{
                            border: "1px solid #59ff00",
                            borderRadius: "4px",
                        }}
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label>Telefone</label>
                    <input
                        style={{
                            border: "1px solid #59ff00",
                            borderRadius: "4px",
                        }}
                        placeholder="Telefone"
                        value={fone}
                        onChange={handleFoneChange}
                    />
                    {/* Subscribe button */}
                    <button
                        style={{
                            backgroundColor: "#59ff00",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "4px",
                        }}
                        onClick={handleFormSubscribe}
                    >
                        <span>Inscrever</span>
                    </button>
                </div>
            </div>
        )
    }

    const renderSubscribed = () => {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <h3 style={{ textAlign: "center" }}>
                    Obrigado por se inscrever!
                </h3>
                <span style={{ textAlign: "center" }}>
                    Essa janela se fechara automaticamente.
                </span>
            </div>
        )
    }

    return (
        <div
            style={{
                color: "white",
                position: "fixed",
                bottom: "10px",
                right: "10px",
                zIndex: 5000,
                backgroundColor: "#424242",
                width: "300px",
                height: "400px",
                borderRadius: "4px",
                border: "1px solid #59ff00",
                display: isOpen ? "flex" : "none",
                flexDirection: "column",
                padding: "10px",
            }}
        >
            {subscribed ? renderSubscribed() : renderForm()}
        </div>
    )
}

LeadsReporter.schema = {
    title: "editor.LeadsReporter.title",
    description: "editor.LeadsReporter.description",
    type: "object",
    properties: {},
}

export default LeadsReporter
