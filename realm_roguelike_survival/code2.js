gdjs.testCode = {};
gdjs.testCode.GDNewTextObjects1= [];
gdjs.testCode.GDNewTextObjects2= [];
gdjs.testCode.GDNewText2Objects1= [];
gdjs.testCode.GDNewText2Objects2= [];


gdjs.testCode.eventsList0 = function(runtimeScene) {

};gdjs.testCode.eventsList1 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(3);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(1);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(2);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.testCode.GDNewTextObjects2);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.testCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.testCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.testCode.GDNewTextObjects2[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()));
}
}{for(var i = 0, len = gdjs.testCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.testCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.testCode.GDNewTextObjects2[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()));
}
}}
}
}

}


};gdjs.testCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.testCode.GDNewText2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.testCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.testCode.GDNewText2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()).getChild("power").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("weapon");
}{for(var i = 0, len = gdjs.testCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.testCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.testCode.GDNewText2Objects1[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("" + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()).getChild("level").getAsString()));
}
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(2), "special");
}{for(var i = 0, len = gdjs.testCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.testCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.testCode.GDNewText2Objects1[i].getBehavior("Text").getText() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}
{ //Subevents
gdjs.testCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testCode.GDNewTextObjects1.length = 0;
gdjs.testCode.GDNewTextObjects2.length = 0;
gdjs.testCode.GDNewText2Objects1.length = 0;
gdjs.testCode.GDNewText2Objects2.length = 0;

gdjs.testCode.eventsList2(runtimeScene);

return;

}

gdjs['testCode'] = gdjs.testCode;
