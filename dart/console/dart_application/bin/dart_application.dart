import 'package:dart_application/dart_application.dart' as dart_application;

void main(List<String> arguments) {
  const url1 = 'https://support.google.com/accounts/?hl=en#topic=3382296';
  const url2 = 'https://support.google.com/accounts/answer/27441?hl=en&ref_topic=3382296                                                            ';
  const url3 = 'https://support.google.com/accounts/thread/190007460/important-before-posting-in-google-account-help-community-pii-guidelines?hl=en';
  const url4 = 'https://support.google.com/youtube/topic/9257404?hl=en&ref_topic=9257498';
  const url5 = 'https://support.google.com/googleplay/workflow/9813244?hl=en';
  
  print('Url1: ${dart_application.getUrlParts(url1)}');
  print('Url2: ${dart_application.getUrlParts(url2)}');
  print('Url3: ${dart_application.getUrlParts(url3)}');
  print('Url4: ${dart_application.getUrlParts(url4)}');
  print('Url5: ${dart_application.getUrlParts(url5)}');
}
