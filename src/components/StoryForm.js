import React from 'react'

const StoryForm = ({isActive, handleClose}) => {  

  const save = () => {
    const storyForm = document.getElementById("story-form"); 
    const fields = ["numero","titulo","descripcion"];
    let result = {};
    let validation = true;

    fields.forEach((field) => {
      result[field] = storyForm.elements[field].value
      let input_class = storyForm.elements[field].classList;
      let warning_message_class = document.getElementById('form-new-story-required-'+field).classList;

      if(result[field] === ""){
        input_class.add('is-danger')
        warning_message_class.remove('is-hidden');     
        validation = false; 
      } else {
        input_class.remove('is-danger')
        warning_message_class.add('is-hidden');   
      }
    });

    if (validation){
      console.log("Todos los campos wenos mi pana");
      handleClose()
    } 
  }

  const cancel = () => {
    const storyForm = document.getElementById("story-form"); 
    const fields = ["numero","titulo","descripcion"];

    fields.forEach((field) => {
      storyForm.elements[field].value = "";
    });

    handleClose();
  }

  return (
    <div className={`modal ${ isActive ? "is-active" : "" }`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Definición de Historias</p>
        </header>
        <section className="modal-card-body">
          <form id="story-form">
            <div className="field">
              <label className="label">Número Historia</label>
              <div className="control">
                <div className="field has-addons">
                  <div className="control">
                    <button className="button is-static">HU</button>
                  </div>
                  <div className="control">
                    <input className="input" name="numero" type="number" placeholder="10" min="0" />
                  </div>
                </div>
              </div>
              <p className="help is-danger is-hidden" id="form-new-story-required-numero">Este campo es obligatorio</p>
            </div>
            <div className="field">
              <label className="label">Título Historia</label>
              <div className="control">
                <input className="input" name="titulo" type="text" placeholder="Creación de usuarios, CRUD perfiles, etc..."/>
              </div>
              <p className="help is-danger is-hidden" id="form-new-story-required-titulo">Este campo es obligatorio</p>
            </div>
            <div className="field">
              <label className="label">Descripción Historia</label>
              <div className="control">
                <textarea className="textarea" name="descripcion" placeholder="Como <sujeto> quiero <deseo> para <objetivo>..."/>
              </div>
              <p className="help is-danger is-hidden" id="form-new-story-required-descripcion">Este campo es obligatorio</p>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={save}>Guardar</button>
          <button className="button is-danger" onClick={cancel}>Cancelar</button>
        </footer>
      </div>
    </div>
  )
}

export default StoryForm;