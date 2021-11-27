(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA])",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_camera"
},
{
 "thumbnailUrl": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (13)",
 "id": "panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
   "backwardYaw": -95.06,
   "yaw": 83.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
   "backwardYaw": -1.38,
   "yaw": -106.94,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0",
   "backwardYaw": 57.94,
   "yaw": 170.85,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4734A313_5F76_264C_41CE_AD77CC19FE2D",
  "this.overlay_47FDA1E8_5F76_25DD_41CC_E6D103BC5BDF",
  "this.overlay_4465F77B_5F6A_2EBC_41D1_CE205011F4A2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_camera"
},
{
 "thumbnailUrl": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (37)",
 "id": "panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D62F31D_5F36_E677_41A8_6512B5B08C9D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.98,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E27CE78_5FD6_5B15_41A4_E6ABD0898ED5"
},
{
 "thumbnailUrl": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (29)",
 "id": "panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
   "backwardYaw": 31.3,
   "yaw": 171.2,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7EAA6F57_5F36_3EF4_41B5_71B0E35C1F0A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (9)",
 "id": "panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
   "backwardYaw": 155.31,
   "yaw": 14.99,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4CF70C36_5F6A_62B4_41BF_4C74EB4F7275",
  "this.overlay_4CBD7B52_5F6A_66CC_41AB_9E0530F5712D",
  "this.overlay_41A05930_5F5A_624D_41C9_CB8E1B401344"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (3)",
 "id": "panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
   "backwardYaw": -106.94,
   "yaw": -1.38,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
   "backwardYaw": -67.24,
   "yaw": 82.08,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4C9432A2_5F56_E64C_41D0_1240260FF860",
  "this.overlay_4B67B0BF_5F56_E3B4_41B1_9EA27B229565"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (28)",
 "id": "panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
   "backwardYaw": -17.8,
   "yaw": 172.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D62F162_5F36_22CC_41AF_0B977B8EC94E"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (41)",
 "id": "panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE",
   "backwardYaw": -166.7,
   "yaw": -32.52,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431",
   "backwardYaw": 171.61,
   "yaw": 38.25,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D637BDD_5F35_E5F7_41C2_0C2EAC884CAE",
  "this.overlay_7D3D2D14_5F35_E274_41A0_2D37D45CC551"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.07,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16B9F8EF_5FD6_470B_41C7_00ED0495EC23"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_camera"
},
{
 "thumbnailUrl": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (44)",
 "id": "panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
   "backwardYaw": -137.25,
   "yaw": -152.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D63183D_5F3A_22B7_41C9_06B129DAEE56",
  "this.overlay_7D3D2995_5F3A_2277_41D7_0D7FB07A2410"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.75,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_188A72F7_5FD6_4B1A_41D4_E154B7EDCB9B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.42,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1838A49A_5FD6_4F0A_41CA_9D325B19FD0B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.69,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_177AB84E_5FD6_470A_41D3_D6D38863C478"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E36CEA7_5FD6_5B3A_41D5_BD14CE2A99F5"
},
{
 "thumbnailUrl": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (50)",
 "id": "panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781",
   "backwardYaw": 165.07,
   "yaw": 0.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7",
   "backwardYaw": 168.34,
   "yaw": -55.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7E57D5_5F3A_2DF7_41D3_AB7E59F4DDD9",
  "this.overlay_7D22747A_5F3A_22BC_41C5_BC03500C9D2B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.29,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_180944C9_5FD6_4F76_41D4_3C755D61FB74"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.34,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18CBE3F6_5FD6_491A_41D1_88B7BFDA0F58"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.39,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17480878_5FD6_4716_41CC_7F1A09EB935B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.07,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18B062C5_5FD6_4B7F_41C4_AC81D6C18738"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.39,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17DF7740_5FD6_4976_41C6_F816A748F6D1"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.98,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1874C570_5FD6_4916_41D7_17033F921960"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.81,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1817151A_5FD6_490A_41D5_746E8DBF0A38"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.15,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17A245EA_5FD6_490A_41C2_01FF20C96762"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.34,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EF25DD1_5FD6_5917_41C7_84EDD88F7A99"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.76,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1ECF9DF0_5FD6_5916_41BA_3F9A269B242D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.8,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18676548_5FD6_4976_41B6_BC8520CB5709"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.75,
  "pitch": 0,
  "hfov": 13
 },
 "id": "camera_16C249D7_5FD6_591B_41D3_7CB062B77B58"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.62,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16970967_5FD6_593A_41D5_20CDE67F17FE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_camera"
},
{
 "thumbnailUrl": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (39)",
 "id": "panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D605A67_5F36_26D3_41D2_E6FF70E1148C",
  "this.overlay_7D3EBCCF_5F36_23D3_41C5_DAEF62D0B345"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (4)",
 "id": "panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
   "backwardYaw": 9.67,
   "yaw": -159.29,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
   "backwardYaw": 146.71,
   "yaw": 131.58,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4CFA9BFF_5F56_25B4_41CF_11305D9EBD6A",
  "this.overlay_4CAE7AA3_5F56_2653_41D3_19C2F69A4A85",
  "this.overlay_4B41A78C_5F56_6E55_41C3_EF426346A425"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.06,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16E5398A_5FD6_590A_4184_E5CB9CE40D0E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.29,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16A988C8_5FD6_4776_41CC_14D013977CBE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.71,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_172F1771_5FD6_4916_41D5_4F99163EBD07"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "media": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 0)",
   "media": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (2)",
 "id": "panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
   "backwardYaw": -159.29,
   "yaw": 9.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D",
   "backwardYaw": 82.08,
   "yaw": -67.24,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_4C81EFC9_5F56_3DDF_41CB_ED06CDE9BDE0",
  "this.overlay_4B7D34AF_5F56_2253_41D5_CDAD0DC1512E"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_camera"
},
{
 "thumbnailUrl": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (30)",
 "id": "panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0",
   "backwardYaw": -159.75,
   "yaw": 2.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A",
   "backwardYaw": 100.43,
   "yaw": -84.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7E92C3A3_5F36_264C_419C_26F56B2AC8D3",
  "this.overlay_7D2205B2_5F36_224D_41C0_A6C5BEFC9FC2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.75,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EEE9D7E_5FD6_590A_4199_D4683AF9E7A8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_camera"
},
{
 "thumbnailUrl": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (15)",
 "id": "panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7D925247_5F2D_E6D4_41CC_C83999D94749"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.52,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E3F4E87_5FD6_5BFA_41D3_207C7361C13F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.07,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1844E59B_5FD6_490A_41B6_EE52A58814CE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18C4B421_5FD6_4F36_41C7_230AFDCF64C3"
},
{
 "thumbnailUrl": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (19)",
 "id": "panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
   "backwardYaw": -48.07,
   "yaw": -163.43,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D65FA7E_5F2A_66B4_41D6_A1649BA04222"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E2B0E5F_5FD6_5B0B_41D0_EC176CB6F184"
},
{
 "thumbnailUrl": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (36)",
 "id": "panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A",
   "backwardYaw": -105.34,
   "yaw": 85.3,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7DFFD9_5F36_3DFC_41C1_8CF6329BC637",
  "this.overlay_7D25EE2D_5F36_1E54_41D6_91A63FFC410A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.2,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EE2AD8E_5FD6_590A_41C0_469695366CC1"
},
{
 "thumbnailUrl": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (48)",
 "id": "panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
   "backwardYaw": -1.02,
   "yaw": -163.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7CD320_5F3B_E64D_41D3_526030C1D99C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (35)",
 "id": "panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
   "backwardYaw": -43.98,
   "yaw": 167.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7EA50143_5F36_62CC_41BF_04115E5B00E3"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (49)",
 "id": "panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697",
   "backwardYaw": 91.43,
   "yaw": -106.98,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D6C1A6B_5F3A_26D3_41B9_93A1F84DB6CD",
  "this.overlay_674A6C5C_5FEA_5F0D_41D3_5089722B5E23"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_camera"
},
{
 "thumbnailUrl": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (12)",
 "id": "panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
   "backwardYaw": 170.85,
   "yaw": 57.94,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_472886FE_5F76_2FB5_41C5_76ECA8344FDA",
  "this.overlay_47F44750_5F76_6ECC_41CC_687E0A78AF98",
  "this.overlay_47D6F838_5F76_E2BD_41C8_61EDEE1E6AE6"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (5)",
 "id": "panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC",
   "backwardYaw": 131.58,
   "yaw": 146.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89",
   "backwardYaw": 101.71,
   "yaw": -119.19,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4CFC34C9_5F56_23DC_419C_7F1A48E1526F",
  "this.overlay_410232AC_5F5A_6654_41D0_428CBC071F1A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.25,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_170D37CB_5FD6_490A_41D2_6509DBF0C43D"
},
{
 "thumbnailUrl": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (34)",
 "id": "panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
   "backwardYaw": 2.66,
   "yaw": 165.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D62E536_5F36_62B5_41D3_FFA555AA8561"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.66,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1891834B_5FD6_490A_41CB_B62B4E04AF7F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_camera"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA.mp3",
  "oggUrl": "media/audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA.ogg"
 },
 "data": {
  "label": "WhatsApp Audio 2021-11-23 at 06.44.46 (online-audio-converter.com)"
 },
 "class": "MediaAudio",
 "id": "audio_1C6CE43B_5FDE_4F0A_41B1_7B04037A88BA",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 13
 },
 "id": "panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_camera"
},
{
 "thumbnailUrl": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (32)",
 "id": "panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E",
   "backwardYaw": 85.3,
   "yaw": -105.34,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7F076D_5F36_2ED4_41A8_D6FD17FC9BF6",
  "this.overlay_7D26971A_5F36_2E7C_41C5_8F8C03BF3A58"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.61,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17CF570D_5FD6_490E_41D0_08CF0FABC8D0"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.7,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1819B4F5_5FD6_4F1E_41A7_0C1895727AC0"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_camera"
},
{
 "thumbnailUrl": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (22)",
 "id": "panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
   "backwardYaw": -0.61,
   "yaw": 165.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7B046D_5F2A_62D4_41C4_2DFC8D77E7E3"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.39,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16F4E9B3_5FD6_591A_41A0_C9D16EC05B3C"
},
{
 "thumbnailUrl": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (11)",
 "id": "panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3",
   "backwardYaw": 14.99,
   "yaw": 155.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104",
   "backwardYaw": 83.31,
   "yaw": -95.06,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_478CCBA4_5F75_E655_41D3_52819D4FA138",
  "this.overlay_47A471EE_5F76_25D5_41BA_054C8EB88E14"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.66,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EF8FDAD_5FD6_590E_41C6_5FB4B4B837AD"
},
{
 "thumbnailUrl": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (52)",
 "id": "panorama_54700256_5F2A_26F5_41B9_36A246A7A781",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
   "backwardYaw": 0.61,
   "yaw": 165.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D78AFE6_5F3A_7DD4_41CA_1B028A785BF9"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (1)",
 "id": "panorama_5326133E_5F2A_E6B5_41C0_4107A0161697",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840",
   "backwardYaw": -106.98,
   "yaw": 91.43,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7EB36938_5F2A_22BC_41D4_A2F0FE721818"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.48,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18E4F3A0_5FD6_4936_41D2_B0B6D677699D"
},
{
 "thumbnailUrl": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (6)",
 "id": "panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4C8B130C_5F55_E654_4191_F9FD0E82BDF4",
  "this.overlay_4CBFDE38_5F6A_1EBC_41A2_4074F0D01BDC",
  "this.overlay_4B55BE43_5F6A_3ED3_41D1_1450D55B8EA7"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.01,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_176A4823_5FD6_473A_41D4_000ACF0916D5"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.94,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16877932_5FD6_591A_41C3_2C0B74F5F5C3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.25,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_16B77912_5FD6_5915_41C7_D8824314071B"
},
{
 "thumbnailUrl": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (23)",
 "id": "panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
   "backwardYaw": -50.93,
   "yaw": 165.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7EB5367B_5F2A_2EB3_41B3_0567D5C997DD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.57,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EDE5E34_5FD6_5B1D_41B8_265442C7CACA"
},
{
 "thumbnailUrl": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (20)",
 "id": "panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
   "backwardYaw": 140.93,
   "yaw": -2.25,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7FBC80_5F2A_224D_41C9_8A4AAF78FD02"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.39,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1ED8FE1F_5FD6_5B0A_41A3_C0D2BA8F52F6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 13
 },
 "id": "panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5463813D_5F2E_62B4_41BC_90EA65522104_camera"
},
{
 "thumbnailUrl": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (24)",
 "id": "panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482",
   "backwardYaw": 140.93,
   "yaw": 0.61,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D55FF31_5F2A_7E4C_41B0_F97FFACA26C6",
  "this.overlay_7DEB50A4_5F2A_2254_41A5_2685319B8222"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_camera"
},
{
 "thumbnailUrl": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (21)",
 "id": "panorama_546301CA_5F2E_25DC_41CB_556D85B57B01",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8",
   "backwardYaw": -2.25,
   "yaw": 140.93,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3",
   "backwardYaw": 165.07,
   "yaw": -0.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E",
   "backwardYaw": 165.07,
   "yaw": -50.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D602556_5F2A_22F4_41C2_08BD1DF69808",
  "this.overlay_7D247408_5F2A_225C_41D4_697CCB4467FC",
  "this.overlay_7D0BC13F_5F2A_62B4_41D6_982A260787C1"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17F196DF_5FD6_4B0A_41D1_9BB131757A4F"
},
{
 "thumbnailUrl": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (18)",
 "id": "panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
   "backwardYaw": 0.2,
   "yaw": 165.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7C1508_5F2A_625C_41B9_D97F486669FF"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_camera"
},
{
 "thumbnailUrl": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (17)",
 "id": "panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE",
   "backwardYaw": -163.43,
   "yaw": -48.07,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C",
   "backwardYaw": -56.66,
   "yaw": 114.75,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28",
   "backwardYaw": 165.07,
   "yaw": 0.2,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7EEEBE_5F2A_FFB4_41CF_665699C699FF",
  "this.overlay_7D23E280_5F2A_264D_41CB_6722A4372C4C",
  "this.overlay_7D0B501A_5F2A_227D_41C5_C0D509A7416B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (40)",
 "id": "panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D672305_5F36_2654_41BB_6A21EA2129F1",
  "this.overlay_7D2563A0_5F36_264D_41B9_CC02B5FCFFD9"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.06,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EC87DE1_5FD6_5937_41B1_1D67F42B06F1"
},
{
 "thumbnailUrl": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (25)",
 "id": "panorama_547D5264_5F2E_66D5_41C5_31E245AE2482",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F",
   "backwardYaw": 0.61,
   "yaw": 140.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D61A46A_5F2A_22DC_41C8_2882A5279C75"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54700256_5F2A_26F5_41B9_36A246A7A781_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.11,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17902682_5FD6_4BF5_41A0_2DCD6C328757"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.92,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_173CD79E_5FD6_490A_419D_A2D7CCC19B23"
},
{
 "thumbnailUrl": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (16)",
 "id": "panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E",
   "backwardYaw": 114.75,
   "yaw": -56.66,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D49237C_5F2A_66B4_41D1_A53B00C436DF"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (46)",
 "id": "panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
   "backwardYaw": -1.02,
   "yaw": -162.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
   "backwardYaw": -111.89,
   "yaw": -3.48,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7D0120_5F3A_624C_41CB_C7606CB76E4E",
  "this.overlay_7D3D62D4_5F3A_67F5_41D3_14E24930DE24"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_camera"
},
{
 "thumbnailUrl": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (33)",
 "id": "panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848",
   "backwardYaw": 165.07,
   "yaw": 2.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470",
   "backwardYaw": 167.52,
   "yaw": -43.98,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D65B42A_5F37_E25C_41C3_FE8BE9C3DC10",
  "this.overlay_7D217216_5F36_2674_41D7_ACF8E2B2F507",
  "this.overlay_7D1A719E_5F36_2274_41B6_551333DDA187"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.8,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E002EB7_5FD6_5B1A_41D5_866148F80A4E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.57,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_171AB7FA_5FD6_490A_41CE_BB8D8C8BFDC2"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.98,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E1D1ED6_5FD6_5B1A_41D6_C261C22057BD"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.98,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EFC6DC3_5FD6_597B_41B4_55CEEE7B93CE"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "targetHfov": 125,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "id": "panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.57,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18F153CB_5FD6_490A_41D5_B4C26866D0C4"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.3,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1EC5BE10_5FD6_5B15_41BD_A8DA65A76B29"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.48,
  "pitch": 0,
  "hfov": 13
 },
 "id": "camera_16D219E6_5FD6_593D_41C3_33C04D3DEB4F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1E20DE71_5FD6_5B17_41B0_10C95D66820C"
},
{
 "thumbnailUrl": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (31)",
 "id": "panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
   "backwardYaw": 2.25,
   "yaw": -159.75,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D627AAA_5F36_665D_41CB_14E3DE39321F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_camera"
},
{
 "thumbnailUrl": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (27)",
 "id": "panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6",
   "backwardYaw": 171.2,
   "yaw": 31.3,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079",
   "backwardYaw": 172.02,
   "yaw": -17.8,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D63BB77_5F36_26B4_41D5_E587940447CC",
  "this.overlay_7D3F097C_5F36_62B4_41C3_BFC2C48AB58B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (47)",
 "id": "panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E",
   "backwardYaw": -163.02,
   "yaw": -1.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
   "backwardYaw": -3.48,
   "yaw": -111.89,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D7D6CC5_5F3A_23D7_41BB_D4DAF74523F1",
  "this.overlay_7D27BD2A_5F3A_225C_41D4_F90A416CA162"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.98,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17801647_5FD6_4B7B_41C6_E5AC77E4B16A"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.02,
  "pitch": 0,
  "hfov": 13
 },
 "id": "camera_18DE944C_5FD6_4F0E_41BB_4B5256849559"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.75,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1ED54E43_5FD6_5B7A_41D5_D406D0D70474"
},
{
 "thumbnailUrl": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (45)",
 "id": "panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD",
   "backwardYaw": -152.39,
   "yaw": -137.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E",
   "backwardYaw": -162.61,
   "yaw": -1.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D6375DB_5F3A_EDF3_41D3_434F21B3C2DB",
  "this.overlay_7D2A768A_5F3A_2E5C_41C6_1502E9467C94"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.7,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_185285BF_5FD6_490A_41AB_2E9F5317B469"
},
{
 "thumbnailUrl": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (43)",
 "id": "panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
   "backwardYaw": 38.25,
   "yaw": 171.61,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D62824B_5F3A_66DC_41D0_5F2E78684849"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.02,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17E1A6B2_5FD6_4B1A_41D1_B5961E908083"
},
{
 "thumbnailUrl": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (26)",
 "id": "panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9",
   "backwardYaw": -84.07,
   "yaw": 100.43,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D604F2D_5F35_FE54_41C3_9CEE0F54598D",
  "this.overlay_7D29711C_5F36_2275_41B5_AA9E041B56F2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.39,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_17B2461F_5FD6_4B0B_41C5_CF5C08202261"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 125
 },
 "id": "panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_camera"
},
{
 "thumbnailUrl": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (42)",
 "id": "panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E",
   "backwardYaw": -32.52,
   "yaw": -166.7,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7D664834_5F3A_22B4_41D5_18C1CADFC085"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_18EBE378_5FD6_4916_41CF_5E990173BBF3"
},
{
 "thumbnailUrl": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (14)",
 "id": "panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29",
   "backwardYaw": -119.19,
   "yaw": 101.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_47149FDA_5F76_3DFC_4174_C41C85A8201D",
  "this.overlay_47F5D1CA_5F76_65DD_41B9_6587931CBBF7",
  "this.overlay_1FEC8BFF_5FDA_D90A_418F_34ED0947B29B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "WILLIAN (53)",
 "id": "panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A",
   "backwardYaw": -55.02,
   "yaw": 168.34,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_7EAA7CC1_5F3A_63CC_41BE_ED4371488C38"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.33,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1758289F_5FD6_470A_41BE_71C7F4BA20F6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.93,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_1884831C_5FD6_490E_41D5_E57740F5CF8A"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.69,
  "pitch": 0,
  "hfov": 125
 },
 "id": "camera_182DC477_5FD6_4F1A_41D6_7A3A7252E49B"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "minHeight": 1,
 "width": 115.05,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 330,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D, this.camera_16970967_5FD6_593A_41D5_20CDE67F17FE); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2128EE_5F5E_23D4_41D0_EEDF8263CD85",
   "pitch": -13.5,
   "yaw": -106.94,
   "hfov": 22.78,
   "distance": 100
  }
 ],
 "id": "overlay_4734A313_5F76_264C_41CE_AD77CC19FE2D",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.5,
   "hfov": 22.78
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564, this.camera_16877932_5FD6_591A_41C3_2C0B74F5F5C3); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A21E8EF_5F5E_23D4_41AF_CC42E93F95EC",
   "pitch": -17.59,
   "yaw": 83.31,
   "hfov": 22.33,
   "distance": 100
  }
 ],
 "id": "overlay_47FDA1E8_5F76_25DD_41CC_E6D103BC5BDF",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.59,
   "hfov": 22.33
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0, this.camera_16E5398A_5FD6_590A_4184_E5CB9CE40D0E); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2198EF_5F5E_23D4_41A8_323D2F40CC02",
   "pitch": -21.27,
   "yaw": 170.85,
   "hfov": 21.83,
   "distance": 100
  }
 ],
 "id": "overlay_4465F77B_5F6A_2EBC_41D1_CE205011F4A2",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -21.27,
   "hfov": 21.83
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722EB14D_5F2B_E2D4_41B2_A09548100BD6",
   "pitch": -3.32,
   "yaw": 152.8,
   "hfov": 21.65,
   "distance": 100
  }
 ],
 "id": "overlay_7D62F31D_5F36_E677_41A8_6512B5B08C9D",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -3.32,
   "hfov": 21.65
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B, this.camera_1819B4F5_5FD6_4F1E_41A7_0C1895727AC0); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72288143_5F2B_E2CC_41D4_7F483B71A39F",
   "pitch": -13.14,
   "yaw": 171.2,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7EAA6F57_5F36_3EF4_41B5_71B0E35C1F0A",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2608EC_5F5E_23D4_41D1_7A8C4BFD69FA",
   "pitch": -14.73,
   "yaw": -158.88,
   "hfov": 22.66,
   "distance": 100
  }
 ],
 "id": "overlay_4CF70C36_5F6A_62B4_41BF_4C74EB4F7275",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 22.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564, this.camera_182DC477_5FD6_4F1A_41D6_7A3A7252E49B); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A26C8EC_5F5E_23D4_41C0_145DFD8F1B22",
   "pitch": -24.14,
   "yaw": 14.99,
   "hfov": 21.38,
   "distance": 100
  }
 ],
 "id": "overlay_4CBD7B52_5F6A_66CC_41AB_9E0530F5712D",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -24.14,
   "hfov": 21.38
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2778EC_5F5E_23D4_41D6_458B27AE3970",
   "pitch": -23.32,
   "yaw": 156.12,
   "hfov": 21.52,
   "distance": 100
  }
 ],
 "id": "overlay_41A05930_5F5A_624D_41C9_CB8E1B401344",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -23.32,
   "hfov": 21.52
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4, this.camera_1ECF9DF0_5FD6_5916_41BA_3F9A269B242D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5B78E8_5F5E_23DC_41C1_D1A6BF4257DF",
   "pitch": -14.32,
   "yaw": 82.08,
   "hfov": 22.7,
   "distance": 100
  }
 ],
 "id": "overlay_4C9432A2_5F56_E64C_41D0_1240260FF860",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.32,
   "hfov": 22.7
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_1EC87DE1_5FD6_5937_41B1_1D67F42B06F1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5B08E9_5F5E_23DC_41BE_31686F9D557F",
   "pitch": -14.73,
   "yaw": -1.38,
   "hfov": 22.66,
   "distance": 100
  }
 ],
 "id": "overlay_4B67B0BF_5F56_E3B4_41B1_9EA27B229565",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 22.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B, this.camera_1EE2AD8E_5FD6_590A_41C0_469695366CC1); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72284143_5F2B_E2CC_41BD_F613FF39BA11",
   "pitch": -17.64,
   "yaw": 172.02,
   "hfov": 20.66,
   "distance": 100
  }
 ],
 "id": "overlay_7D62F162_5F36_22CC_41AF_0B977B8EC94E",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.64,
   "hfov": 20.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE, this.camera_1EC5BE10_5FD6_5B15_41BD_A8DA65A76B29); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722DF14E_5F2B_E2D4_41D5_8881B16A15BF",
   "pitch": -15.19,
   "yaw": -32.52,
   "hfov": 20.92,
   "distance": 100
  }
 ],
 "id": "overlay_7D637BDD_5F35_E5F7_41C2_0C2EAC884CAE",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.19,
   "hfov": 20.92
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431, this.camera_1ED8FE1F_5FD6_5B0A_41A3_C0D2BA8F52F6); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722C314E_5F2B_E2D4_41C7_D44CA6F3343C",
   "pitch": -13.14,
   "yaw": 38.25,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D3D2D14_5F35_E274_41A0_2D37D45CC551",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2, this.camera_188A72F7_5FD6_4B1A_41D4_E154B7EDCB9B); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7223214F_5F2B_E2D4_41D1_405CE46D0B07",
   "pitch": -15.59,
   "yaw": -152.39,
   "hfov": 20.88,
   "distance": 100
  }
 ],
 "id": "overlay_7D63183D_5F3A_22B7_41C9_06B129DAEE56",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.59,
   "hfov": 20.88
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7223814F_5F2B_E2D4_41C5_C20E168EC4E3",
   "pitch": -9.05,
   "yaw": 167.52,
   "hfov": 21.41,
   "distance": 100
  }
 ],
 "id": "overlay_7D3D2995_5F3A_2277_41D7_0D7FB07A2410",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -9.05,
   "hfov": 21.41
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7, this.camera_1891834B_5FD6_490A_41CB_B62B4E04AF7F); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7221F156_5F2B_E2F5_41C7_14F3CAB937F3",
   "pitch": -10.28,
   "yaw": -55.02,
   "hfov": 21.33,
   "distance": 100
  }
 ],
 "id": "overlay_7D7E57D5_5F3A_2DF7_41D3_AB7E59F4DDD9",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.28,
   "hfov": 21.33
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54700256_5F2A_26F5_41B9_36A246A7A781, this.camera_1884831C_5FD6_490E_41D5_E57740F5CF8A); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72204157_5F2B_E2F3_41C4_63F738F2D0EC",
   "pitch": -11.5,
   "yaw": 0.61,
   "hfov": 21.25,
   "distance": 100
  }
 ],
 "id": "overlay_7D22747A_5F3A_22BC_41C5_BC03500C9D2B",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.5,
   "hfov": 21.25
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722EF14D_5F2B_E2D4_41C2_D4E536CB58DB",
   "pitch": -10.69,
   "yaw": 79.98,
   "hfov": 21.31,
   "distance": 100
  }
 ],
 "id": "overlay_7D605A67_5F36_26D3_41D2_E6FF70E1148C",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.69,
   "hfov": 21.31
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722D214D_5F2B_E2D4_41C9_2C13DBB3B343",
   "pitch": -10.69,
   "yaw": 131.52,
   "hfov": 21.31,
   "distance": 100
  }
 ],
 "id": "overlay_7D3EBCCF_5F36_23D3_41C5_DAEF62D0B345",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.69,
   "hfov": 21.31
  }
 ]
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4, this.camera_1758289F_5FD6_470A_41BE_71C7F4BA20F6); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5BD8E9_5F5E_23DC_41D2_EE7CC9C00952",
   "pitch": -17.18,
   "yaw": -159.29,
   "hfov": 22.38,
   "distance": 100
  }
 ],
 "id": "overlay_4CFA9BFF_5F56_25B4_41CF_11305D9EBD6A",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.18,
   "hfov": 22.38
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2468E9_5F5E_23DC_41D4_D0CC1CAF56E6",
   "pitch": -11.05,
   "yaw": -42.69,
   "hfov": 23,
   "distance": 100
  }
 ],
 "id": "overlay_4CAE7AA3_5F56_2653_41D3_19C2F69A4A85",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.05,
   "hfov": 23
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29, this.camera_16A988C8_5FD6_4776_41CC_14D013977CBE); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2408EA_5F5E_23DC_41C7_067E2FA68E13",
   "pitch": -11.86,
   "yaw": 131.58,
   "hfov": 22.93,
   "distance": 100
  }
 ],
 "id": "overlay_4B41A78C_5F56_6E55_41C3_EF426346A425",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.86,
   "hfov": 22.93
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D, this.camera_173CD79E_5FD6_490A_419D_A2D7CCC19B23); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5998E8_5F5E_23DC_41A7_B0CE426F9948",
   "pitch": -12.68,
   "yaw": -67.24,
   "hfov": 22.86,
   "distance": 100
  }
 ],
 "id": "overlay_4C81EFC9_5F56_3DDF_41CB_ED06CDE9BDE0",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.68,
   "hfov": 22.86
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC, this.camera_172F1771_5FD6_4916_41D5_4F99163EBD07); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A5AB8E8_5F5E_23DC_41CA_15721BE3C2AC",
   "pitch": -14.32,
   "yaw": 9.67,
   "hfov": 22.7,
   "distance": 100
  }
 ],
 "id": "overlay_4B7D34AF_5F56_2253_41D5_CDAD0DC1512E",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.32,
   "hfov": 22.7
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A, this.camera_171AB7FA_5FD6_490A_41CE_BB8D8C8BFDC2); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228C143_5F2B_E2CC_41C5_917B1E83F736",
   "pitch": -19.28,
   "yaw": -84.07,
   "hfov": 20.47,
   "distance": 100
  }
 ],
 "id": "overlay_7E92C3A3_5F36_264C_419C_26F56B2AC8D3",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -19.28,
   "hfov": 20.47
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0, this.camera_170D37CB_5FD6_490A_41D2_6509DBF0C43D); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F1144_5F2B_E2D4_41B3_24E3186EBFC0",
   "pitch": -19.28,
   "yaw": 2.25,
   "hfov": 20.47,
   "distance": 100
  }
 ],
 "id": "overlay_7D2205B2_5F36_224D_41C0_A6C5BEFC9FC2",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -19.28,
   "hfov": 20.47
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7237212D_5F2B_E257_41C5_5F71EA4B672E",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D925247_5F2D_E6D4_41CC_C83999D94749",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_17F196DF_5FD6_4B0A_41D1_9BB131757A4F); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72356136_5F2B_E2B5_41CA_6DA9159E0A6C",
   "pitch": -14.37,
   "yaw": -163.43,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_7D65FA7E_5F2A_66B4_41D6_A1649BA04222",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.37,
   "hfov": 21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722E014C_5F2B_E2D4_41A8_033E086B0E86",
   "pitch": -14.78,
   "yaw": 1.02,
   "hfov": 20.96,
   "distance": 100
  }
 ],
 "id": "overlay_7D7DFFD9_5F36_3DFC_41C1_8CF6329BC637",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.78,
   "hfov": 20.96
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A, this.camera_1EF8FDAD_5FD6_590E_41C6_5FB4B4B837AD); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722E514C_5F2B_E2D4_41D0_471A3356C809",
   "pitch": -16.82,
   "yaw": 85.3,
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_7D25EE2D_5F36_1E54_41D6_91A63FFC410A",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.82,
   "hfov": 20.75
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED, this.camera_1EFC6DC3_5FD6_597B_41B4_55CEEE7B93CE); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72217151_5F2B_E2CC_41C0_884AF12EDCE5",
   "pitch": -13.55,
   "yaw": -163.02,
   "hfov": 21.08,
   "distance": 100
  }
 ],
 "id": "overlay_7D7CD320_5F3B_E64D_41D3_526030C1D99C",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.55,
   "hfov": 21.08
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3, this.camera_17E1A6B2_5FD6_4B1A_41D1_B5961E908083); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722FC146_5F2B_E2D4_41D5_537592237D04",
   "pitch": -14.37,
   "yaw": 167.52,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_7EA50143_5F36_62CC_41BF_04115E5B00E3",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.37,
   "hfov": 21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5326133E_5F2A_E6B5_41C0_4107A0161697, this.camera_1EDE5E34_5FD6_5B1D_41B8_265442C7CACA); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7221B156_5F2B_E2F5_41D1_C819C3AD9E40",
   "pitch": -16.41,
   "yaw": -106.98,
   "hfov": 20.8,
   "distance": 100
  }
 ],
 "id": "overlay_7D6C1A6B_5F3A_26D3_41B9_93A1F84DB6CD",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.41,
   "hfov": 20.8
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6090D397_5FFB_C91B_41D0_BAEC668E2D9A",
   "pitch": -17.64,
   "yaw": -43.98,
   "hfov": 20.66,
   "distance": 100
  }
 ],
 "id": "overlay_674A6C5C_5FEA_5F0D_41D3_5089722B5E23",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.64,
   "hfov": 20.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2058ED_5F5E_23D4_41D6_4A6EB83AE5BC",
   "pitch": -14.73,
   "yaw": -58.65,
   "hfov": 22.66,
   "distance": 100
  }
 ],
 "id": "overlay_472886FE_5F76_2FB5_41C5_76ECA8344FDA",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 22.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A20C8EE_5F5E_23D4_4173_1F0620619A57",
   "pitch": -18,
   "yaw": 156.53,
   "hfov": 22.28,
   "distance": 100
  }
 ],
 "id": "overlay_47F44750_5F76_6ECC_41CC_687E0A78AF98",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -18,
   "hfov": 22.28
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_17A245EA_5FD6_490A_41C2_01FF20C96762); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2088EE_5F5E_23D4_41B5_EAA8CE71AB1B",
   "pitch": -15.95,
   "yaw": 57.94,
   "hfov": 22.53,
   "distance": 100
  }
 ],
 "id": "overlay_47D6F838_5F76_E2BD_41C8_61EDEE1E6AE6",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.95,
   "hfov": 22.53
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC, this.camera_1838A49A_5FD6_4F0A_41CA_9D325B19FD0B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A24D8EA_5F5E_23DD_41CE_B60EB68A36A0",
   "pitch": -18.41,
   "yaw": 146.71,
   "hfov": 22.23,
   "distance": 100
  }
 ],
 "id": "overlay_4CFC34C9_5F56_23DC_419C_7F1A48E1526F",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -18.41,
   "hfov": 22.23
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89, this.camera_180944C9_5FD6_4F76_41D4_3C755D61FB74); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2578EA_5F5E_23DD_41CA_DA6220C718B0",
   "pitch": -18.41,
   "yaw": -119.19,
   "hfov": 22.23,
   "distance": 100
  }
 ],
 "id": "overlay_410232AC_5F5A_6654_41D0_428CBC071F1A",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -18.41,
   "hfov": 22.23
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3, this.camera_1EF25DD1_5FD6_5917_41C7_84EDD88F7A99); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F9146_5F2B_E2D4_41C4_1530D67BE7AE",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D62E536_5F36_62B5_41D3_FFA555AA8561",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E, this.camera_185285BF_5FD6_490A_41AB_2E9F5317B469); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722FA144_5F2B_E2D4_41A9_B75CD9B5EE12",
   "pitch": -12.73,
   "yaw": -105.34,
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "id": "overlay_7D7F076D_5F36_2ED4_41A8_D6FD17FC9BF6",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.73,
   "hfov": 21.15
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72285145_5F2B_E2D4_41D1_DFD4246A1945",
   "pitch": -11.91,
   "yaw": -47.25,
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_7D26971A_5F36_2E7C_41C5_8F8C03BF3A58",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.91,
   "hfov": 21.21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_16F4E9B3_5FD6_591A_41A0_C9D16EC05B3C); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722B5139_5F2B_E2BF_41AA_AFAE8739DAC6",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D7B046D_5F2A_62D4_41C4_2DFC8D77E7E3",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5463813D_5F2E_62B4_41BC_90EA65522104, this.camera_177AB84E_5FD6_470A_41D3_D6D38863C478); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2718ED_5F5E_23D4_41CA_75CF03C169B0",
   "pitch": -11.45,
   "yaw": -95.06,
   "hfov": 22.96,
   "distance": 100
  }
 ],
 "id": "overlay_478CCBA4_5F75_E655_41D3_52819D4FA138",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.45,
   "hfov": 22.96
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3, this.camera_176A4823_5FD6_473A_41D4_000ACF0916D5); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2788ED_5F5E_23D4_4185_B77031A0C202",
   "pitch": -22.09,
   "yaw": 155.31,
   "hfov": 21.71,
   "distance": 100
  }
 ],
 "id": "overlay_47A471EE_5F76_25D5_41BA_054C8EB88E14",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -22.09,
   "hfov": 21.71
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A, this.camera_17480878_5FD6_4716_41CC_7F1A09EB935B); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72210157_5F2B_E2F3_41BF_A0449405C32E",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D78AFE6_5F3A_7DD4_41CA_1B028A785BF9",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840, this.camera_18DE944C_5FD6_4F0E_41BB_4B5256849559); this.mainPlayList.set('selectedIndex', 43)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72219158_5F2B_E2FD_41C6_BA9C0224D259",
   "pitch": -16,
   "yaw": 91.43,
   "hfov": 20.84,
   "distance": 100
  }
 ],
 "id": "overlay_7EB36938_5F2A_22BC_41D4_A2F0FE721818",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16,
   "hfov": 20.84
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2508EB_5F5E_23DC_41D3_BEAA72171D93",
   "pitch": -16.36,
   "yaw": -155.6,
   "hfov": 22.48,
   "distance": 100
  }
 ],
 "id": "overlay_4C8B130C_5F55_E654_4191_F9FD0E82BDF4",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.36,
   "hfov": 22.48
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A25D8EB_5F5E_23DC_41B7_DE563BA0C07E",
   "pitch": -19.64,
   "yaw": 0.67,
   "hfov": 22.07,
   "distance": 100
  }
 ],
 "id": "overlay_4CBFDE38_5F6A_1EBC_41A2_4074F0D01BDC",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -19.64,
   "hfov": 22.07
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2668EB_5F5E_23DC_41D4_B57A8EC2ABD2",
   "pitch": -16.36,
   "yaw": 141.4,
   "hfov": 22.48,
   "distance": 100
  }
 ],
 "id": "overlay_4B55BE43_5F6A_3ED3_41D1_1450D55B8EA7",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.36,
   "hfov": 22.48
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_1844E59B_5FD6_490A_41B6_EE52A58814CE); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722BA13A_5F2B_E2BD_41CD_5AF26D19CF64",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7EB5367B_5F2A_2EB3_41B3_0567D5C997DD",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_546301CA_5F2E_25DC_41CB_556D85B57B01, this.camera_18B062C5_5FD6_4B7F_41C4_AC81D6C18738); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7235C137_5F2B_E2B3_41BE_66B74BDADCC8",
   "pitch": -9.87,
   "yaw": -2.25,
   "hfov": 21.36,
   "distance": 100
  }
 ],
 "id": "overlay_7D7FBC80_5F2A_224D_41C9_8A4AAF78FD02",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -9.87,
   "hfov": 21.36
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722A113A_5F2B_E2BD_41C9_73B5AF72763C",
   "pitch": -16,
   "yaw": 85.7,
   "hfov": 20.84,
   "distance": 100
  }
 ],
 "id": "overlay_7D55FF31_5F2A_7E4C_41B0_F97FFACA26C6",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16,
   "hfov": 20.84
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5264_5F2E_66D5_41C5_31E245AE2482, this.camera_16B9F8EF_5FD6_470B_41C7_00ED0495EC23); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722A713B_5F2B_E2B3_41C4_A4F1EC634A7B",
   "pitch": -17.23,
   "yaw": 0.61,
   "hfov": 20.71,
   "distance": 100
  }
 ],
 "id": "overlay_7DEB50A4_5F2A_2254_41A5_2685319B8222",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.23,
   "hfov": 20.71
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3, this.camera_1E2B0E5F_5FD6_5B0B_41D0_EC176CB6F184); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72341137_5F2B_E2B3_41B6_F0BA4E069D2B",
   "pitch": -14.78,
   "yaw": -0.61,
   "hfov": 20.96,
   "distance": 100
  }
 ],
 "id": "overlay_7D602556_5F2A_22F4_41C2_08BD1DF69808",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.78,
   "hfov": 20.96
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E, this.camera_1E20DE71_5FD6_5B17_41B0_10C95D66820C); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72348138_5F2B_E2BD_417C_EB9E52AA8E4B",
   "pitch": -13.55,
   "yaw": -50.93,
   "hfov": 21.08,
   "distance": 100
  }
 ],
 "id": "overlay_7D247408_5F2A_225C_41D4_697CCB4467FC",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.55,
   "hfov": 21.08
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8, this.camera_1ED54E43_5FD6_5B7A_41D5_D406D0D70474); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7234F138_5F2B_E2BD_41CE_30BCC4B20A09",
   "pitch": -15.59,
   "yaw": 140.93,
   "hfov": 20.88,
   "distance": 100
  }
 ],
 "id": "overlay_7D0BC13F_5F2A_62B4_41D6_982A260787C1",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.59,
   "hfov": 20.88
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_18676548_5FD6_4976_41B6_BC8520CB5709); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7236E135_5F2B_E2B7_41C5_7F385E5241A7",
   "pitch": -13.14,
   "yaw": 165.07,
   "hfov": 21.11,
   "distance": 100
  }
 ],
 "id": "overlay_7D7C1508_5F2A_625C_41B9_D97F486669FF",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.14,
   "hfov": 21.11
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE, this.camera_18F153CB_5FD6_490A_41D5_B4C26866D0C4); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7237E134_5F2B_E2B5_41D5_BA2E285F43F2",
   "pitch": -12.73,
   "yaw": -48.07,
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "id": "overlay_7D7EEEBE_5F2A_FFB4_41CF_665699C699FF",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.73,
   "hfov": 21.15
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28, this.camera_18C4B421_5FD6_4F36_41C7_230AFDCF64C3); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72365134_5F2B_E2B5_41D6_A47EFA3F0AE1",
   "pitch": -14.37,
   "yaw": 0.2,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_7D23E280_5F2A_264D_41CB_6722A4372C4C",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.37,
   "hfov": 21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C, this.camera_18CBE3F6_5FD6_491A_41D1_88B7BFDA0F58); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7236A135_5F2B_E2B7_41C5_259174065872",
   "pitch": -17.64,
   "yaw": 114.75,
   "hfov": 20.66,
   "distance": 100
  }
 ],
 "id": "overlay_7D0B501A_5F2A_227D_41C5_C0D509A7416B",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.64,
   "hfov": 20.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722D814D_5F2B_E2D4_41C3_BA1C5929D096",
   "pitch": -9.87,
   "yaw": 73.43,
   "hfov": 21.36,
   "distance": 100
  }
 ],
 "id": "overlay_7D672305_5F36_2654_41BB_6A21EA2129F1",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -9.87,
   "hfov": 21.36
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722DB14E_5F2B_E2D4_41D6_BCEAFE90AE8B",
   "pitch": -8.23,
   "yaw": 128.25,
   "hfov": 21.46,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7D2563A0_5F36_264D_41B9_CC02B5FCFFD9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -8.23,
   "hfov": 21.46
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F, this.camera_17B2461F_5FD6_4B0B_41C5_CF5C08202261); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722AF141_5F2B_E2CC_41CA_1CCB82F89811",
   "pitch": -11.5,
   "yaw": 140.93,
   "hfov": 21.25,
   "distance": 100
  }
 ],
 "id": "overlay_7D61A46A_5F2A_22DC_41C8_2882A5279C75",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.5,
   "hfov": 21.25
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E, this.camera_16B77912_5FD6_5915_41C7_D8824314071B); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72379133_5F2B_E2B3_41D1_E5668BEDFECF",
   "pitch": -16.41,
   "yaw": -56.66,
   "hfov": 20.8,
   "distance": 100
  }
 ],
 "id": "overlay_7D49237C_5F2A_66B4_41D1_A53B00C436DF",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.41,
   "hfov": 20.8
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2, this.camera_17801647_5FD6_4B7B_41C6_E5AC77E4B16A); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72225150_5F2B_E2CC_41A7_7A02DBAE09BB",
   "pitch": -11.5,
   "yaw": -162.61,
   "hfov": 21.25,
   "distance": 100
  }
 ],
 "id": "overlay_7D7D0120_5F3A_624C_41CB_C7606CB76E4E",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.5,
   "hfov": 21.25
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED, this.camera_17902682_5FD6_4BF5_41A0_2DCD6C328757); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7222A150_5F2B_E2CC_41D7_BA2F8AE5E4FD",
   "pitch": -16.82,
   "yaw": -3.48,
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_7D3D62D4_5F3A_67F5_41D3_14E24930DE24",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16.82,
   "hfov": 20.75
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470, this.camera_18E4F3A0_5FD6_4936_41D2_B0B6D677699D); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228B145_5F2B_E2D4_41BF_9C7FCEDBE7FD",
   "pitch": -10.28,
   "yaw": -43.98,
   "hfov": 21.33,
   "distance": 100
  }
 ],
 "id": "overlay_7D65B42A_5F37_E25C_41C3_FE8BE9C3DC10",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.28,
   "hfov": 21.33
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848, this.camera_18EBE378_5FD6_4916_41CF_5E990173BBF3); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7228E145_5F2B_E2D4_41D3_32B37404DE93",
   "pitch": -12.32,
   "yaw": 2.66,
   "hfov": 21.18,
   "distance": 100
  }
 ],
 "id": "overlay_7D217216_5F36_2674_41D7_ACF8E2B2F507",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.32,
   "hfov": 21.18
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F3146_5F2B_E2D4_41BC_9663E95A5D14",
   "pitch": -15.59,
   "yaw": 123.34,
   "hfov": 20.88,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7D1A719E_5F36_2274_41B6_551333DDA187",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.59,
   "hfov": 20.88
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9, this.camera_1EEE9D7E_5FD6_590A_4199_D4683AF9E7A8); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722F5144_5F2B_E2D4_41B0_755A69341050",
   "pitch": -7.41,
   "yaw": -159.75,
   "hfov": 21.5,
   "distance": 100
  }
 ],
 "id": "overlay_7D627AAA_5F36_665D_41CB_14E3DE39321F",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -7.41,
   "hfov": 21.5
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6, this.camera_1E002EB7_5FD6_5B1A_41D5_866148F80A4E); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7229B142_5F2B_E2CC_41CD_9954F6A8DDD6",
   "pitch": -9.46,
   "yaw": 31.3,
   "hfov": 21.39,
   "distance": 100
  }
 ],
 "id": "overlay_7D63BB77_5F36_26B4_41D5_E587940447CC",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -9.46,
   "hfov": 21.39
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079, this.camera_1E1D1ED6_5FD6_5B1A_41D6_C261C22057BD); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7229F142_5F2B_E2CC_41C7_6BAD6AA56252",
   "pitch": -11.91,
   "yaw": -17.8,
   "hfov": 21.21,
   "distance": 100
  }
 ],
 "id": "overlay_7D3F097C_5F36_62B4_41C3_BFC2C48AB58B",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -11.91,
   "hfov": 21.21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E, this.camera_1E27CE78_5FD6_5B15_41A4_E6ABD0898ED5); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7222D151_5F2B_E2CC_41D4_6A791B8F4954",
   "pitch": -16,
   "yaw": -1.02,
   "hfov": 20.84,
   "distance": 100
  }
 ],
 "id": "overlay_7D7D6CC5_5F3A_23D7_41BB_D4DAF74523F1",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -16,
   "hfov": 20.84
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E, this.camera_1E3F4E87_5FD6_5BFA_41D3_207C7361C13F); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72211151_5F2B_E2CC_41B6_2285A5ACBDDF",
   "pitch": -18.87,
   "yaw": -111.89,
   "hfov": 20.52,
   "distance": 100
  }
 ],
 "id": "overlay_7D27BD2A_5F3A_225C_41D4_F90A416CA162",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -18.87,
   "hfov": 20.52
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E, this.camera_17DF7740_5FD6_4976_41C6_F816A748F6D1); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7223D150_5F2B_E2CC_41C3_4D5B3CD2E834",
   "pitch": -10.28,
   "yaw": -1.02,
   "hfov": 21.33,
   "distance": 100
  }
 ],
 "id": "overlay_7D6375DB_5F3A_EDF3_41D3_434F21B3C2DB",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.28,
   "hfov": 21.33
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD, this.camera_17CF570D_5FD6_490E_41D0_08CF0FABC8D0); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6093A395_5FFB_C91F_41BD_2157B76D2948",
   "pitch": -22.55,
   "yaw": -137.25,
   "hfov": 20.02,
   "distance": 100
  }
 ],
 "id": "overlay_7D2A768A_5F3A_2E5C_41C6_1502E9467C94",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -22.55,
   "hfov": 20.02
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E, this.camera_16C249D7_5FD6_591B_41D3_7CB062B77B58); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722CD14F_5F2B_E2D4_41D3_E48E7DAD962D",
   "pitch": -14.37,
   "yaw": 171.61,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_7D62824B_5F3A_66DC_41D0_5F2E78684849",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.37,
   "hfov": 21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72293141_5F2B_E2CC_4181_CAD23EDD6D2F",
   "pitch": -7,
   "yaw": 39.07,
   "hfov": 21.52,
   "distance": 100
  }
 ],
 "id": "overlay_7D604F2D_5F35_FE54_41C3_9CEE0F54598D",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -7,
   "hfov": 21.52
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9, this.camera_1E36CEA7_5FD6_5B3A_41D5_BD14CE2A99F5); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72297142_5F2B_E2CC_41D7_8610E7E718A5",
   "pitch": -7,
   "yaw": 100.43,
   "hfov": 21.52,
   "distance": 100
  }
 ],
 "id": "overlay_7D29711C_5F36_2275_41B5_AA9E041B56F2",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -7,
   "hfov": 21.52
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5471AC95_5F2A_2274_41CB_02F8C869594E, this.camera_16D219E6_5FD6_593D_41C3_33C04D3DEB4F); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_722CA14F_5F2B_E2D4_41CA_35DE06771B64",
   "pitch": -12.73,
   "yaw": -166.7,
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "id": "overlay_7D664834_5F3A_22B4_41D5_18C1CADFC085",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.73,
   "hfov": 21.15
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29, this.camera_1817151A_5FD6_490A_41D5_746E8DBF0A38); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A2258EF_5F5E_23D4_41CE_4CDBEEE8018E",
   "pitch": -15.55,
   "yaw": 101.71,
   "hfov": 22.57,
   "distance": 100
  }
 ],
 "id": "overlay_47149FDA_5F76_3DFC_4174_C41C85A8201D",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -15.55,
   "hfov": 22.57
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7A22E8EF_5F5E_23D4_41C4_EF14AAF58BC5",
   "pitch": -14.73,
   "yaw": -97.51,
   "hfov": 22.66,
   "distance": 100
  }
 ],
 "id": "overlay_47F5D1CA_5F76_65DD_41B9_6587931CBBF7",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.73,
   "hfov": 22.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1A22BECB_5FD6_DB0B_41CF_4E5639DE9B99",
   "pitch": -22.5,
   "yaw": -0.15,
   "hfov": 21.65,
   "distance": 100
  }
 ],
 "id": "overlay_1FEC8BFF_5FDA_D90A_418F_34ED0947B29B",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -22.5,
   "hfov": 21.65
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A, this.camera_1874C570_5FD6_4916_41D7_17033F921960); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72214157_5F2B_E2F3_41C2_6DD73ABDE004",
   "pitch": -12.73,
   "yaw": 168.34,
   "hfov": 21.15,
   "distance": 100
  }
 ],
 "id": "overlay_7EAA7CC1_5F3A_63CC_41BE_ED4371488C38",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -12.73,
   "hfov": 21.15
  }
 ]
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": 110,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 66,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "class": "Container",
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 330,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2128EE_5F5E_23D4_41D0_EEDF8263CD85",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A21E8EF_5F5E_23D4_41AF_CC42E93F95EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5463813D_5F2E_62B4_41BC_90EA65522104_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2198EF_5F5E_23D4_41A8_323D2F40CC02",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F8F76_5F2A_3EB5_41A6_0BAB5A7F2EB9_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722EB14D_5F2B_E2D4_41B2_A09548100BD6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547DF297_5F2E_E673_41D3_773D9F75E9E6_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72288143_5F2B_E2CC_41D4_7F483B71A39F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2608EC_5F5E_23D4_41D1_7A8C4BFD69FA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A26C8EC_5F5E_23D4_41C0_145DFD8F1B22",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5444C276_5F2D_E6B5_41C2_B33E320725E3_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2778EC_5F5E_23D4_41D6_458B27AE3970",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A5B78E8_5F5E_23DC_41C1_D1A6BF4257DF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544C51BC_5F2A_65B5_41CB_ED3D919C186D_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A5B08E9_5F5E_23DC_41BE_31686F9D557F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54700F2E_5F2E_1E54_41CE_2CF388B91079_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72284143_5F2B_E2CC_41BD_F613FF39BA11",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722DF14E_5F2B_E2D4_41D5_8881B16A15BF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471AC95_5F2A_2274_41CB_02F8C869594E_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722C314E_5F2B_E2D4_41C7_D44CA6F3343C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7223214F_5F2B_E2D4_41D1_405CE46D0B07",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F181A_5F2A_227C_41B6_B1BEF2B19CDD_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7223814F_5F2B_E2D4_41C5_C20E168EC4E3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7221F156_5F2B_E2F5_41C7_14F3CAB937F3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D5E60_5F2A_1ECC_41CA_69EC88E9655A_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72204157_5F2B_E2F3_41C4_63F738F2D0EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722EF14D_5F2B_E2D4_41C2_D4E536CB58DB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470F46D_5F2A_62D4_41CD_388AF851B2FA_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722D214D_5F2B_E2D4_41C9_2C13DBB3B343",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A5BD8E9_5F5E_23DC_41D2_EE7CC9C00952",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2468E9_5F5E_23DC_41D4_D0CC1CAF56E6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54646599_5F2A_627C_41D5_4CF3E7E736DC_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2408EA_5F5E_23DC_41C7_067E2FA68E13",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A5998E8_5F5E_23DC_41A7_B0CE426F9948",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F0BFE_5F2A_25B4_41D6_89C4322FCAE4_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A5AB8E8_5F5E_23DC_41CA_15721BE3C2AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7228C143_5F2B_E2CC_41C5_917B1E83F736",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5473E6A2_5F2E_2E4C_41D3_3C246CABB5E9_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722F1144_5F2B_E2D4_41B3_24E3186EBFC0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547C6A58_5F2E_26FC_41D5_DAA271FF5130_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7237212D_5F2B_E257_41C5_5F71EA4B672E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547C8978_5F2E_62BD_41A3_DFD71E1CD0DE_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72356136_5F2B_E2B5_41CA_6DA9159E0A6C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722E014C_5F2B_E2D4_41A8_033E086B0E86",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470FCAA_5F2D_E25C_41C7_E11B1713BC0E_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722E514C_5F2B_E2D4_41D0_471A3356C809",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CE6AE_5F2A_2E54_41C7_F4AD209EA76E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72217151_5F2B_E2CC_41C0_884AF12EDCE5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F5861_5F2D_E2CF_41C2_7C038CF07470_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722FC146_5F2B_E2D4_41D5_537592237D04",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7221B156_5F2B_E2F5_41D1_C819C3AD9E40",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54701A96_5F2B_E674_41D7_3CFD0AA51840_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6090D397_5FFB_C91B_41D0_BAEC668E2D9A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2058ED_5F5E_23D4_41D6_4A6EB83AE5BC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A20C8EE_5F5E_23D4_4173_1F0620619A57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544A9C53_5F2E_22CC_41CD_0A8190CE59E0_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2088EE_5F5E_23D4_41B5_EAA8CE71AB1B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A24D8EA_5F5E_23DD_41CE_B60EB68A36A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54417A4A_5F2A_26DD_41D3_535D0636CC29_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2578EA_5F5E_23DD_41CA_DA6220C718B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5473154C_5F2E_22D4_41C9_5FA5D58A8848_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722F9146_5F2B_E2D4_41C4_1530D67BE7AE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722FA144_5F2B_E2D4_41A9_B75CD9B5EE12",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5473AE35_5F2E_7EB4_41A6_8DAF0B74815A_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72285145_5F2B_E2D4_41D1_DFD4246A1945",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470D5B6_5F2F_EDB4_41D1_AEA402F077A3_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722B5139_5F2B_E2BF_41AA_AFAE8739DAC6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2718ED_5F5E_23D4_41CA_75CF03C169B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5463F66D_5F2E_2ED4_41BF_01207D3F7564_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2788ED_5F5E_23D4_4185_B77031A0C202",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54700256_5F2A_26F5_41B9_36A246A7A781_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72210157_5F2B_E2F3_41BF_A0449405C32E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5326133E_5F2A_E6B5_41C0_4107A0161697_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72219158_5F2B_E2FD_41C6_BA9C0224D259",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2508EB_5F5E_23DC_41D3_BEAA72171D93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A25D8EB_5F5E_23DC_41B7_DE563BA0C07E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54643EA6_5F2A_1E54_41D1_0E2E492B87EF_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2668EB_5F5E_23DC_41D4_B57A8EC2ABD2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5462FAD3_5F2F_E7CC_41A6_D963E7C6154E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722BA13A_5F2B_E2BD_41CD_5AF26D19CF64",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5472CD0C_5F2E_6254_41D5_228A5C945CC8_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7235C137_5F2B_E2B3_41BE_66B74BDADCC8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722A113A_5F2B_E2BD_41C9_73B5AF72763C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54709EB5_5F2E_3FB7_4174_4DFADED7185F_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722A713B_5F2B_E2B3_41C4_A4F1EC634A7B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72341137_5F2B_E2B3_41B6_F0BA4E069D2B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72348138_5F2B_E2BD_417C_EB9E52AA8E4B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_546301CA_5F2E_25DC_41CB_556D85B57B01_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7234F138_5F2B_E2BD_41CE_30BCC4B20A09",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5472A5E7_5F2E_2DD3_41D1_44A8F9380C28_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7236E135_5F2B_E2B7_41C5_7F385E5241A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7237E134_5F2B_E2B5_41D5_BA2E285F43F2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72365134_5F2B_E2B5_41D6_A47EFA3F0AE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547C81CF_5F2E_25D4_41CF_2A0BB0563B8E_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7236A135_5F2B_E2B7_41C5_259174065872",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722D814D_5F2B_E2D4_41C3_BA1C5929D096",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547FE921_5F2A_624F_4176_E3DFAB3531C8_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722DB14E_5F2B_E2D4_41D6_BCEAFE90AE8B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D5264_5F2E_66D5_41C5_31E245AE2482_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722AF141_5F2B_E2CC_41CA_1CCB82F89811",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_54705E0F_5F2E_FE54_41D2_3A277977CC9C_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72379133_5F2B_E2B3_41D1_E5668BEDFECF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72225150_5F2B_E2CC_41A7_7A02DBAE09BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CDEB7_5F2A_7FB3_41D6_C4BBFAB0A36E_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7222A150_5F2B_E2CC_41D7_BA2F8AE5E4FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7228B145_5F2B_E2D4_41BF_9C7FCEDBE7FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7228E145_5F2B_E2D4_41D3_32B37404DE93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CF242_5F2E_26CC_41C2_49EFE452A3C3_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722F3146_5F2B_E2D4_41BC_9663E95A5D14",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547CBAC3_5F2E_27CC_41D5_EE41F97753C0_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722F5144_5F2B_E2D4_41B0_755A69341050",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7229B142_5F2B_E2CC_41CD_9954F6A8DDD6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D4BB2_5F2E_264C_41CB_567B3F7AEB3B_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7229F142_5F2B_E2CC_41C7_6BAD6AA56252",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7222D151_5F2B_E2CC_41D4_6A791B8F4954",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471038F_5F2A_2654_41D1_DBE3C863E2ED_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72211151_5F2B_E2CC_41B6_2285A5ACBDDF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7223D150_5F2B_E2CC_41C3_4D5B3CD2E834",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5471EB31_5F2A_264C_41BE_757FD3B81DB2_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6093A395_5FFB_C91F_41BD_2157B76D2948",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544FD43C_5F2A_E2B4_41C1_D9F281FCB431_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722CD14F_5F2B_E2D4_41D3_E48E7DAD962D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72293141_5F2B_E2CC_4181_CAD23EDD6D2F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5470E763_5F2E_6ECC_41CA_902F20C9075A_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72297142_5F2B_E2CC_41D7_8610E7E718A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547F4089_5F2A_E25F_41C4_F6421DD4BCBE_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_722CA14F_5F2B_E2D4_41CA_35DE06771B64",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A2258EF_5F5E_23D4_41CE_4CDBEEE8018E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_1_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7A22E8EF_5F5E_23D4_41C4_EF14AAF58BC5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_544AB5EC_5F2E_2DD4_41D0_C848A03B8D89_0_HS_2_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1A22BECB_5FD6_DB0B_41CF_4E5639DE9B99",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_547D05F9_5F2A_6DBC_41D7_4C98FDCD08B7_0_HS_0_0.png",
   "width": 420,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_72214157_5F2B_E2F3_41C2_6DD73ABDE004",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "minHeight": 1,
 "width": 60,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 60,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxHeight": 60,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.shareTwitter(window.location.href)",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.shareFacebook(window.location.href)",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 36,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.4,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "minHeight": 1,
 "width": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 80,
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": true,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "maxHeight": 80,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "90%",
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "minHeight": 1,
 "width": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "borderRadius": 0,
 "right": 9,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 50,
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": true,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "maxHeight": 50,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Image_5067AC15_5F2A_E274_4194_0391631CC37F",
  "this.Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26",
  "this.Image_50AC5ABB_5F56_67BC_41D7_24608507A46D",
  "this.Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9",
  "this.Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8",
  "this.Image_4F631802_5F5E_224C_41D5_88E4A7FA9077"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 40,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 40,
 "width": "100%",
 "paddingRight": 40,
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 40,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
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
  "this.Container_50F96058_5F56_62FD_41D7_75215555A15C"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "26%",
 "bottom": "33.46%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "class": "Container",
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Level 1"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "id": "Image_5067AC15_5F2A_E274_4194_0391631CC37F",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 500,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "26.004%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 500,
 "url": "skin/Image_5067AC15_5F2A_E274_4194_0391631CC37F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image3711"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 1024,
 "propagateClick": false,
 "bottom": "18.93%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "27.189%",
 "height": "11.281%",
 "url": "skin/Image_4F0E3A53_5F56_26F3_41CF_7EBC96273B26.png",
 "class": "Image",
 "click": "this.openLink('https://instagram.com/leloimoveis?utm_medium=copy_link', '_blank')",
 "maxHeight": 1024,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5123"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "id": "Image_50AC5ABB_5F56_67BC_41D7_24608507A46D",
 "left": "34.1%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 768,
 "propagateClick": false,
 "bottom": "18.93%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "28.571%",
 "height": "11.09%",
 "url": "skin/Image_50AC5ABB_5F56_67BC_41D7_24608507A46D.png",
 "class": "Image",
 "click": "this.openLink('https://www.facebook.com/leloimoveismaringa/', '_blank')",
 "maxHeight": 768,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5202"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "id": "Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "propagateClick": false,
 "bottom": "15.11%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "32.719%",
 "height": "18.738%",
 "url": "skin/Image_4F43CED9_5F55_FFFC_41BE_FBA67CEFCAD9.png",
 "class": "Image",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5544991095858', '_blank')",
 "maxHeight": 512,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5434"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "id": "Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8",
 "left": "11.52%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "propagateClick": false,
 "bottom": "4.21%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "33.641%",
 "height": "12.629%",
 "url": "skin/Image_50A99F55_5F5A_3EF4_41D3_68CF3A4200F8.png",
 "class": "Image",
 "click": "this.openLink('http://tel:04432255858', '_blank')",
 "maxHeight": 512,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5509"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "id": "Image_4F631802_5F5E_224C_41D5_88E4A7FA9077",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "6.45%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 1100,
 "propagateClick": false,
 "bottom": "3.63%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "44.24%",
 "height": "13.193%",
 "url": "skin/Image_4F631802_5F5E_224C_41D5_88E4A7FA9077.png",
 "class": "Image",
 "click": "this.openLink('https://www.leloimoveis.com.br/', '_blank')",
 "maxHeight": 1090,
 "horizontalAlign": "center",
 "data": {
  "name": "Image5610"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Externas >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 43)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "1\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 43)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Inserdt Text",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "2\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "3\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "4\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "5\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_4F1B70CC_5F56_E3D4_41C9_17D3CB27F821",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "6\u00aa Sala >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_50F96058_5F56_62FD_41D7_75215555A15C",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.7,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
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
