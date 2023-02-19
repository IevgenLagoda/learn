import 'package:files/files.dart' as files;
import 'package:test/test.dart';
import 'dart:io';

void main() {
  final fileName = 'test_file.txt';
  final jsonFileName = 'test_json_file.json';
  
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

  test('supports JSON files', () {
    final testObject = <String, dynamic>{
      'string': 'String',
      'int': 444,
      'bool': true,
      'list': [1,2,3],
      'object': {
        'property-1': 'value-1',
        'property-2': 'value-2',
      }
    };
    files.writeToJsonFile(jsonFileName, testObject);
    expect(files.readFromJsonFile(jsonFileName), testObject);
  });
}
