class Usuario {
    #tipo_documento;
    #numero_documento;
    #primer_nombre;
    #segundo_nombre;
    #primer_apellido;
    #segundo_apellido;
    #direccion_correo;
    #numero_celular;
    #foto_perfil;
    #estado;
    #clave;
    #PERFIL_USUARIO_id;

    constructor(
        tipo_documento,
        numero_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        direccion_correo,
        numero_celular,
        foto_perfil,
        estado,
        clave,
        PERFIL_USUARIO_id
    ) {
        this.#tipo_documento = tipo_documento;
        this.#numero_documento = numero_documento;
        this.#primer_nombre = primer_nombre;
        this.#segundo_nombre = segundo_nombre;
        this.#primer_apellido = primer_apellido;
        this.#segundo_apellido = segundo_apellido;
        this.#direccion_correo = direccion_correo;
        this.#numero_celular = numero_celular;
        this.#foto_perfil = foto_perfil;
        this.#estado = estado;
        this.#clave = clave;
        this.#PERFIL_USUARIO_id = PERFIL_USUARIO_id;
    }

    // Getters
    getTipoDocumento() { return this.#tipo_documento; }
    getNumeroDocumento() { return this.#numero_documento; }
    getPrimerNombre() { return this.#primer_nombre; }
    getSegundoNombre() { return this.#segundo_nombre; }
    getPrimerApellido() { return this.#primer_apellido; }
    getSegundoApellido() { return this.#segundo_apellido; }
    getDireccionCorreo() { return this.#direccion_correo; }
    getNumeroCelular() { return this.#numero_celular; }
    getFotoPerfil() { return this.#foto_perfil; }
    getEstado() { return this.#estado; }
    getClave() { return this.#clave; }
    getPerfilUsuarioId() { return this.#PERFIL_USUARIO_id; }

    // Setters
    setTipoDocumento(tipo_documento) { this.#tipo_documento = tipo_documento; }
    setNumeroDocumento(numero_documento) { this.#numero_documento = numero_documento; }
    setPrimerNombre(primer_nombre) { this.#primer_nombre = primer_nombre; }
    setSegundoNombre(segundo_nombre) { this.#segundo_nombre = segundo_nombre; }
    setPrimerApellido(primer_apellido) { this.#primer_apellido = primer_apellido; }
    setSegundoApellido(segundo_apellido) { this.#segundo_apellido = segundo_apellido; }
    setDireccionCorreo(direccion_correo) { this.#direccion_correo = direccion_correo; }
    setNumeroCelular(numero_celular) { this.#numero_celular = numero_celular; }
    setFotoPerfil(foto_perfil) { this.#foto_perfil = foto_perfil; }
    setEstado(estado) { this.#estado = estado; }
    setClave(clave) { this.#clave = clave; }
    setPerfilUsuarioId(PERFIL_USUARIO_id) { this.#PERFIL_USUARIO_id = PERFIL_USUARIO_id; }

    toJSON() {
        return {
            id_usuario: this.id_usuario,
            tipo_documento: this.#tipo_documento,
            numero_documento: this.#numero_documento,
            primer_nombre: this.#primer_nombre,
            segundo_nombre: this.#segundo_nombre,
            primer_apellido: this.#primer_apellido,
            segundo_apellido: this.#segundo_apellido,
            direccion_correo: this.#direccion_correo,
            numero_celular: this.#numero_celular,
            foto_perfil: this.#foto_perfil,
            estado: this.#estado,
            PERFIL_USUARIO_id: this.#PERFIL_USUARIO_id
        };
    }
}

module.exports = Usuario;