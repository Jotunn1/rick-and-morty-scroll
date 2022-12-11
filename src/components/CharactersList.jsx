import { useCharacter } from "../hooks/useCharacter";
import InfiniteScroll from "react-infinite-scroll-component"

import { Loader } from "./Loader";
import { CharacterCard } from "./CharacterCard";

const CharactersList = () => {
    const { characters, error, fetchNextPage, hasNextPage, status } = useCharacter();
    if (status === 'loading') return <Loader />;
    if (status === 'error') return <h4>Ups!, {`${error}`}</h4>;

    console.log(characters)

    return (
        <InfiniteScroll dataLength={characters ? characters.results.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Loader />}
        >
            <div className="container">
                {
                    characters && characters.results.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))
                }
            </div>
        </InfiniteScroll>
    )
}

export default CharactersList