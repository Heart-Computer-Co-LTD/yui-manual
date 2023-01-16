/*
 * Copyright (C) 2014 Tenda,Inc.All rights reserved.
*/


/*dojo lesson of json data structure

[Dojo Version 8.30]

[sets]:set values,include lesson;
-[bgSize]:lesson background value;
--[w]:width;
--[h]:height;
-[flickerTime]:The Action flicker of time. -1:none
//wanghaiyang
-[examInterval]: the interval of examination time(minutes).
-[level]: the hard level of examination. 0:easy,1:hard
-[requireLine]: the requirement of examination score.
-[mail]: the mail address of sending report.
-[scormVersion]:the version of SCORM 1-ver1.2;2-ver2004
-[completionMode]:the mode of SCORM completion :0-auto;1-lecture;2-exercise;3-examination
//wanghaiyang
[steps]:step array,include all step;
-[num]:the number of the step
-[totalTime]:step time;
-[img]:background image;
-[x]:bgimage x position,you may not add 0 value;
-[y]:bgimage y position,you may not add 0 value;
-[buttons]:button action array,include current step of all buttons;
--[img]:button image;
--[startTime]:start time,you may not add 0 value;
--[totalTime]:continue time,you may not add -1 value;
--[x]:button x position;
--[y]:button y position;
-[mouseRoutes]:mouseroute array,include current step of all mouseroutes;
--[mouseRoute]:one mouseroute of all notes;
---[images]:all cursor'image for one mouseroute;
---[startTime]:start time,you may not add 0 value;
---[totalTime]:continue time,you may not add -1 value;
---[sx]:Cut the x coordinate of the start position;
---[sy]:Cut the y coordinate of the start position;
---[sWidth]:The width of the image is cut;
---[sHeight]:The height of the image is cut;
---[x]:Place the image on the canvas x coordinate location;
---[y]:Place the image on the canvas y coordinate location;
-[notes]:note array,include current step of all notes;
--[img]:note image;
--[startTime]:start time,you may not add 0 value;
--[totalTime]:continue time,you may not add -1 value;
--[x]:note x position;
--[y]:note y position;
--[layer]:the index of the note layers;
--[showOrHide]:the flag of the note displaying in four modes;
--[hyperLinks]:the hyperlinks of the note;
---[linkUrl]:the url of the hyperlink;
---[linkAreas]:the effective areas of the hyperlink;
----[x]:the x position of the effective areas;
----[y]:the y position of the effective areas;
----[w]:the width of the effective areas;
----[h]:the height of the effective areas;
-[promptBoxes]:promptBox array,include current step of all promptBoxes;
--[img]:promptBox image;
--[imgInfo]:promptBox information image;
--[x]:promptBox x position;
--[y]:promptBox y position;
--[xInfo]:promptBox information x position;
--[yInfo]:promptBox information y position;
--[startTime]:start time,you may not add 0 value;
--[totalTime]:continue time,you may not add -1 value;
--[layer]:the index of the note layers;
--[showOrHide]:the flag of the note displaying in four modes;
--[hyperLinks]:the hyperlinks of the note;
---[linkUrl]:the url of the hyperlink;
---[linkAreas]:the effective areas of the hyperlink;
----[x]:the x position of the effective areas;
----[y]:the y position of the effective areas;
----[w]:the width of the effective areas;
----[h]:the height of the effective areas;
-[videos]:video array,include current step of all videos;
--[src]:video file name;
-[audios]:audio array,include current step of all audios;
--[type]:0-instruction audio，1-question audio;
--[src]:audio file name;
*/
var json_data = '{"info":{"name":"2023-01-16 1741","author":"","strDate":"Monday, &nbsp;January 16,&nbsp;2023","modes":{"mode0":true,"mode1":true,"mode2":true,"mode3":true},"bgSize":{"w":1440,"h":837},"flickerTime":-1,"maxTries":3,"level":0,"requireLine":0,"boolTuckToolBar":false,"boolHasStepAndNote":false},"steps":[{"num":"1","ID":"1","pro":0,"next":1,"bScore":true,"descriptObjcetName":"1.&quot;メールアドレス&quot;エディット&nbsp;ボックスをクリックして下さい","description":"1.&quot;メールアドレス&quot;エディット ボックスをクリックして下さい","note":"","totalTime":1500,"imageBK":[{"x":0,"y":0,"w":1440,"h":797,"totalTime":0,"src":"i0000005.png"}],"mouseActions":[{"x":560,"y":402,"w":320,"h":53,"layer":1,"strokeColor":"#ff0000","next":1,"startTime":0,"showOrHide":[true,true,true,true],"mouseActionName":"Left Click","ctrlKey":false,"shiftKey":false,"img":"6ccad481-f444-497b-976d-dc7f659af7bc.png"}],"notes":[{"x":458,"y":281,"layer":2,"startTime":0,"totalTime":-1,"img":"638094879238440532.png","noteText":"&quot;メールアドレス&quot; ボックスを入力してください。","noteX":478,"noteY":301,"noteWidth":235,"noteHeight":70,"showOrHide":[true,true,false,false]}]},{"num":"2","ID":"2","pro":0,"next":2,"bScore":true,"descriptObjcetName":"2.Controlキーを押したまま、vキーを押して下さい","description":"2.Controlキーを押したまま、vキーを押して下さい","note":"","totalTime":1500,"imageBK":[{"x":0,"y":0,"w":1440,"h":797,"totalTime":0,"src":"i0000038.png"}],"keyActions":[{"x":561,"y":467,"w":82,"h":82,"layer":1,"next":2,"startTime":0,"showOrHide":[true,true,true,true],"keyName":"v","keyCodes":[86],"ctrlKey":true,"shiftKey":false,"altKey":false,"anyKey":false}],"notes":[{"x":-12,"y":-12,"layer":2,"startTime":0,"totalTime":-1,"img":"638094879239378112.png","noteText":"Controlキーを押したまま、vキーを押して下さい","noteX":8,"noteY":8,"noteWidth":235,"noteHeight":70,"showOrHide":[true,true,false,false]}]},{"num":"3","ID":"3","pro":1,"next":3,"bScore":true,"descriptObjcetName":"3.&quot;パスワード&quot;エディット&nbsp;ボックスをクリックして下さい","description":"3.&quot;パスワード&quot;エディット ボックスをクリックして下さい","note":"","totalTime":1500,"imageBK":[{"x":0,"y":0,"w":1440,"h":797,"totalTime":0,"src":"i0000046.png"}],"mouseActions":[{"x":561,"y":467,"w":274,"h":53,"layer":1,"strokeColor":"#ff0000","next":3,"startTime":0,"showOrHide":[true,true,true,true],"mouseActionName":"Left Click","ctrlKey":false,"shiftKey":false,"img":"bed82088-d4f3-4fa4-b251-1bf12cffce5b.png"}],"notes":[{"x":436,"y":346,"layer":2,"startTime":0,"totalTime":-1,"img":"638094879240315549.png","noteText":"&quot;パスワード&quot; を入力してください。","noteX":456,"noteY":366,"noteWidth":235,"noteHeight":70,"showOrHide":[true,true,false,false]}]},{"num":"4","ID":"4","pro":2,"next":4,"bScore":true,"descriptObjcetName":"4.ここをクリックして下さい","description":"4.ここをクリックして下さい","note":"","totalTime":1500,"imageBK":[{"x":0,"y":0,"w":1440,"h":797,"totalTime":0,"src":"i0000051.png"}],"mouseActions":[{"x":683,"y":589,"w":30,"h":20,"layer":1,"strokeColor":"#ff0000","next":4,"startTime":0,"showOrHide":[true,true,true,true],"mouseActionName":"Left Click","ctrlKey":false,"shiftKey":false,"img":"b828e70f-6c3b-4ccc-8900-3d484abcad92.png"}],"notes":[{"x":436,"y":452,"layer":2,"startTime":0,"totalTime":-1,"img":"638094879241253120.png","noteText":"”続ける”をクリックして下さい","noteX":456,"noteY":472,"noteWidth":235,"noteHeight":70,"showOrHide":[true,true,false,false]}]},{"num":"5","ID":"5","pro":3,"next":-1,"bScore":false,"descriptObjcetName":"5.ブランチエンド","description":"5.ブランチエンド","note":"","totalTime":1500,"imageBK":[{"x":0,"y":0,"w":1440,"h":797,"totalTime":0,"src":"i0000059.png"}]}]}';
var lesson_data = JSON.parse(json_data);