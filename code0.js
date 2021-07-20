gdjs._49Code = {};
gdjs._49Code.GDItem1Objects1= [];
gdjs._49Code.GDItem1Objects2= [];
gdjs._49Code.GDItem1Objects3= [];
gdjs._49Code.GDItem2Objects1= [];
gdjs._49Code.GDItem2Objects2= [];
gdjs._49Code.GDItem2Objects3= [];
gdjs._49Code.GDItem3Objects1= [];
gdjs._49Code.GDItem3Objects2= [];
gdjs._49Code.GDItem3Objects3= [];
gdjs._49Code.GDItem4Objects1= [];
gdjs._49Code.GDItem4Objects2= [];
gdjs._49Code.GDItem4Objects3= [];
gdjs._49Code.GDKennyObjects1= [];
gdjs._49Code.GDKennyObjects2= [];
gdjs._49Code.GDKennyObjects3= [];
gdjs._49Code.GDProdigyObjects1= [];
gdjs._49Code.GDProdigyObjects2= [];
gdjs._49Code.GDProdigyObjects3= [];
gdjs._49Code.GDDancceObjects1= [];
gdjs._49Code.GDDancceObjects2= [];
gdjs._49Code.GDDancceObjects3= [];
gdjs._49Code.GDBackground1Objects1= [];
gdjs._49Code.GDBackground1Objects2= [];
gdjs._49Code.GDBackground1Objects3= [];
gdjs._49Code.GDBackground2Objects1= [];
gdjs._49Code.GDBackground2Objects2= [];
gdjs._49Code.GDBackground2Objects3= [];
gdjs._49Code.GDBulletObjects1= [];
gdjs._49Code.GDBulletObjects2= [];
gdjs._49Code.GDBulletObjects3= [];
gdjs._49Code.GDColObjects1= [];
gdjs._49Code.GDColObjects2= [];
gdjs._49Code.GDColObjects3= [];
gdjs._49Code.GDCol2Objects1= [];
gdjs._49Code.GDCol2Objects2= [];
gdjs._49Code.GDCol2Objects3= [];
gdjs._49Code.GDCol3Objects1= [];
gdjs._49Code.GDCol3Objects2= [];
gdjs._49Code.GDCol3Objects3= [];
gdjs._49Code.GDCol4Objects1= [];
gdjs._49Code.GDCol4Objects2= [];
gdjs._49Code.GDCol4Objects3= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};
gdjs._49Code.condition2IsTrue_0 = {val:false};
gdjs._49Code.conditionTrue_1 = {val:false};
gdjs._49Code.condition0IsTrue_1 = {val:false};
gdjs._49Code.condition1IsTrue_1 = {val:false};
gdjs._49Code.condition2IsTrue_1 = {val:false};


gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDKennyObjects1Objects = Hashtable.newFrom({"Kenny": gdjs._49Code.GDKennyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._49Code.GDBulletObjects1});gdjs._49Code.eventsList0 = function(runtimeScene) {

{



}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs._49Code.GDBackground2Objects2);
{for(var i = 0, len = gdjs._49Code.GDBackground2Objects2.length ;i < len;++i) {
    gdjs._49Code.GDBackground2Objects2[i].hide(false);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDKennyObjects1 */
gdjs._49Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects, (( gdjs._49Code.GDKennyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDKennyObjects1[0].getPointX("Gun")), (( gdjs._49Code.GDKennyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDKennyObjects1[0].getPointY("Gun")), "");
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 1000, 1);
}
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColObjects1Objects = Hashtable.newFrom({"Col": gdjs._49Code.GDColObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._49Code.GDBulletObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol2Objects1Objects = Hashtable.newFrom({"Col2": gdjs._49Code.GDCol2Objects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._49Code.GDBulletObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol3Objects1Objects = Hashtable.newFrom({"Col3": gdjs._49Code.GDCol3Objects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._49Code.GDBulletObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol4Objects1Objects = Hashtable.newFrom({"Col4": gdjs._49Code.GDCol4Objects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._49Code.GDBulletObjects1});gdjs._49Code.eventsList2 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 600);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 400, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs._49Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs._49Code.GDBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Col"), gdjs._49Code.GDColObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col2"), gdjs._49Code.GDCol2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Col3"), gdjs._49Code.GDCol3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Col4"), gdjs._49Code.GDCol4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dancce"), gdjs._49Code.GDDancceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs._49Code.GDItem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs._49Code.GDItem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs._49Code.GDItem3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item4"), gdjs._49Code.GDItem4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Prodigy"), gdjs._49Code.GDProdigyObjects1);
{for(var i = 0, len = gdjs._49Code.GDItem1Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem1Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDItem2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem2Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDItem3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem3Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDItem4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem4Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDProdigyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDProdigyObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDDancceObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDancceObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs._49Code.GDBackground1Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDBackground2Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDColObjects1.length ;i < len;++i) {
    gdjs._49Code.GDColObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDCol2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol2Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDCol3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol3Objects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDCol4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol4Objects1[i].hide();
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs._49Code.GDItem1Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem1Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem1Objects1[i].hide(false);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs._49Code.GDItem2Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem2Objects1[i].hide(false);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs._49Code.GDItem3Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem3Objects1[i].hide(false);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num4");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item4"), gdjs._49Code.GDItem4Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem4Objects1[i].hide(false);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num5");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7895684);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs._49Code.GDKennyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDKennyObjects1Objects, 540, 470, "");
}{for(var i = 0, len = gdjs._49Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDKennyObjects1[i].returnVariable(gdjs._49Code.GDKennyObjects1[i].getVariables().get("Exists")).setNumber(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._49Code.GDKennyObjects1);
{for(var i = 0, len = gdjs._49Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDKennyObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDKennyObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 0);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._49Code.GDKennyObjects1);
{for(var i = 0, len = gdjs._49Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDKennyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num7");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dancce"), gdjs._49Code.GDDancceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Prodigy"), gdjs._49Code.GDProdigyObjects1);
{for(var i = 0, len = gdjs._49Code.GDProdigyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDProdigyObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._49Code.GDDancceObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDancceObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._49Code.GDKennyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDKennyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDKennyObjects1[i].getVariableNumber(gdjs._49Code.GDKennyObjects1[i].getVariables().get("Exists")) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDKennyObjects1[k] = gdjs._49Code.GDKennyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDKennyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._49Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col"), gdjs._49Code.GDColObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDBulletObjects1 */
/* Reuse gdjs._49Code.GDColObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs._49Code.GDItem1Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem1Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem1Objects1[i].setString("Ouch!");
}
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDColObjects1.length ;i < len;++i) {
    gdjs._49Code.GDColObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._49Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col2"), gdjs._49Code.GDCol2Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol2Objects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDBulletObjects1 */
/* Reuse gdjs._49Code.GDCol2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs._49Code.GDItem2Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem2Objects1[i].setString("Ouch!");
}
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDCol2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._49Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col3"), gdjs._49Code.GDCol3Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol3Objects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDBulletObjects1 */
/* Reuse gdjs._49Code.GDCol3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs._49Code.GDItem3Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem3Objects1[i].setString("Ouch!");
}
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDCol3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._49Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Col4"), gdjs._49Code.GDCol4Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCol4Objects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDBulletObjects1 */
/* Reuse gdjs._49Code.GDCol4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Item4"), gdjs._49Code.GDItem4Objects1);
{for(var i = 0, len = gdjs._49Code.GDItem4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDItem4Objects1[i].setString("Ouch!");
}
}{for(var i = 0, len = gdjs._49Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDCol4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDCol4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDItem1Objects1.length = 0;
gdjs._49Code.GDItem1Objects2.length = 0;
gdjs._49Code.GDItem1Objects3.length = 0;
gdjs._49Code.GDItem2Objects1.length = 0;
gdjs._49Code.GDItem2Objects2.length = 0;
gdjs._49Code.GDItem2Objects3.length = 0;
gdjs._49Code.GDItem3Objects1.length = 0;
gdjs._49Code.GDItem3Objects2.length = 0;
gdjs._49Code.GDItem3Objects3.length = 0;
gdjs._49Code.GDItem4Objects1.length = 0;
gdjs._49Code.GDItem4Objects2.length = 0;
gdjs._49Code.GDItem4Objects3.length = 0;
gdjs._49Code.GDKennyObjects1.length = 0;
gdjs._49Code.GDKennyObjects2.length = 0;
gdjs._49Code.GDKennyObjects3.length = 0;
gdjs._49Code.GDProdigyObjects1.length = 0;
gdjs._49Code.GDProdigyObjects2.length = 0;
gdjs._49Code.GDProdigyObjects3.length = 0;
gdjs._49Code.GDDancceObjects1.length = 0;
gdjs._49Code.GDDancceObjects2.length = 0;
gdjs._49Code.GDDancceObjects3.length = 0;
gdjs._49Code.GDBackground1Objects1.length = 0;
gdjs._49Code.GDBackground1Objects2.length = 0;
gdjs._49Code.GDBackground1Objects3.length = 0;
gdjs._49Code.GDBackground2Objects1.length = 0;
gdjs._49Code.GDBackground2Objects2.length = 0;
gdjs._49Code.GDBackground2Objects3.length = 0;
gdjs._49Code.GDBulletObjects1.length = 0;
gdjs._49Code.GDBulletObjects2.length = 0;
gdjs._49Code.GDBulletObjects3.length = 0;
gdjs._49Code.GDColObjects1.length = 0;
gdjs._49Code.GDColObjects2.length = 0;
gdjs._49Code.GDColObjects3.length = 0;
gdjs._49Code.GDCol2Objects1.length = 0;
gdjs._49Code.GDCol2Objects2.length = 0;
gdjs._49Code.GDCol2Objects3.length = 0;
gdjs._49Code.GDCol3Objects1.length = 0;
gdjs._49Code.GDCol3Objects2.length = 0;
gdjs._49Code.GDCol3Objects3.length = 0;
gdjs._49Code.GDCol4Objects1.length = 0;
gdjs._49Code.GDCol4Objects2.length = 0;
gdjs._49Code.GDCol4Objects3.length = 0;

gdjs._49Code.eventsList2(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;
