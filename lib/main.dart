import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

final InAppLocalhostServer localhostServer =
    InAppLocalhostServer(documentRoot: 'assets/webview-quiz');

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // start the localhost server
  await localhostServer.start();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('InAppLocalhostServer Example'),
      ),
      body: Container(
          child: Column(children: <Widget>[
        Expanded(
          child: InAppWebView(
            initialUrlRequest:
                URLRequest(url: Uri.parse("http://localhost:8080/index.html")),
            onWebViewCreated: (controller) {},
            onLoadStart: (controller, url) {},
            onLoadStop: (controller, url) {},
          ),
        )
      ])),
    );
  }
}
