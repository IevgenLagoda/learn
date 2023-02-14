import 'dart:io';

String readFromFile(String filename) {
  try {
    var myFile = File(filename);
    return  myFile.readAsStringSync();
  } on IOException {
    return '';
  }
}

bool wrtieToFile(String filename, String content) {
  try {
    var myFile = File(filename);
    myFile.writeAsStringSync(content);
    return true;
  } on IOException {
    return false;
  }
}
