import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class MyWeb extends StatefulWidget {
  @override
  _MyWebState createState() => _MyWebState();
}

class _MyWebState extends State<MyWeb> {
  final InAppLocalhostServer localhostServer =
      InAppLocalhostServer(documentRoot: 'assets/webview-quiz');

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    load();
  }

  load() async {
    await localhostServer.start();

    if (Platform.isAndroid) {
      await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
    }
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    localhostServer.close();
  }

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
