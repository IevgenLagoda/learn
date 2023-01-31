import './animal.dart';

class Cat extends Animal {
  Cat({String name = 'Unknown', bool sleepState = false})
      : super(name: name, sleepState: sleepState);

  @override
  String getName() {
    return 'Cat $name';
  }
}
