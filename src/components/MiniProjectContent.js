import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, {Preview, TouchTransition} from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'; // or any other pipeline
import Target1 from './Target1';
import Target2 from './Target2';
import TargetInactive from './TargetInactive';

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};


// @DragDropContext(HTML5Backend)
@DragDropContext(MultiBackend(HTML5toTouch))
export default class MiniProjectContent extends React.Component {

  constructor() {
    super()
  }


  generatePreview(type, item, style) {
    let itemPreview = item;
    console.log('itemPreview: ', itemPreview)
    console.log('type: ', type)
    console.log('item: ', item)
    console.log('style: ', style)
    Object.assign(style, {backgroundColor: item.color, width: '50px', height: '50px'});
    return <div style={style}>Generated</div>
    // return itemPreview;
  }


  render() {

  return (
    <div className="miniProjectContent">
      <div className="empty"/>
      <div className="dragAround" id="dragAround">
        <Target1 box={'BOXONE'} id={'target1'} backgroundColor={'pink'} width={'50%'} left={'125%'} top={'25%'} title={'Drag me to the pink box'} />
        <TargetInactive id={'target2'} backgroundColor={'orange'} width={'50%'}/>
        <Preview generator={this.generatePreview} />

      </div>

      <div className="dragAround" id="dragAround">
        <Target2 box={'BOXTWO'} id={'target3'} backgroundColor={'lightgreen'} width={'25%'} left={'275%'} top={'25%'} title={'Drag me to the green box'} />
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
