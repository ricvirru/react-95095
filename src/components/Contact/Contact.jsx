const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Se envio tu mensaje: " + event.target.name.value);
        console.log(event.target.name.value);
    };

    return (
        <div>
            <h2>Contacto</h2>
            <p>Email: info@micomercio.com</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Dirección: Calle 123, Ciudad</p>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label> 
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;