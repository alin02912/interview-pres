gdjs._50Code = {};
gdjs._50Code.GDItem1Objects1= [];
gdjs._50Code.GDItem1Objects2= [];
gdjs._50Code.GDItem2Objects1= [];
gdjs._50Code.GDItem2Objects2= [];
gdjs._50Code.GDItem3Objects1= [];
gdjs._50Code.GDItem3Objects2= [];
gdjs._50Code.GDItem4Objects1= [];
gdjs._50Code.GDItem4Objects2= [];
gdjs._50Code.GDKennyObjects1= [];
gdjs._50Code.GDKennyObjects2= [];
gdjs._50Code.GDCitation1Objects1= [];
gdjs._50Code.GDCitation1Objects2= [];
gdjs._50Code.GDCitation2Objects1= [];
gdjs._50Code.GDCitation2Objects2= [];
gdjs._50Code.GDBackground1Objects1= [];
gdjs._50Code.GDBackground1Objects2= [];
gdjs._50Code.GDBackground2Objects1= [];
gdjs._50Code.GDBackground2Objects2= [];
gdjs._50Code.GDCitation3Objects1= [];
gdjs._50Code.GDCitation3Objects2= [];
gdjs._50Code.GDCitation4Objects1= [];
gdjs._50Code.GDCitation4Objects2= [];

gdjs._50Code.conditionTrue_0 = {val:false};
gdjs._50Code.condition0IsTrue_0 = {val:false};
gdjs._50Code.condition1IsTrue_0 = {val:false};
gdjs._50Code.condition2IsTrue_0 = {val:false};
gdjs._50Code.conditionTrue_1 = {val:false};
gdjs._50Code.condition0IsTrue_1 = {val:false};
gdjs._50Code.condition1IsTrue_1 = {val:false};
gdjs._50Code.condition2IsTrue_1 = {val:false};


gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDKennyObjects1Objects = Hashtable.newFrom({"Kenny": gdjs._50Code.GDKennyObjects1});gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation1Objects1Objects = Hashtable.newFrom({"Citation1": gdjs._50Code.GDCitation1Objects1});gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation2Objects1Objects = Hashtable.newFrom({"Citation2": gdjs._50Code.GDCitation2Objects1});gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation3Objects1Objects = Hashtable.newFrom({"Citation3": gdjs._50Code.GDCitation3Objects1});gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation4Objects1Objects = Hashtable.newFrom({"Citation4": gdjs._50Code.GDCitation4Objects1});gdjs._50Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 600);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 400, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs._50Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs._50Code.GDBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation1"), gdjs._50Code.GDCitation1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation2"), gdjs._50Code.GDCitation2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation3"), gdjs._50Code.GDCitation3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation4"), gdjs._50Code.GDCitation4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs._50Code.GDItem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs._50Code.GDItem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs._50Code.GDItem3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item4"), gdjs._50Code.GDItem4Objects1);
{for(var i = 0, len = gdjs._50Code.GDItem1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem1Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDItem2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem2Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDItem3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem3Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDItem4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem4Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDCitation1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation1Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDCitation2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation2Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDBackground1Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDBackground2Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDCitation3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation3Objects1[i].hide();
}
for(var i = 0, len = gdjs._50Code.GDCitation4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation4Objects1[i].hide();
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs._50Code.GDItem1Objects1);
{for(var i = 0, len = gdjs._50Code.GDItem1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem1Objects1[i].hide(false);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Citation1"), gdjs._50Code.GDCitation1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation2"), gdjs._50Code.GDCitation2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs._50Code.GDItem2Objects1);
{for(var i = 0, len = gdjs._50Code.GDItem2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._50Code.GDCitation1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._50Code.GDCitation2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation2Objects1[i].hide(false);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Citation3"), gdjs._50Code.GDCitation3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation4"), gdjs._50Code.GDCitation4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs._50Code.GDItem3Objects1);
{for(var i = 0, len = gdjs._50Code.GDItem3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._50Code.GDCitation3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._50Code.GDCitation4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation4Objects1[i].hide(false);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num4");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Item4"), gdjs._50Code.GDItem4Objects1);
{for(var i = 0, len = gdjs._50Code.GDItem4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDItem4Objects1[i].hide(false);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs._50Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}if (gdjs._50Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num5");
}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
{gdjs._50Code.conditionTrue_1 = gdjs._50Code.condition1IsTrue_0;
gdjs._50Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8068636);
}
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
gdjs._50Code.GDKennyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDKennyObjects1Objects, 540, 470, "");
}{for(var i = 0, len = gdjs._50Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._50Code.GDKennyObjects1[i].returnVariable(gdjs._50Code.GDKennyObjects1[i].getVariables().get("Exists")).setNumber(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._50Code.GDKennyObjects1);
{for(var i = 0, len = gdjs._50Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._50Code.GDKennyObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs._50Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._50Code.GDKennyObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 0);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._50Code.GDKennyObjects1);
{for(var i = 0, len = gdjs._50Code.GDKennyObjects1.length ;i < len;++i) {
    gdjs._50Code.GDKennyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs._50Code.condition0IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num7");
}if (gdjs._50Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Citation1"), gdjs._50Code.GDCitation1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Citation2"), gdjs._50Code.GDCitation2Objects1);
{for(var i = 0, len = gdjs._50Code.GDCitation1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._50Code.GDCitation2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDCitation2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kenny"), gdjs._50Code.GDKennyObjects1);

gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._50Code.GDKennyObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDKennyObjects1[i].getVariableNumber(gdjs._50Code.GDKennyObjects1[i].getVariables().get("Exists")) == 1 ) {
        gdjs._50Code.condition0IsTrue_0.val = true;
        gdjs._50Code.GDKennyObjects1[k] = gdjs._50Code.GDKennyObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDKennyObjects1.length = k;}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
gdjs._50Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs._50Code.GDBackground2Objects1);
{for(var i = 0, len = gdjs._50Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDBackground2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Citation1"), gdjs._50Code.GDCitation1Objects1);

gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation1Objects1Objects, runtimeScene, true, false);
}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
gdjs._50Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.jstor.org/stable/pdf/jeductechsoci.18.3.75.pdf", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Citation2"), gdjs._50Code.GDCitation2Objects1);

gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation2Objects1Objects, runtimeScene, true, false);
}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
gdjs._50Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://files.eric.ed.gov/fulltext/ED559369.pdf", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Citation3"), gdjs._50Code.GDCitation3Objects1);

gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation3Objects1Objects, runtimeScene, true, false);
}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
gdjs._50Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://elearningindustry.com/top-educational-technology-trends-2020-2021", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Citation4"), gdjs._50Code.GDCitation4Objects1);

gdjs._50Code.condition0IsTrue_0.val = false;
gdjs._50Code.condition1IsTrue_0.val = false;
{
gdjs._50Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50Code.mapOfGDgdjs_46_9550Code_46GDCitation4Objects1Objects, runtimeScene, true, false);
}if ( gdjs._50Code.condition0IsTrue_0.val ) {
{
gdjs._50Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://books.google.com/ngrams/graph?content=educational+video+games&year_start=1960&year_end=2019&corpus=26&smoothing=3#", runtimeScene);
}}

}


{


{
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDItem1Objects1.length = 0;
gdjs._50Code.GDItem1Objects2.length = 0;
gdjs._50Code.GDItem2Objects1.length = 0;
gdjs._50Code.GDItem2Objects2.length = 0;
gdjs._50Code.GDItem3Objects1.length = 0;
gdjs._50Code.GDItem3Objects2.length = 0;
gdjs._50Code.GDItem4Objects1.length = 0;
gdjs._50Code.GDItem4Objects2.length = 0;
gdjs._50Code.GDKennyObjects1.length = 0;
gdjs._50Code.GDKennyObjects2.length = 0;
gdjs._50Code.GDCitation1Objects1.length = 0;
gdjs._50Code.GDCitation1Objects2.length = 0;
gdjs._50Code.GDCitation2Objects1.length = 0;
gdjs._50Code.GDCitation2Objects2.length = 0;
gdjs._50Code.GDBackground1Objects1.length = 0;
gdjs._50Code.GDBackground1Objects2.length = 0;
gdjs._50Code.GDBackground2Objects1.length = 0;
gdjs._50Code.GDBackground2Objects2.length = 0;
gdjs._50Code.GDCitation3Objects1.length = 0;
gdjs._50Code.GDCitation3Objects2.length = 0;
gdjs._50Code.GDCitation4Objects1.length = 0;
gdjs._50Code.GDCitation4Objects2.length = 0;

gdjs._50Code.eventsList0(runtimeScene);
return;

}

gdjs['_50Code'] = gdjs._50Code;
