import 'package:dart_application/dart_application.dart';
import 'package:test/test.dart';

void main() {
  test('getUrlParts', () {
    const url1 = 'https://support.google.com/accounts/?hl=en#topic=3382296';
    const url2 =
        'https://support.google.com/accounts/answer/27441?hl=en&ref_topic=3382296                                                            ';
    const url3 =
        'https://support.google.com/accounts/thread/190007460/important-before-posting-in-google-account-help-community-pii-guidelines?hl=en';
    const url4 =
        'https://support.google.com/youtube/topic/9257404?hl=en&ref_topic=9257498';
    const url5 = 'https://support.google.com/googleplay/workflow/9813244?hl=en';
    
    expect(getUrlParts(url1), ['accounts', '']);
    expect(getUrlParts(url2), ['accounts','answer', '27441']);
    expect(getUrlParts(url3), ['accounts', 'thread', '190007460', 'important-before-posting-in-google-account-help-community-pii-guidelines']);
    expect(getUrlParts(url4), ['youtube', 'topic', '9257404']);
    expect(getUrlParts(url5), ['googleplay', 'workflow', '9813244']);
  });
}
