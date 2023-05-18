import { useState } from 'react';
import './Dashboard.scss'
import Tree from '../Tree/Tree';
import Header from '../Header/Header';
import Window from '../Window/Window';



interface Position{
  top: number;
  left: number;
}


const Dashboard: React.FC = (): JSX.Element => {

  const [zoom, setZoom] = useState<number>(100)
  const handleZoomIn = () =>{
    setZoom(prevZoom => prevZoom +10)
  }
  const handleZoomOut = () =>{
    setZoom(prevZoom => prevZoom -10)
  }

  const [position, setPosition] = useState<Position>({top:0, left:0})

  const handleMove = (direction: string) => {
    setPosition(prevPosition => {
      const actions: { [key: string]: Position } = {
        up: { ...prevPosition, top: prevPosition.top - 10 },
        down: { ...prevPosition, top: prevPosition.top + 10 },
        left: { ...prevPosition, left: prevPosition.left - 10 },
        right: { ...prevPosition, left: prevPosition.left + 10 }
      };
      return actions[direction] || prevPosition;
    });
  };
    return (
      <div>
        <Header handleZoomOut={handleZoomOut} handleZoomIn={handleZoomIn} zoom={zoom} />
        <Window handleZoomOut={handleZoomOut} handleZoomIn={handleZoomIn} zoom={zoom} position={position} handleMove={handleMove}>
          <Tree />
        </Window>
      </div>
    );
  };
export default Dashboard;