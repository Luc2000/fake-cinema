import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../services/api';
import "babel-polyfill";

interface GenreProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenreProviderProps {
    children: ReactNode;
}

interface GenreContextData {
    genres: GenreProps[];
    selectedGenreId: number;
    handleClickButton: (id: number) => Promise<void>
}

const GenreContext = createContext<GenreContextData>(
    {} as GenreContextData                  //Se não fizer essa linha o TS entende que a tipagem está errada.
);

export function GenreProvider({ children }: GenreProviderProps){
    const [genres, setGenres] = useState<GenreProps[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    async function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    useEffect(() => {
        api.get<GenreProps[]>('genres').then(response => {
          setGenres(response.data);
        });
    }, []);

    return(
        <GenreContext.Provider value={{genres, handleClickButton, selectedGenreId}}>
            {children}
        </GenreContext.Provider>
    );
}

export function useGenres() {
    const context = useContext(GenreContext);

    return context;
}
