import 'package:files/files.dart' as files;
import 'package:test/test.dart';
import 'dart:io';

void main() {
  String fileName = 'test_file.txt';
  setUp(() {
    var file = File(fileName);
    file.writeAsStringSync('');
  });
  
  test('read from empty file', () {
    expect(files.readFromFile(fileName), '');
  });
  
  test('read from non empty file', () {
    files.wrtieToFile(fileName, 'test');
    expect(files.readFromFile(fileName), 'test');
  });
}
