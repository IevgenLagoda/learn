import 'package:files/files.dart' as files;

void main(List<String> arguments) {
  Student student1 = Student(name: 'Peter', age: 12, single: true);
  student1.addDescription('worker');
  student1.addAllDescriptions(['Student', 'Learner', 'Stupid']);

  files.writeToJsonFile('students.json', student1);  

  Student student2 = Student.fromJson(files.readFromJsonFile('students.json'));
  print(student2);
}

class Student {
  final String name;
  late int age;
  late bool single;
  List<String> _descriptionList = [];

  Student({
    required this.name,
    required this.age,
    required this.single
  });

  Student.fromJson(Map<String, dynamic> json)
    :name = json['name']{
      age = json['age'];
      single = json['single'];
      _descriptionList = List<String>.from(json['description']);
    }
  

  void addDescription(String description) {
    _descriptionList.add(description);
  }

  void addAllDescriptions(List<String> descriptions) {
    _descriptionList.addAll(descriptions);
  }

  @override
  String toString() {
    var student = 'Student {name: $name, age: $age}, single: $single';
    student += 'description: $_descriptionList}';
    return student;
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'name': name,
      'age': age,
      'single': single,
      'description': _descriptionList
    };
  }
}
