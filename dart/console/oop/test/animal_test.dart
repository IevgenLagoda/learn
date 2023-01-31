import 'package:oop/animal.dart';
import 'package:test/test.dart';

void main() {
  test('Animal with name', () {
    Animal cat = Animal(name: "Moon");
    expect(cat.runtimeType, Animal);
    expect(cat.isSleep(), false);
    expect(cat.getName(), "Animal Moon");

    cat.sleep();
    expect(cat.isSleep(), true);

    cat.wakeUp();
    expect(cat.isSleep(), false);
  });

  test('Animal with not name', () {
    Animal dog = Animal.withNoName();
    expect(dog.isSleep(), false);
    expect(dog.getName(), "Animal Unknown");
  });
}
