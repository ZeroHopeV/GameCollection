gdjs.startmenuCode = {};
gdjs.startmenuCode.GDeasybuttonObjects1= [];
gdjs.startmenuCode.GDeasybuttonObjects2= [];
gdjs.startmenuCode.GDeasybuttonObjects3= [];
gdjs.startmenuCode.GDeasybuttonObjects4= [];
gdjs.startmenuCode.GDnormalbuttonObjects1= [];
gdjs.startmenuCode.GDnormalbuttonObjects2= [];
gdjs.startmenuCode.GDnormalbuttonObjects3= [];
gdjs.startmenuCode.GDnormalbuttonObjects4= [];
gdjs.startmenuCode.GDhardbuttonObjects1= [];
gdjs.startmenuCode.GDhardbuttonObjects2= [];
gdjs.startmenuCode.GDhardbuttonObjects3= [];
gdjs.startmenuCode.GDhardbuttonObjects4= [];
gdjs.startmenuCode.GDgametextObjects1= [];
gdjs.startmenuCode.GDgametextObjects2= [];
gdjs.startmenuCode.GDgametextObjects3= [];
gdjs.startmenuCode.GDgametextObjects4= [];
gdjs.startmenuCode.GDinstructObjects1= [];
gdjs.startmenuCode.GDinstructObjects2= [];
gdjs.startmenuCode.GDinstructObjects3= [];
gdjs.startmenuCode.GDinstructObjects4= [];
gdjs.startmenuCode.GDinfoObjects1= [];
gdjs.startmenuCode.GDinfoObjects2= [];
gdjs.startmenuCode.GDinfoObjects3= [];
gdjs.startmenuCode.GDinfoObjects4= [];
gdjs.startmenuCode.GDversionObjects1= [];
gdjs.startmenuCode.GDversionObjects2= [];
gdjs.startmenuCode.GDversionObjects3= [];
gdjs.startmenuCode.GDversionObjects4= [];
gdjs.startmenuCode.GDscoretextObjects1= [];
gdjs.startmenuCode.GDscoretextObjects2= [];
gdjs.startmenuCode.GDscoretextObjects3= [];
gdjs.startmenuCode.GDscoretextObjects4= [];
gdjs.startmenuCode.GDdifficultyObjects1= [];
gdjs.startmenuCode.GDdifficultyObjects2= [];
gdjs.startmenuCode.GDdifficultyObjects3= [];
gdjs.startmenuCode.GDdifficultyObjects4= [];


gdjs.startmenuCode.asyncCallback8963852 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}}
gdjs.startmenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/terminoppgave/rf_gamedatahandler/hardget.php", "", "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.startmenuCode.asyncCallback8963852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startmenuCode.asyncCallback8962260 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()));
}
{ //Subevents
gdjs.startmenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.startmenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/terminoppgave/rf_gamedatahandler/normalget.php", "", "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.startmenuCode.asyncCallback8962260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startmenuCode.asyncCallback8960660 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()));
}
{ //Subevents
gdjs.startmenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.startmenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/terminoppgave/rf_gamedatahandler/easyget.php", "", "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.startmenuCode.asyncCallback8960660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startmenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.startmenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.startmenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.startmenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("easybutton"), gdjs.startmenuCode.GDeasybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startmenuCode.GDeasybuttonObjects1.length;i<l;++i) {
    if ( gdjs.startmenuCode.GDeasybuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startmenuCode.GDeasybuttonObjects1[k] = gdjs.startmenuCode.GDeasybuttonObjects1[i];
        ++k;
    }
}
gdjs.startmenuCode.GDeasybuttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("normalbutton"), gdjs.startmenuCode.GDnormalbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startmenuCode.GDnormalbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startmenuCode.GDnormalbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startmenuCode.GDnormalbuttonObjects1[k] = gdjs.startmenuCode.GDnormalbuttonObjects1[i];
        ++k;
    }
}
gdjs.startmenuCode.GDnormalbuttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hardbutton"), gdjs.startmenuCode.GDhardbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startmenuCode.GDhardbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startmenuCode.GDhardbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startmenuCode.GDhardbuttonObjects1[k] = gdjs.startmenuCode.GDhardbuttonObjects1[i];
        ++k;
    }
}
gdjs.startmenuCode.GDhardbuttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}

}


};

gdjs.startmenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startmenuCode.GDeasybuttonObjects1.length = 0;
gdjs.startmenuCode.GDeasybuttonObjects2.length = 0;
gdjs.startmenuCode.GDeasybuttonObjects3.length = 0;
gdjs.startmenuCode.GDeasybuttonObjects4.length = 0;
gdjs.startmenuCode.GDnormalbuttonObjects1.length = 0;
gdjs.startmenuCode.GDnormalbuttonObjects2.length = 0;
gdjs.startmenuCode.GDnormalbuttonObjects3.length = 0;
gdjs.startmenuCode.GDnormalbuttonObjects4.length = 0;
gdjs.startmenuCode.GDhardbuttonObjects1.length = 0;
gdjs.startmenuCode.GDhardbuttonObjects2.length = 0;
gdjs.startmenuCode.GDhardbuttonObjects3.length = 0;
gdjs.startmenuCode.GDhardbuttonObjects4.length = 0;
gdjs.startmenuCode.GDgametextObjects1.length = 0;
gdjs.startmenuCode.GDgametextObjects2.length = 0;
gdjs.startmenuCode.GDgametextObjects3.length = 0;
gdjs.startmenuCode.GDgametextObjects4.length = 0;
gdjs.startmenuCode.GDinstructObjects1.length = 0;
gdjs.startmenuCode.GDinstructObjects2.length = 0;
gdjs.startmenuCode.GDinstructObjects3.length = 0;
gdjs.startmenuCode.GDinstructObjects4.length = 0;
gdjs.startmenuCode.GDinfoObjects1.length = 0;
gdjs.startmenuCode.GDinfoObjects2.length = 0;
gdjs.startmenuCode.GDinfoObjects3.length = 0;
gdjs.startmenuCode.GDinfoObjects4.length = 0;
gdjs.startmenuCode.GDversionObjects1.length = 0;
gdjs.startmenuCode.GDversionObjects2.length = 0;
gdjs.startmenuCode.GDversionObjects3.length = 0;
gdjs.startmenuCode.GDversionObjects4.length = 0;
gdjs.startmenuCode.GDscoretextObjects1.length = 0;
gdjs.startmenuCode.GDscoretextObjects2.length = 0;
gdjs.startmenuCode.GDscoretextObjects3.length = 0;
gdjs.startmenuCode.GDscoretextObjects4.length = 0;
gdjs.startmenuCode.GDdifficultyObjects1.length = 0;
gdjs.startmenuCode.GDdifficultyObjects2.length = 0;
gdjs.startmenuCode.GDdifficultyObjects3.length = 0;
gdjs.startmenuCode.GDdifficultyObjects4.length = 0;

gdjs.startmenuCode.eventsList4(runtimeScene);

return;

}

gdjs['startmenuCode'] = gdjs.startmenuCode;
