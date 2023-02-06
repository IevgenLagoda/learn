import 'package:oop/alive.dart';

import './animal.dart';

class Cat extends Animal implements Alive {
  Cat({String name = 'Unknown', bool sleepState = false})
      : super(name: name, sleepState: sleepState);
  
  @override
  String callMeAs() {
    return 'Cat';
  }
  
  @override
  String getName() {
    return '${callMeAs()} $name';
  }
}
