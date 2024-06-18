
if (typeof gdjs.evtsExt__Inventories__CopyToVariableToInventory !== "undefined") {
  gdjs.evtsExt__Inventories__CopyToVariableToInventory.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Inventories__CopyToVariableToInventory = {};


gdjs.evtsExt__Inventories__CopyToVariableToInventory.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("SceneVariable"), runtimeScene.getScene().getVariables().get("_SimpleInventory").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : "")), false);
}
}}

}


};

gdjs.evtsExt__Inventories__CopyToVariableToInventory.func = function(runtimeScene, InventoryName, SceneVariable, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Inventories"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Inventories"),
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
if (argName === "InventoryName") return InventoryName;
if (argName === "SceneVariable") return SceneVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Inventories__CopyToVariableToInventory.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Inventories__CopyToVariableToInventory.registeredGdjsCallbacks = [];