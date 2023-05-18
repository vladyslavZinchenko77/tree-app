
import './Window.scss'

interface WindowProps {
    children: React.ReactNode;
    handleZoomIn: ()=> void;
    handleZoomOut: ()=> void;
    handleMove: (direction: string) => void;
    zoom: number;
    position: {top: number; left: number;}
}

const Window: React.FC<WindowProps> = ({children,zoom,position, handleMove}): JSX.Element=>{


    return (
        <div className='window__container' >
          <button className='window__content-btn--top' onClick={()=>{handleMove('up')}}>Top</button>
                    <button className='window__content-btn--right' onClick={()=>{handleMove('right')}}>Right</button>
                    <button className='window__content-btn--bottom' onClick={()=>{handleMove('down')}}>Bottom</button>
                    <button className='window__content-btn--left' onClick={()=>{handleMove('left')}}>Left</button>
          <div className='window' >
                <div className='window__content'style={{zoom: `${zoom}%`, ...position}} >
                    {children}
                    
                </div>
          </div>
        </div>
    )

}

export default Window;