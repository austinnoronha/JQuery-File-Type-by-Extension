
#__include_jquery__
#__include_JQuery_File_Type_by_Extension_function__

var setOfFiles = ["TobeloreMix.mdi", "SinfulCloud_MIT_110.pdf", "Sinclair.exe", "MarkRoots_11_dg_sin.tgz", "CollaborativeMix.mpeg", "CalvinHaris.mp3", "ThinkTank.122.v1.docx", "tube mix polls in 2016.avi", "index.html", "script.js"];

$.each(setOfFiles, function(i,el){ console.log( "File", el, ", Type:",getFileTypeByName(el) )})

Output:
File TobeloreMix.mdi , Type: doc
File SinfulCloud_MIT_110.pdf , Type: pdf
File Sinclair.exe , Type: exe
File MarkRoots_11_dg_sin.tgz , Type: zip
File CollaborativeMix.mpeg , Type: video
File CalvinHaris.mp3 , Type: music
File ThinkTank.122.v1.docx , Type: doc
File tube mix polls in 2016.avi , Type: video
File index.html , Type: html
File script.js , Type: code
