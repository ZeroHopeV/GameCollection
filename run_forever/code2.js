gdjs.gameoverCode = {};
gdjs.gameoverCode.GDinstructretryObjects1= [];
gdjs.gameoverCode.GDinstructretryObjects2= [];
gdjs.gameoverCode.GDinstructretryObjects3= [];
gdjs.gameoverCode.GDinstructleaveObjects1= [];
gdjs.gameoverCode.GDinstructleaveObjects2= [];
gdjs.gameoverCode.GDinstructleaveObjects3= [];
gdjs.gameoverCode.GDloadingObjects1= [];
gdjs.gameoverCode.GDloadingObjects2= [];
gdjs.gameoverCode.GDloadingObjects3= [];
gdjs.gameoverCode.GDhighscoreObjects1= [];
gdjs.gameoverCode.GDhighscoreObjects2= [];
gdjs.gameoverCode.GDhighscoreObjects3= [];
gdjs.gameoverCode.GDscoretextObjects1= [];
gdjs.gameoverCode.GDscoretextObjects2= [];
gdjs.gameoverCode.GDscoretextObjects3= [];
gdjs.gameoverCode.GDdifficultyObjects1= [];
gdjs.gameoverCode.GDdifficultyObjects2= [];
gdjs.gameoverCode.GDdifficultyObjects3= [];


gdjs.gameoverCode.asyncCallback9070444 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://10.200.1.163/GameCollection/rf_gamedatahandler/easysave.php", "easyhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback9070444(runtimeScene, asyncObjectsList)));
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


};gdjs.gameoverCode.asyncCallback9073948 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://10.200.1.163/GameCollection/rf_gamedatahandler/normalsave.php", "normalhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback9073948(runtimeScene, asyncObjectsList)));
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


};gdjs.gameoverCode.asyncCallback9077476 = function (runtimeScene, asyncObjectsList) {
}
gdjs.gameoverCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://10.200.1.163/GameCollection/rf_gamedatahandler/hardsave.php", "hardhighscore=" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))), "POST", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.gameoverCode.asyncCallback9077476(runtimeScene, asyncObjectsList)));
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
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gameoverCode.GDdifficultyObjects2);
gdjs.copyArray(gdjs.gameoverCode.GDhighscoreObjects1, gdjs.gameoverCode.GDhighscoreObjects2);

{for(var i = 0, len = gdjs.gameoverCode.GDdifficultyObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifficultyObjects2[i].setString("Difficulty: Easy");
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
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gameoverCode.GDdifficultyObjects2);
gdjs.copyArray(gdjs.gameoverCode.GDhighscoreObjects1, gdjs.gameoverCode.GDhighscoreObjects2);

{for(var i = 0, len = gdjs.gameoverCode.GDdifficultyObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifficultyObjects2[i].setString("Difficulty: Normal");
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
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gameoverCode.GDdifficultyObjects1);
/* Reuse gdjs.gameoverCode.GDhighscoreObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDdifficultyObjects1[i].setString("Difficulty: Hard");
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhighscoreObjects1[i].setString("Highscore: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
{ //Subevents
gdjs.gameoverCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.asyncCallback9079052 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gamescene", false);
}}
gdjs.gameoverCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback9079052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.asyncCallback9080004 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "startmenu", false);
}}
gdjs.gameoverCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameoverCode.asyncCallback9080004(runtimeScene, asyncObjectsList)));
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
gdjs.copyArray(runtimeScene.getObjects("scoretext"), gdjs.gameoverCode.GDscoretextObjects1);
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
}{for(var i = 0, len = gdjs.gameoverCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDscoretextObjects1[i].setString("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
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

gdjs.gameoverCode.GDinstructretryObjects1.length = 0;
gdjs.gameoverCode.GDinstructretryObjects2.length = 0;
gdjs.gameoverCode.GDinstructretryObjects3.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects1.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects2.length = 0;
gdjs.gameoverCode.GDinstructleaveObjects3.length = 0;
gdjs.gameoverCode.GDloadingObjects1.length = 0;
gdjs.gameoverCode.GDloadingObjects2.length = 0;
gdjs.gameoverCode.GDloadingObjects3.length = 0;
gdjs.gameoverCode.GDhighscoreObjects1.length = 0;
gdjs.gameoverCode.GDhighscoreObjects2.length = 0;
gdjs.gameoverCode.GDhighscoreObjects3.length = 0;
gdjs.gameoverCode.GDscoretextObjects1.length = 0;
gdjs.gameoverCode.GDscoretextObjects2.length = 0;
gdjs.gameoverCode.GDscoretextObjects3.length = 0;
gdjs.gameoverCode.GDdifficultyObjects1.length = 0;
gdjs.gameoverCode.GDdifficultyObjects2.length = 0;
gdjs.gameoverCode.GDdifficultyObjects3.length = 0;

gdjs.gameoverCode.eventsList10(runtimeScene);

return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
