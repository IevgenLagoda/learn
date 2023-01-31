import 'package:oop/animal.dart' show Animal;
import 'package:oop/cat.dart';

void main(List<String> arguments) {
  Animal animal = Animal(name: "Moon", sleepState: false);
  animal.sleep();

  Cat cat = Cat(name: 'Luna', sleepState: true);
  cat.wakeUp();
}
