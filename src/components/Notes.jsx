import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';


function Notes(prop){

    function handleClick(){
        prop.onDelete(prop.id);
    }

    return <div className="note" key={prop.id}>
              <h1>{prop.title}</h1>
              <p>{prop.content}</p>
              <Zoom in={true}>

              <Fab onClick={handleClick}>
                  <DeleteIcon />
              </Fab>
              </Zoom>
           </div> 
};

export default Notes;