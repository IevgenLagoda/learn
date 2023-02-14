import 'package:data/data.dart' as data;
enum State {
  none, open, close, lock
}
void main(List<String> arguments) {
  int a = 0;
  int b = 0;
  int result = 0;
  try {
    if (b == 0) {
      throw data.MyException();
    }
    result = a ~/ b;
  } on UnsupportedError {
    print('Ooops!');    
  } on ArgumentError catch(e) {
    print('Error in argument!');
    print(e);
  } on data.MyException catch(e){
    print(e);
  }
}
