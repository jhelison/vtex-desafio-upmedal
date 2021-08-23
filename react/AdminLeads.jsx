import React, { FC, useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"

const AdminLeads = () => {
    const [prospects, setProspects] = useState(null)

    useEffect(() => {
        getProspects()
    }, [])

    useEffect(() => {
        console.log(prospects)
    }, [prospects])

    const getProspects = async () => {
        try {
            const res = await fetch(
                "https://g0deojz10k.execute-api.us-east-2.amazonaws.com/items"
            )
            const resJson = await res.json()
            if (resJson) {
                if (resJson.Items) {
                    setProspects(resJson.Items)
                    return
                }
            }
            setProspects(null)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProspect = async (id) => {
        try {
            const res = await fetch(
                "https://g0deojz10k.execute-api.us-east-2.amazonaws.com/items/" +
                    id,
                {
                    method: "delete",
                }
            )
            getProspects()
        } catch (error) {
            console.log(error)
        }
    }

    const renderNotFound = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>Nenhum prospecto ainda cadastrado</h1>
            </div>
        )
    }

    const renderProspectsTable = () => {
        return (
            <table style={{ width: "100%" }}>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
                {renderProspectsItems()}
            </table>
        )
    }

    const renderProspectsItems = () => {
        return prospects.map((item) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.fone}</td>
                    <td
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "rgba(0,0,0,0)",
                                cursor: "pointer",
                            }}
                            onClick={() => deleteProspect(item.id)}
                        >
                            <svg
                                fill="red"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                            </svg>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <Layout>
            <PageBlock
                title="Clientes prospectos"
                subtitle="Informações sobre potenciais clientes"
                variation="full"
            >
                {prospects !== null ? renderProspectsTable() : renderNotFound()}
            </PageBlock>
        </Layout>
    )
}

export default AdminLeads
