
import { useRef, useState, useEffect } from "react"

import './Tree.scss'


const Tree: React.FC = ()=>{
    
    const treeRef  = useRef<HTMLDivElement | null>(null)
    const [position,setPosition] = useState<{x:number; y:number} | null>(null);
    const [offset, setOffset] = useState<{x:number; y:number} | null>(null);
    const [dragging, setDragging] = useState(false)

    useEffect(()=>{

        const handleMouseUp = ()=>{
            setDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.style.cursor = 'auto'
        };
        if(dragging){
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.documentElement.style.cursor = 'grabbing';
        }

return () =>{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
}

    },[dragging])

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        const rect = treeRef.current?.getBoundingClientRect();
        if (rect) {
          const offsetX = event.clientX - rect.left;
          const offsetY = event.clientY - rect.top;
          setOffset({ x: offsetX, y: offsetY });
          setPosition({ x: rect.left, y: rect.top });
        }
        event.stopPropagation();
      };
    
      const handleMouseMove = (event: MouseEvent) => {
        if (!dragging || !offset) return;
        const dx = event.clientX - offset.x;
        const dy = event.clientY - offset.y;
        setPosition({ x: dx, y: dy });
        event.stopPropagation();
      };



    return(
        <div className="tree__wrap"
            ref={treeRef}
            onMouseDown={handleMouseDown}
            style={{
            position: 'absolute',
            top: position?.y,
            left: position?.x,
            }}
      >
       
       <div className="tree">Categories</div> 
       <button className="tree__btn">+</button>
      </div>
    )
}

export default Tree;