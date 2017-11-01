function onInstall(evt) {
  onOpen(evt);
}

function onOpen(evt) {
  
  var ui, menu, sheetType, type, preferences, functionsInstalled;
  
  try {
    ui = SpreadsheetApp.getUi();
    context = SpreadsheetApp;
    
    menu = ui.createAddonMenu();
    
    try {
      functionsInstalled = JSON.parse(PropertiesService.getDocumentProperties().getProperty('functionsInstalled'));
    } catch (err) {
      Logger.log(err);
    }
    
    menu.addItem('About GRFN Functions', 'showAbout');
    
    if (!functionsInstalled === true) {
      menu.addSeparator();
      menu.addItem('Install Custom Functions', 'installFunctions');
    }
    
    menu.addToUi();
    
  } catch(err) {
    Logger.log(err);
  }
}

function installFunctions() {
  PropertiesService.getDocumentProperties().setProperty('functionsInstalled', true);  
  onOpen();
}

function showAbout() {
}