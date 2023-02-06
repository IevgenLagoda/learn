import 'package:oop/alive.dart';

class Animal implements Alive{
  late final String name;
  late bool _sleepState = false;

  Animal({required this.name, bool sleepState = false}) {  
    _sleepState = sleepState;
  }

  Animal.withNoName() : this(name: 'Unknown');

  @override
  String callMeAs() {
    return 'Animal';
  }

  @override
  bool isSleep() {
    return _sleepState;
  }

  void sleep() {
    if (!_sleepState) {
      _sleepState = true;
    }
  }

  void wakeUp() {
    if (_sleepState) {
      _sleepState = false;
    }
  }

  String getName() {
    return 'Animal $name';
  }
}
  
