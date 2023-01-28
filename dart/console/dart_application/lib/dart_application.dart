List<String> getUrlParts(String url) {
  final uri = Uri.parse(url);
  return uri.pathSegments;
}
