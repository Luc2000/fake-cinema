import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { GenreProvider } from './hooks/useGenres';

import './styles/global.scss';
import './styles/sidebar.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider >
        <SideBar />
        <Content />
      </GenreProvider>
    </div>   
  )
}

