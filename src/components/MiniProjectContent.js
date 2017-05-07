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
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    },
    {
      backend: HTML5Backend
    },
  ]
};


// @DragDropContext(HTML5Backend)
@DragDropContext(MultiBackend(HTML5toTouch))
export default class MiniProjectContent extends React.Component {

  constructor() {
    super();
    this.state = {
      reset: false,
    };
    this.resetFunc = this.resetFunc.bind(this)
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.reset){
      this.setState({
        reset: false
      })
    }
  }

  resetFunc(e) {
    if(!e){
      return this.setState({
        reset: false
      })
    }
    e.preventDefault()
    this.setState ({
      reset: true
    });
  }

  generatePreview(type, item, style) {
    let initHeight = document.getElementById(item.id).offsetHeight;
    let height = initHeight * 0.5;
    let initWidth = document.getElementById(item.id).offsetWidth;
    let width = initWidth * 0.5
    Object.assign(style, {height: height, width: width});

    if (item.id === 'target1'){
      return <div className="previewBox" style={style}>
        <div className="previewContent">
          Moving big box
        </div>
      </div>
    } else if (item.id === 'target3') {
      return <div className="previewBox" style={style}>
        <div className="previewContent">
          Moving smaller box
        </div>
      </div>
    }
  }


  render() {

  return (
    <div className="miniProjectContent">
      <div className="resetBoxContainer" onClick={this.resetFunc}>
        <div className="resetBox">
          <div className="resetBoxText">Reset</div>
        </div>
      </div>
      <div className="empty"/>
      <div className="dragAround" id="dragAround">
        <Target1 resetFunc={this.resetFunc} reset={this.state.reset} resetLeft={'125%'} resetTop={'25%'} resetTitle={'Drag me to the pink box'} box={'BOXONE'} id={'target1'} backgroundColor={'pink'} width={'50%'} left={'125%'} top={'25%'} title={'Drag me to the pink box'} />
          <TargetInactive id={'target2'} backgroundColor={'orange'} width={'50%'}/>
          <Preview generator={this.generatePreview} />
        </div>

          <div className="dragAround" id="dragAround">
            <Target2 resetFunc={this.resetFunc} reset={this.state.reset} resetLeft={'275%'} resetTop={'25%'} resetTitle={'Drag me to the green box'} box={'BOXTWO'} id={'target3'} backgroundColor={'lightgreen'} width={'25%'} left={'275%'} top={'25%'} title={'Drag me to the green box'} />
              <TargetInactive id={'target4'} backgroundColor={'lightblue'} width={'25%'} />
              <TargetInactive id={'target5'} backgroundColor={'lightgrey'} width={'50%'}/>
              <Preview generator={this.generatePreview} />
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
