gdjs.gameoverCode = {};
gdjs.gameoverCode.GDscoreresultObjects1= [];
gdjs.gameoverCode.GDscoreresultObjects2= [];
gdjs.gameoverCode.GDscoreresultObjects3= [];
gdjs.gameoverCode.GDinstructretryObjects1= [];
gdjs.gameoverCode.GDinstructretryObjects2= [];
gdjs.gameoverCode.GDinstructretryObjects3= [];
gdjs.gameoverCode.GDinstructleaveObjects1= [];
gdjs.gameoverCode.GDinstructleaveObjects2= [];
gdjs.gameoverCode.GDinstructleaveObjects3= [];
gdjs.gameoverCode.GDloadingObjects1= [];
gdjs.gameoverCode.GDloadingObjects2= [];
gdjs.gameoverCode.GDloadingObjects3= [];
gdjs.gameoverCode.GDdifftextObjects1= [];
gdjs.gameoverCode.GDdifftextObjects2= [];
gdjs.gameoverCode.GDdifftextObjects3= [];
gdjs.gameoverCode.GDhighscoreObjects1= [];
gdjs.gameoverCode.GDhighscoreObjects2= [];
gdjs.gameoverCode.GDhighscoreObjects3= [];


gdjs.gameoverCode.asyncCallback10618588 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/aarsoppgave/rf_gamedatahandler/easysave.php", "easyhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback10618588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDhighscoreObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects2[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.asyncCallback10620812 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/aarsoppgave/rf_gamedatahandler/normalsave.php", "normalhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback10620812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber();
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDhighscoreObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects2[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.asyncCallback10623076 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://localhost/im/aarsoppgave/rf_gamedatahandler/hardsave.php", "hardhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback10623076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber();
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDhighscoreObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects1[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("difftext"), gdjs.gameoverCode.GDdifftextObjects2);
gdjs.copyArray(gdjs.gameoverCode.GDhighscoreObjects1, gdjs.gameoverCode.GDhighscoreObjects2);

{for(var i = 0, len = gdjs.gameoverCode.GDdifftextObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifftextObjects2[i].setString("Difficulty: Easy");
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects2[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("difftext"), gdjs.gameoverCode.GDdifftextObjects2);
gdjs.copyArray(gdjs.gameoverCode.GDhighscoreObjects1, gdjs.gameoverCode.GDhighscoreObjects2);

{for(var i = 0, len = gdjs.gameoverCode.GDdifftextObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifftextObjects2[i].setString("Difficulty: Normal");
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects2[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("difftext"), gdjs.gameoverCode.GDdifftextObjects1);
/* Reuse gdjs.gameoverCode.GDhighscoreObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDdifftextObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifftextObjects1[i].setString("Difficulty: Hard");
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects1[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.asyncCallback10625052 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}
gdjs.gameoverCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback10625052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.asyncCallback10626044 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "startmenu", false);
}}
gdjs.gameoverCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameoverCode.asyncCallback10626044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.gameoverCode.GDloadingObjects2);
{for(var i = 0, len = gdjs.gameoverCode.GDloadingObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDloadingObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.gameoverCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDloadingObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highscore"), gdjs.gameoverCode.GDhighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructleave"), gdjs.gameoverCode.GDinstructleaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructretry"), gdjs.gameoverCode.GDinstructretryObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.gameoverCode.GDloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("scoreresult"), gdjs.gameoverCode.GDscoreresultObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDloadingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameoverCode.GDinstructretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDinstructretryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameoverCode.GDinstructleaveObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDinstructleaveObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameoverCode.GDscoreresultObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDscoreresultObjects1[i].setString("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waittime");
}{gdjs.evtTools.sound.playSound(runtimeScene, "audio\\runner_gameover.mp3", false, 20, 1);
}
{ //Subevents
gdjs.gameoverCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waittime") >= 1.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highscore"), gdjs.gameoverCode.GDhighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructleave"), gdjs.gameoverCode.GDinstructleaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructretry"), gdjs.gameoverCode.GDinstructretryObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDinstructretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDinstructretryObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDinstructleaveObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDinstructleaveObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDscoreresultObjects1.length = 0;
gdjs.gameoverCode.GDscoreresultObjects2.length = 0;
gdjs.gameoverCode.GDscoreresultObjects3.length = 0;
gdjs.gameoverCode.GDinstructretryObjects1.length = 0;
gdjs.gameoverCode.GDinstructretryObjects2.length = 0;
gdjs.gameoverCode.GDinstructretryObjects3.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects1.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects2.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects3.length = 0;
gdjs.gameoverCode.GDloadingObjects1.length = 0;
gdjs.gameoverCode.GDloadingObjects2.length = 0;
gdjs.gameoverCode.GDloadingObjects3.length = 0;
gdjs.gameoverCode.GDdifftextObjects1.length = 0;
gdjs.gameoverCode.GDdifftextObjects2.length = 0;
gdjs.gameoverCode.GDdifftextObjects3.length = 0;
gdjs.gameoverCode.GDhighscoreObjects1.length = 0;
gdjs.gameoverCode.GDhighscoreObjects2.length = 0;
gdjs.gameoverCode.GDhighscoreObjects3.length = 0;

gdjs.gameoverCode.eventsList10(runtimeScene);

return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
