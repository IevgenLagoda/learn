import 'package:files/files.dart' as files;

void main(List<String> arguments) {
  var data  = files.readFromFile('test.txt');
  print(data);
}
