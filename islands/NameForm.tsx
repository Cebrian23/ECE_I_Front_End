type Filtro = {
    surname: boolean;
}

const NameForm = (filtro: Filtro) => {
    const apellido = filtro.surname;

    return(
        <div>
            <form>
                <h1>Filtro por nombre</h1>
                <div class="row_data">
                    <div class="column_data">
                        <label for="name">Nombre:</label>
                        {
                            apellido.valueOf() === true &&
                            <>
                                <br/>
                                <label for="surname">Apellidos:</label>
                            </>
                        }
                    </div>
                    <div class="column_data">
                        <input type="text" name="name" required/>
                        {
                            apellido.valueOf() === true &&
                            <>
                                <br/>
                                <input type="text" name="surname"/>
                            </>
                        }
                    </div>
                </div>
                <div class="column_data">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default NameForm;