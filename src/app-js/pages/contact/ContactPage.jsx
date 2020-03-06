import React, { Component, isValidElement } from 'react'
import emailjs from 'emailjs-com'

emailjs.init("user_iyMhYBOj9JJ0b0UETACWG");

class ContactPage extends Component {
    state = {
        mail: {
            email: '',
            sujet: '',
            message: '',
        },
        send: false,
        error: {
            email: '',
            sujet: '',
            message: '',
        },
        echec: '',
    }
    

    handleChange = (e) => {
        let { mail } = this.state
        let { name, value } = e.target

        this.state.mail[name] = value
        this.setState({ mail: mail })
    }

    isValid() {
        let { email, sujet, message } = this.state.mail
        let error = this.state.error
        let valid = true

        if (email == undefined || /^\s*$/.test(email)) {
            error.email = 'Renseignez votre e-mail pour que je puisse vous recontacter'
            valid = false
        } else if (!(/[a-z0-9]+@{1}\w+\.{1}[a-z]{2,4}/gi.test(email))) {
            error.email = 'L\'e-mail ne semble pas comporter le bon format'
            valid = false
        } else {
            error.email =''
        }

        if (sujet == undefined || /^\s*$/.test(sujet)) {
            error.sujet = 'Vous avez oublié de préciser le sujet'
            valid = false
        } else {
            error.sujet = ''
        }

        if (message == undefined || /^\s*$/.test(message)) {
            error.message = 'Vous avez oublié le plus important ! :)'
            valid = false
        } else {
            error.message = ''
        }

        this.setState({error: error})
        return valid
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {mail , echec} = this.state

        if (this.isValid(mail)) {

            emailjs.send('gmail', 'template_zsjdqLSS', mail)
                .then(response => {
                //console.log('SUCCESS!', response.status, response.text)
                    this.setState({send: true, echec: ''})
                }, error => {
                    //console.log('FAILED...', error)
                    this.setState({
                        send: false,
                        echec: 'Une erreur est survenue lors de l\'envoi veuillez réessayer : \n',
                    })
                })
        }
    }

    render() {
        let { email, sujet, message } = this.state.mail
        let { error, echec } = this.state
        let { send } = this.state

        if (!send) {
            return (
                <section className="contact">
                    <form>
                        <h2>Contact</h2>
                        {
                            echec?
                            <p>{echec}</p>:''
                        }
                        {
                            error.email?
                            <p>{error.email}</p>:''
                        }
                        <input 
                            className={error.email?"form-error":''}
                            type="text" 
                            name="email" 
                            defaultValue={email || ''} 
                            placeholder="E-mail" 
                            onChange={this.handleChange}/>
                        {
                            error.sujet?
                            <p>{error.sujet}</p>:''
                        }
                        <input 
                            className={error.sujet?"form-error":''}
                            type="text" 
                            name="sujet" 
                            defaultValue={sujet || ''} 
                            placeholder="Sujet" 
                            onChange={this.handleChange}/>
                        {
                            error.message?
                            <p>{error.message}</p>:''
                        }
                        <textarea 
                            className={error.message?"form-error":''}
                            name="message" 
                            defaultValue={message || ''} 
                            placeholder="Message" 
                            onChange={this.handleChange}></textarea>
                        <input 
                            type="submit" 
                            value="Envoyer" 
                            onClick={this.handleSubmit}/>
                    </form>
                </section>
            )
        } else {
            return <div className="mail-send"><p>Votre mail à bien été reçu, merci !</p></div>
        }
        
    }
}

export default ContactPage