import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { criticidadStyle } from "../../utils/classStyles";
import { setModalState } from "../../utils/functions";
import StoryDetails from "./StoryDetails";

const CardDraggable = ({item}) => {
  const [modalState, setModal] = useState(false);

  return (
    <div>
      <Draggable draggableId={item.id.toString()} index={item.index}>
        {(provided, snapshot) => (
          <article className={`card block has-background-${snapshot.isDragging ? "grey-light" : "light"}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card-header">
              <p className="card-header-title">
                  HU{item.numero} - {item.titulo}
              </p>

              <button className="mt-1 mr-1 button is-light is-rounded" 
                onClick={() => setModalState(true, setModal)}
              >
                <span className="icon" >
                  <i className="fas fa-lg fa-ellipsis-v"></i>
                </span>
              </button>
            </div>

            <div className="card-content py-2">
              <progress className="progress is-link mb-2" value={item.avance.toString()} max="100"/>

              <span className="icon-text level mb-0">
                <span className={`icon level-left has-text-${criticidadStyle[item.criticidad]}`}
                >
                  <i className="fas fa-circle"></i>
                </span>
                
                <span className="level-right tag is-primary is-rounded">{item.puntos} Ptos.</span>
              </span>

              <span className="has-text-weight-medium">Responsables:</span>

              <ul className="pl-2">
                {item.responsables.length ?
                  item.responsables.map((responsable, index) => 
                    <li className="is-size-7" key={index}>- {responsable}</li>
                  ) :  
                  <li className="is-size-7">Sin Responsables</li>
                }
              </ul>
            </div>
          </article>
        )}
      </Draggable>

      <StoryDetails story={item} isActive={modalState} closeModal={() => setModalState(false, setModal)}/>
    </div>
  )
}

export default CardDraggable;