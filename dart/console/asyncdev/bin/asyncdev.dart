import 'dart:async';
import 'package:asyncdev/asyncdev.dart' as asyncdev;

void main(List<String> arguments) {
  testTheOrder();
  testAsync();
  testGenerator(5);
  testControllerStream();
}

void testControllerStream() {
  final controller = StreamController<String>();
  controller.stream.listen((event) => print('{$event}'));

  controller.add('Hello');
  controller.add('world');
}

Stream<int> myGenerator(int last) async* {
  for (var i = 0; i <= last; i++) {
    yield i;
  }
}

void testGenerator(int lastValue) async {
  var stream = myGenerator(lastValue);
  stream.listen((event) => print('$event!'));
}

int getData() {
  return 42;
}

Future<void> testAsync() async {
  print('Hello!');
  final data = await getData();
  print(data);
}

Future<void> testTheOrder() async {
    Future(() => print('1 a'));
  Future(() => print('2 a'));

  Future.microtask(() => print('1 b'));
  Future.microtask(() => print('2 b'));

  Future(() => print('3 a'));
  Future.microtask(() => print('3 b'));
}
