class Animal {
  late final String name;
  bool _sleepState = false;

  Animal({required this.name, bool sleepState = false}) {  
    _sleepState = sleepState;
  }

  Animal.withNoName() : this(name: 'Unknown');

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
  
