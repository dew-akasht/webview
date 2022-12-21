import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:untitled/testing.dart';

final InAppLocalhostServer localhostServer =
    InAppLocalhostServer(documentRoot: 'assets/webview-quiz');

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();


  runApp(MaterialApp(home: MyWeb()));
}

