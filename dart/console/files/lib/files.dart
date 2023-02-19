import 'dart:convert';
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

Map<String, dynamic> readFromJsonFile(String filename) {
  try {
    var myFile = File(filename);
    return  jsonDecode(myFile.readAsStringSync());
  } on IOException {
    return {};
  }
}

bool writeToJsonFile(String filename, Object content) {
  try {
    var myFile = File(filename);
    var encoder = JsonEncoder.withIndent(' ');
    myFile.writeAsStringSync(encoder.convert(content));
    return true;
  } on IOException {
    return false;
  }
}
