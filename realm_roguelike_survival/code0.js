gdjs.startmenuCode = {};
gdjs.startmenuCode.GDmaintextObjects1= [];
gdjs.startmenuCode.GDmaintextObjects2= [];
gdjs.startmenuCode.GDmaintextObjects3= [];
gdjs.startmenuCode.GDstartbuttonObjects1= [];
gdjs.startmenuCode.GDstartbuttonObjects2= [];
gdjs.startmenuCode.GDstartbuttonObjects3= [];
gdjs.startmenuCode.GDversionObjects1= [];
gdjs.startmenuCode.GDversionObjects2= [];
gdjs.startmenuCode.GDversionObjects3= [];
gdjs.startmenuCode.GDscoretextObjects1= [];
gdjs.startmenuCode.GDscoretextObjects2= [];
gdjs.startmenuCode.GDscoretextObjects3= [];
gdjs.startmenuCode.GDhighscoretextObjects1= [];
gdjs.startmenuCode.GDhighscoretextObjects2= [];
gdjs.startmenuCode.GDhighscoretextObjects3= [];
gdjs.startmenuCode.GDNewTextObjects1= [];
gdjs.startmenuCode.GDNewTextObjects2= [];
gdjs.startmenuCode.GDNewTextObjects3= [];


gdjs.startmenuCode.asyncCallback24200708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.startmenuCode.GDNewTextObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()));
}{for(var i = 0, len = gdjs.startmenuCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.startmenuCode.GDNewTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}
gdjs.startmenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://10.200.1.163/GameCollection/rrs_gamedatahandler/preset.php", "", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.startmenuCode.asyncCallback24200708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startmenuCode.asyncCallback24202820 = function (runtimeScene, asyncObjectsList) {
}
gdjs.startmenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://10.200.1.163/GameCollection/rrs_gamedatahandler/save.php", "highscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), "POST", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.startmenuCode.asyncCallback24202820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startmenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.startmenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{ //Subevents
gdjs.startmenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
if (isConditionTrue_0) {
/* Reuse gdjs.startmenuCode.GDhighscoretextObjects1 */
/* Reuse gdjs.startmenuCode.GDscoretextObjects1 */
{for(var i = 0, len = gdjs.startmenuCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDscoretextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.startmenuCode.GDhighscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDhighscoretextObjects1[i].getBehavior("Text").setText("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.startmenuCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDscoretextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.startmenuCode.GDhighscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDhighscoretextObjects1[i].hide(false);
}
}}

}


};gdjs.startmenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highscoretext"), gdjs.startmenuCode.GDhighscoretextObjects1);
gdjs.copyArray(runtimeScene.getObjects("maintext"), gdjs.startmenuCode.GDmaintextObjects1);
gdjs.copyArray(runtimeScene.getObjects("scoretext"), gdjs.startmenuCode.GDscoretextObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.startmenuCode.GDmaintextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDmaintextObjects1[i].setGradient("LINEAR_HORIZONTAL", "0;255;153", "87;255;0", "202;255;177", "0;146;112");
}
}{for(var i = 0, len = gdjs.startmenuCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDscoretextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.startmenuCode.GDhighscoretextObjects1.length ;i < len;++i) {
    gdjs.startmenuCode.GDhighscoretextObjects1[i].hide();
}
}
{ //Subevents
gdjs.startmenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startmenuCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startmenuCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startmenuCode.GDstartbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startmenuCode.GDstartbuttonObjects1[k] = gdjs.startmenuCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startmenuCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}

}


};

gdjs.startmenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startmenuCode.GDmaintextObjects1.length = 0;
gdjs.startmenuCode.GDmaintextObjects2.length = 0;
gdjs.startmenuCode.GDmaintextObjects3.length = 0;
gdjs.startmenuCode.GDstartbuttonObjects1.length = 0;
gdjs.startmenuCode.GDstartbuttonObjects2.length = 0;
gdjs.startmenuCode.GDstartbuttonObjects3.length = 0;
gdjs.startmenuCode.GDversionObjects1.length = 0;
gdjs.startmenuCode.GDversionObjects2.length = 0;
gdjs.startmenuCode.GDversionObjects3.length = 0;
gdjs.startmenuCode.GDscoretextObjects1.length = 0;
gdjs.startmenuCode.GDscoretextObjects2.length = 0;
gdjs.startmenuCode.GDscoretextObjects3.length = 0;
gdjs.startmenuCode.GDhighscoretextObjects1.length = 0;
gdjs.startmenuCode.GDhighscoretextObjects2.length = 0;
gdjs.startmenuCode.GDhighscoretextObjects3.length = 0;
gdjs.startmenuCode.GDNewTextObjects1.length = 0;
gdjs.startmenuCode.GDNewTextObjects2.length = 0;
gdjs.startmenuCode.GDNewTextObjects3.length = 0;

gdjs.startmenuCode.eventsList3(runtimeScene);

return;

}

gdjs['startmenuCode'] = gdjs.startmenuCode;
