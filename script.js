(function(){
    var script = {
 "layout": "absolute",
 "start": "this.playAudioList([this.audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92"
 ],
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_t.jpg"
  }
 ],
 "label": "WILLIAN (21)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D602556_5F2A_22F4_41C2_08BD1DF69808",
  "this.overlay_7D247408_5F2A_225C_41D4_697CCB4467FC",
  "this.overlay_7D0BC13F_5F2A_62B4_41D6_982A260787C1"
 ],
 "id": "panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.25,
   "yaw": 140.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8"
  },
  {
   "backwardYaw": 165.07,
   "yaw": -0.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3"
  },
  {
   "backwardYaw": 171.61,
   "yaw": -50.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -148.7,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6242D01A_704B_1621_41DB_5A2EEA9EF98B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -139.59,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_608F7ECF_704B_0A3E_41D3_88307C69CCC9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.71,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FEB7D8B_704B_0E27_41C0_E9EA2AF0DB67",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.2,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60211E76_704B_0AE1_41CB_2FDDC8CC062F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_t.jpg"
  }
 ],
 "label": "WILLIAN (19)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D65FA7E_5F2A_66B4_41D6_A1649BA04222"
 ],
 "id": "panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -48.07,
   "yaw": -172.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.02,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62B0BBBE_704B_0A61_41B0_E9C596242728",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.02,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60EEBEB3_704B_0A67_41A8_1922D410DF3A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.89,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FC69D6C_704B_0EE2_41A8_40BFE2FDC277",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_t.jpg"
  }
 ],
 "label": "WILLIAN (36)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7DFFD9_5F36_3DFC_41C1_8CF6329BC637",
  "this.overlay_7D25EE2D_5F36_1E54_41D6_91A63FFC410A"
 ],
 "id": "panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -105.34,
   "yaw": 85.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_t.jpg"
  }
 ],
 "label": "WILLIAN (11)",
 "hfov": 360,
 "overlays": [
  "this.overlay_478CCBA4_5F75_E655_41D3_52819D4FA138",
  "this.overlay_47A471EE_5F76_25D5_41BA_054C8EB88E14",
  "this.overlay_7B32B6AF_62E8_6895_41CB_75DD147DD990"
 ],
 "id": "panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.31,
   "yaw": -95.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697"
  },
  {
   "backwardYaw": -51.29,
   "yaw": 152.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.06,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_616ADF23_704B_0A66_41C2_6AD01995D240",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.69,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F2CDD37_704B_0E6E_41C8_3A37F5AE1D0E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_t.jpg"
  }
 ],
 "label": "WILLIAN (12)",
 "hfov": 360,
 "overlays": [
  "this.overlay_472886FE_5F76_2FB5_41C5_76ECA8344FDA",
  "this.overlay_47F44750_5F76_6ECC_41CC_687E0A78AF98",
  "this.overlay_47D6F838_5F76_E2BD_41C8_61EDEE1E6AE6"
 ],
 "id": "panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.03,
   "yaw": 57.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC"
  },
  {
   "backwardYaw": -160.1,
   "yaw": 156.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_t.jpg"
  }
 ],
 "label": "WILLIAN (26)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D604F2D_5F35_FE54_41C3_9CEE0F54598D",
  "this.overlay_7D29711C_5F36_2275_41B5_AA9E041B56F2",
  "this.overlay_7EBE4F79_62E8_D87A_41B3_375C04B5B43C"
 ],
 "id": "panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B"
  },
  {
   "backwardYaw": -84.07,
   "yaw": 100.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_t.jpg"
  }
 ],
 "label": "WILLIAN (47)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7D6CC5_5F3A_23D7_41BB_D4DAF74523F1",
  "this.overlay_7D27BD2A_5F3A_225C_41D4_F90A416CA162"
 ],
 "id": "panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.02,
   "yaw": -1.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E"
  },
  {
   "backwardYaw": -3.48,
   "yaw": -111.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_t.jpg"
  }
 ],
 "label": "WILLIAN (6)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4C8B130C_5F55_E654_4191_F9FD0E82BDF4",
  "this.overlay_4CBFDE38_5F6A_1EBC_41A2_4074F0D01BDC",
  "this.overlay_4B55BE43_5F6A_3ED3_41D1_1450D55B8EA7",
  "this.overlay_46315EA9_629B_F89D_41C4_7CEAD9986486"
 ],
 "id": "panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_t.jpg"
  }
 ],
 "label": "WILLIAN (39)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D605A67_5F36_26D3_41D2_E6FF70E1148C",
  "this.overlay_7D3EBCCF_5F36_23D3_41C5_DAEF62D0B345",
  "this.overlay_7F586532_62F8_698E_41CE_CBFACCA28DE2"
 ],
 "id": "panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_t.jpg"
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_t.jpg"
  }
 ],
 "label": "WILLIAN (42)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D664834_5F3A_22B4_41D5_18C1CADFC085"
 ],
 "id": "panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -32.52,
   "yaw": -166.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.14,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 9.18
 },
 "id": "camera_60678E38_704B_0A62_41BC_1E7853E167B2",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_t.jpg"
  }
 ],
 "label": "WILLIAN (16)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D49237C_5F2A_66B4_41D1_A53B00C436DF",
  "this.overlay_435D8848_62E8_A79A_41C0_5A067B7365A9"
 ],
 "id": "panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29"
  },
  {
   "backwardYaw": 111.48,
   "yaw": -54.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_t.jpg"
  }
 ],
 "label": "WILLIAN (53)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7EAA7CC1_5F3A_63CC_41BE_ED4371488C38"
 ],
 "id": "panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -55.02,
   "yaw": 174.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_t.jpg"
  }
 ],
 "label": "WILLIAN (31)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D627AAA_5F36_665D_41CB_14E3DE39321F"
 ],
 "id": "panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.25,
   "yaw": -159.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_t.jpg"
  }
 ],
 "label": "WILLIAN (27)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D63BB77_5F36_26B4_41D5_E587940447CC",
  "this.overlay_7D3F097C_5F36_62B4_41C3_BFC2C48AB58B",
  "this.overlay_7E3AB092_62E7_A88E_41D5_46C837B07965"
 ],
 "id": "panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9"
  },
  {
   "backwardYaw": 171.2,
   "yaw": 31.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6"
  },
  {
   "backwardYaw": 172.02,
   "yaw": -17.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_t.jpg"
  }
 ],
 "label": "WILLIAN (34)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D62E536_5F36_62B5_41D3_FFA555AA8561"
 ],
 "id": "panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.66,
   "yaw": 167.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_t.jpg"
  }
 ],
 "label": "WILLIAN (2)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4C81EFC9_5F56_3DDF_41CB_ED06CDE9BDE0",
  "this.overlay_4B7D34AF_5F56_2253_41D5_CDAD0DC1512E"
 ],
 "id": "panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -159.29,
   "yaw": 9.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC"
  },
  {
   "backwardYaw": 82.08,
   "yaw": -67.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61B22FFB_704B_09E7_41D8_A8BA7EF70EE7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 124.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61838FC8_704B_0A21_41D2_7A163DA54BD9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.75,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62C67B56_704B_0A2E_41C0_87253375A02D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "camera": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_camera",
   "media": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_camera",
   "media": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_camera",
   "media": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_camera",
   "media": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_camera",
   "media": "this.panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_camera",
   "media": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_camera",
   "media": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_camera",
   "media": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104_camera",
   "media": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_camera",
   "media": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_camera",
   "media": "this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_camera",
   "media": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_camera",
   "media": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_camera",
   "media": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_camera",
   "media": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_camera",
   "media": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_camera",
   "media": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_camera",
   "media": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_camera",
   "media": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_camera",
   "media": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_camera",
   "media": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_camera",
   "media": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_camera",
   "media": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_camera",
   "media": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_camera",
   "media": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_camera",
   "media": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_camera",
   "media": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_camera",
   "media": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_camera",
   "media": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_camera",
   "media": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_camera",
   "media": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_camera",
   "media": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_camera",
   "media": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_camera",
   "media": "this.panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_camera",
   "media": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_camera",
   "media": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_camera",
   "media": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_camera",
   "media": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_camera",
   "media": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_camera",
   "media": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_camera",
   "media": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_camera",
   "media": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_camera",
   "media": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_camera",
   "media": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_camera",
   "media": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781_camera",
   "media": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_camera",
   "media": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_camera",
   "media": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FB37E03_704B_0A26_41BB_820BB2855ED7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_t.jpg"
  }
 ],
 "label": "WILLIAN (43)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D62824B_5F3A_66DC_41D0_5F2E78684849"
 ],
 "id": "panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.25,
   "yaw": 171.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_t.jpg"
  }
 ],
 "label": "WILLIAN (32)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7F076D_5F36_2ED4_41A8_D6FD17FC9BF6",
  "this.overlay_7D26971A_5F36_2E7C_41C5_8F8C03BF3A58",
  "this.overlay_7F80724D_62F8_6B9A_41CB_CC50A9F68654"
 ],
 "id": "panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  },
  {
   "backwardYaw": 85.3,
   "yaw": -105.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_614C4F04_704B_0A22_41D8_0500EEB9A5DD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.75,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_609D1EDC_704B_0A21_41C2_4B612A90D1BD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -68.52,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_605C8E1A_704B_0A21_41DB_AA554064DF1D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.43,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "id": "camera_631C3C1B_704B_0E26_41D4_146F91C566CB",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6292DBA8_704B_0A62_41CA_C6F59BFDA48C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61C62F89_704B_0A23_41D2_29C6F8919159",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.48,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6117AF60_704B_0AE2_41C6_B9F651E86F51",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FD00D81_704B_0E23_41C3_76D6DED0ADC1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -23.47,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60046E57_704B_0A2F_41D5_EC22BA0C41CF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 147.48,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FCB8D62_704B_0EE6_41A4_5F65B92A0E14",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 68.11,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62D45B6B_704B_0AE7_41BA_EB6F55E356FF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_t.jpg"
  }
 ],
 "label": "WILLIAN (9)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4CF70C36_5F6A_62B4_41BF_4C74EB4F7275",
  "this.overlay_4CBD7B52_5F6A_66CC_41AB_9E0530F5712D",
  "this.overlay_41A05930_5F5A_624D_41C9_CB8E1B401344",
  "this.overlay_74ECFCC1_6298_588A_416E_5690728FAEEF",
  "this.overlay_74460DBD_629B_B8FA_4184_4E3C960C70D5",
  "this.overlay_7DD6FA86_62F8_5896_41D4_1D21463209F5"
 ],
 "id": "panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A"
  },
  {
   "backwardYaw": 156.53,
   "yaw": -160.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89"
  },
  {
   "backwardYaw": 152.44,
   "yaw": -51.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_t.jpg"
  }
 ],
 "label": "WILLIAN (4)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4CFA9BFF_5F56_25B4_41CF_11305D9EBD6A",
  "this.overlay_4CAE7AA3_5F56_2653_41D3_19C2F69A4A85",
  "this.overlay_4B41A78C_5F56_6E55_41C3_EF426346A425",
  "this.overlay_7BEB9BA7_62E8_5896_41B9_93743FB471D4"
 ],
 "id": "panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 9.67,
   "yaw": -159.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89"
  },
  {
   "backwardYaw": 146.71,
   "yaw": 131.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 68.58,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_636DBBF0_704B_09E2_41CF_8914E4E15432",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.33,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FFF9DAA_704B_0E61_41C8_FB317CF226E6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_t.jpg"
  }
 ],
 "label": "WILLIAN (50)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7E57D5_5F3A_2DF7_41D3_AB7E59F4DDD9",
  "this.overlay_7D22747A_5F3A_22BC_41C5_BC03500C9D2B",
  "this.overlay_422795CA_62E8_A89F_41D4_D126C428E3ED"
 ],
 "id": "panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.07,
   "yaw": 0.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781"
  },
  {
   "backwardYaw": 174.48,
   "yaw": -55.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7"
  },
  {
   "backwardYaw": -43.98,
   "yaw": 150.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_t.jpg"
  }
 ],
 "label": "WILLIAN (23)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7EB5367B_5F2A_2EB3_41B3_0567D5C997DD"
 ],
 "id": "panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -50.93,
   "yaw": 171.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_t.jpg"
  }
 ],
 "label": "WILLIAN (29)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7EAA6F57_5F36_3EF4_41B5_71B0E35C1F0A"
 ],
 "id": "panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.3,
   "yaw": 171.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.02,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F32FD4E_704B_0E21_41D7_4C78B1EC2208",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54700256_5F2A_26F5_41B9_36A246A7A781_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_t.jpg"
  }
 ],
 "label": "WILLIAN (45)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D6375DB_5F3A_EDF3_41D3_434F21B3C2DB",
  "this.overlay_7D2A768A_5F3A_2E5C_41C6_1502E9467C94"
 ],
 "id": "panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.11,
   "yaw": -137.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD"
  },
  {
   "backwardYaw": -162.61,
   "yaw": -1.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_t.jpg"
  }
 ],
 "label": "WILLIAN (15)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D925247_5F2D_E6D4_41CC_C83999D94749"
 ],
 "id": "panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.48,
   "yaw": 165.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.34,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60BBBEFA_704B_0BE6_41DB_166301D0CF56",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_t.jpg"
  }
 ],
 "label": "WILLIAN (30)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7E92C3A3_5F36_264C_419C_26F56B2AC8D3",
  "this.overlay_7D2205B2_5F36_224D_41C0_A6C5BEFC9FC2"
 ],
 "id": "panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -159.75,
   "yaw": 2.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0"
  },
  {
   "backwardYaw": 100.43,
   "yaw": -84.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.29,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F8A9DB4_704B_0E61_41CD_5E63D8F115E3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.25,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_632C7C2E_704B_0E61_41D3_240C756835A6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.07,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6074AE4D_704B_0A23_41D8_BE9F2BC3951D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_t.jpg"
  }
 ],
 "label": "WILLIAN (41)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D637BDD_5F35_E5F7_41C2_0C2EAC884CAE",
  "this.overlay_7D3D2D14_5F35_E274_41A0_2D37D45CC551"
 ],
 "id": "panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 171.61,
   "yaw": 38.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431"
  },
  {
   "backwardYaw": -166.7,
   "yaw": -32.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.07,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61360F7F_704B_0ADF_41CD_A8CB7CC20CDA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.42,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F04AD06_704B_0E2E_4185_D1F38D82C8AF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_t.jpg"
  }
 ],
 "label": "WILLIAN (22)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7B046D_5F2A_62D4_41C4_2DFC8D77E7E3"
 ],
 "id": "panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.61,
   "yaw": 165.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.29,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F0EECFC_704B_0FE2_41AC_8B28B15671A2",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.3,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_615ADF19_704B_0A23_41D4_6DAE7E9B6711",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6031CE80_704B_0A21_41D8_05F57F0A8CA2",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.97,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6228BB2E_704B_0A61_41C4_2CBF2CFAB2DE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.3,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6069BE2E_704B_0A7E_41BD_E251114FE030",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.8,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62828B94_704B_0A21_419C_B14685E88304",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.43,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6127DF6B_704B_0AE7_41C2_4EBC639A2FC7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_t.jpg"
  }
 ],
 "label": "WILLIAN (13)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4734A313_5F76_264C_41CE_AD77CC19FE2D",
  "this.overlay_47FDA1E8_5F76_25DD_41CC_E6D103BC5BDF",
  "this.overlay_4465F77B_5F6A_2EBC_41D1_CE205011F4A2"
 ],
 "id": "panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 57.94,
   "yaw": 170.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "backwardYaw": -1.38,
   "yaw": -106.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D"
  },
  {
   "backwardYaw": -95.06,
   "yaw": 83.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5463813D_5F2E_62B4_41BC_90EA65522104_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.57,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_630DBC0F_704B_0E3F_41D7_D45E903F992B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayOriginPosition": {
  "yaw": 0,
  "stereographicFactor": 1,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetHfov": 125,
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "id": "panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62E43B75_704B_0AE2_41B6_A80C52FD72E8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_t.jpg"
  }
 ],
 "label": "WILLIAN (46)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7D0120_5F3A_624C_41CB_C7606CB76E4E",
  "this.overlay_7D3D62D4_5F3A_67F5_41D3_14E24930DE24"
 ],
 "id": "panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -111.89,
   "yaw": -3.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED"
  },
  {
   "backwardYaw": -1.02,
   "yaw": -162.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_t.jpg"
  }
 ],
 "label": "WILLIAN (25)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D61A46A_5F2A_22DC_41C8_2882A5279C75"
 ],
 "id": "panorama_547D5264_5F2E_66D5_41C5_31E245AE2482",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.61,
   "yaw": 140.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.57,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_633ADC3A_704B_0E61_41D3_BBB40931332F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61F55FBB_704B_0A67_41B1_B968601C4C78",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.27,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "id": "camera_7F19AD19_704B_0E23_419B_1AC53C89ED77",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 19.9,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62278B38_704B_0A61_41CB_51F6FA721F5C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -150.61,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "id": "camera_635F3BDD_704B_0A22_41D3_32E4246C430F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63D9BC59_704B_0E23_41D9_E933BF968AAD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.52,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60D02E9E_704B_0A5E_41CF_48CB7B0FA5BC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.8,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61092F42_704B_0A21_41D8_D3FCEE145312",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_t.jpg"
  }
 ],
 "label": "WILLIAN (40)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D672305_5F36_2654_41BB_6A21EA2129F1",
  "this.overlay_7D2563A0_5F36_264D_41B9_CC02B5FCFFD9"
 ],
 "id": "panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_t.jpg"
  }
 ],
 "label": "WILLIAN (35)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7EA50143_5F36_62CC_41BF_04115E5B00E3"
 ],
 "id": "panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.98,
   "yaw": 167.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.8,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61E55FA8_704B_0A62_41C6_48711F402BFC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.7,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F13CD25_704B_0E62_4175_3D1565280634",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "MediaAudio",
 "data": {
  "label": "WhatsApp Audio 2021-11-23 at 06.44.46 (online-audio-converter.com)"
 },
 "id": "audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA",
 "audio": {
  "mp3Url": "media/audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA.ogg"
 },
 "autoplay": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_t.jpg"
  }
 ],
 "label": "WILLIAN (48)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7CD320_5F3B_E64D_41D3_526030C1D99C"
 ],
 "id": "panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.02,
   "yaw": -163.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_t.jpg"
  }
 ],
 "label": "WILLIAN (1)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7EB36938_5F2A_22BC_41D4_A2F0FE721818",
  "this.overlay_45978BF1_62A8_B88D_41D4_1F5FB116F4FE"
 ],
 "id": "panorama_5326133E_5F2A_E6B5_41C0_4107A0161697",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -106.98,
   "yaw": 91.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840"
  },
  {
   "backwardYaw": 165.07,
   "yaw": 3.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.62,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FAA2DE7_704B_09EF_41DA_9CEDDEDE116F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_t.jpg"
  }
 ],
 "label": "WILLIAN (5)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4CFC34C9_5F56_23DC_419C_7F1A48E1526F",
  "this.overlay_410232AC_5F5A_6654_41D0_428CBC071F1A",
  "this.overlay_7B59F2A0_62E8_688A_41B7_6CDC496BC372"
 ],
 "id": "panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.71,
   "yaw": -111.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89"
  },
  {
   "backwardYaw": 131.58,
   "yaw": 146.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_t.jpg"
  }
 ],
 "label": "WILLIAN (3)",
 "hfov": 360,
 "overlays": [
  "this.overlay_4C9432A2_5F56_E64C_41D0_1240260FF860",
  "this.overlay_4B67B0BF_5F56_E3B4_41B1_9EA27B229565"
 ],
 "id": "panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -106.94,
   "yaw": -1.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104"
  },
  {
   "backwardYaw": -67.24,
   "yaw": 82.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61A46FE7_704B_09EF_419E_425AD024AAA6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 109.29,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_604F2E0F_704B_0A3E_41D1_75D6C2B5210C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.94,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FA66DF1_704B_09E3_41C5_4A332EF0CAE5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_t.jpg"
  }
 ],
 "label": "WILLIAN (14)",
 "hfov": 360,
 "overlays": [
  "this.overlay_47149FDA_5F76_3DFC_4174_C41C85A8201D",
  "this.overlay_47F5D1CA_5F76_65DD_41B9_6587931CBBF7",
  "this.overlay_1FEC8BFF_5FDA_D90A_418F_34ED0947B29B"
 ],
 "id": "panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "backwardYaw": -111.42,
   "yaw": 101.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_t.jpg"
  }
 ],
 "label": "WILLIAN (18)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7C1508_5F2A_625C_41B9_D97F486669FF"
 ],
 "id": "panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.2,
   "yaw": 165.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_t.jpg"
  }
 ],
 "label": "WILLIAN (52)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D78AFE6_5F3A_7DD4_41CA_1B028A785BF9"
 ],
 "id": "panorama_54700256_5F2A_26F5_41B9_36A246A7A781",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.61,
   "yaw": 165.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_t.jpg"
  }
 ],
 "label": "WILLIAN (33)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D65B42A_5F37_E25C_41C3_FE8BE9C3DC10",
  "this.overlay_7D217216_5F36_2674_41D7_ACF8E2B2F507",
  "this.overlay_7D1A719E_5F36_2274_41B6_551333DDA187"
 ],
 "id": "panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 167.93,
   "yaw": 2.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848"
  },
  {
   "backwardYaw": 167.52,
   "yaw": -43.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.07,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63CB6C4C_704B_0E22_41C4_678D055B1B73",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -142.35,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_7F76ECDE_704B_0E21_41CF_1F863FF7B5FD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.66,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62362B4C_704B_0A22_41B9_4153FCF44F28",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_t.jpg"
  }
 ],
 "label": "WILLIAN (17)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7EEEBE_5F2A_FFB4_41CF_665699C699FF",
  "this.overlay_7D23E280_5F2A_264D_41CB_6722A4372C4C",
  "this.overlay_7D0B501A_5F2A_227D_41C5_C0D509A7416B"
 ],
 "id": "panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.2,
   "yaw": 111.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C"
  },
  {
   "backwardYaw": 165.07,
   "yaw": 0.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28"
  },
  {
   "backwardYaw": -172.02,
   "yaw": -48.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_t.jpg"
  }
 ],
 "label": "WILLIAN (20)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D7FBC80_5F2A_224D_41C9_8A4AAF78FD02",
  "this.overlay_7EF7CB0F_62E9_D995_41D1_09C2A59BF76F",
  "this.overlay_7E692F6C_7045_0AE2_41BE_63DC699C9412"
 ],
 "id": "panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.7,
   "yaw": -79.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89"
  },
  {
   "backwardYaw": 140.93,
   "yaw": -2.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.52,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61D60F9E_704B_0A21_41C7_61C8B282F8DF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_634F4BD3_704B_0A27_41BC_B29FC9081FAE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.07,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61190F54_704B_0A22_41D8_9D8456D07121",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_t.jpg"
  }
 ],
 "label": "WILLIAN (44)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D63183D_5F3A_22B7_41C9_06B129DAEE56",
  "this.overlay_7D3D2995_5F3A_2277_41D7_0D7FB07A2410",
  "this.overlay_7CA7F18C_62FB_E89A_41D6_04D3A1841318"
 ],
 "id": "panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8"
  },
  {
   "backwardYaw": -137.25,
   "yaw": -158.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.92,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FE4FD9D_704B_0E22_41D5_190DAC3F6D8D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 131.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F841DC8_704B_0E22_41DA_3D57EA48BD2E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.75,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60FF6EBD_704B_0A62_41DB_1B3617C0C6DE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.06,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F905DD2_704B_0E26_41D1_FF80BB233AAC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F0A8CE8_704B_0FE1_41D0_092F0389A19C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_t.jpg"
  }
 ],
 "label": "WILLIAN (49)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D6C1A6B_5F3A_26D3_41B9_93A1F84DB6CD",
  "this.overlay_674A6C5C_5FEA_5F0D_41D3_5089722B5E23",
  "this.overlay_7C6BAD46_62F8_F996_41C3_E154B6996640"
 ],
 "id": "panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 150.75,
   "yaw": -43.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A"
  },
  {
   "backwardYaw": 91.43,
   "yaw": -106.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.76,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_617ABF35_704B_0A62_41B4_4E9774E3EC56",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.39,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60ADCEEE_704B_0BE1_419E_608366BB8E94",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_t.jpg"
  }
 ],
 "label": "WILLIAN (28)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D62F162_5F36_22CC_41AF_0B977B8EC94E"
 ],
 "id": "panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -17.8,
   "yaw": 172.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.56,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60132E69_704B_0AE2_41D7_61A300E2FB80",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_t.jpg"
  }
 ],
 "label": "WILLIAN (37)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D62F31D_5F36_E677_41A8_6512B5B08C9D"
 ],
 "id": "panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.52,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62F2DB8A_704B_0A21_41D0_A30DC02D4EF4",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.75,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61938FD2_704B_0A26_41A5_E40098F6B589",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_t.jpg"
  }
 ],
 "label": "WILLIAN (24)",
 "hfov": 360,
 "overlays": [
  "this.overlay_7D55FF31_5F2A_7E4C_41B0_F97FFACA26C6",
  "this.overlay_7DEB50A4_5F2A_2254_41A5_2685319B8222"
 ],
 "id": "panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.57,
   "yaw": 85.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8"
  },
  {
   "backwardYaw": 140.93,
   "yaw": 0.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "partial": false,
 "thumbnailUrl": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 128.71,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F27FD44_704B_0E21_41D9_02D8EC70A438",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60CF9E94_704B_0A22_41DB_DCDBB32F901E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.25,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_637DFBFD_704B_09E3_41C1_8B9F3CE3760C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.98,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62A08BB3_704B_0A66_41CD_9AB546A3FCD1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "paddingLeft": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
  "this.Image_771A0BA4_6299_D88A_41C4_84E996C691D9"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 641,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "height": "100%",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3, this.camera_61A46FE7_704B_09EF_419E_425AD024AAA6); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72341137_5F2B_E2B3_41B6_F0BA4E069D2B",
   "yaw": -0.61,
   "pitch": -14.78,
   "distance": 100,
   "hfov": 20.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.96,
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.78
  }
 ],
 "id": "overlay_7D602556_5F2A_22F4_41C2_08BD1DF69808",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E, this.camera_61B22FFB_704B_09E7_41D8_A8BA7EF70EE7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72348138_5F2B_E2BD_417C_EB9E52AA8E4B",
   "yaw": -50.93,
   "pitch": -13.55,
   "distance": 100,
   "hfov": 21.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.08,
   "yaw": -50.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.55
  }
 ],
 "id": "overlay_7D247408_5F2A_225C_41D4_697CCB4467FC",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8, this.camera_61938FD2_704B_0A26_41A5_E40098F6B589); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7234F138_5F2B_E2BD_41CE_30BCC4B20A09",
   "yaw": 140.93,
   "pitch": -15.59,
   "distance": 100,
   "hfov": 20.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.88,
   "yaw": 140.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.59
  }
 ],
 "id": "overlay_7D0BC13F_5F2A_62B4_41D6_982A260787C1",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_7F841DC8_704B_0E22_41DA_3D57EA48BD2E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B44224D_62E7_AB95_41D1_9A39EC7EE048",
   "yaw": -172.02,
   "pitch": -14.78,
   "distance": 100,
   "hfov": 20.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.96,
   "yaw": -172.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.78
  }
 ],
 "id": "overlay_7D65FA7E_5F2A_66B4_41D6_A1649BA04222",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722E014C_5F2B_E2D4_41A8_033E086B0E86",
   "yaw": 1.02,
   "pitch": -14.78,
   "distance": 100,
   "hfov": 20.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.96,
   "yaw": 1.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.78
  }
 ],
 "id": "overlay_7D7DFFD9_5F36_3DFC_41C1_8CF6329BC637",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A, this.camera_62362B4C_704B_0A22_41B9_4153FCF44F28); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722E514C_5F2B_E2D4_41D0_471A3356C809",
   "yaw": 85.3,
   "pitch": -16.82,
   "distance": 100,
   "hfov": 20.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.75,
   "yaw": 85.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.82
  }
 ],
 "id": "overlay_7D25EE2D_5F36_1E54_41D6_91A63FFC410A",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_7F2CDD37_704B_0E6E_41C8_3A37F5AE1D0E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2718ED_5F5E_23D4_41CA_75CF03C169B0",
   "yaw": -95.06,
   "pitch": -11.45,
   "distance": 100,
   "hfov": 22.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.96,
   "yaw": -95.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.45
  }
 ],
 "id": "overlay_478CCBA4_5F75_E655_41D3_52819D4FA138",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_7F27FD44_704B_0E21_41D9_02D8EC70A438); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C39CB58_62F8_D9BA_41CB_5F2EB0AA2C96",
   "yaw": 152.44,
   "pitch": -14.31,
   "distance": 100,
   "hfov": 22.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.7,
   "yaw": 152.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.31
  }
 ],
 "id": "overlay_47A471EE_5F76_25D5_41BA_054C8EB88E14",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C392B60_62F8_D98A_41CA_6B2FDE6508D8",
   "yaw": 0.76,
   "pitch": -13.49,
   "distance": 100,
   "hfov": 22.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.78,
   "yaw": 0.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.49
  }
 ],
 "id": "overlay_7B32B6AF_62E8_6895_41CB_75DD147DD990",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2058ED_5F5E_23D4_41D6_4A6EB83AE5BC",
   "yaw": -58.65,
   "pitch": -14.73,
   "distance": 100,
   "hfov": 22.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": -58.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_472886FE_5F76_2FB5_41C5_76ECA8344FDA",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_62278B38_704B_0A61_41CB_51F6FA721F5C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A20C8EE_5F5E_23D4_4173_1F0620619A57",
   "yaw": 156.53,
   "pitch": -18,
   "distance": 100,
   "hfov": 22.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.28,
   "yaw": 156.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ],
 "id": "overlay_47F44750_5F76_6ECC_41CC_687E0A78AF98",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_6228BB2E_704B_0A61_41C4_2CBF2CFAB2DE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2088EE_5F5E_23D4_41B5_EAA8CE71AB1B",
   "yaw": 57.94,
   "pitch": -15.95,
   "distance": 100,
   "hfov": 22.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.53,
   "yaw": 57.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ],
 "id": "overlay_47D6F838_5F76_E2BD_41C8_61EDEE1E6AE6",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72293141_5F2B_E2CC_4181_CAD23EDD6D2F",
   "yaw": 39.07,
   "pitch": -7,
   "distance": 100,
   "hfov": 21.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.52,
   "yaw": 39.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7
  }
 ],
 "id": "overlay_7D604F2D_5F35_FE54_41C3_9CEE0F54598D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9, this.camera_63D9BC59_704B_0E23_41D9_E933BF968AAD); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72297142_5F2B_E2CC_41D7_8610E7E718A5",
   "yaw": 100.43,
   "pitch": -7,
   "distance": 100,
   "hfov": 21.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.52,
   "yaw": 100.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7
  }
 ],
 "id": "overlay_7D29711C_5F36_2275_41B5_AA9E041B56F2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_7F76ECDE_704B_0E21_41CF_1F863FF7B5FD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3E8B68_62F8_D99A_41CF_E0585A778684",
   "yaw": -162.61,
   "pitch": -11.5,
   "distance": 100,
   "hfov": 21.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.25,
   "yaw": -162.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.5
  }
 ],
 "id": "overlay_7EBE4F79_62E8_D87A_41B3_375C04B5B43C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E, this.camera_61C62F89_704B_0A23_41D2_29C6F8919159); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7222D151_5F2B_E2CC_41D4_6A791B8F4954",
   "yaw": -1.02,
   "pitch": -16,
   "distance": 100,
   "hfov": 20.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.84,
   "yaw": -1.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16
  }
 ],
 "id": "overlay_7D7D6CC5_5F3A_23D7_41BB_D4DAF74523F1",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E, this.camera_61D60F9E_704B_0A21_41C7_61C8B282F8DF); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72211151_5F2B_E2CC_41B6_2285A5ACBDDF",
   "yaw": -111.89,
   "pitch": -18.87,
   "distance": 100,
   "hfov": 20.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.52,
   "yaw": -111.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.87
  }
 ],
 "id": "overlay_7D27BD2A_5F3A_225C_41D4_F90A416CA162",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2508EB_5F5E_23DC_41D3_BEAA72171D93",
   "yaw": -155.6,
   "pitch": -16.36,
   "distance": 100,
   "hfov": 22.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.48,
   "yaw": -155.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ],
 "id": "overlay_4C8B130C_5F55_E654_4191_F9FD0E82BDF4",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_44088962_6298_D98F_41D1_668F6221C2D1",
   "yaw": 11.71,
   "pitch": -14.73,
   "distance": 100,
   "hfov": 22.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": 11.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_4CBFDE38_5F6A_1EBC_41A2_4074F0D01BDC",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3ACB58_62F8_D9BA_41D5_43DF1EB2C9DC",
   "yaw": 138.12,
   "pitch": -12.68,
   "distance": 100,
   "hfov": 22.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.86,
   "yaw": 138.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "id": "overlay_4B55BE43_5F6A_3ED3_41D1_1450D55B8EA7",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_44087962_6298_D98F_41D7_E335016052DE",
   "yaw": -44.33,
   "pitch": -14.73,
   "distance": 100,
   "hfov": 22.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": -44.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_46315EA9_629B_F89D_41C4_7CEAD9986486",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722EF14D_5F2B_E2D4_41C2_D4E536CB58DB",
   "yaw": 79.98,
   "pitch": -10.69,
   "distance": 100,
   "hfov": 21.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.31,
   "yaw": 79.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "id": "overlay_7D605A67_5F36_26D3_41D2_E6FF70E1148C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722D214D_5F2B_E2D4_41C9_2C13DBB3B343",
   "yaw": 131.52,
   "pitch": -10.69,
   "distance": 100,
   "hfov": 21.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.31,
   "yaw": 131.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.69
  }
 ],
 "id": "overlay_7D3EBCCF_5F36_23D3_41C5_DAEF62D0B345",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_635F3BDD_704B_0A22_41D3_32E4246C430F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3CEB71_62F8_D98A_41D8_8F94AD28FDF1",
   "yaw": -163.84,
   "pitch": -6.59,
   "distance": 100,
   "hfov": 21.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.54,
   "yaw": -163.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "id": "overlay_7F586532_62F8_698E_41CE_CBFACCA28DE2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E, this.camera_7FCB8D62_704B_0EE6_41A4_5F65B92A0E14); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722CA14F_5F2B_E2D4_41CA_35DE06771B64",
   "yaw": -166.7,
   "pitch": -12.73,
   "distance": 100,
   "hfov": 21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": -166.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ],
 "id": "overlay_7D664834_5F3A_22B4_41D5_18C1CADFC085",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_605C8E1A_704B_0A21_41DB_AA554064DF1D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B427246_62E7_AB97_41D4_03B982FFE30B",
   "yaw": -54.2,
   "pitch": -8.23,
   "distance": 100,
   "hfov": 21.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.46,
   "yaw": -54.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.23
  }
 ],
 "id": "overlay_7D49237C_5F2A_66B4_41D1_A53B00C436DF",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29, this.camera_604F2E0F_704B_0A3E_41D1_75D6C2B5210C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B42A246_62E7_AB97_41D4_D16FD63E5D84",
   "yaw": 162.61,
   "pitch": -11.09,
   "distance": 100,
   "hfov": 21.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.28,
   "yaw": 162.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.09
  }
 ],
 "id": "overlay_435D8848_62E8_A79A_41C0_5A067B7365A9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A, this.camera_61838FC8_704B_0A21_41D2_7A163DA54BD9); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B6A4271_62E7_AB8D_41D6_AD5BB1801F69",
   "yaw": 174.48,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 174.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7EAA7CC1_5F3A_63CC_41BE_ED4371488C38",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9, this.camera_609D1EDC_704B_0A21_41C2_4B612A90D1BD); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F5144_5F2B_E2D4_41B0_755A69341050",
   "yaw": -159.75,
   "pitch": -7.41,
   "distance": 100,
   "hfov": 21.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.5,
   "yaw": -159.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.41
  }
 ],
 "id": "overlay_7D627AAA_5F36_665D_41CB_14E3DE39321F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6, this.camera_61E55FA8_704B_0A62_41C6_48711F402BFC); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7229B142_5F2B_E2CC_41CD_9954F6A8DDD6",
   "yaw": 31.3,
   "pitch": -9.46,
   "distance": 100,
   "hfov": 21.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.39,
   "yaw": 31.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.46
  }
 ],
 "id": "overlay_7D63BB77_5F36_26B4_41D5_E587940447CC",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079, this.camera_61F55FBB_704B_0A67_41B1_B968601C4C78); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7229F142_5F2B_E2CC_41C7_6BAD6AA56252",
   "yaw": -17.8,
   "pitch": -11.91,
   "distance": 100,
   "hfov": 21.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -17.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.91
  }
 ],
 "id": "overlay_7D3F097C_5F36_62B4_41C3_BFC2C48AB58B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3E3B68_62F8_D99A_41BF_3FF9AD61B0E5",
   "yaw": 168.34,
   "pitch": -11.91,
   "distance": 100,
   "hfov": 21.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": 168.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.91
  }
 ],
 "id": "overlay_7E3AB092_62E7_A88E_41D5_46C837B07965",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3, this.camera_60BBBEFA_704B_0BE6_41DB_166301D0CF56); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B7E0258_62E7_ABBB_41D4_DF5B4606E54C",
   "yaw": 167.93,
   "pitch": -12.73,
   "distance": 100,
   "hfov": 21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": 167.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ],
 "id": "overlay_7D62E536_5F36_62B5_41D3_FFA555AA8561",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D, this.camera_7FE4FD9D_704B_0E22_41D5_190DAC3F6D8D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5998E8_5F5E_23DC_41A7_B0CE426F9948",
   "yaw": -67.24,
   "pitch": -12.68,
   "distance": 100,
   "hfov": 22.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.86,
   "yaw": -67.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "id": "overlay_4C81EFC9_5F56_3DDF_41CB_ED06CDE9BDE0",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC, this.camera_7FEB7D8B_704B_0E27_41C0_E9EA2AF0DB67); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5AB8E8_5F5E_23DC_41CA_15721BE3C2AC",
   "yaw": 9.67,
   "pitch": -14.32,
   "distance": 100,
   "hfov": 22.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.7,
   "yaw": 9.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ],
 "id": "overlay_4B7D34AF_5F56_2253_41D5_CDAD0DC1512E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E, this.camera_62C67B56_704B_0A2E_41C0_87253375A02D); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722CD14F_5F2B_E2D4_41D3_E48E7DAD962D",
   "yaw": 171.61,
   "pitch": -14.37,
   "distance": 100,
   "hfov": 21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21,
   "yaw": 171.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.37
  }
 ],
 "id": "overlay_7D62824B_5F3A_66DC_41D0_5F2E78684849",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E, this.camera_7F13CD25_704B_0E62_4175_3D1565280634); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722FA144_5F2B_E2D4_41A9_B75CD9B5EE12",
   "yaw": -105.34,
   "pitch": -12.73,
   "distance": 100,
   "hfov": 21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": -105.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ],
 "id": "overlay_7D7F076D_5F36_2ED4_41A8_D6FD17FC9BF6",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72285145_5F2B_E2D4_41D1_DFD4246A1945",
   "yaw": -47.25,
   "pitch": -11.91,
   "distance": 100,
   "hfov": 21.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -47.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.91
  }
 ],
 "id": "overlay_7D26971A_5F36_2E7C_41C5_8F8C03BF3A58",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_7F19AD19_704B_0E23_419B_1AC53C89ED77); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3DEB68_62F8_D99A_41CD_4A52F7AE53A3",
   "yaw": -160.98,
   "pitch": -12.32,
   "distance": 100,
   "hfov": 21.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.18,
   "yaw": -160.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.32
  }
 ],
 "id": "overlay_7F80724D_62F8_6B9A_41CB_CC50A9F68654",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0, this.camera_60046E57_704B_0A2F_41D5_EC22BA0C41CF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3A1B58_62F8_D9BA_41D2_592169A4C155",
   "yaw": -160.1,
   "pitch": -10.23,
   "distance": 100,
   "hfov": 23.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.06,
   "yaw": -160.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.23
  }
 ],
 "id": "overlay_4CF70C36_5F6A_62B4_41BF_4C74EB4F7275",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_418648B9_62E7_B8FA_41D4_89008D1E0980",
   "yaw": 19.08,
   "pitch": -3.27,
   "distance": 100,
   "hfov": 23.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.39,
   "yaw": 19.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "id": "overlay_4CBD7B52_5F6A_66CC_41AB_9E0530F5712D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4186E8B9_62E7_B8FA_41C5_3D58D9BABFBB",
   "yaw": 167.17,
   "pitch": -13.5,
   "distance": 100,
   "hfov": 22.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.78,
   "yaw": 167.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "id": "overlay_41A05930_5F5A_624D_41C9_CB8E1B401344",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_418758B9_62E7_B8FA_41D3_39BEA2E98F94",
   "yaw": 77.99,
   "pitch": -2.45,
   "distance": 100,
   "hfov": 23.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.41,
   "yaw": 77.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "id": "overlay_74ECFCC1_6298_588A_416E_5690728FAEEF",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564, this.camera_60132E69_704B_0AE2_41D7_61A300E2FB80); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4187B8BA_62E7_B8FE_41CC_B5CE0D158930",
   "yaw": -51.29,
   "pitch": -5.32,
   "distance": 100,
   "hfov": 23.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.33,
   "yaw": -51.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_4_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.32
  }
 ],
 "id": "overlay_74460DBD_629B_B8FA_4184_4E3C960C70D5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_418828BA_62E7_B8FE_41C5_24EEEAE92152",
   "yaw": 125.44,
   "pitch": 0,
   "distance": 100,
   "hfov": 23.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.43,
   "yaw": 125.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_5_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0
  }
 ],
 "id": "overlay_7DD6FA86_62F8_5896_41D4_1D21463209F5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4, this.camera_7FFF9DAA_704B_0E61_41C8_FB317CF226E6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5BD8E9_5F5E_23DC_41D2_EE7CC9C00952",
   "yaw": -159.29,
   "pitch": -17.18,
   "distance": 100,
   "hfov": 22.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.38,
   "yaw": -159.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.18
  }
 ],
 "id": "overlay_4CFA9BFF_5F56_25B4_41CF_11305D9EBD6A",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3BCB58_62F8_D9BA_41C0_D82D6B470726",
   "yaw": -7.1,
   "pitch": -15.14,
   "distance": 100,
   "hfov": 22.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.62,
   "yaw": -7.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "id": "overlay_4CAE7AA3_5F56_2653_41D3_19C2F69A4A85",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29, this.camera_7F8A9DB4_704B_0E61_41CD_5E63D8F115E3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2408EA_5F5E_23DC_41C7_067E2FA68E13",
   "yaw": 131.58,
   "pitch": -11.86,
   "distance": 100,
   "hfov": 22.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.93,
   "yaw": 131.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.86
  }
 ],
 "id": "overlay_4B41A78C_5F56_6E55_41C3_EF426346A425",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3B0B58_62F8_D9BA_41CC_0AC5EA7F2041",
   "yaw": 68.99,
   "pitch": -11.05,
   "distance": 100,
   "hfov": 23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23,
   "yaw": 68.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.05
  }
 ],
 "id": "overlay_7BEB9BA7_62E8_5896_41B9_93743FB471D4",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7, this.camera_60D02E9E_704B_0A5E_41CF_48CB7B0FA5BC); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7221F156_5F2B_E2F5_41C7_14F3CAB937F3",
   "yaw": -55.02,
   "pitch": -10.28,
   "distance": 100,
   "hfov": 21.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": -55.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "id": "overlay_7D7E57D5_5F3A_2DF7_41D3_AB7E59F4DDD9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781, this.camera_60CF9E94_704B_0A22_41DB_DCDBB32F901E); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72204157_5F2B_E2F3_41C4_63F738F2D0EC",
   "yaw": 0.61,
   "pitch": -11.5,
   "distance": 100,
   "hfov": 21.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.25,
   "yaw": 0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.5
  }
 ],
 "id": "overlay_7D22747A_5F3A_22BC_41C5_BC03500C9D2B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840, this.camera_60EEBEB3_704B_0A67_41A8_1922D410DF3A); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B692270_62E7_AB8B_4192_CD8A5FA06D92",
   "yaw": 150.75,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 150.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_422795CA_62E8_A89F_41D4_D126C428E3ED",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_63CB6C4C_704B_0E22_41C4_678D055B1B73); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B46724E_62E7_AB97_41BD_37FF43597FDC",
   "yaw": 171.61,
   "pitch": -12.73,
   "distance": 100,
   "hfov": 21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": 171.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ],
 "id": "overlay_7EB5367B_5F2A_2EB3_41B3_0567D5C997DD",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B, this.camera_6242D01A_704B_1621_41DB_5A2EEA9EF98B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72288143_5F2B_E2CC_41D4_7F483B71A39F",
   "yaw": 171.2,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 171.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7EAA6F57_5F36_3EF4_41B5_71B0E35C1F0A",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E, this.camera_7FD00D81_704B_0E23_41C3_76D6DED0ADC1); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7223D150_5F2B_E2CC_41C3_4D5B3CD2E834",
   "yaw": -1.02,
   "pitch": -10.28,
   "distance": 100,
   "hfov": 21.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": -1.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "id": "overlay_7D6375DB_5F3A_EDF3_41D3_434F21B3C2DB",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD, this.camera_7FC69D6C_704B_0EE2_41A8_40BFE2FDC277); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6093A395_5FFB_C91F_41BD_2157B76D2948",
   "yaw": -137.25,
   "pitch": -22.55,
   "distance": 100,
   "hfov": 20.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.02,
   "yaw": -137.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ],
 "id": "overlay_7D2A768A_5F3A_2E5C_41C6_1502E9467C94",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697, this.camera_62F2DB8A_704B_0A21_41D0_A30DC02D4EF4); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7237212D_5F2B_E257_41C5_5F71EA4B672E",
   "yaw": 165.07,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7D925247_5F2D_E6D4_41CC_C83999D94749",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A, this.camera_633ADC3A_704B_0E61_41D3_BBB40931332F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228C143_5F2B_E2CC_41C5_917B1E83F736",
   "yaw": -84.07,
   "pitch": -19.28,
   "distance": 100,
   "hfov": 20.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.47,
   "yaw": -84.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.28
  }
 ],
 "id": "overlay_7E92C3A3_5F36_264C_419C_26F56B2AC8D3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0, this.camera_632C7C2E_704B_0E61_41D3_240C756835A6); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F1144_5F2B_E2D4_41B3_24E3186EBFC0",
   "yaw": 2.25,
   "pitch": -19.28,
   "distance": 100,
   "hfov": 20.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.47,
   "yaw": 2.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.28
  }
 ],
 "id": "overlay_7D2205B2_5F36_224D_41C0_A6C5BEFC9FC2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE, this.camera_615ADF19_704B_0A23_41D4_6DAE7E9B6711); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722DF14E_5F2B_E2D4_41D5_8881B16A15BF",
   "yaw": -32.52,
   "pitch": -15.19,
   "distance": 100,
   "hfov": 20.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.92,
   "yaw": -32.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.19
  }
 ],
 "id": "overlay_7D637BDD_5F35_E5F7_41C2_0C2EAC884CAE",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431, this.camera_614C4F04_704B_0A22_41D8_0500EEB9A5DD); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722C314E_5F2B_E2D4_41C7_D44CA6F3343C",
   "yaw": 38.25,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 38.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7D3D2D14_5F35_E274_41A0_2D37D45CC551",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_60ADCEEE_704B_0BE1_419E_608366BB8E94); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722B5139_5F2B_E2BF_41AA_AFAE8739DAC6",
   "yaw": 165.07,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7D7B046D_5F2A_62D4_41C4_2DFC8D77E7E3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D, this.camera_7FAA2DE7_704B_09EF_41DA_9CEDDEDE116F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2128EE_5F5E_23D4_41D0_EEDF8263CD85",
   "yaw": -106.94,
   "pitch": -13.5,
   "distance": 100,
   "hfov": 22.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.78,
   "yaw": -106.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "id": "overlay_4734A313_5F76_264C_41CE_AD77CC19FE2D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564, this.camera_7FA66DF1_704B_09E3_41C5_4A332EF0CAE5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A21E8EF_5F5E_23D4_41AF_CC42E93F95EC",
   "yaw": 83.31,
   "pitch": -17.59,
   "distance": 100,
   "hfov": 22.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.33,
   "yaw": 83.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ],
 "id": "overlay_47FDA1E8_5F76_25DD_41CC_E6D103BC5BDF",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0, this.camera_7F905DD2_704B_0E26_41D1_FF80BB233AAC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C389B60_62F8_D98A_41C2_F952EC08F8E4",
   "yaw": 170.03,
   "pitch": -16.77,
   "distance": 100,
   "hfov": 22.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.43,
   "yaw": 170.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ],
 "id": "overlay_4465F77B_5F6A_2EBC_41D1_CE205011F4A2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2, this.camera_62E43B75_704B_0AE2_41B6_A80C52FD72E8); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72225150_5F2B_E2CC_41A7_7A02DBAE09BB",
   "yaw": -162.61,
   "pitch": -11.5,
   "distance": 100,
   "hfov": 21.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.25,
   "yaw": -162.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.5
  }
 ],
 "id": "overlay_7D7D0120_5F3A_624C_41CB_C7606CB76E4E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED, this.camera_62D45B6B_704B_0AE7_41BA_EB6F55E356FF); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7222A150_5F2B_E2CC_41D7_BA2F8AE5E4FD",
   "yaw": -3.48,
   "pitch": -16.82,
   "distance": 100,
   "hfov": 20.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.75,
   "yaw": -3.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.82
  }
 ],
 "id": "overlay_7D3D62D4_5F3A_67F5_41D3_14E24930DE24",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F, this.camera_6031CE80_704B_0A21_41D8_05F57F0A8CA2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722AF141_5F2B_E2CC_41CA_1CCB82F89811",
   "yaw": 140.93,
   "pitch": -11.5,
   "distance": 100,
   "hfov": 21.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.25,
   "yaw": 140.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.5
  }
 ],
 "id": "overlay_7D61A46A_5F2A_22DC_41C8_2882A5279C75",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722D814D_5F2B_E2D4_41C3_BA1C5929D096",
   "yaw": 73.43,
   "pitch": -9.87,
   "distance": 100,
   "hfov": 21.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.36,
   "yaw": 73.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.87
  }
 ],
 "id": "overlay_7D672305_5F36_2654_41BB_6A21EA2129F1",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722DB14E_5F2B_E2D4_41D6_BCEAFE90AE8B",
   "yaw": 128.25,
   "pitch": -8.23,
   "distance": 100,
   "hfov": 21.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.46,
   "yaw": 128.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.23
  }
 ],
 "id": "overlay_7D2563A0_5F36_264D_41B9_CC02B5FCFFD9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3, this.camera_7F32FD4E_704B_0E21_41D7_4C78B1EC2208); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722FC146_5F2B_E2D4_41D5_537592237D04",
   "yaw": 167.52,
   "pitch": -14.37,
   "distance": 100,
   "hfov": 21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21,
   "yaw": 167.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.37
  }
 ],
 "id": "overlay_7EA50143_5F36_62CC_41BF_04115E5B00E3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED, this.camera_7FB37E03_704B_0A26_41BB_820BB2855ED7); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72217151_5F2B_E2CC_41C0_884AF12EDCE5",
   "yaw": -163.02,
   "pitch": -13.55,
   "distance": 100,
   "hfov": 21.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.08,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.55
  }
 ],
 "id": "overlay_7D7CD320_5F3B_E64D_41D3_526030C1D99C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840, this.camera_62B0BBBE_704B_0A61_41B0_E9C596242728); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72219158_5F2B_E2FD_41C6_BA9C0224D259",
   "yaw": 91.43,
   "pitch": -16,
   "distance": 100,
   "hfov": 20.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.84,
   "yaw": 91.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16
  }
 ],
 "id": "overlay_7EB36938_5F2A_22BC_41D4_A2F0FE721818",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130, this.camera_634F4BD3_704B_0A27_41BC_B29FC9081FAE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48613B3D_62B8_59F5_41BB_14A11E735938",
   "yaw": 3.48,
   "pitch": -22.55,
   "distance": 100,
   "hfov": 20.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.02,
   "yaw": 3.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ],
 "id": "overlay_45978BF1_62A8_B88D_41D4_1F5FB116F4FE",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC, this.camera_7F04AD06_704B_0E2E_4185_D1F38D82C8AF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A24D8EA_5F5E_23DD_41CE_B60EB68A36A0",
   "yaw": 146.71,
   "pitch": -18.41,
   "distance": 100,
   "hfov": 22.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.23,
   "yaw": 146.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ],
 "id": "overlay_4CFC34C9_5F56_23DC_419C_7F1A48E1526F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89, this.camera_7F0EECFC_704B_0FE2_41AC_8B28B15671A2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3B4B58_62F8_D9BA_41C3_39D0CAD4E244",
   "yaw": -111.42,
   "pitch": -12.27,
   "distance": 100,
   "hfov": 22.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.89,
   "yaw": -111.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ],
 "id": "overlay_410232AC_5F5A_6654_41D0_428CBC071F1A",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3AAB58_62F8_D9BA_41C8_44A9D06C1A7F",
   "yaw": 10.49,
   "pitch": -9.82,
   "distance": 100,
   "hfov": 23.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.09,
   "yaw": 10.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "id": "overlay_7B59F2A0_62E8_688A_41B7_6CDC496BC372",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4, this.camera_617ABF35_704B_0A62_41B4_4E9774E3EC56); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5B78E8_5F5E_23DC_41C1_D1A6BF4257DF",
   "yaw": 82.08,
   "pitch": -14.32,
   "distance": 100,
   "hfov": 22.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.7,
   "yaw": 82.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ],
 "id": "overlay_4C9432A2_5F56_E64C_41D0_1240260FF860",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_616ADF23_704B_0A66_41C2_6AD01995D240); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5B08E9_5F5E_23DC_41BE_31686F9D557F",
   "yaw": -1.38,
   "pitch": -14.73,
   "distance": 100,
   "hfov": 22.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": -1.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_4B67B0BF_5F56_E3B4_41B1_9EA27B229565",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29, this.camera_636DBBF0_704B_09E2_41CF_8914E4E15432); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2258EF_5F5E_23D4_41CE_4CDBEEE8018E",
   "yaw": 101.71,
   "pitch": -15.55,
   "distance": 100,
   "hfov": 22.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.57,
   "yaw": 101.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ],
 "id": "overlay_47149FDA_5F76_3DFC_4174_C41C85A8201D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A22E8EF_5F5E_23D4_41C4_EF14AAF58BC5",
   "yaw": -97.51,
   "pitch": -14.73,
   "distance": 100,
   "hfov": 22.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": -97.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ],
 "id": "overlay_47F5D1CA_5F76_65DD_41B9_6587931CBBF7",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1A22BECB_5FD6_DB0B_41CF_4E5639DE9B99",
   "yaw": -0.15,
   "pitch": -22.5,
   "distance": 100,
   "hfov": 21.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.65,
   "yaw": -0.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ],
 "id": "overlay_1FEC8BFF_5FDA_D90A_418F_34ED0947B29B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_61092F42_704B_0A21_41D8_D3FCEE145312); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7236E135_5F2B_E2B7_41C5_7F385E5241A7",
   "yaw": 165.07,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7D7C1508_5F2A_625C_41B9_D97F486669FF",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A, this.camera_7F0A8CE8_704B_0FE1_41D0_092F0389A19C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72210157_5F2B_E2F3_41BF_A0449405C32E",
   "yaw": 165.07,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7D78AFE6_5F3A_7DD4_41CA_1B028A785BF9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470, this.camera_6117AF60_704B_0AE2_41C6_B9F651E86F51); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228B145_5F2B_E2D4_41BF_9C7FCEDBE7FD",
   "yaw": -43.98,
   "pitch": -10.28,
   "distance": 100,
   "hfov": 21.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": -43.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "id": "overlay_7D65B42A_5F37_E25C_41C3_FE8BE9C3DC10",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848, this.camera_61190F54_704B_0A22_41D8_9D8456D07121); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228E145_5F2B_E2D4_41D3_32B37404DE93",
   "yaw": 2.66,
   "pitch": -12.32,
   "distance": 100,
   "hfov": 21.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.18,
   "yaw": 2.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.32
  }
 ],
 "id": "overlay_7D217216_5F36_2674_41D7_ACF8E2B2F507",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 20.88,
   "yaw": 123.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F3146_5F2B_E2D4_41BC_9663E95A5D14",
   "yaw": 123.34,
   "pitch": -15.59,
   "distance": 100,
   "hfov": 20.88
  }
 ],
 "id": "overlay_7D1A719E_5F36_2274_41B6_551333DDA187",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE, this.camera_62A08BB3_704B_0A66_41CD_9AB546A3FCD1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7237E134_5F2B_E2B5_41D5_BA2E285F43F2",
   "yaw": -48.07,
   "pitch": -12.73,
   "distance": 100,
   "hfov": 21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": -48.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.73
  }
 ],
 "id": "overlay_7D7EEEBE_5F2A_FFB4_41CF_665699C699FF",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28, this.camera_6292DBA8_704B_0A62_41CA_C6F59BFDA48C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72365134_5F2B_E2B5_41D6_A47EFA3F0AE1",
   "yaw": 0.2,
   "pitch": -14.37,
   "distance": 100,
   "hfov": 21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21,
   "yaw": 0.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.37
  }
 ],
 "id": "overlay_7D23E280_5F2A_264D_41CB_6722A4372C4C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C, this.camera_62828B94_704B_0A21_419C_B14685E88304); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4B43824C_62E7_AB9B_41C0_F6D55A1645EC",
   "yaw": 111.48,
   "pitch": -13.96,
   "distance": 100,
   "hfov": 21.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.04,
   "yaw": 111.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.96
  }
 ],
 "id": "overlay_7D0B501A_5F2A_227D_41C5_C0D509A7416B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_6074AE4D_704B_0A23_41D8_BE9F2BC3951D); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7235C137_5F2B_E2B3_41BE_66B74BDADCC8",
   "yaw": -2.25,
   "pitch": -9.87,
   "distance": 100,
   "hfov": 21.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.36,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.87
  }
 ],
 "id": "overlay_7D7FBC80_5F2A_224D_41C9_8A4AAF78FD02",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89, this.camera_60678E38_704B_0A62_41BC_1E7853E167B2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C3FFB60_62F8_D992_41D4_9983D7E65D37",
   "yaw": 165.07,
   "pitch": -10.28,
   "distance": 100,
   "hfov": 21.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "id": "overlay_7EF7CB0F_62E9_D995_41D1_09C2A59BF76F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F, this.camera_6069BE2E_704B_0A7E_41BD_E251114FE030); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61B16A8F_704B_0A3E_41B4_F7ED79D43ED9",
   "yaw": -79.57,
   "pitch": -16.82,
   "distance": 100,
   "hfov": 20.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.75,
   "yaw": -79.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.82
  }
 ],
 "id": "overlay_7E692F6C_7045_0AE2_41BE_63DC699C9412",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2, this.camera_60FF6EBD_704B_0A62_41DB_1B3617C0C6DE); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C33BB71_62F8_D98A_41D5_651FE6A52732",
   "yaw": -158.11,
   "pitch": -7.41,
   "distance": 100,
   "hfov": 21.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.5,
   "yaw": -158.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.41
  }
 ],
 "id": "overlay_7D63183D_5F3A_22B7_41C9_06B129DAEE56",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7223814F_5F2B_E2D4_41C5_C20E168EC4E3",
   "yaw": 167.52,
   "pitch": -9.05,
   "distance": 100,
   "hfov": 21.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.41,
   "yaw": 167.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.05
  }
 ],
 "id": "overlay_7D3D2995_5F3A_2277_41D7_0D7FB07A2410",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_608F7ECF_704B_0A3E_41D3_88307C69CCC9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C338B71_62F8_D98A_4196_E827DE9E2BFE",
   "yaw": -122.93,
   "pitch": -8.23,
   "distance": 100,
   "hfov": 21.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.46,
   "yaw": -122.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.23
  }
 ],
 "id": "overlay_7CA7F18C_62FB_E89A_41D6_04D3A1841318",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697, this.camera_630DBC0F_704B_0E3F_41D7_D45E903F992B); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7221B156_5F2B_E2F5_41D1_C819C3AD9E40",
   "yaw": -106.98,
   "pitch": -16.41,
   "distance": 100,
   "hfov": 20.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.8,
   "yaw": -106.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.41
  }
 ],
 "id": "overlay_7D6C1A6B_5F3A_26D3_41B9_93A1F84DB6CD",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A, this.camera_637DFBFD_704B_09E3_41C1_8B9F3CE3760C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6090D397_5FFB_C91B_41D0_BAEC668E2D9A",
   "yaw": -43.98,
   "pitch": -17.64,
   "distance": 100,
   "hfov": 20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.66,
   "yaw": -43.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.64
  }
 ],
 "id": "overlay_674A6C5C_5FEA_5F0D_41D3_5089722B5E23",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564, this.camera_631C3C1B_704B_0E26_41D4_146F91C566CB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7C328B78_62F8_D87A_41B2_1307848F06B8",
   "yaw": -163.84,
   "pitch": -13.14,
   "distance": 100,
   "hfov": 21.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.11,
   "yaw": -163.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.14
  }
 ],
 "id": "overlay_7C6BAD46_62F8_F996_41C3_E154B6996640",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B, this.camera_60211E76_704B_0AE1_41CB_2FDDC8CC062F); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72284143_5F2B_E2CC_41BD_F613FF39BA11",
   "yaw": 172.02,
   "pitch": -17.64,
   "distance": 100,
   "hfov": 20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.66,
   "yaw": 172.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.64
  }
 ],
 "id": "overlay_7D62F162_5F36_22CC_41AF_0B977B8EC94E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722EB14D_5F2B_E2D4_41B2_A09548100BD6",
   "yaw": 152.8,
   "pitch": -3.32,
   "distance": 100,
   "hfov": 21.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.65,
   "yaw": 152.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.32
  }
 ],
 "id": "overlay_7D62F31D_5F36_E677_41A8_6512B5B08C9D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8, this.camera_6127DF6B_704B_0AE7_41C2_4EBC639A2FC7); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722A113A_5F2B_E2BD_41C9_73B5AF72763C",
   "yaw": 85.7,
   "pitch": -16,
   "distance": 100,
   "hfov": 20.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.84,
   "yaw": 85.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16
  }
 ],
 "id": "overlay_7D55FF31_5F2A_7E4C_41B0_F97FFACA26C6",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482, this.camera_61360F7F_704B_0ADF_41CD_A8CB7CC20CDA); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722A713B_5F2B_E2B3_41C4_A4F1EC634A7B",
   "yaw": 0.61,
   "pitch": -17.23,
   "distance": 100,
   "hfov": 20.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": 0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.23
  }
 ],
 "id": "overlay_7DEB50A4_5F2A_2254_41A5_2685319B8222",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "height": 110,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "height": "85.959%",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "paddingLeft": 0
},
{
 "maxHeight": 433,
 "maxWidth": 577,
 "id": "Image_771A0BA4_6299_D88A_41C4_84E996C691D9",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "right": "8.74%",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_771A0BA4_6299_D88A_41C4_84E996C691D9.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "2.03%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "height": "21.061%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image12330"
 },
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "height": "100%",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "height": "100%",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingLeft": 0
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72341137_5F2B_E2B3_41B6_F0BA4E069D2B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72348138_5F2B_E2BD_417C_EB9E52AA8E4B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7234F138_5F2B_E2BD_41CE_30BCC4B20A09",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B44224D_62E7_AB95_41D1_9A39EC7EE048",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722E014C_5F2B_E2D4_41A8_033E086B0E86",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722E514C_5F2B_E2D4_41D0_471A3356C809",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2718ED_5F5E_23D4_41CA_75CF03C169B0",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C39CB58_62F8_D9BA_41CB_5F2EB0AA2C96",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C392B60_62F8_D98A_41CA_6B2FDE6508D8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2058ED_5F5E_23D4_41D6_4A6EB83AE5BC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A20C8EE_5F5E_23D4_4173_1F0620619A57",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2088EE_5F5E_23D4_41B5_EAA8CE71AB1B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72293141_5F2B_E2CC_4181_CAD23EDD6D2F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72297142_5F2B_E2CC_41D7_8610E7E718A5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3E8B68_62F8_D99A_41CF_E0585A778684",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7222D151_5F2B_E2CC_41D4_6A791B8F4954",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72211151_5F2B_E2CC_41B6_2285A5ACBDDF",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2508EB_5F5E_23DC_41D3_BEAA72171D93",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_44088962_6298_D98F_41D1_668F6221C2D1",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3ACB58_62F8_D9BA_41D5_43DF1EB2C9DC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_44087962_6298_D98F_41D7_E335016052DE",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722EF14D_5F2B_E2D4_41C2_D4E536CB58DB",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722D214D_5F2B_E2D4_41C9_2C13DBB3B343",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3CEB71_62F8_D98A_41D8_8F94AD28FDF1",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722CA14F_5F2B_E2D4_41CA_35DE06771B64",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B427246_62E7_AB97_41D4_03B982FFE30B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B42A246_62E7_AB97_41D4_D16FD63E5D84",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B6A4271_62E7_AB8D_41D6_AD5BB1801F69",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722F5144_5F2B_E2D4_41B0_755A69341050",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7229B142_5F2B_E2CC_41CD_9954F6A8DDD6",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7229F142_5F2B_E2CC_41C7_6BAD6AA56252",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3E3B68_62F8_D99A_41BF_3FF9AD61B0E5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B7E0258_62E7_ABBB_41D4_DF5B4606E54C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A5998E8_5F5E_23DC_41A7_B0CE426F9948",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A5AB8E8_5F5E_23DC_41CA_15721BE3C2AC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722CD14F_5F2B_E2D4_41D3_E48E7DAD962D",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722FA144_5F2B_E2D4_41A9_B75CD9B5EE12",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72285145_5F2B_E2D4_41D1_DFD4246A1945",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3DEB68_62F8_D99A_41CD_4A52F7AE53A3",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3A1B58_62F8_D9BA_41D2_592169A4C155",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_418648B9_62E7_B8FA_41D4_89008D1E0980",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4186E8B9_62E7_B8FA_41C5_3D58D9BABFBB",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_418758B9_62E7_B8FA_41D3_39BEA2E98F94",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4187B8BA_62E7_B8FE_41CC_B5CE0D158930",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_4_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_418828BA_62E7_B8FE_41C5_24EEEAE92152",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_5_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A5BD8E9_5F5E_23DC_41D2_EE7CC9C00952",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3BCB58_62F8_D9BA_41C0_D82D6B470726",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2408EA_5F5E_23DC_41C7_067E2FA68E13",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3B0B58_62F8_D9BA_41CC_0AC5EA7F2041",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7221F156_5F2B_E2F5_41C7_14F3CAB937F3",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72204157_5F2B_E2F3_41C4_63F738F2D0EC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B692270_62E7_AB8B_4192_CD8A5FA06D92",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B46724E_62E7_AB97_41BD_37FF43597FDC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72288143_5F2B_E2CC_41D4_7F483B71A39F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7223D150_5F2B_E2CC_41C3_4D5B3CD2E834",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_6093A395_5FFB_C91F_41BD_2157B76D2948",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7237212D_5F2B_E257_41C5_5F71EA4B672E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7228C143_5F2B_E2CC_41C5_917B1E83F736",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722F1144_5F2B_E2D4_41B3_24E3186EBFC0",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722DF14E_5F2B_E2D4_41D5_8881B16A15BF",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722C314E_5F2B_E2D4_41C7_D44CA6F3343C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722B5139_5F2B_E2BF_41AA_AFAE8739DAC6",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2128EE_5F5E_23D4_41D0_EEDF8263CD85",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A21E8EF_5F5E_23D4_41AF_CC42E93F95EC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C389B60_62F8_D98A_41C2_F952EC08F8E4",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72225150_5F2B_E2CC_41A7_7A02DBAE09BB",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7222A150_5F2B_E2CC_41D7_BA2F8AE5E4FD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722AF141_5F2B_E2CC_41CA_1CCB82F89811",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722D814D_5F2B_E2D4_41C3_BA1C5929D096",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722DB14E_5F2B_E2D4_41D6_BCEAFE90AE8B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722FC146_5F2B_E2D4_41D5_537592237D04",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72217151_5F2B_E2CC_41C0_884AF12EDCE5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72219158_5F2B_E2FD_41C6_BA9C0224D259",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_48613B3D_62B8_59F5_41BB_14A11E735938",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A24D8EA_5F5E_23DD_41CE_B60EB68A36A0",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3B4B58_62F8_D9BA_41C3_39D0CAD4E244",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3AAB58_62F8_D9BA_41C8_44A9D06C1A7F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A5B78E8_5F5E_23DC_41C1_D1A6BF4257DF",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A5B08E9_5F5E_23DC_41BE_31686F9D557F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A2258EF_5F5E_23D4_41CE_4CDBEEE8018E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7A22E8EF_5F5E_23D4_41C4_EF14AAF58BC5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1A22BECB_5FD6_DB0B_41CF_4E5639DE9B99",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7236E135_5F2B_E2B7_41C5_7F385E5241A7",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72210157_5F2B_E2F3_41BF_A0449405C32E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7228B145_5F2B_E2D4_41BF_9C7FCEDBE7FD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7228E145_5F2B_E2D4_41D3_32B37404DE93",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722F3146_5F2B_E2D4_41BC_9663E95A5D14",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7237E134_5F2B_E2B5_41D5_BA2E285F43F2",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72365134_5F2B_E2B5_41D6_A47EFA3F0AE1",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B43824C_62E7_AB9B_41C0_F6D55A1645EC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7235C137_5F2B_E2B3_41BE_66B74BDADCC8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C3FFB60_62F8_D992_41D4_9983D7E65D37",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_61B16A8F_704B_0A3E_41B4_F7ED79D43ED9",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C33BB71_62F8_D98A_41D5_651FE6A52732",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7223814F_5F2B_E2D4_41C5_C20E168EC4E3",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C338B71_62F8_D98A_4196_E827DE9E2BFE",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7221B156_5F2B_E2F5_41D1_C819C3AD9E40",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_6090D397_5FFB_C91B_41D0_BAEC668E2D9A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7C328B78_62F8_D87A_41B2_1307848F06B8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_72284143_5F2B_E2CC_41BD_F613FF39BA11",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722EB14D_5F2B_E2D4_41B2_A09548100BD6",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722A113A_5F2B_E2BD_41C9_73B5AF72763C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_722A713B_5F2B_E2B3_41C4_A4F1EC634A7B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "height": 60,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand",
 "paddingLeft": 0,
 "data": {
  "name": "image button menu"
 }
},
{
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "90%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": 9,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Image_5067AC15_5F2A_E274_4194_0391631CC37F",
  "this.Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26",
  "this.Image_50AC5ABB_5F56_67BC_41D7_24608507A46D",
  "this.Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9",
  "this.Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8",
  "this.Image_4F631802_5F5E_224C_41D5_88E4A7FA9077",
  "this.Image_75C04D61_6298_798A_41B3_AD40D6A777A6"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 40,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "paddingLeft": 40
},
{
 "layout": "vertical",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Button_4F1B70CC_5F56_E3D4_41C9_17D3CB27F821",
  "this.Container_50F96058_5F56_62FD_41D7_75215555A15C",
  "this.Button_6DA06ED7_62B8_78B5_41D2_6B472F187C40"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "26%",
 "bottom": "30.97%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "paddingLeft": 0
},
{
 "maxHeight": 500,
 "maxWidth": 500,
 "id": "Image_5067AC15_5F2A_E274_4194_0391631CC37F",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_5067AC15_5F2A_E274_4194_0391631CC37F.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "height": "26.004%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image3711"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 1024,
 "maxWidth": 1024,
 "id": "Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "27.189%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "18.93%",
 "minWidth": 1,
 "click": "this.openLink('https://instagram.com/leloimoveis?utm_medium=copy_link', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "11.281%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5123"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 768,
 "maxWidth": 768,
 "id": "Image_50AC5ABB_5F56_67BC_41D7_24608507A46D",
 "left": "34.1%",
 "backgroundOpacity": 0,
 "width": "28.571%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_50AC5ABB_5F56_67BC_41D7_24608507A46D.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "18.93%",
 "minWidth": 1,
 "click": "this.openLink('https://www.facebook.com/leloimoveismaringa/', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "11.09%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5202"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9",
 "backgroundOpacity": 0,
 "width": "32.719%",
 "paddingBottom": 0,
 "right": "0%",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "15.11%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5544991095858', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "18.738%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5434"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8",
 "left": "32.7%",
 "backgroundOpacity": 0,
 "width": "31.797%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "4.21%",
 "minWidth": 1,
 "click": "this.openLink('tel:04432255858', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "12.243%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5509"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 1090,
 "maxWidth": 1100,
 "id": "Image_4F631802_5F5E_224C_41D5_88E4A7FA9077",
 "backgroundOpacity": 0,
 "width": "29.493%",
 "paddingBottom": 0,
 "right": "0%",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_4F631802_5F5E_224C_41D5_88E4A7FA9077.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "3.63%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://www.leloimoveis.com.br/', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "13.005%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image5610"
 },
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_75C04D61_6298_798A_41B3_AD40D6A777A6",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "29.032%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "url": "skin/Image_75C04D61_6298_798A_41B3_AD40D6A777A6.png",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "click": "this.openLink('https://goo.gl/maps/LBxZpaYb39jvNAt96', '_blank')",
 "horizontalAlign": "center",
 "class": "Image",
 "height": "20.268%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image12480"
 },
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "Externas >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 43)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "1\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Inserdt Text",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "2\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "3\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "4\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "5\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_4F1B70CC_5F56_E3D4_41C9_17D3CB27F821",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "6\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "children": [
  "this.Button_6CA4046B_62BB_AF9D_41C6_199856CD5D12"
 ],
 "id": "Container_50F96058_5F56_62FD_41D7_75215555A15C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_6DA06ED7_62B8_78B5_41D2_6B472F187C40",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "7\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 10,
 "shadowSpread": 1
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_6CA4046B_62BB_AF9D_41C6_199856CD5D12",
 "left": "0%",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "width": "100%",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "bottom": "-4900%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "6\u00aa Sala >",
 "horizontalAlign": "left",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "fontStyle": "italic",
 "textDecoration": "none",
 "paddingLeft": 10,
 "shadowSpread": 1
}],
 "paddingRight": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "class": "Player",
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.7,
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
