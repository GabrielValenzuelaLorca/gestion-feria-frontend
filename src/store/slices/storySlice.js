import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    titulo: "Crear tablero de historias de usuario",
    estado: "Backlog",
    numero: 1,
    avance: 50,
    puntos: 10,
    criticidad: "Opcional",
    sprint: "Sin Definir",
    descripcion: "Esto es una descripción",
    criterios: "Esto es un criterio",
    responsables: ["Pedro Godoy", "Gabriel Valenzuela"],
    index: 0,
  },
  {
    id: 2,
    titulo: "item 2",
    estado: "Backlog",
    numero: 2,
    avance: 70,
    puntos: 5,
    criticidad: "Esencial",
    sprint: "Sin Definir",
    descripcion: "Esto es una descripción",
    criterios: "Esto es un criterio",
    responsables: ["Pedro Godoy", "Gabriel Valenzuela"],
    index: 1,
  },
  {
    id: 3,
    titulo: "item 3",
    estado: "Backlog",
    numero: 3,
    avance: 100,
    puntos: 7,
    criticidad: "Deseable",
    sprint: "Sin Definir",
    descripcion: "Esto es una descripción",
    criterios: "Esto es un criterio",
    responsables: ["Pedro Godoy", "Gabriel Valenzuela"],
    index: 2,
  },
  {
    id: 4,
    titulo: "item 4",
    estado: "Por Hacer",
    numero: 4,
    avance: 55,
    puntos: 2,
    criticidad: "Importante",
    sprint: "Sin Definir",
    descripcion: "Esto es una descripción",
    criterios: "Esto es un criterio",
    responsables: [
      "Pedro Godoy",
      "Gabriel Valenzuela",
      "Cecilia Reyes",
      "Luis Hevia",
      "Liubov Dombrovskaia",
    ],
    index: 0,
  },
  {
    id: 5,
    titulo: "item 5",
    estado: "Por Hacer",
    numero: 5,
    avance: 10,
    puntos: 2,
    criticidad: "Esencial",
    sprint: "Sin Definir",
    descripcion: "Esto es una descripción",
    criterios: "Esto es un criterio",
    responsables: ["Pedro Godoy", "Gabriel Valenzuela"],
    index: 1,
  },
];

export const storySlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addStory: (state, action) => {
      return [...state, action.payload];
    },
    updateStories: (state, action) => {
      const modified_ids = action.payload.map((story) => story.id);
      return [
        ...action.payload,
        ...state.filter((story) => !modified_ids.includes(story.id)),
      ];
    },
  },
});

export const { addStory, updateStories } = storySlice.actions;

export default storySlice.reducer;
