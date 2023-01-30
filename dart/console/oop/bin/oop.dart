import 'package:oop/oop.dart' show Animal;

void main(List<String> arguments) {
  Animal animal = Animal(name: "Moon", sleepState: false);
  animal.sleep();
}
