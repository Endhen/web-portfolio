import React from 'react'

const ContactPage = () => {
    return (
        <section className="contact">
            <form action="">
                <h2>Contact</h2>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Sujet"/>
                <textarea name="" placeholder="Message"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
        </section>
    )
}

export default ContactPage