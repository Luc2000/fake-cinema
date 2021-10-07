import { Button } from '../components/Button';
import { useGenres } from '../hooks/useGenres';

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useGenres(); 

  return(
    <>
      <nav className="sidebar">   
        <span>Lucas<p>Flix</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            console.log(genre.id),
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
