import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
    state = {
        persons: []
    }


    componentDidMount() {
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="list">

                {this.state.persons.map(person =>
                    <div className="listClients">
                        <div className="imgClients">
                            <img src={person.img} className="Clients" alt="imagem do usuario" />
                        </div>
                        <div className="idClients">
                            <p>{person.name}</p>
                            <p>Id: {person.id} - Username: {person.username}</p>
                        </div>


                        <div className="box_btn">
                            <button className="btn">Pagar</button>
                        </div>
                        
                    </div>

                )}

            </div>
        )
    }
}

