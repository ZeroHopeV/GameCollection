var gdjs;(function(i){class r extends i.RuntimeObject{constructor(e,t){super(e,t);this._xOffset=0;this._yOffset=0;this.opacity=255;this._renderer=new i.TiledSpriteRuntimeObjectRenderer(this,e,t.texture),this._width=0,this._height=0,this.setWidth(t.width),this.setHeight(t.height),this.onCreated()}updateFromObjectData(e,t){return e.texture!==t.texture&&this.setTexture(t.texture,this.getRuntimeScene()),e.width!==t.width&&this.setWidth(t.width),e.height!==t.height&&this.setHeight(t.height),!0}getObjectNetworkSyncData(){return{...super.getObjectNetworkSyncData(),wid:this.getWidth(),hei:this.getHeight(),xo:this.getXOffset(),yo:this.getYOffset(),op:this.getOpacity(),color:this.getColor()}}updateFromObjectNetworkSyncData(e){super.updateFromObjectNetworkSyncData(e),e.wid!==void 0&&this.setWidth(e.wid),e.hei!==void 0&&this.setHeight(e.hei),e.xo!==void 0&&this.setXOffset(e.xo),e.yo!==void 0&&this.setYOffset(e.yo),e.op!==void 0&&this.setOpacity(e.op),e.color!==void 0&&this.setColor(e.color)}getRendererObject(){return this._renderer.getRendererObject()}onDestroyed(){super.onDestroyed(),this._renderer.destroy()}extraInitializationFromInitialInstance(e){e.customSize&&(this.setWidth(e.width),this.setHeight(e.height))}setX(e){super.setX(e),this._renderer.updatePosition()}setY(e){super.setY(e),this._renderer.updatePosition()}setTexture(e,t){this._renderer.setTexture(e,t)}setAngle(e){super.setAngle(e),this._renderer.updateAngle()}getWidth(){return this._width}getHeight(){return this._height}setWidth(e){this._width!==e&&(this._width=e,this._renderer.setWidth(e),this.invalidateHitboxes())}setHeight(e){this._height!==e&&(this._height=e,this._renderer.setHeight(e),this.invalidateHitboxes())}setSize(e,t){this.setWidth(e),this.setHeight(t)}setXOffset(e){this._xOffset=e,this._renderer.updateXOffset()}setYOffset(e){this._yOffset=e,this._renderer.updateYOffset()}getXOffset(){return this._xOffset}getYOffset(){return this._yOffset}setOpacity(e){e<0&&(e=0),e>255&&(e=255),this.opacity=e,this._renderer.updateOpacity()}getOpacity(){return this.opacity}setColor(e){this._renderer.setColor(e)}getColor(){return this._renderer.getColor()}getScale(){const e=Math.abs(this.getScaleX()),t=Math.abs(this.getScaleY());return e===t?e:Math.sqrt(e*t)}getScaleX(){return this._width/this._renderer.getTextureWidth()}getScaleY(){return this._height/this._renderer.getTextureHeight()}setScale(e){this.setWidth(this._renderer.getTextureWidth()*e),this.setHeight(this._renderer.getTextureHeight()*e)}setScaleX(e){this.setWidth(this._renderer.getTextureWidth()*e)}setScaleY(e){this.setHeight(this._renderer.getTextureHeight()*e)}}i.TiledSpriteRuntimeObject=r,i.registerObject("TiledSpriteObject::TiledSprite",i.TiledSpriteRuntimeObject)})(gdjs||(gdjs={}));
//# sourceMappingURL=tiledspriteruntimeobject.js.map
