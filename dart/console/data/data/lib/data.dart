class MyException implements Exception {
  final String? msg;
  
  const MyException([this.msg]);

  @override
  String toString() => msg ?? 'My default Exception';

}
