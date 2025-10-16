// ----=  HANDS  =----
function prepareInteraction() {
  bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {
image(bgImage, 0, 0, width, height);

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    /*
    Start drawing on the hands here
    */
   let middleFingerMcpX = hand.middle_finger_mcp.x;
   let middleFingerMcpY = hand.middle_finger_mcp.y;
   let middleFingerTipX = hand.middle_finger_tip.x;
   let middleFingerTipY = hand.middle_finger_tip.y;
   let HandSize=dist(middleFingerMcpX, middleFingerMcpY, middleFingerTipX, middleFingerTipY)
   fill(255, 255, 255, 180)
   stroke(0)
   strokeWeight(8)
   ellipse(middleFingerMcpX, middleFingerMcpY, HandSize*0.8, HandSize)


    /*
    Stop drawing on the hands here
    */
  }



  //------------------------------------------------------------
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }
    // console.log(face);
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */

    /*
    Start drawing on the face here
    */
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    //face
    fill(255, 255, 255, 180)
    stroke(0)
    strokeWeight(8)
    beginShape();
    vertex(face.keypoints[10].x, face.keypoints[10].y);
    bezierVertex(face.keypoints[67].x, face.keypoints[67].y,face.keypoints[103].x, face.keypoints[103].y,face.keypoints[21].x, face.keypoints[21].y);
    bezierVertex(face.keypoints[127].x, face.keypoints[127].y,face.keypoints[234].x, face.keypoints[234].y,face.keypoints[132].x, face.keypoints[132].y);
    bezierVertex(face.keypoints[58].x, face.keypoints[58].y,face.keypoints[172].x, face.keypoints[172].y,face.keypoints[136].x, face.keypoints[136].y);
    bezierVertex(face.keypoints[169].x, face.keypoints[169].y,face.keypoints[210].x, face.keypoints[210].y,face.keypoints[211].x, face.keypoints[211].y);
    bezierVertex(face.keypoints[204].x, face.keypoints[204].y,face.keypoints[204].x, face.keypoints[204].y,face.keypoints[194].x, face.keypoints[194].y);
    bezierVertex(face.keypoints[182].x, face.keypoints[182].y,face.keypoints[182].x, face.keypoints[182].y,face.keypoints[83].x, face.keypoints[83].y);
    bezierVertex(face.keypoints[17].x, face.keypoints[17].y,face.keypoints[17].x, face.keypoints[17].y,face.keypoints[313].x, face.keypoints[313].y);
    bezierVertex(face.keypoints[406].x, face.keypoints[406].y,face.keypoints[406].x, face.keypoints[406].y,face.keypoints[418].x, face.keypoints[418].y);
    bezierVertex(face.keypoints[424].x, face.keypoints[424].y,face.keypoints[424].x, face.keypoints[424].y,face.keypoints[431].x, face.keypoints[431].y);
    bezierVertex(face.keypoints[430].x, face.keypoints[430].y,face.keypoints[430].x, face.keypoints[430].y,face.keypoints[394].x, face.keypoints[394].y);
    bezierVertex(face.keypoints[364].x, face.keypoints[364].y,face.keypoints[364].x, face.keypoints[364].y,face.keypoints[365].x, face.keypoints[365].y);
    bezierVertex(face.keypoints[397].x, face.keypoints[397].y,face.keypoints[288].x, face.keypoints[288].y,face.keypoints[361].x, face.keypoints[361].y);
    bezierVertex(face.keypoints[454].x, face.keypoints[454].y,face.keypoints[356].x, face.keypoints[356].y,face.keypoints[251].x, face.keypoints[251].y);
    bezierVertex(face.keypoints[332].x, face.keypoints[332].y,face.keypoints[297].x, face.keypoints[297].y,face.keypoints[10].x, face.keypoints[10].y);
    endShape();
    //eyes
    fill(0)
    ellipse(rightEyebrowCenterX, rightEyebrowCenterY*1.1, rightEyebrowHeight*1.4, rightEyebrowHeight*1.4)
    ellipse(leftEyebrowCenterX, leftEyebrowCenterY*1.1, leftEyebrowHeight*1.4, leftEyebrowHeight*1.4)
    //mouth
    fill(122, 31, 31, 200)
    let NoseSize=dist(face.keypoints[0].x, face.keypoints[0].y, face.keypoints[17].x, face.keypoints[17].y)
    ellipse(face.keypoints[4].x, face.keypoints[4].y, NoseSize*0.9, NoseSize*1.1)
    

   

    

    // fill(225, 225, 0);
    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    //drawPoints(face.leftEye);
    //drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);
    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}