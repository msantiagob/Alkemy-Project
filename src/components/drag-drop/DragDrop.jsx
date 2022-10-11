import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { columnsFromBackend } from "./Items";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const DragDrop = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        direction="horizontal"
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              {column.name === "work" ? console.log(Droppable) : "no es"}
              {column.name === "work" ? "melo" : "no es"}
              <div style={{ margin: 8 }}>
                <div style={{ padding: 4 }}></div>
                <Droppable droppableId={columnId} key={columnId}>
                  {column.name === "work"
                    ? (provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "white",
                              padding: 4,
                              width: 250,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          userSelect: "none",
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",

                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div>oelo</div>
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}

                            {provided.placeholder}
                          </div>
                        );
                      }
                    : (provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "white",
                              padding: 4,
                              width: 250,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          userSelect: "none",
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",

                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div>oelo</div>
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}

                            {provided.placeholder}
                          </div>
                        );
                      }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
// (provided, snapshot) => {
//     <Drop
//       provided={provided}
//       snapshot={snapshot}
//       column={column}
//     />;
//   }}
