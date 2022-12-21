import 'dart:async';
import 'package:better_player/better_player.dart';
import 'package:better_player/src/video_player/video_player.dart';
import 'package:better_player/src/video_player/video_player_platform_interface.dart';
import 'package:flutter/material.dart';

import '../core/better_player_utils.dart';

class BetterPlayerMaterialVideoProgressBar extends StatefulWidget {
  BetterPlayerMaterialVideoProgressBar(
    this.controller,
    this.betterPlayerController, {
    BetterPlayerProgressColors? colors,
    this.onDragEnd,
    this.onDragStart,
    this.onDragUpdate,
    this.onTapDown,
    this.queuePoint,
    required this.controlsConfiguration,
    Key? key,
  })  : colors = colors ?? BetterPlayerProgressColors(),
        super(key: key);

  final VideoPlayerController? controller;
  final BetterPlayerController? betterPlayerController;
  final BetterPlayerProgressColors colors;
  final Function()? onDragStart;
  final Function()? onDragEnd;
  final Function()? onDragUpdate;
  final Function()? onTapDown;
  final BetterPlayerControlsConfiguration controlsConfiguration;
  final int? queuePoint;

  @override
  _VideoProgressBarState createState() {
    return _VideoProgressBarState();
  }
}

class _VideoProgressBarState
    extends State<BetterPlayerMaterialVideoProgressBar> {
  _VideoProgressBarState() {
    listener = () {
      if (mounted) setState(() {});
    };
  }

  late VoidCallback listener;
  bool _controllerWasPlaying = false;

  VideoPlayerController? get controller => widget.controller;

  BetterPlayerController? get betterPlayerController =>
      widget.betterPlayerController;

  BetterPlayerControlsConfiguration get _controlsConfiguration =>
      widget.controlsConfiguration;

  bool shouldPlayAfterDragEnd = false;
  Duration? lastSeek;
  Timer? _updateBlockTimer;

  @override
  void initState() {
    super.initState();
    controller!.addListener(listener);
  }

  @override
  void deactivate() {
    controller!.removeListener(listener);
    _cancelUpdateBlockTimer();
    super.deactivate();
  }


  bool get isMobile => MediaQuery.of(context).size.width < 650;

  @override
  Widget build(BuildContext context) {
    final bool enableProgressBarDrag = betterPlayerController!
        .betterPlayerConfiguration.controlsConfiguration.enableProgressBarDrag;

    return GestureDetector(
      onHorizontalDragStart: (DragStartDetails details) {
        if (!controller!.value.initialized || !enableProgressBarDrag) {
          return;
        }

        _controllerWasPlaying = controller!.value.isPlaying;
        if (_controllerWasPlaying) {
          controller!.pause();
        }

        if (widget.onDragStart != null) {
          widget.onDragStart!();
        }
      },
      onHorizontalDragUpdate: (DragUpdateDetails details) {
        if (!controller!.value.initialized || !enableProgressBarDrag) {
          return;
        }

        seekToRelativePosition(details.globalPosition);

        if (widget.onDragUpdate != null) {
          widget.onDragUpdate!();
        }
      },
      onHorizontalDragEnd: (DragEndDetails details) {
        if (!enableProgressBarDrag) {
          return;
        }

        if (_controllerWasPlaying) {
          betterPlayerController?.play();
          shouldPlayAfterDragEnd = true;
        }
        _setupUpdateBlockTimer();

        if (widget.onDragEnd != null) {
          widget.onDragEnd!();
        }
      },
      onTapDown: (TapDownDetails details) {
        if (!controller!.value.initialized || !enableProgressBarDrag) {
          return;
        }
        seekToRelativePosition(details.globalPosition);
        _setupUpdateBlockTimer();
        if (widget.onTapDown != null) {
          widget.onTapDown!();
        }
      },
      child: Center(
        child: Row(
          children: [
            RichText(
              text: TextSpan(
                text:
                    '${BetterPlayerUtils.formatDuration(_getValue().position)}  ',
                style: TextStyle(
                    color: _controlsConfiguration.textColor,
                    decoration: TextDecoration.none,
                    fontSize: 14.0,
                    fontWeight: FontWeight.bold),
              ),
            ),
            new Spacer(),
            isMobile?   Container(
              height: MediaQuery.of(context).size.height / 2,
              width: betterPlayerController!.isFullScreen
                  ? MediaQuery.of(context).size.width / 1.2
                  : MediaQuery.of(context).size.width / 1.5,
              color: Colors.transparent,
              child: CustomPaint(
                painter: _ProgressBarPainter(
                    _getValue(), widget.colors, widget.queuePoint),
              ),
            ):
            Container(
              height: MediaQuery.of(context).size.height / 2,
              width: betterPlayerController!.isFullScreen
                  ? MediaQuery.of(context).size.width / 1.2
                  : MediaQuery.of(context).size.width / 1.2,
              color: Colors.transparent,
              child: CustomPaint(
                painter: _ProgressBarPainter(
                    _getValue(), widget.colors, widget.queuePoint),
              ),
            )
            ,
            new Spacer(),
            RichText(
                text: TextSpan(
              text:
                  '  ${BetterPlayerUtils.formatDuration(_getValue().duration ?? Duration())}',
              style: TextStyle(
                  color: _controlsConfiguration.textColor,
                  decoration: TextDecoration.none,
                  fontSize: 14.0,
                  fontWeight: FontWeight.bold),
            )),
          ],
        ),
      ),
    );
  }

  void _setupUpdateBlockTimer() {
    _updateBlockTimer = Timer(const Duration(milliseconds: 1000), () {
      lastSeek = null;
      _cancelUpdateBlockTimer();
    });
  }

  void _cancelUpdateBlockTimer() {
    _updateBlockTimer?.cancel();
    _updateBlockTimer = null;
  }

  VideoPlayerValue _getValue() {
    if (lastSeek != null) {
      return controller!.value.copyWith(position: lastSeek);
    } else {
      return controller!.value;
    }
  }

  void seekToRelativePosition(Offset globalPosition) async {
    final RenderObject? renderObject = context.findRenderObject();
    if (renderObject != null) {
      final box = renderObject as RenderBox;
      final Offset tapPos = box.globalToLocal(globalPosition);
      final double relative = tapPos.dx / box.size.width;
      if (relative > 0) {
        final Duration position = controller!.value.duration! * relative;
        lastSeek = position;
        await betterPlayerController!.seekTo(position);
        onFinishedLastSeek();
        if (relative >= 1) {
          lastSeek = controller!.value.duration;
          await betterPlayerController!.seekTo(controller!.value.duration!);
          onFinishedLastSeek();
        }
      }
    }
  }

  void onFinishedLastSeek() {
    if (shouldPlayAfterDragEnd) {
      shouldPlayAfterDragEnd = false;
      betterPlayerController?.play();
    }
  }
}

class _ProgressBarPainter extends CustomPainter {
  _ProgressBarPainter(this.value, this.colors, this.quePoint);

  VideoPlayerValue value;
  BetterPlayerProgressColors colors;
  int? quePoint;

  @override
  bool shouldRepaint(CustomPainter painter) {
    return true;
  }

  @override
  void paint(Canvas canvas, Size size) {
    const height = 4.0;
    const heightForCircle = 2.5;

    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromPoints(
          Offset(0.0, size.height / 2),
          Offset(size.width, size.height / 2 + height),
        ),
        const Radius.circular(4.0),
      ),
      colors.backgroundPaint,
    );
    if (!value.initialized) {
      return;
    }
    double playedPartPercent =
        value.position.inMilliseconds / value.duration!.inMilliseconds;
    if (playedPartPercent.isNaN) {
      playedPartPercent = 0;
    }
    final double playedPart =
        playedPartPercent > 1 ? size.width : playedPartPercent * size.width;
    for (final DurationRange range in value.buffered) {
      double start = range.startFraction(value.duration!) * size.width;
      if (start.isNaN) {
        start = 0;
      }
      double end = range.endFraction(value.duration!) * size.width;
      if (end.isNaN) {
        end = 0;
      }
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromPoints(
            Offset(start, size.height / 2),
            Offset(end, size.height / 2 + height),
          ),
          const Radius.circular(4.0),
        ),
        colors.bufferedPaint,
      );
    }

    canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromPoints(
            Offset(0.0, size.height / 2),
            Offset(playedPart, size.height / 2 + height),
          ),
          const Radius.circular(4.0),
        ),
        // colors.playedPaint,
        //  add a custom paint
        Paint()..color = Color(0xFF1AAFFA));

    canvas.drawCircle(
        Offset(playedPart, size.height / 2 + heightForCircle / 2),
        heightForCircle * 3,
        // colors.handlePaint,
        //   add a custom paint
        Paint()..color = Color(0xFF1AAFFA));

    //set queue point on 22 sec

    if (quePoint != null) {
      print('quePoint ==== $quePoint');

      double setCircle =
          int.parse('${quePoint.toString()}') / value.duration!.inSeconds;

      print('setCircle ==== $setCircle');

      Paint paint = Paint()..color = Colors.yellow.shade100;

      canvas.drawCircle(
        //offset
        Offset(setCircle * size.width, size.height / 2 + height / 2),
        //radius
        height * 0.7,
        //paint
        paint,
      );
    }
  }
}