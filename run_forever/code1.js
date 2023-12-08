gdjs.gamesceneCode = {};
gdjs.gamesceneCode.GDground_9595enemyObjects1_1final = [];

gdjs.gamesceneCode.GDplayerObjects1_1final = [];

gdjs.gamesceneCode.GDsky_9595enemyObjects1_1final = [];

gdjs.gamesceneCode.GDplayerObjects1= [];
gdjs.gamesceneCode.GDplayerObjects2= [];
gdjs.gamesceneCode.GDplayerObjects3= [];
gdjs.gamesceneCode.GDgroundObjects1= [];
gdjs.gamesceneCode.GDgroundObjects2= [];
gdjs.gamesceneCode.GDgroundObjects3= [];
gdjs.gamesceneCode.GDbackgroundObjects1= [];
gdjs.gamesceneCode.GDbackgroundObjects2= [];
gdjs.gamesceneCode.GDbackgroundObjects3= [];
gdjs.gamesceneCode.GDground_9595enemyObjects1= [];
gdjs.gamesceneCode.GDground_9595enemyObjects2= [];
gdjs.gamesceneCode.GDground_9595enemyObjects3= [];
gdjs.gamesceneCode.GDsky_9595enemyObjects1= [];
gdjs.gamesceneCode.GDsky_9595enemyObjects2= [];
gdjs.gamesceneCode.GDsky_9595enemyObjects3= [];
gdjs.gamesceneCode.GDskyspawnObjects1= [];
gdjs.gamesceneCode.GDskyspawnObjects2= [];
gdjs.gamesceneCode.GDskyspawnObjects3= [];
gdjs.gamesceneCode.GDgroundspawnObjects1= [];
gdjs.gamesceneCode.GDgroundspawnObjects2= [];
gdjs.gamesceneCode.GDgroundspawnObjects3= [];
gdjs.gamesceneCode.GDbossportalObjects1= [];
gdjs.gamesceneCode.GDbossportalObjects2= [];
gdjs.gamesceneCode.GDbossportalObjects3= [];
gdjs.gamesceneCode.GDobstacleObjects1= [];
gdjs.gamesceneCode.GDobstacleObjects2= [];
gdjs.gamesceneCode.GDobstacleObjects3= [];
gdjs.gamesceneCode.GDscoretextObjects1= [];
gdjs.gamesceneCode.GDscoretextObjects2= [];
gdjs.gamesceneCode.GDscoretextObjects3= [];
gdjs.gamesceneCode.GDdifficultyObjects1= [];
gdjs.gamesceneCode.GDdifficultyObjects2= [];
gdjs.gamesceneCode.GDdifficultyObjects3= [];


gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects = Hashtable.newFrom({"skyspawn": gdjs.gamesceneCode.GDskyspawnObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects = Hashtable.newFrom({"sky_enemy": gdjs.gamesceneCode.GDsky_9595enemyObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects = Hashtable.newFrom({"groundspawn": gdjs.gamesceneCode.GDgroundspawnObjects1});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects = Hashtable.newFrom({"ground_enemy": gdjs.gamesceneCode.GDground_9595enemyObjects1});
gdjs.gamesceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("skyspawn"), gdjs.gamesceneCode.GDskyspawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDskyspawnObjects2 */
gdjs.gamesceneCode.GDsky_9595enemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects, (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointX("")), (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDsky_9595enemyObjects2.length ;i < len;++i) {
    gdjs.gamesceneCode.GDsky_9595enemyObjects2[i].addForce(-(355), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("groundspawn"), gdjs.gamesceneCode.GDgroundspawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDgroundspawnObjects1 */
gdjs.gamesceneCode.GDground_9595enemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects, (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointX("")), (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDground_9595enemyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDground_9595enemyObjects1[i].addForce(-(355), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


};gdjs.gamesceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enemypick") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 2));
}
{ //Subevents
gdjs.gamesceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects = Hashtable.newFrom({"skyspawn": gdjs.gamesceneCode.GDskyspawnObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects = Hashtable.newFrom({"sky_enemy": gdjs.gamesceneCode.GDsky_9595enemyObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects = Hashtable.newFrom({"groundspawn": gdjs.gamesceneCode.GDgroundspawnObjects1});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects = Hashtable.newFrom({"ground_enemy": gdjs.gamesceneCode.GDground_9595enemyObjects1});
gdjs.gamesceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("skyspawn"), gdjs.gamesceneCode.GDskyspawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) <= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDskyspawnObjects2 */
gdjs.gamesceneCode.GDsky_9595enemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects, (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointX("")), (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDsky_9595enemyObjects2.length ;i < len;++i) {
    gdjs.gamesceneCode.GDsky_9595enemyObjects2[i].addForce(-(390), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("groundspawn"), gdjs.gamesceneCode.GDgroundspawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 3;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDgroundspawnObjects1 */
gdjs.gamesceneCode.GDground_9595enemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects, (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointX("")), (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDground_9595enemyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDground_9595enemyObjects1[i].addForce(-(390), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


};gdjs.gamesceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enemypick") >= 0.8;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 5));
}
{ //Subevents
gdjs.gamesceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects = Hashtable.newFrom({"skyspawn": gdjs.gamesceneCode.GDskyspawnObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects = Hashtable.newFrom({"sky_enemy": gdjs.gamesceneCode.GDsky_9595enemyObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects = Hashtable.newFrom({"groundspawn": gdjs.gamesceneCode.GDgroundspawnObjects1});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects = Hashtable.newFrom({"ground_enemy": gdjs.gamesceneCode.GDground_9595enemyObjects1});
gdjs.gamesceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("skyspawn"), gdjs.gamesceneCode.GDskyspawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDskyspawnObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDskyspawnObjects2 */
gdjs.gamesceneCode.GDsky_9595enemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects, (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointX("")), (( gdjs.gamesceneCode.GDskyspawnObjects2.length === 0 ) ? 0 :gdjs.gamesceneCode.GDskyspawnObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDsky_9595enemyObjects2.length ;i < len;++i) {
    gdjs.gamesceneCode.GDsky_9595enemyObjects2[i].addForce(-(425), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("groundspawn"), gdjs.gamesceneCode.GDgroundspawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDgroundspawnObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDgroundspawnObjects1 */
gdjs.gamesceneCode.GDground_9595enemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects1Objects, (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointX("")), (( gdjs.gamesceneCode.GDgroundspawnObjects1.length === 0 ) ? 0 :gdjs.gamesceneCode.GDgroundspawnObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gamesceneCode.GDground_9595enemyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDground_9595enemyObjects1[i].addForce(-(425), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}}

}


};gdjs.gamesceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enemypick") >= 0.675;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 3));
}
{ //Subevents
gdjs.gamesceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.gamesceneCode.GDplayerObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects2Objects = Hashtable.newFrom({"ground_enemy": gdjs.gamesceneCode.GDground_9595enemyObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.gamesceneCode.GDplayerObjects2});
gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects = Hashtable.newFrom({"sky_enemy": gdjs.gamesceneCode.GDsky_9595enemyObjects2});
gdjs.gamesceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pointincrease");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemypick");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "audio\\runner_gameactive.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pointincrease") >= 0.75;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scoretext"), gdjs.gamesceneCode.GDscoretextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.gamesceneCode.GDscoretextObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDscoretextObjects1[i].setString("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pointincrease");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gamesceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gamesceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gamesceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.gamesceneCode.GDplayerObjects1[k] = gdjs.gamesceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gamesceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gamesceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.gamesceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gamesceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gamesceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gamesceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gamesceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gamesceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.gamesceneCode.GDplayerObjects1[k] = gdjs.gamesceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gamesceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "audio\\runner_jumpsound.mp3", false, 25, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.gamesceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gamesceneCode.GDdifficultyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.gamesceneCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.gamesceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDbackgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDbackgroundObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDgroundObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDdifficultyObjects1[i].setString("Difficulty: Easy");
}
}
{ //Subevents
gdjs.gamesceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.gamesceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gamesceneCode.GDdifficultyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.gamesceneCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.gamesceneCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDgroundObjects1[i].getXOffset() + (225 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDbackgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDbackgroundObjects1[i].getXOffset() + (225 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDdifficultyObjects1[i].setString("Difficulty: Normal");
}
}
{ //Subevents
gdjs.gamesceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.gamesceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.gamesceneCode.GDdifficultyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.gamesceneCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.gamesceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDbackgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDbackgroundObjects1[i].getXOffset() + (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDgroundObjects1[i].setXOffset(gdjs.gamesceneCode.GDgroundObjects1[i].getXOffset() + (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gamesceneCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.gamesceneCode.GDdifficultyObjects1[i].setString("Difficulty: Hard");
}
}
{ //Subevents
gdjs.gamesceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.gamesceneCode.GDground_9595enemyObjects1.length = 0;

gdjs.gamesceneCode.GDplayerObjects1.length = 0;

gdjs.gamesceneCode.GDsky_9595enemyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gamesceneCode.GDground_9595enemyObjects1_1final.length = 0;
gdjs.gamesceneCode.GDplayerObjects1_1final.length = 0;
gdjs.gamesceneCode.GDsky_9595enemyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ground_enemy"), gdjs.gamesceneCode.GDground_9595enemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gamesceneCode.GDplayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDplayerObjects2Objects, gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDground_95959595enemyObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gamesceneCode.GDground_9595enemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gamesceneCode.GDground_9595enemyObjects1_1final.indexOf(gdjs.gamesceneCode.GDground_9595enemyObjects2[j]) === -1 )
            gdjs.gamesceneCode.GDground_9595enemyObjects1_1final.push(gdjs.gamesceneCode.GDground_9595enemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gamesceneCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gamesceneCode.GDplayerObjects1_1final.indexOf(gdjs.gamesceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.gamesceneCode.GDplayerObjects1_1final.push(gdjs.gamesceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gamesceneCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("sky_enemy"), gdjs.gamesceneCode.GDsky_9595enemyObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDplayerObjects2Objects, gdjs.gamesceneCode.mapOfGDgdjs_9546gamesceneCode_9546GDsky_95959595enemyObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gamesceneCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gamesceneCode.GDplayerObjects1_1final.indexOf(gdjs.gamesceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.gamesceneCode.GDplayerObjects1_1final.push(gdjs.gamesceneCode.GDplayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gamesceneCode.GDsky_9595enemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gamesceneCode.GDsky_9595enemyObjects1_1final.indexOf(gdjs.gamesceneCode.GDsky_9595enemyObjects2[j]) === -1 )
            gdjs.gamesceneCode.GDsky_9595enemyObjects1_1final.push(gdjs.gamesceneCode.GDsky_9595enemyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gamesceneCode.GDground_9595enemyObjects1_1final, gdjs.gamesceneCode.GDground_9595enemyObjects1);
gdjs.copyArray(gdjs.gamesceneCode.GDplayerObjects1_1final, gdjs.gamesceneCode.GDplayerObjects1);
gdjs.copyArray(gdjs.gamesceneCode.GDsky_9595enemyObjects1_1final, gdjs.gamesceneCode.GDsky_9595enemyObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


};

gdjs.gamesceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gamesceneCode.GDplayerObjects1.length = 0;
gdjs.gamesceneCode.GDplayerObjects2.length = 0;
gdjs.gamesceneCode.GDplayerObjects3.length = 0;
gdjs.gamesceneCode.GDgroundObjects1.length = 0;
gdjs.gamesceneCode.GDgroundObjects2.length = 0;
gdjs.gamesceneCode.GDgroundObjects3.length = 0;
gdjs.gamesceneCode.GDbackgroundObjects1.length = 0;
gdjs.gamesceneCode.GDbackgroundObjects2.length = 0;
gdjs.gamesceneCode.GDbackgroundObjects3.length = 0;
gdjs.gamesceneCode.GDground_9595enemyObjects1.length = 0;
gdjs.gamesceneCode.GDground_9595enemyObjects2.length = 0;
gdjs.gamesceneCode.GDground_9595enemyObjects3.length = 0;
gdjs.gamesceneCode.GDsky_9595enemyObjects1.length = 0;
gdjs.gamesceneCode.GDsky_9595enemyObjects2.length = 0;
gdjs.gamesceneCode.GDsky_9595enemyObjects3.length = 0;
gdjs.gamesceneCode.GDskyspawnObjects1.length = 0;
gdjs.gamesceneCode.GDskyspawnObjects2.length = 0;
gdjs.gamesceneCode.GDskyspawnObjects3.length = 0;
gdjs.gamesceneCode.GDgroundspawnObjects1.length = 0;
gdjs.gamesceneCode.GDgroundspawnObjects2.length = 0;
gdjs.gamesceneCode.GDgroundspawnObjects3.length = 0;
gdjs.gamesceneCode.GDbossportalObjects1.length = 0;
gdjs.gamesceneCode.GDbossportalObjects2.length = 0;
gdjs.gamesceneCode.GDbossportalObjects3.length = 0;
gdjs.gamesceneCode.GDobstacleObjects1.length = 0;
gdjs.gamesceneCode.GDobstacleObjects2.length = 0;
gdjs.gamesceneCode.GDobstacleObjects3.length = 0;
gdjs.gamesceneCode.GDscoretextObjects1.length = 0;
gdjs.gamesceneCode.GDscoretextObjects2.length = 0;
gdjs.gamesceneCode.GDscoretextObjects3.length = 0;
gdjs.gamesceneCode.GDdifficultyObjects1.length = 0;
gdjs.gamesceneCode.GDdifficultyObjects2.length = 0;
gdjs.gamesceneCode.GDdifficultyObjects3.length = 0;

gdjs.gamesceneCode.eventsList6(runtimeScene);

return;

}

gdjs['gamesceneCode'] = gdjs.gamesceneCode;
