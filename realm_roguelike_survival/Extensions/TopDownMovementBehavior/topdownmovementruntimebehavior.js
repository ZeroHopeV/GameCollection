var gdjs;(function(l){class u extends l.RuntimeBehavior{constructor(t,e,d){super(t,e,d);this._angle=0;this._xVelocity=0;this._yVelocity=0;this._angularSpeed=0;this._leftKey=!1;this._rightKey=!1;this._upKey=!1;this._downKey=!1;this._leftKeyPressedDuration=0;this._rightKeyPressedDuration=0;this._upKeyPressedDuration=0;this._downKeyPressedDuration=0;this._wasStickUsed=!1;this._stickAngle=0;this._stickForce=0;this._dontClearInputsBetweenFrames=!1;this._wasLeftKeyPressed=!1;this._wasRightKeyPressed=!1;this._wasUpKeyPressed=!1;this._wasDownKeyPressed=!1;this._temporaryPointForTransformations=[0,0];this._topDownMovementHooks=[];this._allowDiagonals=e.allowDiagonals,this._acceleration=e.acceleration,this._deceleration=e.deceleration,this._maxSpeed=e.maxSpeed,this._angularMaxSpeed=e.angularMaxSpeed,this._rotateObject=e.rotateObject,this._angleOffset=e.angleOffset,this._ignoreDefaultControls=e.ignoreDefaultControls,this.setViewpoint(e.viewpoint,e.customIsometryAngle),this._movementAngleOffset=e.movementAngleOffset||0}getNetworkSyncData(){return this._dontClearInputsBetweenFrames=!1,{...super.getNetworkSyncData(),props:{a:this._angle,xv:this._xVelocity,yv:this._yVelocity,as:this._angularSpeed,lk:this._wasLeftKeyPressed,rk:this._wasRightKeyPressed,uk:this._wasUpKeyPressed,dk:this._wasDownKeyPressed,wsu:this._wasStickUsed,sa:this._stickAngle,sf:this._stickForce}}}updateFromNetworkSyncData(t){super.updateFromNetworkSyncData(t);const e=t.props;e.a!==void 0&&(this._angle=e.a),e.xv!==void 0&&(this._xVelocity=e.xv),e.yv!==void 0&&(this._yVelocity=e.yv),e.as!==void 0&&(this._angularSpeed=e.as),e.lk!==void 0&&(this._leftKey=e.lk),e.rk!==void 0&&(this._rightKey=e.rk),e.uk!==void 0&&(this._upKey=e.uk),e.dk!==void 0&&(this._downKey=e.dk),e.wsu!==void 0&&(this._wasStickUsed=e.wsu),e.sa!==void 0&&(this._stickAngle=e.sa),e.sf!==void 0&&(this._stickForce=e.sf),this._dontClearInputsBetweenFrames=!0}updateFromBehaviorData(t,e){return t.allowDiagonals!==e.allowDiagonals&&(this._allowDiagonals=e.allowDiagonals),t.acceleration!==e.acceleration&&(this._acceleration=e.acceleration),t.deceleration!==e.deceleration&&(this._deceleration=e.deceleration),t.maxSpeed!==e.maxSpeed&&(this._maxSpeed=e.maxSpeed),t.angularMaxSpeed!==e.angularMaxSpeed&&(this._angularMaxSpeed=e.angularMaxSpeed),t.rotateObject!==e.rotateObject&&(this._rotateObject=e.rotateObject),t.angleOffset!==e.angleOffset&&(this._angleOffset=e.angleOffset),t.ignoreDefaultControls!==e.ignoreDefaultControls&&(this._ignoreDefaultControls=e.ignoreDefaultControls),(t.platformType!==e.platformType||t.customIsometryAngle!==e.customIsometryAngle)&&this.setViewpoint(e.platformType,e.customIsometryAngle),t.movementAngleOffset!==e.movementAngleOffset&&(this._movementAngleOffset=e.movementAngleOffset),!0}setViewpoint(t,e){t==="PixelIsometry"?this._basisTransformation=new l.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.atan(.5)):t==="TrueIsometry"?this._basisTransformation=new l.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.PI/6):t==="CustomIsometry"?this._basisTransformation=new l.TopDownMovementRuntimeBehavior.IsometryTransformation(e*Math.PI/180):this._basisTransformation=null}setAcceleration(t){this._acceleration=t}getAcceleration(){return this._acceleration}setDeceleration(t){this._deceleration=t}getDeceleration(){return this._deceleration}setMaxSpeed(t){this._maxSpeed=t}getMaxSpeed(){return this._maxSpeed}setAngularMaxSpeed(t){this._angularMaxSpeed=t}getAngularMaxSpeed(){return this._angularMaxSpeed}setAngleOffset(t){this._angleOffset=t}getAngleOffset(){return this._angleOffset}allowDiagonals(t){this._allowDiagonals=t}diagonalsAllowed(){return this._allowDiagonals}setRotateObject(t){this._rotateObject=t}isObjectRotated(){return this._rotateObject}isMoving(){return this._xVelocity!==0||this._yVelocity!==0}getSpeed(){return Math.sqrt(this._xVelocity*this._xVelocity+this._yVelocity*this._yVelocity)}getXVelocity(){return this._xVelocity}setXVelocity(t){this._xVelocity=t}getYVelocity(){return this._yVelocity}setYVelocity(t){this._yVelocity=t}getAngle(){return this._angle}isMovementAngleAround(t,e){return Math.abs(l.evtTools.common.angleDifference(this._angle,t))<=e}setMovementAngleOffset(t){this._movementAngleOffset=t}getMovementAngleOffset(){return this._movementAngleOffset}doStepPreEvents(t){const e=37,d=38,p=39,r=40;this._leftKey||(this._leftKey=!this._ignoreDefaultControls&&t.getGame().getInputManager().isKeyPressed(e)),this._rightKey||(this._rightKey=!this._ignoreDefaultControls&&t.getGame().getInputManager().isKeyPressed(p)),this._downKey||(this._downKey=!this._ignoreDefaultControls&&t.getGame().getInputManager().isKeyPressed(r)),this._upKey||(this._upKey=!this._ignoreDefaultControls&&t.getGame().getInputManager().isKeyPressed(d));const f=this.owner.getElapsedTime();this._leftKey?this._leftKeyPressedDuration+=f:this._leftKeyPressedDuration=0,this._rightKey?this._rightKeyPressedDuration+=f:this._rightKeyPressedDuration=0,this._downKey?this._downKeyPressedDuration+=f:this._downKeyPressedDuration=0,this._upKey?this._upKeyPressedDuration+=f:this._upKeyPressedDuration=0;let s=-1;this._allowDiagonals?this._upKey&&!this._downKey?this._leftKey&&!this._rightKey?s=5:!this._leftKey&&this._rightKey?s=7:s=6:!this._upKey&&this._downKey?this._leftKey&&!this._rightKey?s=3:!this._leftKey&&this._rightKey?s=1:s=2:this._leftKey&&!this._rightKey?s=4:!this._leftKey&&this._rightKey&&(s=0):(this._upKey&&!this._downKey?s=6:!this._upKey&&this._downKey&&(s=2),this._leftKey&&!this._rightKey&&(this._upKey===this._downKey||this._upKey&&this._leftKeyPressedDuration<this._upKeyPressedDuration||this._downKey&&this._leftKeyPressedDuration<this._downKeyPressedDuration)?s=4:this._rightKey&&!this._leftKey&&(this._upKey===this._downKey||this._upKey&&this._rightKeyPressedDuration<this._upKeyPressedDuration||this._downKey&&this._rightKeyPressedDuration<this._downKeyPressedDuration)&&(s=0));const h=l.TopDownMovementRuntimeBehavior._topDownMovementHookContext;for(const i of this._topDownMovementHooks)h._setDirection(s),s=i.overrideDirection(h);h._setDirection(s);for(const i of this._topDownMovementHooks)i.beforeSpeedUpdate(h);const a=this.owner,c=this.owner.getElapsedTime()/1e3,w=this._xVelocity,v=this._yVelocity;this._wasStickUsed=!1;let _=0,y=0,o=1,n=0;if(s!==-1)_=(s+this._movementAngleOffset/45)*Math.PI/4,y=s*45+this._movementAngleOffset,o=Math.cos(_),n=Math.sin(_),(o===-1||o===1)&&(n=0),(n===-1||n===1)&&(o=0),this._xVelocity+=this._acceleration*c*o,this._yVelocity+=this._acceleration*c*n;else if(this._stickForce!==0){this._allowDiagonals||(this._stickAngle=90*Math.floor((this._stickAngle+45)/90)),y=this._stickAngle+this._movementAngleOffset,_=y*Math.PI/180;const i=this._acceleration*c*this._stickForce;o=Math.cos(_),n=Math.sin(_),(o===-1||o===1)&&(n=0),(n===-1||n===1)&&(o=0),this._xVelocity+=i*o,this._yVelocity+=i*n,this._wasStickUsed=!0,this._stickForce=0}else if(this._yVelocity!==0||this._xVelocity!==0){_=Math.atan2(this._yVelocity,this._xVelocity),y=_*180/Math.PI;const i=this._xVelocity>=0,M=this._yVelocity>=0;o=Math.cos(_),n=Math.sin(_),(o===-1||o===1)&&(n=0),(n===-1||n===1)&&(o=0),this._xVelocity-=this._deceleration*c*o,this._yVelocity-=this._deceleration*c*n,this._xVelocity>0!==i&&(this._xVelocity=0),this._yVelocity>0!==M&&(this._yVelocity=0)}this._xVelocity*this._xVelocity+this._yVelocity*this._yVelocity>this._maxSpeed*this._maxSpeed&&(this._xVelocity=this._maxSpeed*o,this._yVelocity=this._maxSpeed*n),this._angularSpeed=this._angularMaxSpeed;for(const i of this._topDownMovementHooks)i.beforePositionUpdate(h);const g=(w+this._xVelocity)/2*c,m=(v+this._yVelocity)/2*c;if(this._basisTransformation===null)a.setX(a.getX()+g),a.setY(a.getY()+m);else{const i=this._temporaryPointForTransformations;i[0]=g,i[1]=m,this._basisTransformation.toScreen(i,i),a.setX(a.getX()+i[0]),a.setY(a.getY()+i[1])}(this._xVelocity!==0||this._yVelocity!==0)&&(this._angle=y,this._rotateObject&&a.rotateTowardAngle(y+this._angleOffset,this._angularSpeed)),this._wasLeftKeyPressed=this._leftKey,this._wasRightKeyPressed=this._rightKey,this._wasUpKeyPressed=this._upKey,this._wasDownKeyPressed=this._downKey,this._dontClearInputsBetweenFrames||(this._leftKey=!1,this._rightKey=!1,this._upKey=!1,this._downKey=!1)}simulateControl(t){t==="Left"?this._leftKey=!0:t==="Right"?this._rightKey=!0:t==="Up"?this._upKey=!0:t==="Down"&&(this._downKey=!0)}ignoreDefaultControls(t){this._ignoreDefaultControls=t}simulateLeftKey(){this._leftKey=!0}simulateRightKey(){this._rightKey=!0}simulateUpKey(){this._upKey=!0}simulateDownKey(){this._downKey=!0}simulateStick(t,e){this._stickAngle=t%360,this._stickForce=Math.max(0,Math.min(1,e))}isUsingControl(t){return t==="Left"?this._leftKeyPressedDuration>0:t==="Right"?this._rightKeyPressedDuration>0:t==="Up"?this._upKeyPressedDuration>0:t==="Down"?this._downKeyPressedDuration>0:t==="Stick"?this._wasStickUsed:!1}getLastStickInputAngle(){return this._stickAngle}registerHook(t){this._topDownMovementHooks.push(t)}}l.TopDownMovementRuntimeBehavior=u,function(d){class K{constructor(){this.direction=-1}getDirection(){return this.direction}_setDirection(r){this.direction=r}}d.TopDownMovementHookContext=K,d._topDownMovementHookContext=new l.TopDownMovementRuntimeBehavior.TopDownMovementHookContext;class e{constructor(r){if(r<=0||r>=Math.PI/4)throw new RangeError("An isometry angle must be in ]0; pi/4] but was: "+r);const f=Math.asin(Math.tan(r)),s=Math.sin(f),h=Math.cos(Math.PI/4),a=h;this._screen=[[h,-a],[s*a,s*h]]}toScreen(r,f){const s=this._screen[0][0]*r[0]+this._screen[0][1]*r[1],h=this._screen[1][0]*r[0]+this._screen[1][1]*r[1];f[0]=s,f[1]=h}}d.IsometryTransformation=e}(u=l.TopDownMovementRuntimeBehavior||(l.TopDownMovementRuntimeBehavior={})),l.registerBehavior("TopDownMovementBehavior::TopDownMovementBehavior",l.TopDownMovementRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=topdownmovementruntimebehavior.js.map
