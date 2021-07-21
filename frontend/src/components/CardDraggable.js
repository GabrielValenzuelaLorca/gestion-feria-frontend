import React from "react";
import { Draggable } from "react-beautiful-dnd";

const CardDraggable = (props) => {
  const {item} = props

  return (
    <Draggable draggableId={item.id.toString()} index={item.index}>
      {(provided, snapshot) => (
        <div className={`card mb-3 p-2 has-background-${snapshot.isDragging ? "grey-light" : "light"}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  )
}

export default CardDraggable;