
if (typeof gdjs.evtsExt__HomingProjectile__LockOnTarget !== "undefined") {
  gdjs.evtsExt__HomingProjectile__LockOnTarget.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__HomingProjectile__LockOnTarget = {};
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1= [];
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects2= [];
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects1= [];
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects2= [];


gdjs.evtsExt__HomingProjectile__LockOnTarget.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ProjectileObject"), gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects1);
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1.length !== 0 ? gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1[0] : null), (gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects1.length !== 0 ? gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects1[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1[i].resetTimer("__HomingProjectile_Lifetime");
}
}}

}


};

gdjs.evtsExt__HomingProjectile__LockOnTarget.func = function(runtimeScene, ProjectileObject, TargetObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ProjectileObject": ProjectileObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"ProjectileObject": gdjs.objectsListsToArray(ProjectileObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
},
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

gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDProjectileObjectObjects2.length = 0;
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__LockOnTarget.GDTargetObjectObjects2.length = 0;

gdjs.evtsExt__HomingProjectile__LockOnTarget.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__HomingProjectile__LockOnTarget.registeredGdjsCallbacks = [];