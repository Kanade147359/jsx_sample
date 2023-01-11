app.newProject().items.addComp("myComp", 1920, 1080, 1.0, 15, 29.97).layers.addText("Hello World");

var comp = app.project.items.addComp("myConp", 1920,1080, 1.0,15, 29.97);
comp.layers.addSolid([1, 0, 0], "red flat", 960, 540, 1.0, 15);
