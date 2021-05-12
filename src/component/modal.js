import axios from 'axios';
import React, { useState } from 'react'




//--------------------------------------------Função da Modal-----------------------------------------------------
function Modal(props) {

    const [valueInsert_card, setvalueInsert_card] = useState("")
    const [card_number, setcard_number] = useState("")
    const [selectedCard, setselectedCard] = useState("")
   

    let cards = [
        // valid card
        {   id: 0,
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
        },
        // invalid card
        {   id: 1,
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
        },

    ];

    
    
    
    function valido(evt) {
        evt.preventDefault()
        props.displayNone()
        console.log("card number", card_number)
     
        
        
        console.log('cartao 1', card_number)

        cards.forEach( (card) => {
            if (card_number == card.card_number ) {
                setselectedCard(card)
            }
        });

        let body = JSON.stringify({
            // Card Info
            card_number: card_number,
            cvv: selectedCard.cvv,
            expiry_date: selectedCard.expiry_date,

            // Destination User ID
            destination_user_id: props.id,

            // Value of the Transaction
            value: valueInsert_card
        });

        if (card_number == '1111111111111111') {
            axios.post(`https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, { body })
            .then(res => {
              console.log(res);
              console.log(res.data);
              props.status_pagamento(true)
            })
        }
           
        
        else {
            axios.post(`https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, { body })
            .then(res => {
              console.log(res);
              console.log(res.data);
              props.status_pagamento(false)
            })
          
           
           
        }
        return
    }
   

    


    return (

        <div style={{ display: props.display }} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        <h4 >
                            Pagamento para <h4 className="modal-user">{props.name}</h4>
                        </h4>
                    </div>
                    <div className="close-modal" onClick={props.displayNone}>X</div>
                </div>

                <form>
                    <div className="modal-caixa-valor">
                        <input onChange={ event => setvalueInsert_card(event.target.value) } className="modal-valor" type="text" placeholder="R$"></input>
                    </div>
                    <div className="modal-caixa-cartao">
                        <select onChange={ event => setcard_number(event.target.value) } id="select_card" className="select-cartao">

                            <option value="selecione" id="selecione">
                                selecione o cartão
                                    </option>


                            {cards.map(
                                card => (
                                    <option value={card.card_number} key={card.id} id="opção_cartao">
                                        Cartão com o final {card.card_number.substr(-4)}
                                    </option>
                                    
                                )
                            )}

                        </select>
                    </div>
                    <div >
                        <button type="submit" onClick={valido} className="modal-pagar" >Pagar</button>
                    </div>
                </form>
                
            </div>
        </div>
    )

    
}


export default Modal