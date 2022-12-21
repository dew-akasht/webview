import 'dart:async';
import 'dart:io';
import 'dart:math';
import 'package:better_player/better_player.dart';
import 'package:better_player/src/configuration/better_player_controller_event.dart';
import 'package:better_player/src/controls/better_player_cupertino_controls.dart';
import 'package:better_player/src/controls/better_player_material_controls.dart';
import 'package:better_player/src/core/better_player_utils.dart';
import 'package:better_player/src/model/control_widget_icons.dart';
import 'package:better_player/src/subtitles/better_player_subtitles_drawer.dart';
import 'package:better_player/src/video_player/video_player.dart';
import 'package:flutter/material.dart';

class BetterPlayerWithControls extends StatefulWidget {
  final BetterPlayerController? controller;
 final int? queuePoint;
  final ControlIcons? controlIcons;

  const BetterPlayerWithControls({Key? key, this.controller,this.queuePoint,this.controlIcons}) : super(key: key);

  @override
  _BetterPlayerWithControlsState createState() =>
      _BetterPlayerWithControlsState();
}

class _BetterPlayerWithControlsState extends State<BetterPlayerWithControls> {
  BetterPlayerSubtitlesConfiguration get subtitlesConfiguration =>
      widget.controller!.betterPlayerConfiguration.subtitlesConfiguration;

  BetterPlayerControlsConfiguration get controlsConfiguration =>
      widget.controller!.betterPlayerControlsConfiguration;

  final StreamController<bool> playerVisibilityStreamController =
      StreamController();

  bool _initialized = false;

  StreamSubscription? _controllerEventSubscription;



  @override
  void initState() {
    playerVisibilityStreamController.add(true);
    _controllerEventSubscription =
        widget.controller!.controllerEventStream.listen(_onControllerChanged);
    super.initState();
  }

  @override
  void didUpdateWidget(BetterPlayerWithControls oldWidget) {
    if (oldWidget.controller != widget.controller) {
      _controllerEventSubscription?.cancel();
      _controllerEventSubscription =
          widget.controller!.controllerEventStream.listen(_onControllerChanged);
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    playerVisibilityStreamController.close();
    _controllerEventSubscription?.cancel();
    super.dispose();
  }

  void _onControllerChanged(BetterPlayerControllerEvent event) {
    setState(() {
      if (!_initialized) {
        _initialized = true;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final BetterPlayerController betterPlayerController =
        BetterPlayerController.of(context);

    double? aspectRatio;
    if (betterPlayerController.isFullScreen) {
      if (betterPlayerController.betterPlayerConfiguration
              .autoDetectFullscreenDeviceOrientation ||
          betterPlayerController
              .betterPlayerConfiguration.autoDetectFullscreenAspectRatio) {
        aspectRatio =
            betterPlayerController.videoPlayerController?.value.aspectRatio ??
                1.0;
      } else {
        aspectRatio = betterPlayerController
                .betterPlayerConfiguration.fullScreenAspectRatio ??
            BetterPlayerUtils.calculateAspectRatio(context);
      }
    } else {
      aspectRatio = betterPlayerController.getAspectRatio();
    }

    aspectRatio ??= 16 / 9;
    final innerContainer = Container(
      width: double.infinity,
      color: betterPlayerController
          .betterPlayerConfiguration.controlsConfiguration.backgroundColor,
      child: AspectRatio(
        aspectRatio: aspectRatio,
        child: _buildPlayerWithControls(betterPlayerController, context),
      ),
    );

    if (betterPlayerController.betterPlayerConfiguration.expandToFill) {
      return Center(child: innerContainer);
    } else {
      return innerContainer;
    }
  }

  Container _buildPlayerWithControls(
      BetterPlayerController betterPlayerController, BuildContext context) {
    final configuration = betterPlayerController.betterPlayerConfiguration;
    var rotation = configuration.rotation;

    if (!(rotation <= 360 && rotation % 90 == 0)) {
      BetterPlayerUtils.log("Invalid rotation provided. Using rotation = 0");
      rotation = 0;
    }
    if (betterPlayerController.betterPlayerDataSource == null) {
      return Container();
    }
    _initialized = true;

    final bool placeholderOnTop =
        betterPlayerController.betterPlayerConfiguration.placeholderOnTop;
    // ignore: avoid_unnecessary_containers
    return Container(
      child: Stack(
        fit: StackFit.passthrough,
        children: <Widget>[
          if (placeholderOnTop) _buildPlaceholder(betterPlayerController),
          Transform.rotate(
            angle: rotation * pi / 180,
            child: _BetterPlayerVideoFitWidget(betterPlayerController,
                betterPlayerController.getFit(), widget.queuePoint),
          ),
          betterPlayerController.betterPlayerConfiguration.overlay ??
              Container(),
          BetterPlayerSubtitlesDrawer(
            betterPlayerController: betterPlayerController,
            betterPlayerSubtitlesConfiguration: subtitlesConfiguration,
            subtitles: betterPlayerController.subtitlesLines,
            playerVisibilityStream: playerVisibilityStreamController.stream,
          ),
          if (!placeholderOnTop) _buildPlaceholder(betterPlayerController),
          _buildControls(context, betterPlayerController),
        ],
      ),
    );
  }

  Widget _buildPlaceholder(BetterPlayerController betterPlayerController) {
    return betterPlayerController.betterPlayerDataSource!.placeholder ??
        betterPlayerController.betterPlayerConfiguration.placeholder ??
        Container();
  }

  Widget _buildControls(
    BuildContext context,
    BetterPlayerController betterPlayerController,
  ) {
    if (controlsConfiguration.showControls) {
      BetterPlayerTheme? playerTheme = controlsConfiguration.playerTheme;
      if (playerTheme == null) {
        if (Platform.isAndroid) {
          playerTheme = BetterPlayerTheme.material;
        } else {
          playerTheme = BetterPlayerTheme.cupertino;
        }
      }

      if (controlsConfiguration.customControlsBuilder != null &&
          playerTheme == BetterPlayerTheme.custom) {
        return controlsConfiguration.customControlsBuilder!(
            betterPlayerController, onControlsVisibilityChanged);
      } else if (playerTheme == BetterPlayerTheme.material) {
        return _buildMaterialControl();
      } else if (playerTheme == BetterPlayerTheme.cupertino) {
        return _buildCupertinoControl();
      }
    }

    return const SizedBox();
  }

  Widget _buildMaterialControl() {
    return BetterPlayerMaterialControls(
      onControlsVisibilityChanged: onControlsVisibilityChanged,
      controlsConfiguration: controlsConfiguration,
      queuePoint: widget.queuePoint,controlIcons: widget.controlIcons,
    );
  }

  Widget _buildCupertinoControl() {
    return BetterPlayerCupertinoControls(
      onControlsVisibilityChanged: onControlsVisibilityChanged,
      controlsConfiguration: controlsConfiguration,
    );
  }

  void onControlsVisibilityChanged(bool state) {
    playerVisibilityStreamController.add(state);
  }
}

///Widget used to set the proper box fit of the video. Default fit is 'fill'.
class _BetterPlayerVideoFitWidget extends StatefulWidget {
  const _BetterPlayerVideoFitWidget(
    this.betterPlayerController,
    this.boxFit,
    this.queuePoint, {
    Key? key,
  }) : super(key: key);

  final BetterPlayerController betterPlayerController;
  final BoxFit boxFit;
  final int? queuePoint;

  @override
  _BetterPlayerVideoFitWidgetState createState() =>
      _BetterPlayerVideoFitWidgetState();
}

class _BetterPlayerVideoFitWidgetState
    extends State<_BetterPlayerVideoFitWidget> {
  VideoPlayerController? get controller =>
      widget.betterPlayerController.videoPlayerController;

  bool _initialized = false;

  VoidCallback? _initializedListener;

  bool _started = false;

  StreamSubscription? _controllerEventSubscription;

  @override
  void initState() {
    super.initState();
    if (!widget.betterPlayerController.betterPlayerConfiguration
        .showPlaceholderUntilPlay) {
      _started = true;
    } else {
      _started = widget.betterPlayerController.hasCurrentDataSourceStarted;
    }

    _initialize();
  }

  @override
  void didUpdateWidget(_BetterPlayerVideoFitWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.betterPlayerController.videoPlayerController != controller) {
      if (_initializedListener != null) {
        oldWidget.betterPlayerController.videoPlayerController!
            .removeListener(_initializedListener!);
      }
      _initialized = false;
      _initialize();
    }
  }

  void _initialize() {
    if (controller?.value.initialized == false) {
      _initializedListener = () {
        if (!mounted) {
          return;
        }

        if (_initialized != controller!.value.initialized) {
          _initialized = controller!.value.initialized;
          setState(() {});
        }
      };
      controller!.addListener(_initializedListener!);
    } else {
      _initialized = true;
    }

    _controllerEventSubscription =
        widget.betterPlayerController.controllerEventStream.listen((event) {
      if (event == BetterPlayerControllerEvent.play) {
        if (!_started) {
          setState(() {
            _started =
                widget.betterPlayerController.hasCurrentDataSourceStarted;
          });
        }
      }
      if (event == BetterPlayerControllerEvent.setupDataSource) {
        setState(() {
          _started = false;
        });
      }
    });
  }

  void modalBottomSheetMenu() async {
    controller?.pause();

    showModalBottomSheet<void>(
        context: context,
        backgroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.only(
              topLeft: Radius.circular(15.0), topRight: Radius.circular(15.0)),
        ),
        builder: (context) {
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              ListTile(
                leading: Icon(Icons.notes),
                trailing: IconButton(
                  icon: Icon(
                    Icons.close,
                    color: Colors.red,
                  ),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                ),
                title: Text('NOTES'),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
              ),
              ListTile(
                leading: Icon(Icons.email),
                title: Text('Send email'),
                onTap: () {
                  print('Send email');
                },
              ),
              ListTile(
                leading: Icon(Icons.phone),
                title: Text('Call phone'),
                onTap: () {
                  print('Call phone');
                },
              ),
            ],
          );
        }).then((value) => controller?.play());
  }

  int? complete;

  @override
  Widget build(BuildContext context) {
    controller?.addListener(() {
      //custom Listner

      // debugPrint('current position in sec - ${controller?.value.position.inSeconds}');
      if (controller?.value.position.inSeconds == widget.queuePoint &&
          complete == null) {
        complete = 10;
        debugPrint('queue point arrived!');
        modalBottomSheetMenu();
      } else if ((controller?.value.position.inSeconds)! <
          (widget.queuePoint ?? 1)) {
        complete = null;
      }
    });

    if (_initialized && _started) {
      return Center(
        child: ClipRect(
          child: Container(
            width: double.infinity,
            height: double.infinity,
            child: FittedBox(
              fit: widget.boxFit,
              child: SizedBox(
                width: controller!.value.size?.width ?? 0,
                height: controller!.value.size?.height ?? 0,
                child: VideoPlayer(controller),
              ),
            ),
          ),
        ),
      );
    } else {
      return const SizedBox();
    }
  }

  @override
  void dispose() {
    if (_initializedListener != null) {
      widget.betterPlayerController.videoPlayerController!
          .removeListener(_initializedListener!);
    }
    _controllerEventSubscription?.cancel();
    super.dispose();
  }
}
