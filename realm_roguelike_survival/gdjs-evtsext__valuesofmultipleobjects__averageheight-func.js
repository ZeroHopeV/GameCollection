
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight = {};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects4= [];


gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalHeight").add((( gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects3[0].getHeight()));
}{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").add(1);
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalHeight").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects1);

for (gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) == 0;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) != 0;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalHeight")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ValuesOfMultipleObjects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ValuesOfMultipleObjects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageHeight.registeredGdjsCallbacks = [];