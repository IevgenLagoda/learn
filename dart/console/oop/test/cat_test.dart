import 'package:oop/cat.dart';
import 'package:test/test.dart';

void main() {
  test('cat with name and state', () {
    Cat cat = Cat(name: "Luna", sleepState: true);
    expect(cat.runtimeType, Cat);
    expect(cat.isSleep(), true);
    expect(cat.getName(), "Cat Luna");

    cat.sleep();
    expect(cat.isSleep(), true);

    cat.wakeUp();
    expect(cat.isSleep(), false);
  });

  test('cat with no name or state', () {
    Cat cat = Cat();
    expect(cat.runtimeType, Cat);
    expect(cat.isSleep(), false);
    expect(cat.getName(), "Cat Unknown");

    cat.sleep();
    expect(cat.isSleep(), true);

    cat.wakeUp();
    expect(cat.isSleep(), false);
  });
}