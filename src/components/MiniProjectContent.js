import React from 'react';
import {Link} from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Target from './Target';
import TargetInactive from './TargetInactive';


@DragDropContext(HTML5Backend)
export default class MiniProjectContent extends React.Component {

  constructor() {
  super()
  }

  render() {

  return (
    <div className="miniProjectContent">
      <div className="empty"/>
      <div className="dragAround" id="dragAround">
        <Target box={'one'} id={'target1'} backgroundColor={'pink'} width={'50%'} left={'125%'} top={'25%'} title={'Drag me to the pink box'} />
        <TargetInactive id={'target2'} backgroundColor={'orange'} width={'50%'}/>
      </div>

      <div className="dragAround" id="dragAround">
        <Target box={'two'} id={'target3'} backgroundColor={'lightgreen'} width={'25%'} left={'275%'} top={'25%'} title={'Drag me to the green box'} />
        <TargetInactive id={'target4'} backgroundColor={'lightblue'} width={'25%'} />
        <TargetInactive id={'target5'} backgroundColor={'lightgrey'} width={'50%'}/>
      </div>
      <div className="empty"/>
      {/* <div className="dragToTarget">
        <Target backgroundColor={'orange'}/>
        <Target backgroundColor={'yellow'}/>
        <Target backgroundColor={'red'}/>
        <Draggable backgroundColor={'purple'}/>
      </div> */}
    </div>
  );
}
}
