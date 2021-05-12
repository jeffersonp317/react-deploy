import React, { Component, setState } from 'react';
import axios from 'axios';
import Modal from './component/modal';



//-------------------------------------Classe responsável pela lista de usuários--------------------------------------
export default class PersonList extends React.Component {

    state = {
        display: "none",
        show: false,
        persons: [],
        selectedName: "",
        selectedID: "",
        selectedUsername: "",
        modalConfirmacao: "none",
        transacao_pagamento: false,
        CloseModal2: {display: "none"},
        isActive: false




    };

status_pagamento = (status) => {
    this.setState({transacao_pagamento:status, modalConfirmacao: "block"})
    console.log("status", status)
    
}

    Modal = (personname, personid, personusername) => {
        console.log(personid)

        this.setState({
            selectedID: personid,
            selectedName: personname,
            selectedUsername: personusername,
            display: "block"
        }
        );

    }

    CloseModal2 = () => {

        this.setState({ modalConfirmacao: "none" })

    }

    CloseModal = () => {

        this.setState({ display: "none" })

    }

    




    componentDidMount() {
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons: persons })


            })
    }



    render() {
        
        return (
            <div className="list">
                {this.state.persons.map((person, index) => {

                    return (
                        <div key={"lista-usuarios" + index} className="listClients">
                            <div className="imgClients">
                                <img src={person.img} className="Clients" alt="imagem do usuario" />
                            </div>
                            <div className="idClients">
                                <p>{person.name}</p>
                                <p>Id: {person.id} - Username: {person.username}</p>
                            </div>


                            <div className="box_btn">
                                <button type="button" className="btn" onClick={() => this.Modal(person.name, person.id, person.username)}>Pagar</button>



                            </div>

                        </div>
                    )
                }



                )}

                <Modal displayNone={this.CloseModal} show={this.state.show}
                    display={this.state.display} name={this.state.selectedName}
                    id={this.state.selectedID} userName={this.state.selectedUsername}
                    status_pagamento={this.status_pagamento}>
                </Modal>
                

                <div style={{ display: this.state.modalConfirmacao }} className="modal-2">
                    <div className="header-modal2">
                        <h4 className="recibo">Recibo de pagamento</h4>
                        {}
                        <div className="close-modal2" onClick={this.CloseModal2}>X</div>
                    </div>
                    <div className="texto-status">
                        O pagamento {this.state.transacao_pagamento ? "": "não"} foi aprovado  com sucesso!
                    </div>
                    
                </div>

            </div>

        )

    }
}


